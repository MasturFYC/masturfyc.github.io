<script lang="ts">
	import {
		Query,
		useMutation,
		useQueryClient,
		type QueryObserverResult
	} from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import type { Transaction, TransactionDetail, MemberKoperasi, iAccount } from '$lib';
	import dayjs from 'dayjs';

	import SwBox from './SwBox.svelte';
	import Property from '../../components/Property.svelte';

	const client = useQueryClient();

	export let member: MemberKoperasi;
	export let coas: iAccount[] = [];
	let fetchSuccess = false;

	const accountId = 302;
	const accountCash = 101;

	const initDetail: TransactionDetail = {
		id: 0,
		trx_id: 0,
		account_id: 0,
		description: 'Simpanan wajib',
		debt: 0,
		cred: 0,
		ref_id: 0,
		name: 'Simpanan wajib',
		is_new: true
	};

	let trx: Transaction = {
		id: 0,
		name: 'SIMPANAN-WAJIB',
		member_id: member.member_id,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format('YYYY-MM-DD'),
		is_valid: true,
		description: 'Penerimaan simpanan wajib dari ' + member.name,
		details: [
			{ ...initDetail, account_id: accountId, cred: 25000, name: getAccountName(accountId) },
			{ ...initDetail, account_id: accountCash, debt: 25000, name: getAccountName(accountCash) }
		]
	};

	function getAccountName(e: number, name = 'Simpanan wajib') {
		if (coas && coas.length > 0) {
			const d = coas.filter((o) => o.id === e)[0];
			if (d) {
				return d.name;
			}
		}
		return name;
	}

	async function fetchTransactions(id: number) {
		const { data } = await axios.get<Transaction[]>(
			`/koperasi/member/simpanan/${id}/${accountId}/0`
		);
		return data;
	}

	const fetchDeleteData = async (e: number) =>
		await axios.delete(`/trx/delete/${e}`, {
			headers: { 'Content-Type': 'application/json' }
		});

	const deleteData = useMutation(fetchDeleteData, {
		onMutate: async (e: number) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<MemberKoperasi[]>(['trxs', { id: member.member_id }]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<MemberKoperasi[]>(['trxs', { id: member.member_id }], previousData);
			}

			return previousData;
		},
		onSuccess: () =>{
			fetchSuccess = true;
		},
		onError: (err: any, variables: number, context: any) => {
			if (context?.previousData) {
				client.setQueryData<MemberKoperasi[]>(['trxs', { id: member.member_id }], context.previousData);
			}
		},
		onSettled: async (data: any, error: any, variables: number, context: any) => {
			await client.invalidateQueries(['trxs', { id: member.member_id }]);
		}
	});

	const fetchCreateData = async (e: Transaction): Promise<Transaction> =>
		await axios.post('/trx/transaction/insert', e, {
			headers: { 'Content-Type': 'application/json' }
		});
	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: Transaction) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<Transaction>(['trxs', { id: member.member_id }]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction>(['trxs', { id: member.member_id }], previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: Transaction, context) => {
			if(context) {
				// client.setQueryData<Transaction>(['trxs', { id: member.member_id }],
				// 	trx = {...trx, id: data.data.id});
				fetchSuccess = true;
			}
		},
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction>(['trxs', { id: member.member_id }], context.previousData);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['trxs', { id: member.member_id }]);
		}
	});

	const fetchUpdateData = async (e: Transaction): Promise<Transaction> =>
		await axios.put('/trx/transaction/update', e, {
			headers: { 'Content-Type': 'application/json' }
		});


		const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: Transaction) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<Transaction[]>(['trxs', { id: member.member_id }]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction[]>(
					['trxs', { id: member.member_id }],
					[...previousData]
				);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: Transaction, context) => {
			if(context) {
			fetchSuccess = true;
			}
			//  closeForm(true)
		},
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction>(
					['trxs', { id: member.member_id }],
					context.previousData
				);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
			await client.invalidateQueries(['trxs',{ id: member.member_id }]);
		}
	});		

	const showErrorMessage = (queryResult: QueryObserverResult<any, unknown>) => {
		if (queryResult.error) {
			const test = queryResult.error as string;
			return test;
		}
		return '';
	};

	const deleteItem = (e: CustomEvent) => {
		$deleteData.mutate(e.detail.data)
	}

	const onTrxChange = (e: CustomEvent) => {
		const d = e.detail.data as Transaction;
		if(d.id === 0) {
			$createData.mutate(d);
		} else {
			$updateData.mutate(d);
		}
	}

	const getTotal = (e: Transaction[] | undefined) => {
		if(e && e.length > 0) {
			const details = e.map(m => m.details?.filter(o => o.cred > 0)[0]);
			if(details && details.length > 0) {
				return details.reduce((o,t) => (o + t!.cred), 0);
			}
		}
		return 0;
	}

	$: queryOptions = {
		queryKey: ['trxs', { id: member.member_id }],
		queryFn: () => fetchTransactions(member.member_id)
	};
</script>

<Query options={queryOptions}>
	<div slot="query" let:queryResult>
		{#if queryResult.status === 'loading'}
			<div>Loading...</div>
		{:else if queryResult.status === 'error'}
			<div>Error: {showErrorMessage(queryResult)}</div>
		{:else}
			<div class="arr-box">
				
				{#if queryResult.data?.length === 0 }
					<div>{member.name} belum mempunyai data simpanan wajib.</div>
				{:else}
					<div class="mb-10">Data simpanan wajib</div>

					{#each queryResult.data ?? [] as c (c.id)}
						<SwBox trx={c} {coas} on:change={onTrxChange} on:delete={deleteItem} />
					{/each}

					<Property label={'Total simpanan wajib'} value={getTotal(queryResult.data).toLocaleString("id-ID")} />
				{/if}
			</div>
		{/if}
	</div>
</Query>
<SwBox trx={{ ...trx }} {coas} on:change={onTrxChange} />


<style lang="scss">
	* :global(.icon:visited) {
		color: var(--text-color);
	}
</style>

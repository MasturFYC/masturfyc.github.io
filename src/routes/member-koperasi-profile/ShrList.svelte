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
	import SwForm from './SwForm.svelte';

	const client = useQueryClient();
	const title = 'Hari Raya';

	export let member: MemberKoperasi;

	let fetchSuccess = false;
	let counter = 1;

	const accountId = 303;
	const accountCash = 101;

	const initDetail: TransactionDetail = {
		id: 0,
		trx_id: 0,
		account_id: 0,
		description: `Simpanan ${title.toLowerCase()}`,
		debt: 0,
		cred: 0,
		ref_id: 0,
		name: title,
		is_new: true
	};

	const initTrx: Transaction = {
		id: 0,
		name: 'SHR',
		member_id: member.member_id,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format('YYYY-MM-DD'),
		is_valid: true,
		description: `Penerimaan simpanan ${title.toLowerCase()} dari ${member.name}`,
		details: [
			{ ...initDetail, account_id: accountId, cred: 0, name: 'Simpanan hari raya' },
			{ ...initDetail, account_id: accountCash, debt: 0, name: 'Kas/Bank' }
		]
	};

	let trx: Transaction = { ...initTrx };

	// function getAccountName(e: number, name = `Simpanan ${title.toLowerCase()}`) {
	// 	if (coas && coas.length > 0) {
	// 		const d = coas.filter((o) => o.id === e)[0];
	// 		if (d) {
	// 			return d.name;
	// 		}
	// 	}
	// 	return name;
	// }

	async function fetchTransactions(id: number) {
		const { data } = await axios.get<Transaction[]>(
			`/koperasi/member/simpanan/${id}/${accountId}?all=true`
		);
		counter = data.length;
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
			const previousData = client.getQueryData<MemberKoperasi[]>(query_key);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<MemberKoperasi[]>(
					query_key,
					previousData
				);
			}

			return previousData;
		},
		onSuccess: () => {
			fetchSuccess = true;
		},
		onError: (err: any, variables: number, context: any) => {
			if (context?.previousData) {
				client.setQueryData<MemberKoperasi[]>(
					query_key,
					context.previousData
				);
			}
		},
		onSettled: async (data: any, error: any, variables: number, context: any) => {
			await client.invalidateQueries(query_key);
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
			const previousData = client.getQueryData<Transaction>(query_key);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction>(query_key, previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: Transaction, context) => {
			if (context) {
				// client.setQueryData<Transaction>(query_key,
				// 	trx = {...trx, id: data.data.id});
				fetchSuccess = true;
			}
		},
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction>(
					query_key,
					context.previousData
				);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(query_key);
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
			const previousData = client.getQueryData<Transaction[]>(query_key);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction[]>(
					query_key,
					[...previousData]
				);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: Transaction, context) => {
			if (context) {
				fetchSuccess = true;
			}
			//  closeForm(true)
		},
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction>(
					query_key,
					context.previousData
				);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
			await client.invalidateQueries(query_key);
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
		$deleteData.mutate(e.detail.data);
	};

	const changeSW = (e: CustomEvent) => {
		const d = e.detail.data as Transaction;
		if (d.id === 0) {
			$createData.mutate(d);
		} else {
			$updateData.mutate(d);
		}
	};

	const getTotal = (e: Transaction[] | undefined) => {
		if (e && e.length > 0) {
			const details = e.map((m) => m.details?.filter((o) => o.account_id > 200)[0]);
			if (details && details.length > 0) {
				return details.reduce((o, t) => o + t!.cred, 0);
			}
		}
		return 0;
	};

	$: query_key = ['trxs', 'shr', { id: member.member_id }]
	$: queryOptions = {
		queryKey: query_key,
		queryFn: () => fetchTransactions(member.member_id)
	};

	$: if (fetchSuccess) {
		fetchSuccess = false;
		if (trx.id === 0) {
			trx = { ...initTrx };
		}
	}
</script>

{#if counter === 0}
	<div>{member.name} belum mempunyai data simpanan {title.toLowerCase()}.</div>
{:else}
	<div class="mb-10">Data simpanan {title.toLowerCase()}</div>
{/if}

<Query options={queryOptions}>
	<div slot="query" let:queryResult>
		{#if queryResult.status === 'loading'}
			<div>Loading...</div>
		{:else if queryResult.status === 'error'}
			<div>Error: {showErrorMessage(queryResult)}</div>
		{:else}
			{#each queryResult.data ?? [] as c (c.id)}
				<SwBox
					trx={c}
					on:delete={deleteItem}
					on:changeSW={changeSW}
					title={`Simpanan ${title.toLowerCase()}`}
				/>
			{/each}
			<Property
				label={`Total simpanan ${title.toLowerCase()}`}
				value={getTotal(queryResult.data).toLocaleString('id-ID')}
			/>
		{/if}
	</div>
</Query>
<SwForm trx={{ ...trx }} on:changeSW={changeSW} title={`Simpanan ${title.toLowerCase()}`} />

<style lang="scss">
	* :global(.icon:visited) {
		color: var(--text-color);
	}
</style>

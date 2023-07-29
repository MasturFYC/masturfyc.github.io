<script lang="ts">
	import { useQuery, useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import type { LoanTransaction, MemberKoperasi, PropertyValue } from '$lib';
	import dayjs from 'dayjs';
	import FormLoan from './FormLoan.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import LoanBox from './LoanBox.svelte';
	import { tick } from 'svelte';
	import { acc_cash, acc_loan, acc_provision, initDetail, initLoan } from '../store';
	import PinTable from './Details/PinTable.svelte';

	type PropertyPanel = {
		open: boolean;
		description?: string;
		price: number;
	} & PropertyValue;

	const client = useQueryClient();

	export let member: MemberKoperasi;

	const title = 'Pinjaman anggota';

	const initTrx: LoanTransaction = {
		id: 0,
		name: 'LOAN',
		member_id: member.member_id,
		description: 'Pemberian pinjaman kepada ' + member.name,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format(),
		is_valid: false,
		updated_by: '-',
		loan: initLoan,
		details: [
			{
				...initDetail,
				account_id: acc_loan,
				cred: 0,
				debt: 0 /* default */,
				name: 'Pinjaman anggota'
			},
			{
				...initDetail,
				account_id: acc_provision,
				cred: 0 /* default */,
				debt: 0,
				name: 'Jasa provisi'
			},
			{
				...initDetail,
				account_id: acc_cash,
				cred: 0 /* default */,
				debt: 0,
				name: 'Kas/Bank'
			}
		]
	};

	let trx: LoanTransaction = { ...initTrx };
	let fetchSuccess = false;
	let trxs: LoanTransaction[] = [];

	const getQueryKey = (id: number) => {
		return ['loans', { id: id }];
	};

	async function fetchLoans(id: number) {
		const { data } = await axios.get<LoanTransaction[]>(`/koperasi/loan/${id}`);
		return data;
	}

	const query = useQuery({
		queryKey: getQueryKey(member.member_id),
		queryFn: () => fetchLoans(member.member_id)
	});

	query.subscribe((o) => (trxs = o.data ?? []));

	const fetchUpdateData = async (e: LoanTransaction): Promise<LoanTransaction> =>
		await axios.patch(`/koperasi/loan/update`, e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const fetchCreateData = async (e: LoanTransaction): Promise<LoanTransaction> =>
		await axios.post('/koperasi/loan/insert', e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const fetchDeleteData = async (e: number) =>
		await axios.delete(`/koperasi/loan/delete/${e}`, {
			headers: { 'Content-Type': 'application/json' }
		});

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: LoanTransaction) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<LoanTransaction[]>(getQueryKey(member.member_id));

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), previousData);
			}

			return previousData;
		},
		onSuccess: async (data, variables, context) => {
			if (context) {
				// client.setQueryData<LoanTransaction>(getQueryKey(member.member_id),
				// 	trx = {...variables, id: data.data.id});
				fetchSuccess = true;
			}
		},

		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), context.previousData);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['loans']);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: LoanTransaction) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<LoanTransaction[]>(getQueryKey(member.member_id));

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), previousData);
			}

			return previousData;
		},
		onSuccess: async (data, variables, context) => {
			if (context) {
				// console.log(variables)
				// client.setQueryData<LoanTransaction>(getQueryKey(member.member_id),
				// 	trx = {...variables, id: data.data.id});
				fetchSuccess = true;
			}
		},
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), context.previousData);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async (data: any) => {
			await client.invalidateQueries(getQueryKey(member.member_id));
			await client.invalidateQueries(['member', 'payments', data.data.id]);
		}
	});

	const deleteData = useMutation(fetchDeleteData, {
		onMutate: async (e: number) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<LoanTransaction[]>(getQueryKey(member.member_id));

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), previousData);
			}

			return previousData;
		},
		onSuccess: () => {
			fetchSuccess = true;
		},
		onError: (err: any, variables: number, context: any) => {
			if (context?.previousData) {
				client.setQueryData<LoanTransaction[]>(getQueryKey(member.member_id), context.previousData);
			}
		},
		onSettled: async (data: any, error: any, variables: number, context: any) => {
			await client.invalidateQueries(getQueryKey(member.member_id));
		}
	});


	const deletetrx = (e: CustomEvent) => {
		tempOpens = [];
		$deleteData.mutate(e.detail.data);
	};
	let tempOpens: boolean[] = [];

	const onLoanChange = (e: CustomEvent) => {
		if (e.detail.data.id === 0) {
			tempOpens = [];
			$createData.mutate(e.detail.data);
		} else {
			tempOpens = [...opens];
			$updateData.mutate(e.detail.data);
		}
	};

	let opens: boolean[] = [];

	const createListProps = (e: LoanTransaction[] | undefined): PropertyPanel[] => {
		if (e && e.length > 0) {
			for (let i = 0; i < e.length; i++) {
				opens[i] = false;
			}
			return e.map((o) => ({
				id: o.id,
				name: `Pinjaman #${o.id}`,
				open: false,
				price: o.loan.nominal,
				description: o.description
			}));
		}
		return [];
	};

	const getCurrentTrx = (e: number | undefined) => {
		if (e) {
			const d = trxs.filter((o) => o.id === e)[0];
			if (d) {
				return d;
			}
		}
		return { ...initTrx };
	};

	$: if (fetchSuccess) {
		//		refetchLoan(member.member_id);
		fetchSuccess = false;

		if (tempOpens.length > 0) {
			tick();
			opens = [...tempOpens];
		}
	}

	$: panels = createListProps(trxs);

	// 	const totals = [
	// 		{id: 1, debt: 2000, cred: 0, s: 0},
	// 		{id: 2, debt: 0, cred: 100, s: 0},
	// 		{id: 3, debt: 0, cred: 100, s: 0},
	// 		{id: 4, debt: 0, cred: 100, s: 0}
	// ];
	// 	const sum = (arr: {id:number,v:number,s:number}[]) => {
	// 		for(let i = 0; i < arr.length; i++) {
	// 			if(i === 0) {
	// 				totals.splice(0, 1, {...totals[0], s: totals[0].debt})
	// 			} else {
	// 				totals.splice(i, 1, {...totals[i], s: totals[i-1].s - totals[i].cred})
	// 			}
	// 		}
	// 	}

	// 	// n[0] = 20000
	// 	// n[1] = 2000 - 100
	// 	// n[2] = 2000 - 100 - 100
	// 	// n[3] = 2000 - 100 - 100 - 100
	// 	$: sum(totals);
	// 	$: console.log(totals)
</script>

<FormLoan {trx} {title} on:change={onLoanChange} />

<div class="accordion-container">
	<Accordion>
		{#each panels as c, i (c.id)}
			<Panel bind:open={opens[i]}>
				<Header>
					<span>{c.name}</span>
					<div slot="description">
						<div>{c.description}</div>
						(Rp<span class="font-bold">{c.price.toLocaleString('id-ID')}</span>)
					</div>
					<IconButton slot="icon" toggle pressed={opens[i]}>
						<Icon class="material-icons" on>expand_less</Icon>
						<Icon class="material-icons">expand_more</Icon>
					</IconButton>
				</Header>
				<Content>
					<LoanBox trxLoan={getCurrentTrx(c.id)} on:change={onLoanChange} on:delete={deletetrx} />
					{#if opens[i] === true}
					<PinTable trxLoan={getCurrentTrx(c.id)} {member} />
					{/if}
				</Content>
			</Panel>
		{/each}
	</Accordion>
</div>

<!-- 
<pre>
  {JSON.stringify(trx, null, 4)}
</pre> -->

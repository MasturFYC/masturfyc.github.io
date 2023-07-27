<script lang="ts">
	import {
		useQuery,
		useMutation,
		useQueryClient,
	} from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import type { Loan, LoanTransaction, MemberKoperasi, PropertyValue, Transaction, TransactionDetail } from '$lib';
	import dayjs from 'dayjs';
	import FormLoan from './FormLoan.svelte';
	import ViewJournal from '../../../components/ViewJournal.svelte';
	import Select, { Option } from '@smui/select';
	import IconButton, {Icon} from '@smui/icon-button';
	import Property from '../../../components/Property.svelte';
	import LoanBox from './LoanBox.svelte';
	import { tick } from 'svelte';
	import { Text } from '@smui/list';


	type PropertyPanel = {
		open: boolean;
		description?: string;
		price: number;
	} & PropertyValue

	const client = useQueryClient();

	const acc_provision = 402;
	const acc_cash = 101;
	const acc_loan = 112;

	export let member: MemberKoperasi;

	const title = 'Pinjaman anggota';
	const initDetail: TransactionDetail = {
		id: 0,
		trx_id: 0,
		account_id: 0,
		description: title,
		debt: 0,
		cred: 0,
		ref_id: 0,
		name: title,
		is_new: true
	};

	const initLoan: Loan = {
		trx_id: 0,
		nominal: 0,
		provision: 0,
		period: 10,
		principal: 0,
		service_price: 0
	};

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
			{ ...initDetail, account_id: acc_cash, cred: 0 /* default */, debt: 0, name: 'Kas/Bank' }
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
	})

	query.subscribe((o) => (trxs = o.data??[]))

	const fetchDeleteData = async (e: number) =>
		await axios.delete(`/koperasi/loan/delete/${e}`, {
			headers: { 'Content-Type': 'application/json' }
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

	const fetchUpdateData = async (e: LoanTransaction): Promise<LoanTransaction> =>
		await axios.patch(`/koperasi/loan/update`, e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const fetchCreateData = async (e: LoanTransaction): Promise<LoanTransaction> =>
		await axios.post('/koperasi/loan/insert', e, {
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
		onSettled: async () => {
			await client.invalidateQueries(getQueryKey(member.member_id));
		}
	});

	const deletetrx = (e: CustomEvent) => {
		tempOpens = [];
		$deleteData.mutate(e.detail.data)
	}
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
		if(e && e.length > 0) {
			for (let i = 0; i<e.length; i++) {
				opens[i] = false;
			}
			return e.map(o => ({
				id: o.id,
				name: `Pinjaman #${o.id}`,
				open: false,
				price: o.loan.nominal,
				description: o.description
			}))
		}
		return [];
	}

	const getCurrentTrx = (e: number | undefined) => {
		if(e) {
			const d = trxs.filter(o => o.id === e)[0]
			if(d) {
				return d;
			}
		}
		return {...initTrx}
	}

	$: if (fetchSuccess) {
//		refetchLoan(member.member_id);
		fetchSuccess = false;

		if(tempOpens.length > 0) {
			tick();
			opens = [...tempOpens];
		}
	}

	$: panels = createListProps(trxs);

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
					(Rp <span class="font-bold">{c.price.toLocaleString("id-ID")}</span>)
				</div>
        <IconButton slot="icon" toggle pressed={opens[i]}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>
				<LoanBox 
				trx={getCurrentTrx(c.id)} 
				on:change={onLoanChange}
				on:delete={deletetrx}
				 />
				 <table>
					<thead>
						<tr>
							<th>ID</th>
							<th>TANGGAL</th>
							<th>DESKRIPSI</th>
							<th>DEBET</th>
							<th>KREDIT</th>
							<th>SALSO</th>
						</tr>
					</thead>
					<tbody>
							
					</tbody>
			 </table>
			</Content>
    </Panel>
		{/each}

  </Accordion>
</div>
 
<!-- 
<pre>
  {JSON.stringify(trx, null, 4)}
</pre> -->

<style>
	table {
		margin-top: 12px;
		border-collapse: collapse;
		table-layout: auto;
		width: 100%;
		border: 2px solid var(--border-color);
	}
</style>
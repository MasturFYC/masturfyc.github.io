<script lang="ts">
	import {
		Query,
		useMutation,
		useQueryClient,
		type QueryObserverResult
	} from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';

	import type { Loan, LoanTransaction, MemberKoperasi, TransactionDetail } from '$lib';
	import dayjs from 'dayjs';
	import FormLoan from './FormLoan.svelte';
	import ViewJournal from '../../../components/ViewJournal.svelte';

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

	const getQueryKey = (id: number) => {
		return ['loans', { id: id }];
	};

	async function fetchLoan(id: number) {
		const { data } = await axios.get<LoanTransaction>(`/koperasi/loan/${id}`);
		return data;
	}

	async function getLoan(id: number = 0) {

    const data =
			client.getQueryData<LoanTransaction>(getQueryKey(id)) ??
			(await client.fetchQuery<LoanTransaction>(getQueryKey(id), () => fetchLoan(id)));

		if (data && data.id > 0) {
			trx = data;
		}
	}

  const fetchDeleteData = async (e: number) =>
		await axios.delete(`/koperasi/loan/delete/${e}`, {
			headers: { 'Content-Type': 'application/json' }
		});

	const deleteData = useMutation(fetchDeleteData, {
		onMutate: async (e: number) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<LoanTransaction>(getQueryKey(member.member_id));

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<LoanTransaction>(
					getQueryKey(member.member_id),
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
				client.setQueryData<LoanTransaction>(
					getQueryKey(member.member_id),
					context.previousData
				);
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
		onSuccess: async (data: any, variables: LoanTransaction, context) => {
			if(context) {
				// client.setQueryData<LoanTransaction>(getQueryKey(member.member_id),
				// 	trx = {...variables, id: data.data.id});
				fetchSuccess = true;
			}
		},
    
    // If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<LoanTransaction>(getQueryKey(member.member_id), context.previousData);
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
			const previousData = client.getQueryData<LoanTransaction>(getQueryKey(member.member_id));

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<LoanTransaction>(getQueryKey(member.member_id), previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: LoanTransaction, context) => {
			if(context) {
        // console.log(variables)
				// client.setQueryData<LoanTransaction>(getQueryKey(member.member_id),
				// 	trx = {...variables, id: data.data.id});
				fetchSuccess = true;
			}
		},
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<LoanTransaction>(getQueryKey(member.member_id), context.previousData);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
			await client.invalidateQueries(["loans"]);
		}
	});

	const onLoanChange = (e: CustomEvent) => {
    
    if(e.detail.data.id === 0) {
      $createData.mutate(e.detail.data)
    } else {
      $updateData.mutate(e.detail.data)
    }
	};

  const refetchLoan = async (id: number) => {
    const data = await client.fetchQuery(getQueryKey(member.member_id), () => fetchLoan(id));
    client.setQueryData(getQueryKey(id), data);
    trx = {...data}
  }

	$: getLoan(member.member_id);

  $: if(fetchSuccess) {
    refetchLoan(member.member_id);
    fetchSuccess = false;
  }

	// $: queryOptions = {
	// 	queryKey: getQueryKey(member.member_id),
	// 	queryFn: () => fetchTransactions(member.member_id)
	// };
</script>

<FormLoan {trx} {title} on:change={onLoanChange} />
<ViewJournal {trx} />

<pre>
  {JSON.stringify(trx, null, 4)}
</pre>

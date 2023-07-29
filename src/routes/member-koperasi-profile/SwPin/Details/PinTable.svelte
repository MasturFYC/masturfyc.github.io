<script lang="ts">
	import type { LoanTransaction, MemberKoperasi, PaymentTransaction, Transaction } from '$lib';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { acc_cash, acc_loan, acc_payment, acc_service, initDetail } from '../../store';
	import axios from '$lib/axios-base';

	import {
		Query,
		useMutation,
		useQueryClient,
		type QueryObserverResult
	} from '@sveltestack/svelte-query';
	import dayjs from 'dayjs';
	import PaymentDialog from './PaymentDialog.svelte';
	import ViewJournal from '../../../../components/ViewJournal2.svelte';
	import DeleteItem from '../../DeleteItem.svelte';

	export let trxLoan: LoanTransaction;
	export let member: MemberKoperasi;

	const client = useQueryClient();
	const query_key = ['member', 'payments', trxLoan.id];
	let fetchSuccess = false;

	const title = 'Angsuran pinjaman';

	const initTrx: Transaction = {
		id: 0,
		name: 'LOAN-PAYMENT',
		member_id: member.member_id,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format('YYYY-MM-DD'),
		is_valid: true,
		description: `Penerimaan ${title.toLowerCase()} dari ${member.name}`,
		details: [
			{
				...initDetail,
				account_id: acc_payment,
				name: 'Angsuran pinjaman anggota',
				description: `${title} #${trxLoan.id}`,
				ref_id: trxLoan.id,
				cred: trxLoan.loan.principal
			},
			{
				...initDetail,
				account_id: acc_service,
				name: 'Jasa pinjaman',
				description: `${title} #${trxLoan.id}`,
				ref_id: trxLoan.id,
				cred: trxLoan.loan.service_price
			},
			{
				...initDetail,
				account_id: acc_cash,
				name: 'Kas/Bank',
				description: `${title} #${trxLoan.id}`,
				ref_id: trxLoan.id,
				debt: trxLoan.loan.principal + trxLoan.loan.service_price
			}
		]
	};

	async function fetchPaymnetTransactions(id: number) {
		const { data } = await axios.get<PaymentTransaction[]>(
			`/koperasi/member/loan/payments/${id}/${acc_loan}/${acc_payment}`
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
			const previousData = client.getQueryData<Transaction[]>(query_key);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction[]>(query_key, previousData);
			}

			return previousData;
		},
		onSuccess: () => {
			fetchSuccess = true;
		},
		onError: (err: any, variables: number, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction[]>(query_key, context.previousData);
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
				client.setQueryData<Transaction>(query_key, context.previousData);
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
				client.setQueryData<Transaction[]>(query_key, [...previousData]);
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
				client.setQueryData<Transaction>(query_key, context.previousData);
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

	// import LinearProgress from '@smui/linear-progress';
	// import Button from '@smui/button';
	const deleteItem = (e: CustomEvent) => {
		$deleteData.mutate(e.detail.data);
	};

	const onchange = (e: CustomEvent) => {
		if (e.detail.data.id === 0) {
			$createData.mutate(e.detail.data);
		} else {
			$updateData.mutate(e.detail.data);
		}
	};

	$: queryOptions = {
		queryKey: query_key,
		queryFn: () => fetchPaymnetTransactions(trxLoan.id)
	};

	$: if (fetchSuccess) {
		fetchSuccess = false;
	}
</script>

<Query options={queryOptions}>
	<div slot="query" let:queryResult>
		{#if queryResult.status === 'loading'}
			<div>Loading...</div>
		{:else if queryResult.status === 'error'}
			<div>Error: {showErrorMessage(queryResult)}</div>
		{:else}
			<DataTable table$aria-label="User list" style="width: 100%;margin:12px 0">
				<Head>
					<Row>
						<Cell class="text-center">PERIODE</Cell>
						<!-- <Cell numeric>ID</Cell> -->
						<Cell class="text-center">TANGGAL</Cell>
						<Cell style="width: 100%;">AKUN</Cell>
						<Cell numeric>DEBET</Cell>
						<Cell numeric>KREDIT</Cell>
						<Cell numeric>SALDO</Cell>
						<Cell class="text-center">...</Cell>
					</Row>
				</Head>
				<Body>
					{#each queryResult.data ?? [] as c, i (c.id)}
						<Row>
							<Cell class="text-center">#{i}</Cell>
							<!-- <Cell numeric>{c.trx_id}</Cell> -->
							<Cell class="text-center">{dayjs(c.created_at).format('DD-MM-YYYY')}</Cell>
							<Cell>{c.account_id} - {c.name}</Cell>
							<Cell numeric>{c.debt.toLocaleString('id-ID')}</Cell>
							<Cell numeric>{c.cred.toLocaleString('id-ID')}</Cell>
							<Cell numeric>{c.saldo.toLocaleString('id-ID')}</Cell>
							<Cell>
								{#if i > 0}
									<PaymentDialog
										trx={{ ...initTrx, id: c.trx_id }}
										on:change={onchange}
										title={`Angsuran pinjaman #${i}`}
									/>
									<ViewJournal trx={{ ...initTrx, id: c.trx_id }} />
									<DeleteItem trxId={c.trx_id} on:delete={deleteItem} />
								{/if}
							</Cell>
						</Row>
					{/each}
				</Body>
			</DataTable>
			<PaymentDialog
				disabled={(queryResult.data?.length ?? 0) >= trxLoan.loan.period + 1}
				trx={{ ...initTrx }}
				on:change={onchange}
				title={`Angsuran pinjaman #${queryResult.data?.length}`}
			/>
		{/if}
	</div>
</Query>

<!-- {#each items as item (item.id)}
      <Row>
        <Cell numeric>{item.id}</Cell>
        <Cell>{item.name}</Cell>
        <Cell>{item.username}</Cell>
        <Cell>{item.email}</Cell>
      </Row>
    {/each} -->
<style lang="scss">
	* :global(.text-center) {
		text-align: center;
	}
	* :global(.mdc-data-table__header-row),
	* :global(.mdc-data-table__row) {
		height: 42px;
	}
	* :global(.mdc-data-table__header-cell),
	* :global(.mdc-data-table__header-cell--numeric),
	* :global(.mdc-data-table__cell) {
		padding: 0 6px;
	}
</style>

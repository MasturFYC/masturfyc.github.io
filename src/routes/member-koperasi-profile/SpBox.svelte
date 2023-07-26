<script lang="ts">
	import { useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import type { Transaction, TransactionDetail, MemberKoperasi, iAccount } from '$lib';
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import ViewJournal from '../../components/ViewJournal.svelte';
	import Select, { Option } from '@smui/select';

	const client = useQueryClient();

	export let member: MemberKoperasi;
	export let coas: iAccount[] = [];

	const initDetail: TransactionDetail = {
		id: 0,
		trx_id: 0,
		account_id: 0,
		description: 'Simpanan pokok',
		debt: 0,
		cred: 0,
		ref_id: 0,
		name: 'Simpanan pokok',
		is_new: true
	};

	const accountId = 301;
	let cred = 25000;
	let fetchSuccess = false;

	let trx: Transaction = {
		id: 0,
		name: 'SIMPANAN-POKOK',
		member_id: member.member_id,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format('YYYY-MM-DD'),
		is_valid: true,
		description: 'Penerimaan simpanan pokok dari ' + member.name,
		details: [
			{ ...initDetail, account_id: 301, cred: 25000, name: getAccountName(301) },
			{ ...initDetail, account_id: 101, debt: 25000, name: getAccountName(101) }
		]
	};

	let selectedAccount: iAccount;

	const fetchCreateData = async (e: Transaction): Promise<Transaction> =>
		await axios.post('/trx/transaction/insert', e, {
			headers: { 'Content-Type': 'application/json' }
		});
	const mutateData = useMutation(fetchCreateData, {
		onMutate: async (e: Transaction) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<Transaction>(['trx', { id: member.member_id }]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<Transaction>(['trx', { id: member.member_id }], previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variables: Transaction, context) => {
			if(context) {
				client.setQueryData<Transaction>(['trx', { id: member.member_id }],
					trx = {...trx, id: data.data.id});
				fetchSuccess = true;
			}
		},
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<Transaction>(['trx', { id: member.member_id }], context.previousData);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['trx', { id: member.member_id }]);
		}
	});

	function getAccountName(e: number, name = 'Simpanan pokok') {
		if (coas && coas.length > 0) {
			const d = coas.filter((o) => o.id === e)[0];
			if (d) {
				return d.name;
			}
		}
		return name;
	}

	async function fetchTransaction(id: number) {
		const { data } = await axios.get<Transaction>(
			`/koperasi/member/simpanan/${id}/${accountId}/1`
		);
		return data;
	}

	async function loadTransaction(id: number) {
		const data =
			client.getQueryData<Transaction>(['trx', { id: id }]) ??
			(await client.fetchQuery<Transaction>(['trx', { id: id }], () => fetchTransaction(id)));
		if (data && data.id > 0) {
			trx = data;
			fetchSuccess = true;
		}
	}

	const getAccountKey = (e: iAccount) => {
		return e ? `${e.id}` : '0';
	};

	// onMount(() => {
	// 	loadTransaction(member.member_id);
	// });

	// const getSimpananPokok = (details: TransactionDetail[]) => {
	// 	const d = details.filter((f) => f.account_id === accountId)[0];
	// 	if (d) {
	// 		return d.cred;
	// 	}
	// 	return 0;
	// };

	const setSelectedAccount = (details: TransactionDetail[] | undefined) => {
		if (details && details.length > 0) {
			const d = details.filter((o) => o.account_id < 200)[0];
			if (d && coas && coas.length > 0) {
				const p = coas.filter((f) => f.id === d.account_id)[0];
				if (p) {
					selectedAccount = p;
				}
			}
		}
	};

	const setDetailAccount = (acc: iAccount | undefined) => {
		if (acc && trx && trx.details) {
			const details = trx.details;
			const i = details.findIndex((f) => f.account_id < 200);
			if (i >= 0) {
				const d = {
					...details[i],
					account_id: acc.id,
					name: acc.name
				};
				details.splice(i, 1, d);
				trx = { ...trx, details: details };
			}
		}
	};

	$: if(trx.id === 0) {
		loadTransaction(member.member_id);
	}

	$: setSelectedAccount(trx.details);
	$: setDetailAccount(selectedAccount);


</script>

	<div class="div-content">
		{#if fetchSuccess}
			<div class="flex-row flex-center">
				{member.name} sudah mempunyai simpanan pokok. <ViewJournal {trx} />
			</div>
		{:else}
			<div>
				<div class="mb-10">
					{member.name} belum mempunyai data simpanan pokok, ingin membuatnya?
				</div>
				<div class="flex flex-row mb-10">
					<Textfield
						bind:value={cred}
						disabled
						label="Default jumlah simpanan pokok"
						input$maxlength={9}
						type="number"
						input$placeholder="e.g. 25000"
						variant="filled"
					/>
					<Select
						input$class="flex-1"
						key={getAccountKey}
						label="Akun penerimaan"
						variant="filled"
						bind:value={selectedAccount}
					>
						{#each coas as c (c.id)}
							<Option value={c}>{c.name}</Option>
						{/each}
					</Select>
				</div>
				<Button on:click={() => $mutateData.mutate(trx)} variant="outlined"
					>Buat simpanan pokok</Button
				>
			</div>
		{/if}
	</div>

<!-- <pre>{JSON.stringify(trx, null, 3)}</pre> -->

<style lang="scss">
	* :global(.icon:visited) {
		color: var(--text-color);
	}
</style>

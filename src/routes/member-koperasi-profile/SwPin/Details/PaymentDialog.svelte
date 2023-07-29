<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';
	import type { PaymentTransaction, Transaction, TransactionDetail, iAccount } from '$lib';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Dialog, { Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { Title } from '@smui/top-app-bar';
	import Select, { Option } from '@smui/select';
	import { coa_payments } from '$lib/store';
	import axios from '$lib/axios-base';
	import { useQueryClient } from '@sveltestack/svelte-query';

	const dispatch = createEventDispatcher();
	const client = useQueryClient();

	export let trx: Transaction;
	export let title = 'Angsuran pinjaman';
	export let disabled = false;
	let loadOnMount = false;

	let open = false;
	let dirty = false;
	let price = 0;
	let description = '';
	let created_at = dayjs().format('YYYY-MM-DD');
	let clicked = 'no action';
	let selectedAccount: iAccount;

	const getAccountKey = (e: iAccount) => {
		return e ? `${e.id}` : '0';
	};

	const setSelectedAccount = (details: TransactionDetail[] | undefined) => {
		if (details && details.length > 0) {
			const d = details.filter((o) => o.account_id < 111)[0];
			if (d && $coa_payments.length > 0) {
				const p = $coa_payments.filter((f) => f.id === d.account_id)[0];
				if (p) {
					selectedAccount = p;
				}
			}
		}
	};

	const setPrice = (details: TransactionDetail[] | undefined) => {
		if (details && details.length > 0) {
			const d = details.filter((o) => o.account_id < 111)[0];
			if (d) {
				price = d.debt;
			}
		}
	};

	const setData = (e: Transaction) => {
		setSelectedAccount(e.details);
		description = e.description ?? '';
		setPrice(e.details);
		created_at = dayjs(e.created_at).format('YYYY-MM-DD');
	};

	const setDetailAccount = (acc: iAccount | undefined) => {
		if (acc && trx && trx.details) {
			const details = trx.details;
			const i = details.findIndex((f) => f.account_id < 111);
			if (i >= 0) {
				const d = {
					...details[i],
					account_id: acc.id,
					name: acc.name
				};
				details.splice(i, 1, d);
				trx = { ...trx, details: details };
				dirty = true;
			}
		}
	};

	const resetData = () => {
		setSelectedAccount(trx.details);
		setPrice(trx.details);
		description = trx.description ?? '';
		created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
	};

	async function fetchTrx(trxId: number) {
		const { data } = await axios.get<Transaction>(`/trx/with-details/${trxId}`);
		return data;
	}

	const loadTrx = async (id: number) => {
		const queryKey = ['trx', id];
		const data =
			client.getQueryData<Transaction>(queryKey) ??
			(await client.fetchQuery(queryKey, () => fetchTrx(id)));
		if (data && data.id > 0) {
			trx = data;
			setData(data);
		}
	};

	$: if (loadOnMount) {
		loadTrx(trx.id);
		loadOnMount = false;
	}

$: setDetailAccount(selectedAccount);

	// $: setData(trx);

	$: isAccountValid = selectedAccount && selectedAccount.id > 0;
	$: isDisabled = !isAccountValid || !dirty;
	//$: setSelectedAccount(trx.details);

	$: if (clicked === 'yes') {
		clicked = 'no action';
		const isNew = trx.id === 0;
		const data = {
			...trx,
			created_at: created_at,
			description: description,
			updated_at: dayjs().format()
		};

		if (trx.id > 0) {
			client.setQueryData<Transaction>(['trx', trx.id], () => data);
		}

		dispatch('change', {
			data: data
		});

		if (isNew) {
			resetData();
		}
	}

	$: if (clicked === 'no') {
		clicked = 'no action';
		resetData();
	}
</script>

<IconButton
	{disabled}
	{title}
	size={'button'}
	class="material-icons icon"
	on:click={async () => {
		if(trx.id > 0) {
			loadOnMount = true;
		}
		open = true;
	}}
	aria-label="New transaction">{trx.id === 0 ? 'note_add' : 'edit'}</IconButton
>

<Dialog
	surface$style="width: 300px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title" style={'margin: 16px;padding:0'}>{title}</Title>
	<Content id="simple-content" style="overflow:unset;margin:0 16px;padding:0">
		<form
			class="flex-col flex-1 w-min-300"
			on:submit|preventDefault={() => {
				clicked = 'yes';
				open = false;
			}}
		>
			<Textfield
				disabled
				bind:dirty
				bind:value={price}
				label="Jumlah angsuran"
				type="number"
				input$placeholder="e.g. 125000"
				variant="filled"
			/>
			<Select
				use={[InitialFocus]}
				key={getAccountKey}
				label="Akun penerimaan"
				variant="filled"
				invalid={!isAccountValid}
				bind:value={selectedAccount}
			>
				{#each $coa_payments as c (c.id)}
					<Option value={c}>{c.name}</Option>
				{/each}
			</Select>
			<Textfield
				bind:dirty
				bind:value={created_at}
				label="Tanggal transaksi"
				type="date"
				variant="filled"
			/>

			<Textfield
				bind:dirty
				bind:value={description}
				textarea
				class="mt-20"
				label="Deskripsi"
				input$rows={3}
				input$emptyValueUndefined
				input$maxlength={256}
			/>
			<input disabled={isDisabled} type="submit" style={'display:none'} />
		</form>
	</Content>

	<Actions>
		<Button ripple color="secondary" on:click={() => (clicked = 'no')}>Batal</Button>
		<Button disabled={isDisabled} color="primary" ripple on:click={() => (clicked = 'yes')}
			>Simpan</Button
		>
	</Actions>
</Dialog>

<style lang="scss">
	* :global(input[type='number']::-webkit-outer-spin-button),
	* :global(input[type='number']::-webkit-inner-spin-button) {
		-webkit-appearance: none;
		margin-right: 0;
	}

	* :global(input[type='number']) {
		-moz-appearance: textfield;
	}
</style>

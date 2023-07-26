<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';
	import type { Transaction, TransactionDetail, iAccount } from '$lib';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Dialog, { Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { Title } from '@smui/top-app-bar';
	import Select, { Option } from '@smui/select';
	import { coa_payments } from '$lib/store';
  
	const dispatch = createEventDispatcher();

	export let trx: Transaction;
	export let title = 'Simpanan'

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
			const d = details.filter((o) => o.account_id < 200)[0];
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
			const d = details.filter((o) => o.account_id < 200)[0];
			if (d) {
				price = d.debt;
			}
		}
	};

	const setData = (e: Transaction) => {
		setSelectedAccount(e.details);
		description = trx.description ?? '';
		if (trx.id > 0) {
			setPrice(e.details);
			created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
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
        dirty = true;
			}
		}
	};

	const setTransactionDetils = (e: TransactionDetail[] | undefined) => {
		if (e && e.length > 1) {
			const d1 = e[0];
			const d2 = e[1];
			d1.cred = price;
			d1.debt = 0;
			d2.debt = price;
			d2.cred = 0;
			d2.account_id = selectedAccount.id;
			d2.name = selectedAccount.name;

			return [d1, d2];
		}
		return [];
	};

  const resetData = () => {
    setSelectedAccount(trx.details);
    if(trx.id === 0) {
      price = 0;
    } else {
      setPrice(trx.details);
    }
		description = trx.description ?? '';
    created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
  }

	$: setDetailAccount(selectedAccount);

  $: setData(trx);

  $: isPriceValid = price > 0;
	$: isAccountValid = selectedAccount && selectedAccount.id > 0;
	$: isDisabled = !isPriceValid || !isAccountValid || !dirty;
	//$: setSelectedAccount(trx.details);

	$: if (clicked === 'yes') {
		clicked = 'no action';
    const isNew = trx.id === 0;
//		dirty = false;
		dispatch('changeSW', {
			data: {
				...trx,
				created_at: created_at,
				description: description,
				updated_at: dayjs().format('YYYY-MM-DD'),
				details: setTransactionDetils(trx.details)
			}
		});

    if(isNew) {
      resetData();
    }
	}

  $: if (clicked === 'no') {
		clicked = 'no action';
    resetData();
	}


</script>

<IconButton
  title={title}
  size={trx.id === 0 ? 'normal' : 'button'}
  class="material-icons icon"
  on:click={async () => {
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
		<form class="flex-col flex-1 w-min-300" on:submit|preventDefault={() => {
				clicked = 'yes';
				open = false;
		}}>
			<Textfield
				use={[InitialFocus]}
				bind:dirty
				bind:value={price}
				label="Jumlah simpanan"
				type="number"
				invalid={!isPriceValid}
				input$placeholder="e.g. 125000"
				variant="filled"
			/>
			<Select
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
			<input disabled={isDisabled} type="submit" style={"display:none"} />
		</form>
	</Content>

	<Actions>
		<Button ripple color="secondary" on:click={() => (clicked = 'no')}>Batal</Button>
		<Button
			disabled={isDisabled}
			color="primary"
			ripple
			on:click={() => (clicked = 'yes')}>Simpan</Button
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

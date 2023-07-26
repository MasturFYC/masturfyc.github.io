<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';
	import type {Transaction, TransactionDetail, iAccount } from '$lib';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Dialog, { Content, InitialFocus, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { Title } from '@smui/top-app-bar';
	import Select, { Option } from '@smui/select';
	import ViewJournal from '../../components/ViewJournal.svelte';
	import DeleteItem from './DeleteItem.svelte';

	const dispatch = createEventDispatcher();

	export let trx: Transaction;
	export let coas: iAccount[] = [];

	let open = false;
	let dirty = false;
	let price = 0;
	let description = '';
	let created_at = dayjs().format('YYYY-MM-DD');
	let clicked = 'no';
	let selectedAccount: iAccount;

	const getAccountKey = (e: iAccount) => {
		return e ? `${e.id}` : '0';
	};

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
		if(trx.id > 0) {
			setPrice(e.details);
			created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
		}
	}

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


  const setTransactionDetils = (e: TransactionDetail[] | undefined) => {
    if(e && e.length > 1) {
      const d1 = e[0];
      const d2 = e[1];
      d1.cred = price;
      d1.debt = 0;
      d2.debt = price;
      d2.cred = 0;
      d2.account_id = selectedAccount.id;
      d2.name = selectedAccount.name;

     return [d1,d2];
    }
    return [];
  }

	$: setData(trx)

	$: isPriceValid = price > 0;
	$: isAccountValid = selectedAccount && selectedAccount.id > 0;
	$: isDisabled = !isPriceValid || !isAccountValid || !dirty;
	//$: setSelectedAccount(trx.details);
  $: setDetailAccount(selectedAccount);
	
	$: if (clicked === 'yes') {
    clicked = 'no'
		dispatch('change', {
			data: {
        ...trx,
				created_at: created_at,
				description: description,
        updated_at: dayjs().format('YYYY-MM-DD'),
        details: setTransactionDetils(trx.details)
      }
		});
	}
</script>

{#if trx.id === 0}
	<IconButton
		title="Add simpanan wajib"
		size={trx.id === 0 ? 'normal' : 'button'}
		class="material-icons icon"
		on:click={async () => {
			open = true;
		}}
		aria-label="New transaction">{trx.id === 0 ? 'note_add' : 'edit'}</IconButton
	>
{:else}
	<div class="flex-row gap-x-2 flex-center box mb-10 flex-wrap ">
		<div class="flex-row flex-wrap gap-x-2 flex-1 flex-baseline">
		<div>{trx.id}</div>
		<div>{dayjs(trx.created_at).format('DD-MM-YYYY')}</div>
		<div class="flex-1 min-w-180">{trx.description}</div>
		<div class="font-bold">{trx.details?.filter((f) => f.cred > 0)[0].cred.toLocaleString('id-ID')}</div>
	</div>
	<div>
		<IconButton
			title="Add simpanan wajib"
			size={trx.id === 0 ? 'normal' : 'button'}
			class="material-icons icon"
			on:click={async () => {
				open = true;
			}}
			aria-label="New transaction">{trx.id === 0 ? 'note_add' : 'edit'}</IconButton
		>
		<ViewJournal {trx} />
		<DeleteItem trxId={trx.id} on:delete={(e) => dispatch('delete', {data: trx.id})} />
	</div>
</div>
{/if}

<Dialog
	surface$style="width: 300px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title" style={'margin: 16px;padding:0'}>Simpanan wajib</Title>
	<Content id="simple-content" style="overflow:unset;margin:0 16px;padding:0">
		<div class="flex-col flex-1 w-min-300">
			<Textfield
				bind:dirty
				bind:value={created_at}
				label="Tanggal transaksi"
				input$maxlength={9}
				type="date"
				class="flex-1"
				variant="filled"
			/>
			<Textfield
				bind:dirty
				bind:value={price}
				label="Jumlah simpanan"
				input$maxlength={9}
				type="number"
				class="flex-1"
				invalid={!isPriceValid}
				input$placeholder="e.g. 125000"
				variant="filled"
			/>
			<Select
				input$class="flex-1"
				key={getAccountKey}
				label="Akun penerimaan"
				variant="filled"
				invalid={!isAccountValid}
				bind:value={selectedAccount}
			>
				{#each coas as c (c.id)}
					<Option value={c}>{c.name}</Option>
				{/each}
			</Select>

			<Textfield
				textarea
				class="mt-20"
				label="Deskripsi"
				input$rows={5}
				input$emptyValueUndefined
				bind:dirty
				bind:value={description}
			/>
		</div>
	</Content>

	<Actions>
		<Button ripple color="secondary" on:click={() => (clicked = 'no')}>Batal</Button>
		<Button disabled={isDisabled} color="primary" 
		use={[InitialFocus]}
		ripple on:click={() => (clicked = 'yes')}
			>Simpan</Button
		>
	</Actions>
</Dialog>

<style lang="scss">
	.gap-x-2 {
		gap: 12px;
	}
	.box {
		border: 1px solid var(--border-color);
    padding: 6px 12px;
    background: var(--body-background);
    color: var(--label-color);
	}
	.flex-baseline {
		align-items: baseline;
	}
	.min-w-180 {
		min-width: 180px;
	}
</style>

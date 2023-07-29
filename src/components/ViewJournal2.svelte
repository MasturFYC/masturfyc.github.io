<script lang="ts">
	import type { Transaction, TransactionDetail } from '$lib';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import { numberFormater } from '$lib';
	import dayjs from 'dayjs';
	import axios from '$lib/axios-base';
	import { useQueryClient } from '@sveltestack/svelte-query';



	const client = useQueryClient();


	export let disabled = false;
	export let trx: Transaction;

	let open = false;
	let clicked = 'no';
	let loadOnMount = false;


	async function fetchTrx(trxId: number) {
		const { data } = await axios.get<Transaction>(
			`/trx/with-details/${trxId}`
		);
		return data;
	}

	const loadTrx  = async  (id: number) =>{
		const queryKey = ['trx', id]
		const data = client.getQueryData<Transaction>(queryKey) ??
			await client.fetchQuery(queryKey, () => fetchTrx(id));
			if(data && data.id > 0) {
				trx = data
			}
	}

  const getTotalDebt = (details: TransactionDetail[] | undefined): number => {
    if(details && details.length > 0) {
      return details.reduce((o,t) => (o + t.debt), 0)
    }
    return 0;
  }
  const getTotalCred = (details: TransactionDetail[] | undefined): number => {
    if(details && details.length > 0) {
      return details.reduce((o,t) => (o + t.cred), 0)
    }
    return 0;
  }

	$: if(loadOnMount) {
		loadTrx(trx.id)
		loadOnMount = false;
	}

</script>

<IconButton
	size="button"
	title="View journal"
  class="material-icons"
	disabled={disabled}
	on:click={() => {
		clicked = 'no';
		loadOnMount = true;
		open = true;
	}}>leaderboard</IconButton
>

<Dialog
	surface$style="width: 640px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title" style={'margin: 0 12px;padding:0'}>Journal #{trx?.id}</Title>
	<Content id="simple-content" style="overflow:unset;margin:0 12px;padding:0">
    {#if trx}
    <div class="mb-10 div-desc">{dayjs(trx.created_at).tz('Asia/Jakarta', true).format('DD MMMM YYYY')}, {trx.description}</div>
		<table>
			<thead>
				<th class="text-left">AKUN</th>
				<th class="text-right">DEBET</th>
				<th class="text-right">KREDIT</th>
			</thead>
			<tbody>
				{#each trx.details ?? [] as c}
					<tr>
						<td>{c.account_id} - {c.name}</td>
						<td class="text-right font-bold">{numberFormater.format(c.debt)}</td>
						<td class="text-right font-bold">{numberFormater.format(c.cred)}</td>
					</tr>
				{/each}
			</tbody>
			<tr>
				<td>BALANCED</td>
				<td class="text-right font-bold"
					>{numberFormater.format(getTotalDebt(trx.details))}</td
				>
				<td class="text-right font-bold"
					>{numberFormater.format(getTotalCred(trx.details))}</td
				>
			</tr>
		</table>
    {/if}
	</Content>

	<Actions style={'margin: 0 12px;padding:0'}>
		<div class="flex-1 font-sm">
			Updated at: {dayjs(trx?.updated_at).format()}, by: {trx?.updated_by}
		</div>
		<Button
			type="button"
			defaultAction
			color="primary"
			ripple
			use={[InitialFocus]}
			on:click={() => (clicked = 'yes')}
		>
			<Label>Close</Label>
		</Button>
	</Actions>
</Dialog>

<style>
	table {
		border: 1px solid var(--border-color);
		width: 100%;
		border-collapse: collapse;
	}
	td,
	th {
		border: 1px solid var(--border-color);
		padding: 0.25em 0.5em;
	}
	.text-right {
		text-align: right;
	}
	.text-left {
		text-align: left;
	}
	.font-sm {
		font-size: smaller;
		color: var(--text-content);
		font-family: var(--font-mono);
	}
	.div-desc,
	td, th {
		font-family: var(--font-mono);
		font-size: smaller;
	}

</style>
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Transaction, TransactionDetail} from '$lib';
	import dayjs from 'dayjs';
	import ViewJournal from '../../components/ViewJournal.svelte';
	import DeleteItem from './DeleteItem.svelte';
	import SwForm from './SwForm.svelte';

	const dispatch = createEventDispatcher();

	export let trx: Transaction;
	export let title = 'Simpanan wajib';

	const getSW = (e: TransactionDetail[] | undefined) => {

		if(e && e.length > 0) {
			const d = e.filter((f) => f.account_id > 200)[0];
			if(d) {
				return d.cred
			}
		}
		return 0;
	}


	const changeSW = (e: CustomEvent) => {
		dispatch('change', {data: e.detail.data});
	}


</script>

	<div class="flex-row gap-x-2 flex-center box mb-10 flex-wrap">
		<div class="flex-row flex-wrap gap-x-2 flex-1 flex-baseline">
			<div>{trx.id}</div>
			<div>{dayjs(trx.created_at).format('DD-MM-YYYY')}</div>
			<div class="flex-1 min-w-180">{trx.description}</div>
			<div class="font-bold">
				{getSW(trx.details).toLocaleString('id-ID')}
			</div>
		</div>
		<div>
			<SwForm {trx} on:change={changeSW} {title} />
			<ViewJournal {trx} />
			<DeleteItem trxId={trx.id} on:delete={(e) => dispatch('delete', { data: trx.id })} />
		</div>
	</div>

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

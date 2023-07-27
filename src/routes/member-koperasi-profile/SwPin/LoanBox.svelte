<script lang="ts">
  import type { LoanTransaction } from "$lib";
  import dayjs from "dayjs";
  import Property from "../../../components/Property.svelte";
	import FormLoan from "./FormLoan.svelte";
	import { createEventDispatcher } from 'svelte';
	import ViewJournal from "../../../components/ViewJournal.svelte";
	import DeleteItem from "../DeleteItem.svelte";
	const dispatch = createEventDispatcher();

  export let trx: LoanTransaction | undefined = undefined;

  const onchange = (e: CustomEvent) => {
		dispatch('change', {
			data: e.detail.data
		});

  }
</script>

{#if trx}
<div class="flex-row gap-x-4 stretch">
  <Property label="Tanggal" value={dayjs(trx.created_at).format('DD-MM-YYYY')} />
  <Property label="Nominal" value={trx.loan.nominal.toLocaleString("id-ID")} />
  <Property label="Jumlah Periode" value={trx.loan.period.toLocaleString("id-ID")} />
  <Property label="Besar angsuran" value={(trx.loan.principal + trx.loan.service_price).toLocaleString("id-ID")} />
  <div>
  <FormLoan {trx} title={'Pinjaman anggota'} on:change={onchange} />
  <ViewJournal {trx}/>
  <DeleteItem trxId={trx.id} on:delete={(e) => dispatch('delete', {data: e.detail.data})} />
  </div>
</div>
{/if}

<style lang="scss">
 .gap-x-4 {
  column-gap: 24px;
 }
 .stretch {
  justify-content: space-between;
 }
</style>

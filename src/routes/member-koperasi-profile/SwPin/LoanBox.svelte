<script lang="ts">
  import type { LoanTransaction, Transaction } from "$lib";
  import dayjs from "dayjs";
  import Property from "../../../components/Property.svelte";
	import FormLoan from "./FormLoan.svelte";
	import { createEventDispatcher } from 'svelte';
	import ViewJournal from "../../../components/ViewJournal.svelte";
	import DeleteItem from "../DeleteItem.svelte";

	const dispatch = createEventDispatcher();

  export let trxLoan: LoanTransaction;


	// const initTrx: Transaction = {
	// 	id: 0,
	// 	name: 'SHR',
	// 	member_id: trxLoan.member_id,
	// 	created_at: dayjs().format('YYYY-MM-DD'),
	// 	updated_at: dayjs().format('YYYY-MM-DD'),
	// 	is_valid: true,
	// 	description: `Penerimaan simpanan ${title.toLowerCase()} dari ${member.name}`,
	// 	details: [
	// 		{ ...initDetail, account_id: accountId, name: 'Simpanan hari raya', description: `Simpanan ${title.toLowerCase()}` },
	// 		{ ...initDetail, account_id: accountCash, name: 'Kas/Bank', description: `Simpanan ${title.toLowerCase()}` }
	// 	]
	// };
  

  const onchange = (e: CustomEvent) => {
		dispatch('change', {
			data: e.detail.data
		});

  }
</script>

{#if trxLoan}
<div class="flex-row gap-x-4 stretch">
  <Property label="Tanggal" value={dayjs(trxLoan.created_at).format('DD-MM-YYYY')} />
  <Property label="Nominal" value={trxLoan.loan.nominal.toLocaleString("id-ID")} />
  <Property label="Jumlah Periode" value={trxLoan.loan.period.toLocaleString("id-ID")} />
  <Property label="Besar angsuran" value={(trxLoan.loan.principal + trxLoan.loan.service_price).toLocaleString("id-ID")} />
  <div>
  <FormLoan trx={trxLoan} title={'Pinjaman anggota'} on:change={onchange} />
  <ViewJournal trx={trxLoan}/>
  <DeleteItem trxId={trxLoan.id} on:delete={(e) => dispatch('delete', {data: e.detail.data})} />
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

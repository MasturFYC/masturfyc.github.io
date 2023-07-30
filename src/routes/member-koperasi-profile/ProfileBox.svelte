<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { MemberKoperasi } from '$lib';
	import MemberForm from '../member-koperasi/MemberForm.svelte';
	import DeleteItem from '../member-koperasi/DeleteItem.svelte';
	import Property from '$lib/components/Property.svelte';
	
	export let member: MemberKoperasi;

	const dispatch = createEventDispatcher();

	function updateView(e: CustomEvent) {
		dispatch('update', { data: e.detail.data });
	}

</script>

	<div class="flex-col gap-y-2 p-2">
		<div class="flex-row flex-center">
			<div class="flex-1">
				<Property label={'No. Anggota'} value={member.code} />
			</div>
			<MemberForm {member} on:update={(e) => updateView(e)} />
			<DeleteItem memberId={member.member_id} />
		</div>
		<Property label={'Nama lengkap'} value={member.name} />
		<Property label={'Unit'} value={`${member.unit_name} (${member.description ?? ''})`} />
		<Property label={'Alamat'} value={member.address} />
		<Property label={'Telephone'} value={member.phone} />
		<Property label={'Masih aktif?'} value={member.is_active ? 'Ya' : 'Tidak'} />
	</div>

<style lang="scss">
	* :global(.icon:visited) {
		color: var(--text-color);
	}
	.gap-y-2 {
		row-gap: 12px;
	}
	.p-2 {
		padding:12px 24px;
	}
</style>

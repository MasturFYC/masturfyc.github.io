<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { MemberKoperasi } from '$lib';
	import MemberForm from '../member-koperasi/MemberForm.svelte';
	import DeleteItem from '../member-koperasi/DeleteItem.svelte';
	import IconButton from '@smui/icon-button';
	import Property from '../../components/Property.svelte';

	export let member: MemberKoperasi;

	const dispatch = createEventDispatcher();

	function updateView(e: CustomEvent) {
		dispatch('update', { data: e.detail.data });
	}

</script>

	<div class="flex-col gap-y-2">
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
</style>

<script lang="ts">
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import axios from '$lib/axios-base';
	import type { UnitKoperasi } from '$lib';
	import { useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import IconButton from '@smui/icon-button';
	import { user_role } from '$lib/store';
  import Button from '@smui/button';

	const client = useQueryClient();
  export let unitId = 0;
	export let page = 0;
	export let limit = 0;
  let open = false;
  let clicked = 'no'

	const fetchDeleteData = async (e: number) =>
		await axios.delete(`/koperasi/unit/delete/${e}`, {
			headers: { 'Content-Type': 'application/json' }
		});

	const deleteData = useMutation(fetchDeleteData, {
		onMutate: async (e: number) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousList = client.getQueryData<UnitKoperasi[]>(['units', { page: page, limit: limit }]);

			// Optimistically update to the new value
			if (previousList) {
				client.setQueryData<UnitKoperasi[]>(['units', { page: page, limit: limit }], previousList);
			}

			return previousList;
		},
		onError: (err: any, variables: number, context: any) => {
			if (context?.previousList) {
				client.setQueryData<UnitKoperasi[]>(['units', { page: page, limit: limit }], context.previousList);
			}
		},
		onSettled: async (data: any, error: any, variables: number, context: any) => {
			await client.invalidateQueries(['units']);
		}
	});

  $: if(clicked === 'yes') {
		$deleteData.mutate(unitId);
    clicked = 'no'
  }
</script>

<IconButton
	disabled={$user_role !== 'ADMIN'}
	class="material-icons"
	style="color:var(--text-color)"
	size="button"
	title="Remove unit"
	on:click={() => open = true}>
	delete
</IconButton>

<Dialog
	surface$style="width: 480px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Content id="simple-content" style="overflow:unset">
    <div>Data unit koperasi akan dihapus, anda yakin?</div>
  </Content>
	<Actions>
		<Button
			ripple
      use={[InitialFocus]}
			color="secondary"
			class="size-sm ml-6"
			on:click={()=>clicked = 'no'}>Batal</Button
		>
		<Button color="primary" ripple
		on:click={()=>clicked = 'yes'}>Hapus</Button>
	</Actions>
</Dialog>	
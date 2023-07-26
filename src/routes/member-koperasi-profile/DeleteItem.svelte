<script lang="ts">
  import Dialog, { Content, Actions, InitialFocus } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import { user_role } from '$lib/store';
  import Button from '@smui/button';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let trxId = 0;
  let open = false;
  let clicked = 'no'

  $: if(clicked === 'yes') {
		dispatch("delete", {data: trxId})
  }
</script>

<IconButton
	disabled={$user_role !== 'ADMIN'}
	class="material-icons"
	style="color:var(--text-color)"
	size="button"
	title="Remove simpanan wajib"
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
    <div>Data simpanan wajib akan dihapus, anda yakin?</div>
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
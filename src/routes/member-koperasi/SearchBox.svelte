<script lang="ts">
    import { Label } from '@smui/button';
  import IconButton from '@smui/icon-button';
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    type formParam = Event & { readonly submitter: HTMLElement | null } & {
		currentTarget: EventTarget & HTMLFormElement;
	};

  let show_search = false;
  let control_search: HTMLInputElement;
  let txt = '';
  let open = false;
  const dispatch = createEventDispatcher();

  const searchMember = () => {
    if(!show_search) {
      show_search = true;
      return;
    }
    dispatch('search', {txt: txt})
  }

	const handleSubmit = (e: formParam) => {
		searchMember();
	};

$: if(control_search) control_search.focus();

</script>
<div class="flex-row flex-wrap flex-1">
	<div class="flex-1 flex-row flex-center">
		{#if show_search}
		<IconButton on:click={() => {
			show_search = false;
			open = false;
		}} title="Close search" size="button"
      ><Label class="material-icons">chevron_right</Label></IconButton
    >    
			<form autocomplete="on" class="flex-1 flex-row" on:submit|preventDefault={handleSubmit}>
				<input
					in:fly={{ x: 150, duration: 500, delay: 100 }}
					out:fly={{ x: 150, duration: 500, delay: 100 }}
					aria-label="search-control"
					name="search-control"
					class="flex-1 w-100 border-none"
					type="text"
					placeholder="nama member"
					maxlength="50"
					bind:value={txt}
					bind:this={control_search}
				/>
			</form>
		{/if}
	</div>
	<IconButton on:click={(e) => searchMember()} title="Search member" size="button"
		><Label class="material-icons">search</Label></IconButton
	>
</div>

<style lang="scss">
	.flex-center {
		align-items: center;
	}
	.border-none {
		height: 28px;
		padding-left: 16px;
		font-size: medium;
		border-radius: 14px;
		outline-style: solid;
		outline-offset: 0;
		outline-width: 1px;
		outline-color: var(--border-color);
		color: var(--text-color);
		background-color: var(--control-background);
		border: none;
	}
	.border-none:focus-within {
		outline-style: solid;
		outline-width: 2px;
		outline-color: var(--accent-color);
		border: none;
	}	

	* :global(.shaped-outlined),
	* :global(.shaped-outlined .mdc-select__anchor) {
		border-radius: 16px;
		height: 32px;
	}
	* :global(.shaped-outlined .mdc-text-field__input) {
		padding-left: 32px;
		padding-right: 0;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 16px 0 0 16px;
		width: 28px;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 16px 16px 0;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
		max-width: 50px; //calc(100% - 16px * 2);
	}
	*
		:global(
			.shaped-outlined.mdc-select--with-leading-icon
				.mdc-notched-outline:not(.mdc-notched-outline--notched)
				.mdc-floating-label
		) {
		left: 16px;
	}
</style>
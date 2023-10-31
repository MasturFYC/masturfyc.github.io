<script lang="ts">
	import { browser } from '$app/environment';
	import type { PDAM } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let data: PDAM[] = [];
	let isAdmin = false;

	/*
  <!--
<div class="block">
  <div class="tabs is-small is-toggle">
    <ul>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class={clicked === 'text' ? 'is-active' : ''}>
        <a href="#" on:click={() => (clicked = 'text')}>CSV Text</a>
      </li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li class={clicked === 'file' ? 'is-active' : ''}>
        <a href="#" on:click={() => (clicked = 'file')}>File</a>
      </li>
    </ul>
  </div>

  {#if clicked === 'text'}
    <div class="field block">
      <label class="label">
        <span>CSV Text (comma delimited) format: ({header}):</span>
        <textarea class="textarea" rows="6" bind:value={textCsv} />
      </label>
    </div>
  {:else}
    <div class="block">
      <input
        type="file"
        class="mb-4 mt-2"
        accept="text/csv"
        on:change|preventDefault={(e) => readFile(e)}
      />
      <span>CSV Format ({header})</span>
    </div>
  {/if}
  <div class="buttons block">
    <button
      disabled={clicked !== 'text'}
      class="button is-link"
      on:click={(e) => parseToJSON(e)}>Parse to JSON</button
    >
    <button disabled={!isAdmin} class="button is-primary" on:click={(e) => downloadCard(e)}
      >Download</button
    >
  </div>
 
</div>
-->
*/

	$: if (browser) {
		const test = document.getElementById('username')?.innerText;
		isAdmin = test === 'mastur.st12@outlook.com';
	}

	function downloadCard(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		dispatch('downloadCaard', true);
	}
</script>

<div class="block columns">
	<div class="column">Ada {data.length} pelanggan yang akan dicetak kartunya.</div>
	<div class="column is-narrow columns is-mobile">
		<div class="column">
			<button
				disabled={data.length === 0}
				title="Remove from print request"
				class="button is-danger"
				on:click={() => dispatch('removeAllItem', true)}>Remove All</button
			>
		</div>

		<div class="column is-narrow">
			<button disabled={!isAdmin} class="button is-primary" on:click={downloadCard}>Download</button
			>
			<!-- <button class="button is-primary" on:click={downloadCard}>Download</button> -->
		</div>
	</div>
</div>
<div class="block">
	<hr class="p-0 m-0 my-2" />
	<div class="container is-outlined is-primary">
		{#each data as c, i (c.noSl)}
			<div class="columns">
				<div class="column pb-0 columns is-mobile is-gapless">
					<div class="column pb-0 has-text-weight-bold">{c.name}</div>
					<div class="column pb-0 is-narrow">{c.noSl}</div>
				</div>
				<div class="column pb-0">{c.address}</div>
				<div class="column pb-0 is-4 columns is-mobile is-gapless">
					<div class="column pb-0">{c.city}</div>
					<div class="column pb-0 is-narrow">
						<button
							title="Remove from print request"
							class="button is-small is-warning"
							on:click={() => dispatch('removeItem', c)}>Remove</button
						>
					</div>
				</div>
			</div>
			<hr class="p-0 m-0 my-2" />
			{/each}
	</div>
</div>

<script lang="ts">
	import type { PDAMBranch } from '$lib/interfaces';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	const dispatch = createEventDispatcher();
	let ref: HTMLInputElement;

	export let isActive = '';
	export let data: PDAMBranch;

	onMount(async () => {
		await tick();
		ref.focus();
		//ref.select();
	})

	$: isNotValid = data.name.trim().length === 0 || data.address.trim().length === 0;
</script>

<div class="modal {isActive} px-4">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal-background" on:click={() => (isActive = '')}></div>
	<div class="modal-card box is-paddingless" style="max-width: 460px;">
		<header class="modal-card-head">
			<p class="modal-card-title">{data.id === 0 ? 'Cabang Baru' : 'Cabang ' + data.name}</p>
			<button
				class="delete has-background-danger-dark"
				aria-label="close"
				on:click={() => (isActive = '')}
			/>
		</header>
		<section class="modal-card-body px-4">
			<div class="block">
				<label>
					<span class="label is-small">Nama</span>
					<input
						type="text"
						bind:this={ref}
						class="input is-primary"
						bind:value={data.name}
						placeholder="Nama cabang"
					/>
				</label>
			</div>
			<div class="block">
				<label class="block">
					<span class="label is-small">Alamat</span>
					<textarea
						class="input is-info textarea py-2"
						rows="2"
						bind:value={data.address}
						placeholder="Alamat cabang"
					/>
				</label>
			</div>
		</section>
		<footer class="modal-card-foot">
			<div class="container columns is-mobile">
				<div class="column" />
				<div class="column is-narrow">
					<div class="buttons">
						<button class="button is-link is-light" on:click={() => (isActive = '')}>Cancel</button>
						<button
							disabled={isNotValid}
							class="button is-primary"
							on:click={() => dispatch('onSave', data)}>Save</button
						>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>

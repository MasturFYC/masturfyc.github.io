<script lang="ts">
	import type { PDAMBranch } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isActive = '';
	export let data: PDAMBranch;

	$: isNotValid = (data.name.trim().length === 0 || data.address.trim().length === 0)
</script>

<div>
	<div class="modal {isActive}">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="modal-background" on:click={() => (isActive = '')}></div>
		<div class="modal-card px-4">
			<header class="modal-card-head">
				<p class="modal-card-title">{data.id === 0 ? 'Cabang Baru' : 'Cabang ' + data.name}</p>
				<button
					class="delete has-background-danger-dark"
					aria-label="close"
					on:click={() => (isActive = '')}
				/>
			</header>
			<section class="modal-card-body">
				<div class="block">
					<label>
						<span class="label is-small">Nama</span>
						<input
							type="text"
							class="input is-primary"
							bind:value={data.name}
							placeholder="Nama cabang"
						/>
					</label>
				</div>
				<div class="block">
					<label class="block">
						<span class="label is-small">Alamat</span>
						<input
							type="text"
							class="input is-info"
							bind:value={data.address}
							placeholder="Alamat cabang"
						/>
					</label>
				</div>
			</section>
			<footer class="modal-card-foot">
				<div class="is-flex is-flex-direction-row container">
					<div class="is-flex-grow-1"></div>
					<div class="buttons is-flex-grow-0">
						<button class="button is-outlined is-link" on:click={() => (isActive = '')}
							>Cancel</button
						>
						<button disabled={isNotValid} class="button is-primary" on:click={() => dispatch('onSave', data)}>Save</button
						>
					</div>
				</div>
			</footer>
		</div>
	</div>
</div>

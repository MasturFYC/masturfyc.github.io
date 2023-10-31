<script lang="ts">
	//import fetchApi from '$lib/fetch-api';
	import type { PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let ref: HTMLInputElement;

	export let isActive = '';
	export let data: PDAMCustomer;
	export let branchs: PDAMBranch[] = [];

	onMount(async () => {
		ref.focus();
		// ref.select();
	});

	const setBranchName = (id: number) => {
		const b = branchs.filter((f) => f.id === id)[0];

		if (b) {
			data.branchName = b.name;
		}
	};

	$: setBranchName(data.branchId);
	$: isNotValid =
		data.name.trim().length === 0 ||
		data.address.trim().length === 0 ||
		data.branchId === 0 ||
		data.slId.trim().length === 0;
</script>

<div class="modal {isActive} px-4">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal-background" on:click={() => (isActive = '')}></div>
	<div class="modal-card box is-paddingless">
		<header class="modal-card-head">
			<p class="modal-card-title">{data.isNew ? 'Pelanggan Baru' : data.name}</p>
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
					<!-- svelte-ignore a11y-autofocus -->
					<input
						type="text"
						maxlength={50}
						class="input is-primary"
						placeholder="Nama pelanggan"
						bind:value={data.name}
						bind:this={ref}
					/>
				</label>
			</div>
			<div class="block">
				<div class="columns">
					<div class="column">
						<label>
							<span class="label is-small">No. SL</span>
							<input
								maxlength={10}
								type="text"
								class="input is-primary"
								bind:value={data.slId}
								placeholder="No SL pelanggan"
							/>
						</label>
					</div>
					<div class="column is-narrow">
						<label>
							<span class="label is-small">Cabang</span>
							<div class="select is-primary is-fullwidth">
								<select bind:value={data.branchId}>
									{#each branchs as c (c.id)}
										<option value={c.id}>{c.name}</option>
									{/each}
								</select>
							</div>
						</label>
					</div>
			</div>
			</div>
			<div class="block">
				<label class="block">
					<span class="label is-small">Alamat</span>
					<textarea
						maxlength={128}
						rows="2"
						class="textarea is-info py-1 pb-2"
						bind:value={data.address}
						placeholder="Alamat pelanggan"
					/>
				</label>
			</div>
		</section>
		<footer class="modal-card-foot py-4">
			<div class="columns container is-mobile">
				<div class="column">
					<button
					disabled={data.isNew}
					class="button is-danger is-light"
					on:click={() => dispatch('removeCustomer', data)}>Remove</button
				>
				</div>
				<div class="column is-narrow">
				<div class="buttons">
					<button class="button is-link is-light" on:click={() => (isActive = '')}>Cancel</button
					>
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

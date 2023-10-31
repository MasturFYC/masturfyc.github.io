<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import csv from 'csvtojson';
	import { createEventDispatcher } from 'svelte';

	export let branchs: PDAMBranch[] = [];
	export let header = '';
	let data: PDAMCustomer[] = [];
	const dispatch = createEventDispatcher();

	const getBranch = (name: string): number => {
		const d = branchs.filter((f) => f.name === name)[0];
		if (d) return d.id;
		return 1;
	};

	function readFile(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const target = e.currentTarget as HTMLInputElement;
		if (target && target.files && target.files[0]) {
			const file = target.files[0];
			const reader = new FileReader();

			reader.onload = (e) => {
				const text = (e.target?.result as string) ?? '';
				csv()
					.fromString(text)
					.then((jsonObj) => {
						data = jsonObj.map((m) => ({
							name: m.name,
							address: m.address,
							slId: m.noSl,
							branchId: getBranch(m.city),
							branchName: m.city
						}));
					});
			};
			reader.readAsText(file, 'utf-8');
		}
	}

	async function importNow(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		const d = await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.url('/v2/pdam/customer/import')
			.post(data)
			.json<{ status: string }>();

		if (d.status === 'SUCCESS') {
			dispatch('success', d);
		}
	}
</script>

<div>
	<div class="subtitle">Import data pelanggan dari file .csv</div>
	<div class="block">
		<div class="columns">
			<div class="column">
				<input
					type="file"
					class="input"
					accept="text/csv"
					on:change|preventDefault={(e) => readFile(e)}
				/>
			</div>
			<div class="column">
				<span>CSV Format ({header})</span>
			</div>
			<div class="column is-narrow">
				<button on:click={importNow} disabled={data.length === 0} class="button is-primary"
					>Import Now</button
				>
			</div>
		</div>
		<div>
			<pre>{JSON.stringify(
					{
						'Jumlah data': data.length,
						data
					},
					null,
					2
				)}</pre>
		</div>
	</div>
</div>

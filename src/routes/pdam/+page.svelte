<script lang="ts">
	import { browser } from '$app/environment';
	import csv from 'csvtojson';
	import fetchApi from '$lib/fetch-api';
	import Menu from './menu.svelte';
	import Branch from './branch.svelte';
	import Customer from './customer.svelte';
	import ImportCustomer from './import-customer.svelte';
	import type { PDAMBranch } from '$lib/interfaces';
	import { onMount } from 'svelte';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';

	let clicked = 'text';
	let branchs: PDAMBranch[] = [];

	const client = useQueryClient();

	type CABANG = {
		name: string;
		address: string;
	};

	let currentMenu = 1;

	const cabangs: CABANG[] = [
		{ name: 'Jatibarang', address: 'Jl. Purna Brata No. 1001 Telp. (0234)  351491' },
		{ name: 'Sindang', address: 'Jl. Singalodra  - Sindang Telp. (0234) 277564' },
		{
			name: 'Indramayu',
			address: 'Jl. Tanjungpura No. 197 Kepandean - Indramayu Telp (0234) 7121205'
		} //271576' }
	];

	type PDAM = {
		selected?: boolean;
		noSl: number;
		name: string;
		address: string;
		city: string;
		cabang: string;
	};

	let data: PDAM[] = [];
	//	let cabang: CABANG = cabangs[0];
	//	let cabangName = cabang.name;
	let selectAllData = false;
	let textCsv = '';
	let header = 'noSl, name, address, city';
	let isAdmin = false;

	const getAddress = (city: string): string => {
		return cabangs.filter((f) => f.name === city)[0].address;
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
						data = jsonObj.map((m) => ({ ...m, cabang: getAddress(m.city), selected: true }));
					});
			};
			reader.readAsText(file, 'utf-8');
		}
	}

	function selectAll(e: Event & { currentTarget: EventTarget & HTMLInputElement }): any {
		data = data.map((m) => ({ ...m, selected: !selectAllData }));
	}

	function parseToJSON(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		csv()
			.fromString(header + '\n' + textCsv)
			.then((jsonObj) => {
				data = jsonObj.map((m) => ({ ...m, cabang: getAddress(m.city), selected: true }));
			});
	}

	let is_download = false;

	async function downloadCard(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		is_download = true;

		let filename = 'pdam-card.pdf';
		const endpoint = '/v1/pdam';

		await fetchApi
			.headers({
				Accept: 'application/pdf',
				'Content-Type': 'application/json'
			})
			.url(endpoint)
			.post({ data: data.filter((f) => f.selected) })
			.blob((blob) => {
				//const pdfblob = new Blob([blob], { type: 'application/pdf' });
				var url = window.URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = url;
				a.download = filename;
				a.click();
				a.remove();
				setTimeout(() => (is_download = false), 1000);
				window.URL.revokeObjectURL(url);
			})
			.catch((error) => {
				is_download = false;
				console.log(error);
			});
	}

	const fetchBranch = async (): Promise<PDAMBranch[]> => {
		const data = await fetchApi.get('/v2/pdam/branch/').json<PDAMBranch[]>();

		return data;
	};	

	const query = useQuery<PDAMBranch[]>({
		queryKey: ['pdam', 'branch', 'list'],
		queryFn: async() => await fetchBranch()
	});

	//$: cabang = cabangs.filter((f) => f.name === cabangName)[0];
	$: if (browser) {
		const test = document.getElementById('username')?.innerText;
		isAdmin = test === 'mastur.st12@outlook.com';
	}

	onMount(async() => {
		query.subscribe(v => (branchs = v.data ?? []))
	})

	// $: queryOptions = {
	// 	queryKey: ['pdam', 'branch', 'list'],
	// 	queryFn: () => fetchBranch(),
	// 	keepPreviousData: true
	// };




	function onImportSucces(e: CustomEvent<any>): void {
		client.invalidateQueries(['pdam', 'customer', 'list'])
		currentMenu = 1;
	}
</script>

<svelte:head>
	<meta property="og:description" content="PDAM Card" />
	<title>PDAM Card</title>
	<meta name="description" content="PDAM Card" />
</svelte:head>

<section>
	<div class="title">Kartu PDAM</div>
	<div class="columns">
		<div class="column is-narrow is-one-fifth"><Menu bind:currentMenu /></div>
		<div class="column">
			{#if currentMenu === 2}
				<Branch />
			{:else if currentMenu === 1}
				<Customer {branchs} />
				{:else if currentMenu === 3}
				<ImportCustomer {branchs} {header} on:success={onImportSucces} />
			{:else}
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
					<div class="block">
						<table class="table is-narrow">
							<thead>
								<tr>
									<th
										><input
											type="checkbox"
											bind:checked={selectAllData}
											on:input={(e) => selectAll(e)}
										/></th
									>
									<th>No. SL</th>
									<th>NAMA</th>
									<th>ALAMAT</th>
									<th>CABANG</th>
									<th>ALAMAT CABANG</th>
								</tr>
							</thead>
							<tbody>
								{#each data as p}
									<tr>
										<td><input type="checkbox" bind:checked={p.selected} /></td>
										<td>{p.noSl}</td>
										<td>{p.name}</td>
										<td>{p.address}</td>
										<td>{p.city}</td>
										<td>{p.cabang}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- 
	<label class="div-label">
		<span>Cabang:</span>
		<select class="select mb-2 mt-2 mr-4" bind:value={cabangName}>
			{#each cabangs as c}
				<option value={c.name}>{c.name}</option>
			{/each}
		</select>
	</label> -->

<style>
	textarea {
		padding: 0.5rem 1rem;
	}
	label {
		font-size: small;
		font-weight: 400;
		line-height: 1.75;
	}
	/* .div-label {
		display: inline-flex;
		flex-direction: row;
		column-gap: 12px;
		align-items: center;
	} */
</style>

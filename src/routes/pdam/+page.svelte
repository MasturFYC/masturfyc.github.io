<script lang="ts">
	import { browser } from '$app/environment';
	import csv from 'csvtojson';
	import fetchApi from '$lib/fetch-api';

	let clicked = 'text';
	type CABANG = {
		name: string;
		address: string;
	};

	const cabangs: CABANG[] = [
		{ name: 'Jatibarang', address: 'Jl. Purna Brata No. 1001 Telp. (0234)  351491' },
		{ name: 'Sindang', address: 'Jl. Singalodra  - Sindang Telp. (0234) 277564' },
		{ name: 'Indramayu', address: 'Jl. Tanjungpura No. 197 Kepandean - Indramayu Telp (0234) 7121205'} //271576' }
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
		return cabangs.filter(f => f.name === city)[0].address
	}

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
						data = [...data, ...jsonObj.map((m) => ({ ...m, cabang: getAddress(m.city), selected: true }))];
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
				data = [...data, ...jsonObj.map((m) => ({ ...m, cabang: getAddress(m.city), selected: true }))];
			});
	}

	$: if (browser) {
		const test = document.getElementById('username')?.innerText;
		isAdmin = test === 'mastur.st12@outlook.com';
	}
	
	let is_download = false;

	async function downloadCard(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		is_download = true;

		//const baseUrl = import.meta.env.VITE_API_URL;
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

	//$: cabang = cabangs.filter((f) => f.name === cabangName)[0];
</script>

<svelte:head>
	<meta property="og:description" content="PDAM Card" />
	<title>PDAM Card</title>
	<meta name="description" content="PDAM Card" />
</svelte:head>

<section>
	<div class="title">Kartu PDAM</div>
	<div class="tabs is-toggle is-toggle-rounded is-small">
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
<!-- 
	<label class="div-label">
		<span>Cabang:</span>
		<select class="select mb-2 mt-2 mr-4" bind:value={cabangName}>
			{#each cabangs as c}
				<option value={c.name}>{c.name}</option>
			{/each}
		</select>
	</label> -->

	{#if clicked === 'text'}
		<div class="field block">
			<label class="label">
				<span>CSV Text (comma delimited) format: ({header}):</span>
				<textarea class="textarea column is-full" rows="10" bind:value={textCsv} />
			</label>
		</div>
		<div class="buttons block">
			<button class="button is-link block" on:click={(e) => parseToJSON(e)}>Parse to JSON</button
				>
					<button disabled={!isAdmin} class="button block is-primary" on:click={(e) => downloadCard(e)}
				>Download</button
			>
			<p>{is_download ? 'Please wait....' : ''}</p>
		</div>
	{:else}
		<input
			type="file"
			class="mb-4 mt-2"
			accept="text/csv"
			on:change|preventDefault={(e) => readFile(e)}
		/>
		<span>CSV Format ({header})</span>
	{/if}
<!-- 
	<table class="table">
		<thead>
			<tr>
				<th
					><input type="checkbox" bind:checked={selectAllData} on:input={(e) => selectAll(e)} /></th
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
	 -->
	<div>
		<pre class="p-0 div-pre">{JSON.stringify(data,null,2)}</pre>
	</div>	
</section>

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
	.div-pre {
		overflow-x: hidden;
		font-size: 0.75rem;
	}	
</style>

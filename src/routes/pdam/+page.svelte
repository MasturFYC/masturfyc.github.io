<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import Menu from './menu.svelte';
	import Branch from './branch.svelte';
	import Customer from './customer.svelte';
	import ImportCustomer from './import-customer.svelte';
	import type { PDAM, PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import DownloadCard from './download-card.svelte';
	import { onMount } from 'svelte';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';

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

	let data: PDAM[] = [];

	// let selectAllData = false;
	// let textCsv = '';
	let header = 'noSl, name, address, city';

	const getAddress = (city: string): string => {
		return branchs.filter((f) => f.name === city)[0].address;
	};

	const getAddress2 = (id: number): string => {
		return branchs.filter((f) => f.id === id)[0].address;
	};

	/*
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
*/
	let is_download = false;

	async function downloadCard() {
		is_download = true;

		let filename = 'pdam-card.pdf';
		const endpoint = '/v1/pdam';

		await fetchApi
			.headers({
				Accept: 'application/pdf',
				'Content-Type': 'application/json'
			})
			.url(endpoint)
			.post(data) //{ data: data.filter((f) => f.selected) })
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
		queryFn: async () => await fetchBranch()
	});

	//$: cabang = cabangs.filter((f) => f.name === cabangName)[0];

	onMount(async () => {
		query.subscribe((v) => (branchs = v.data ?? []));
	});

	// $: queryOptions = {
	// 	queryKey: ['pdam', 'branch', 'list'],
	// 	queryFn: () => fetchBranch(),
	// 	keepPreviousData: true
	// };

	function onImportSucces(e: CustomEvent<any>): void {
		client.invalidateQueries(['pdam', 'customer', 'list']);
		currentMenu = 1;
	}

	function selectCustomer(e: CustomEvent<PDAMCustomer>): void {
		const test = data.filter((f) => f.noSl === e.detail.slId)[0];
		if (test) {
			data = data.filter((f) => f.noSl != test.noSl);
			return;
		}
		data = [
			...data,
			{
				address: e.detail.address,
				cabang: getAddress2(e.detail.branchId),
				city: e.detail.branchName ?? '',
				name: e.detail.name,
				noSl: e.detail.slId
			}
		];
	}

	function removeItem(e: CustomEvent<PDAM>): void {
		data = data.filter((f) => f.noSl != e.detail.noSl);
	}

	function selectAll(e: CustomEvent<PDAMCustomer[] | undefined>): void {
		if (e.detail) {

			const filter = data.map(m => m.noSl);

			const test = e.detail.map(m => ({
						address: m.address,
						cabang: getAddress2(m.branchId),
						city: m.branchName ?? '',
						name: m.name,
						noSl: m.slId
					})).filter(f => !filter.includes(f.noSl));

			data = [...data, ...test];
		}
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
				<Customer {branchs} on:selectCustomer={selectCustomer} on:selectAll={selectAll} />
			{:else if currentMenu === 3}
				<ImportCustomer {branchs} {header} on:success={onImportSucces} />
			{:else}
				<DownloadCard {data} on:downloadCaard={() => downloadCard()} on:removeItem={removeItem} />
			{/if}
		</div>
	</div>
</section>

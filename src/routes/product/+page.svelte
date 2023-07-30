<script lang="ts">
	import { onMount } from 'svelte';
	import ProductBox from '$lib/components/ProductBox.svelte';
	import axios from '$lib/axios-base';

	type iProduct = {
		id: number;
		category_id: number;
		parent_id: number;
		name: string;
		barcode: string;
		unit: string;
		content: number;
		hpp: number;
		ppn: number;
		is_active: boolean;
		margin: number;
		price: number;
		is_for_sale: boolean;
		is_inventory: boolean;
		variant_name?: string;
		descriptions?: string;
		category_name?: string;
	};

	const endpoint = '/sale/product';

	let products: iProduct[] = [];
	let page = 0;
	let limit = 5;
	let hashMore = false;
	let isEnable = false;

	const loadCustomer = async (page = 0, limit = 5) => {
		const { data } = await axios.get<iProduct[]>(`${endpoint}/${page}/${limit}`);
		//	const p = (await d.json()) ?? [];

		hashMore = data?.length < limit;
		products = [...products, ...data];
	};

	$: if (isEnable) loadCustomer(page, limit);

	onMount(() => {
		isEnable = true;
	});
</script>

<div class="p-2">
	<h1>Welcome to Fine Young Canibals</h1>
	<p>
		Visit <a href="https://sapulidi.site" class="underline underline-offset-4">sapulidi.site</a> to read
		the documentation
	</p>
	<div class="div-product">
		{#each products as c, i (c.id)}
			<ProductBox desc={c.descriptions} idPicture={i}>
				<span slot="name">{c.name}</span>
				<span slot="variant">{c.variant_name ?? ''} ({c.category_name})</span>
				<span slot="price">{c.price.toLocaleString('id-ID')}</span>
				<span slot="unit">{c.unit}</span>
			</ProductBox>
		{/each}
	</div>
	<div class="flex flex-row mt-4 gap-x-4">
		<select
			class="btn-primary"
			bind:value={limit}
			on:change={() => {
				products = [];
				page = 0;
				hashMore = false;
			}}
		>
			{#each [3, 5, 10, 30, 50] as n}
				<option value={n}>{n}</option>
			{/each}
		</select>
		<button class="btn-primary" disabled={hashMore} on:click={() => (page = page + 1)}
			>Tampilkan lebih banyak lagi</button
		>
	</div>
</div>

<style lang="scss">
</style>

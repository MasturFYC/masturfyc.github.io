<script lang="ts">
	import { onMount } from 'svelte';
	import ProductBox from '../components/ProductBox.svelte';
  import {fetchUrl} from '$lib'
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

	const endpoint = '/v1/product-list';

	let products: iProduct[] = [];
	let page = 0;
	let limit = 5;
	let hashMore = false;
  let isEnable = false;

	const loadCustomer = async (page = 0, limit = 5) => {
		const d = await fetchUrl(`${endpoint}/${page}/${limit}`);
		const p = (await d.json()) ?? [];
    
		hashMore = p.length < limit;
		products = [...products, ...p];
	};

  $: if(isEnable) loadCustomer(page, limit);

  onMount(() => {
    isEnable = true;
  })
</script>

<h1>Welcome to Fine Young Canibals</h1>
<p>Visit <a href="https://sapulidi.site">sapulidi.site</a> to read the documentation</p>
<div class="div-product">
	{#each products as c (c.id)}
		<ProductBox>
			<span slot="name">{c.name}</span>
			<span slot="variant">{c.variant_name ?? ''} ({c.category_name})</span>
			<span slot="price">{c.price.toLocaleString('id-ID')}</span>
			<span slot="unit">{c.unit}</span>
		</ProductBox>
	{/each}
</div>
<div class="mt-16">
	<select
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
	<button disabled={hashMore} on:click={() => (page = page + 1)}>More product...</button>
</div>

<style>
	.div-product {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20px;
	}
	.mt-16 {
		margin-top: 16px;
	}
</style>

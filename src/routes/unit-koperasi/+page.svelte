<script lang="ts">
	import { Query, useQueryClient, type QueryObserverResult } from '@sveltestack/svelte-query';
	import Select, { Option } from '@smui/select';
	import Button from '@smui/button';
	import axios from '$lib/axios-base';
	import type { UnitKoperasi } from '$lib';
	import UnitForm from './UnitForm.svelte'
	import UnitBox from './UnitBox.svelte';	

	const endpoint = '/koperasi/unit/list';
	const client = useQueryClient();
	let initUnit: UnitKoperasi = {
        id: 0,
        name: '',
				description:''
    };

	let limits = [3, 5, 10, 20, 25, 50];
	let page: number = 0;
	let limit: number = 5;
	let hashMore: boolean = false;

	const setPage = (newPage: number) => {
		page = newPage;
	};

	const fetchUnits = async (p = 0, l = 0) => {
		const { data } = await axios.get<UnitKoperasi[]>(
			`${endpoint}/${p}/${l}`
		);
		return data;
	};

	const prefetchNextPage = async (data: UnitKoperasi[]) => {
		if (data && data.length === limit) {
			await client.prefetchQuery(['units', { page: page + 1, limit: limit }], () =>
				fetchUnits()
			);
		}
	};

	const showErrorMessage = (queryResult: QueryObserverResult<any, unknown>) => {
		if (queryResult.error) {
			const test = queryResult.error as string;
			return test;
		}
		return '';
	};

	$: queryOptions = {
		queryKey: ['units', { page: page, limit: limit }],
		queryFn: () => fetchUnits(page, limit),
		onSuccess: () => prefetchNextPage
	};

</script>

<svelte:head>
  <title>Anggota Koperasi - (Kopma - Unwir)</title>
</svelte:head>


<section class="mb-20">
	<div class="flex-row mb-24 flex-center">
		<div class="title">Unit Koperasi</div>
		<UnitForm unit={{...initUnit}} {page} {limit} />
	</div>
	<Query options={queryOptions}>
		<div slot="query" let:queryResult>
			{#if queryResult.status === 'loading'}
				<div>Loading...</div>
			{:else if queryResult.status === 'error'}
				<div>Error: {showErrorMessage(queryResult)}</div>
			{:else}
				<div class="arr-box">
					{#each queryResult.data ?? [] as c (c.id)}
	          <UnitBox unit={c} />
					{/each}
				</div>
			{/if}
			<div class="mt-20 div-data">
				<Select
					title="Row limit per page"
					key={(o) => o ? `${o}` : `${limit}`}
					aria-label="limit-control"
					class={'shaped-outlined'}
					variant="outlined"
					style={'width: 90px'}
					bind:value={limit}
				>
					{#each limits as t}
						<Option value={t}>{t}</Option>
					{/each}
				</Select>
				<Button
					disabled={page === 0}
					on:click={() => {
						setPage(Math.max(page - 1, 0));
					}}
				>
					&nlt; Previous
				</Button>
				<Button
					disabled={queryResult.data && !(queryResult.data.length === limit)}
					on:click={() => {
						setPage(queryResult.data && hashMore ? page : page + 1);						
					}}
				>
					Next &ngt;
				</Button>
				<div>
					{#if queryResult.isFetching}
					Loading...
					{:else}
					<span>Current Page: {page + 1}</span>
					{/if}
				</div>
			</div>
		</div>
	</Query>
</section>

<style lang="scss">
 	* :global(.icon:visited) {
		color: var(--text-color);
	}
	.mb-24 {
		margin-top: 24px;
		margin-bottom: 24px;
	}
	.arr-box {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
		gap: 20px;
		flex-wrap: wrap;
		align-items: baseline;
	}
	.div-data {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		overflow-x: unset;
		column-gap: 20px;
		gap: 20px;
		flex-grow: 1;
		flex-wrap: wrap;
	}

	* :global(.shaped-outlined),
	* :global(.shaped-outlined .mdc-select__anchor) {
		border-radius: 16px;
		height: 32px;
		background: var(--control-background);
	}
	* :global(.shaped-outlined .mdc-text-field__input) {
		padding-left: 32px;
		padding-right: 0;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 16px 0 0 16px;
		width: 28px;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 16px 16px 0;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
		max-width: 50px; //calc(100% - 16px * 2);
	}
	*
		:global(
			.shaped-outlined.mdc-select--with-leading-icon
				.mdc-notched-outline:not(.mdc-notched-outline--notched)
				.mdc-floating-label
		) {
		left: 16px;
	}
</style>

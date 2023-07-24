<script lang="ts">
	import axios from '../../lib/axios-base';
	import type { MemberKoperasi } from '../../lib';
	import { Query, useQueryClient, type QueryObserverResult } from '@sveltestack/svelte-query';
	import Select, { Option } from '@smui/select';
	import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  import MemberBox from './MemberBox.svelte'
	import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';


	export let params = {
		txt: '',
		page: '0',
		limit: '5'
	}


	console.log(params)

	const endpoint = '/koperasi/member/search';
	const client = useQueryClient();

	let txt = params.txt;
	let page = parseInt(params.page);
	let limit = params.limit;
	let hashMore = false;

console.log(limit)
	

	const setPage = (newPage: number) => {
		page = newPage;
		console.log(page)
	};

	const fetchMembers = async () => {
		console.log(`${endpoint}/${txt}/${page}/${limit}`)
		const { data } = await axios.get<MemberKoperasi[]>(
			`${endpoint}/${txt}/${page}/${limit}`
		);
		return data;
	};

	const prefetchNextPage = async (data: MemberKoperasi[]) => {
		if (data && data.length === parseInt(limit)) {
			await client.prefetchQuery(['members', txt, { page: page + 1, limit: limit }], () =>
				fetchMembers()
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
		queryKey: ['members', txt, { page: page, limit: limit }],
		queryFn: () => fetchMembers(),
		onSuccess: () => prefetchNextPage
	};


</script>

<svelte:head>
  <title>Anggota Koperasi - (Kopma - Unwir)</title>
</svelte:head>


<section>
	<div class="flex-row mb-24 flex-center">
	<div class="title">Anggota koperasi</div>
	<IconButton
	class="material-icons icon"
	href={`#/member/0`}
	aria-label="New member">note_add</IconButton
>	
</div>
	<Query options={queryOptions}>
		<div slot="query" let:queryResult>
			{#if queryResult.status === 'loading'}
				<div>Loading...</div>
			{:else if queryResult.status === 'error'}
				<div>Error: {showErrorMessage(queryResult)}</div>
			{:else}
				<div class="arr-box">
					{#each queryResult.data ?? [] as c (c.member_id)}
          <MemberBox memberId={c.member_id} page={page} limit={limit} txt={txt}>
            <div slot="name">{c.name}</div>
            <div slot="address">{c.address ?? ''}, {c.phone ?? ''}</div>
            <div slot="unit">{c.unit_name}</div>
            <div slot="active">Masih aktif? {c.is_active ? 'Ya':'Tidak'}</div>
          </MemberBox>						
					{/each}
				</div>
			{/if}
			<div class="mt-10 div-data">
				<Select
					title="Row limit per page"
					key={(o) => `${o}`}
					aria-label="limit-control"
					class={'shaped-outlined'}
					variant="outlined"
					input$name="category-control"
					style={'width: 90px'}
					bind:value={limit}
				>
					{#each [3, 5, 10, 20, 25, 50] as t}
						<Option value={`${t}`}>{t}</Option>
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
					disabled={queryResult.data && !(queryResult.data.length === parseInt(limit))}
					on:click={() => {
						setPage(queryResult.data && hashMore ? page : page + 1);						
					}}
				>
					Next &ngt;
				</Button>
				<div>
					{#if queryResult.isFetching}Loading...{/if}
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

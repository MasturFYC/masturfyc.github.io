<script lang="ts">
	import { Query, useQueryClient, type QueryObserverResult } from '@sveltestack/svelte-query';
	import Select, { Option } from '@smui/select';
	import Button from '@smui/button';
	import axios from '$lib/axios-base';
	import type { MemberKoperasi } from '$lib';
  import MemberBox from './MemberBox.svelte'
	import MemberForm from './MemberForm.svelte';

	const endpoint = '/koperasi/member/search';
	const client = useQueryClient();

	let txt = '';
	let page = 0;
	let limit = 5;
	let hashMore = false;


	const setPage = (newPage: number) => {
		page = newPage;
	};

	const fetchMembers = async (s = '', p = 0, l = 0) => {
		const { data } = await axios.get<MemberKoperasi[]>(
			`${endpoint}/${s}/${p}/${l}`
		);
		return data;
	};

	const prefetchNextPage = async (data: MemberKoperasi[]) => {
		if (data && data.length === limit) {
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
		queryFn: () => fetchMembers(txt, page, limit),
		onSuccess: () => prefetchNextPage
	};


</script>

<svelte:head>
  <title>Anggota Koperasi - (Kopma - Unwir)</title>
</svelte:head>


<section>
	<div class="flex-row mb-24 flex-center">
		<div class="title">Anggota koperasi</div>
		<MemberForm memberId={0} {txt} {limit} {page} />
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
          <MemberBox memberId={c.member_id} {txt} {limit} {page} >
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

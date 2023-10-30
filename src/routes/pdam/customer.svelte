<script lang="ts">
	import { Query, useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import type { PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import fetchApi from '$lib/fetch-api';
	import FormCustomer from './form-customer.svelte';
	import dayjs from 'dayjs';

	const client = useQueryClient();

	// const fetchBranch = async (): Promise<PDAMBranch[]> => {
	// 	const data = await fetchApi.get('/v2/pdam/branch/').json<PDAMBranch[]>();

	// 	return data;
	// };

	export let branchs: PDAMBranch[] = [];

	let page = 0;
	let limit = 5;
	let limits: number[] = [50, 25, 20, 10, 5];
	let isUpdating = 0;
	const fetchCustomer = async (p: number, l: number): Promise<PDAMCustomer[]> => {
		const data = await fetchApi
			.get(`/v2/pdam/customer/list/${l}/${l * p}`)
			.json<PDAMCustomer[]>();

		return data;
	};
	const prefetchNextPage = async (data: PDAMCustomer[]) => {
		if (data && data.length === limit) {
			await client.prefetchQuery(['pdam', 'customer', 'list', page + 1], () => fetchCustomer(page + 1, limit));
		}
	};

	const fetchUpdateData = async (e: PDAMCustomer): Promise<PDAMCustomer> =>
		await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.put(e, `/v2/pdam/customer/${e.oldSlId}`)
			.json();

	const fetchCreateData = async (e: PDAMCustomer): Promise<PDAMCustomer> =>
		await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.post(e, '/v2/pdam/customer/')
			.json();

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: PDAMCustomer) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list', page, limit]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMCustomer[]>(
					['pdam', 'customer', 'list', page, limit],
					[
						...previousData
						//e
					]
				);
			}

			return previousData;
		},
		onSuccess: async (data: any, variable: PDAMCustomer, context) => {
			setTimeout(() => {
				isUpdating = 2;
			}, 1000);

			// fetchSuccess = true;
		},

		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<PDAMCustomer[]>(
					['pdam', 'customer', 'list', page, limit],
					context.previousData
				);
			}
			//      selectedCategoryId.set($category.id)
			isUpdating = 0;
		},
		// Always refetch after error or success:
		onSettled: async (
			data: any,
			error: any,
			variables: PDAMCustomer,
			context: PDAMCustomer[] | undefined
		) => {
			await client.invalidateQueries(['pdam', 'customer', 'list', page, limit]);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: PDAMCustomer) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list', page, limit]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list', page, limit], previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variable: PDAMCustomer, context) => {
			// fetchSuccess = true;
			setTimeout(() => {
				isUpdating = 2;
			}, 1000);
		},

		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<PDAMCustomer[]>(
					['pdam', 'customer', 'list', page, limit],
					context.previousData
				);
				//        selectedCategoryId.set($category.id)
			}
			isUpdating = 0;
		},
		onSettled: async (
			data: any,
			error: any,
			variables: PDAMCustomer,
			context: PDAMCustomer[] | undefined
		) => {
			await client.invalidateQueries(['pdam', 'customer', 'list', page, limit]);
		}
	});

	const initData: PDAMCustomer = {
		slId: '',
		name: '',
		address: '',
		branchId: 0,
		isNew: true
	};

	let data = initData;
	let isActive = '';

	function onSave(e: CustomEvent<PDAMCustomer>): void {
		const d = e.detail;
		if (d.isNew) {
			$createData.mutate(d);
		} else {
			$updateData.mutate({...d, createdAt: dayjs().format()});
		}
		isActive = '';
	}

	const setPage = (newPage: number) => {
		page = newPage;
	};

	const limitChanged = (l: number) => {
	 	setPage(0);
	}

	// onMount(async() => {
	// 	branchs = await fetchBranch();
	// })
	$: limitChanged(limit);

	$: queryOptions = {
		queryKey: ['pdam', 'customer', 'list', page, limit],
		queryFn: () => fetchCustomer(page, limit),
		onSuccess: () => prefetchNextPage,
		keepPreviousData: true
	};


</script>

<div class="container fluid">
	<div class="columns">
		<div class="column">
			<div class="subtitle block">Customer</div>
		</div>
		<div class="column is-narrow">
			<button
				class="button is-success"
				on:click={() => {
					data = { ...initData };
					isActive = 'is-active';
				}}>+ New</button
			>
		</div>
	</div>
	<Query options={queryOptions}>
		<div slot="query" let:queryResult>
			{#if queryResult.status === 'loading'}
				<div>Loading customer...</div>
			{:else}
				<!-- <table class="table is-narrow">
					<thead>
						<tr>
							<th>SLID</th>
							<th>NAME</th>
							<th>ADDRESS</th>
							<th>CABANG</th>
              <th></th>
						</tr>
					</thead>
					<tbody> -->
				<div class="container">
					{#each queryResult.data ?? [] as c (c.slId)}
						<hr class="p-0 m-0 my-2" />
						<div class="columns p-0 m-0">
							<div class="column py-0 columns is-mobile">
								<div class="column pb-0 has-text-weight-bold">{c.name}</div>
								<div class="column pb-0 is-narrow">{c.slId}</div>
							</div>
							<div class="column is-5 py-0">{c.address}</div>
							<div class="column py-0 columns is-narrow is-mobile">
								<div class="column">{c.branchName ?? '-'}</div>
								<div class="column is-narrow">
									<button
										class="button is-small is-link is-outlined"
										on:click={() => {
											data = { ...c, isNew: false, oldSlId: c.slId };
											isActive = 'is-active';
										}}>Edit</button
									>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<!-- </tbody>
				</table> -->
				<!-- </div> -->
				<hr class="p-0 m-0 my-2" />
				<div class="columns">
					<div class="column is-narrow">
						<div class="select">
							<select bind:value={limit}>
								{#each limits as c}
									<option value={c}>{c}</option>
								{/each}
							</select>
						</div>
					</div>
					<div class="column is-narrow">
						<button
							disabled={page === 0}
							class="button"
							on:click={() => setPage(Math.max(page - 1, 0))}>&lt; Previous</button
						>
					</div>
					<div class="column is-narrow">
						<div class="column">{page+1}</div>
					</div>
					<div class="column is-narrow">
						<button
							class="button"
							disabled={queryResult.data && !(queryResult.data.length === limit)}
							on:click={() => {
								setPage(queryResult.data && !(queryResult.data.length === limit) ? page : page + 1);
							}}>Next &gt;</button
						>
					</div>
					<div class="column">
						{#if queryResult.isFetching}Loading...{/if}
					</div>
				</div>
			{/if}
		</div>
	</Query>	
	{#if isActive === 'is-active'}
		<FormCustomer {branchs} data={{ ...data }} bind:isActive on:onSave={onSave} />
	{/if}
</div>

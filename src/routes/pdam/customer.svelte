<script lang="ts">
	import { Query, useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import type { PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import fetchApi from '$lib/fetch-api';
	import FormCustomer from './form-customer.svelte';
	import dayjs from 'dayjs';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const client = useQueryClient();

	// const fetchBranch = async (): Promise<PDAMBranch[]> => {
	// 	const data = await fetchApi.get('/v2/pdam/branch/').json<PDAMBranch[]>();

	// 	return data;
	// };

	export let branchs: PDAMBranch[] = [];

	let page = 0;
	let limit = 5;
	let limits: number[] = [5,10,25,50,100];
	let isUpdating = 0;
	const fetchCustomer = async (p: number, l: number): Promise<PDAMCustomer[]> => {
		const data = await fetchApi.get(`/v2/pdam/customer/list/${l}/${l * p}`).json<PDAMCustomer[]>();

		return data;
	};
	const prefetchNextPage = async (data: PDAMCustomer[]) => {
		if (data && data.length === limit) {
			await client.prefetchQuery(['pdam', 'customer', 'list', page + 1], () =>
				fetchCustomer(page + 1, limit)
			);
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

	const fetchDelte = async (e: string) =>
		await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.delete(`/v2/pdam/customer/${e}`)
			.json<{ id: number; message: string }>();

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: PDAMCustomer) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMCustomer[]>([
				'pdam',
				'customer',
				'list',
				page,
				limit
			]);

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
			const previousData = client.getQueryData<PDAMCustomer[]>([
				'pdam',
				'customer',
				'list',
				page,
				limit
			]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMCustomer[]>(
					['pdam', 'customer', 'list', page, limit],
					previousData
				);
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

	const deleteMutation = useMutation(fetchDelte, {
		onSuccess: async () => console.log('Delete Success'),
		onSettled: async () => await client.invalidateQueries(['pdam', 'customer', 'list', page, limit])
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
			$updateData.mutate({ ...d, createdAt: dayjs().format() });
		}
		isActive = '';
	}

	const setPage = (newPage: number) => {
		page = newPage;
	};

	const limitChanged = (l: number) => {
		setPage(0);
	};

	function onCheckedChanged(e: PDAMCustomer) {
		dispatch('selectCustomer', e);
	}

	function removeCustomer(e: CustomEvent<PDAMCustomer>): void {
		$deleteMutation.mutate(e.detail.slId);
		isActive = '';
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

<div class="container">
	<div class="columns is-mobile">
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
			<div>
				<hr class="p-0 m-0 my-2" />
				{#each queryResult.data ?? [] as c, i (c.slId)}
					<div class="columns">
						<div class="column pb-0 columns is-mobile is-5 is-gapless">
							<div class="column pb-0 has-text-weight-bold">{c.name}</div>
							<div class="column pb-0 is-narrow">
								<label>
									<input type="checkbox" on:click={() => onCheckedChanged(c)} />
									<span class="ml-2">{c.slId}</span>
								</label>
							</div>
						</div>
						<div class="column pb-0 is-4">{c.address}</div>
						<div class="column pb-0 is-3">
							<div class="columns is-mobile is-gapless">
								<div class="column pb-0">{c.branchName ?? '-'}</div>
								<div class="column pb-0 is-narrow">
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
					</div>
					<hr class="p-0 m-0 my-2" />
				{/each}
			</div>
				<div class="block mt-4">
					<div class="columns">
						<div class="column">
							<div class="columns is-mobile">
								<div class="column">
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
										title="Select all customer to print request"
										class="button"
										disabled={queryResult.data && queryResult.data.length === 0}
										on:click={() => dispatch('selectAll', queryResult.data)}>Select All</button
									>
								</div>
							</div>
						</div>
						<div class="column is-narrow columns is-mobile">
							<div class="column is-narrow">
								<button
									disabled={page === 0}
									class="button"
									on:click={() => setPage(Math.max(page - 1, 0))}>&lt; Previous</button
								>
							</div>
							<div class="column"><div class="has-text-centered">{page + 1}</div></div>
							<div class="column is-narrow">
								<button
									class="button"
									disabled={queryResult.data && !(queryResult.data.length === limit)}
									on:click={() => {
										setPage(
											queryResult.data && !(queryResult.data.length === limit) ? page : page + 1
										);
									}}>Next &gt;</button
								>
							</div>
							<!-- <div class="column">
							{#if queryResult.isFetching}Loading...{/if}
						</div> -->
						</div>
					</div>
				</div>
			{/if}
		</div>
	</Query>
	{#if isActive === 'is-active'}
		<FormCustomer
			{branchs}
			data={{ ...data }}
			bind:isActive
			on:onSave={onSave}
			on:removeCustomer={removeCustomer}
		/>
	{/if}
</div>

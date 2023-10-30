<script lang="ts">
	import { Query, useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import type { PDAMBranch, PDAMCustomer } from '$lib/interfaces';
	import fetchApi from '$lib/fetch-api';
	import FormCustomer from './form-customer.svelte';
	import { onMount } from 'svelte';

	const client = useQueryClient();

	// const fetchBranch = async (): Promise<PDAMBranch[]> => {
	// 	const data = await fetchApi.get('/v2/pdam/branch/').json<PDAMBranch[]>();

	// 	return data;
	// };

	export let branchs: PDAMBranch[] = [];

	let isUpdating = 0;
	const fetchCustomer = async (): Promise<PDAMCustomer[]> => {
		const data = await fetchApi.get('/v2/pdam/customer/').json<PDAMCustomer[]>();

		return data;
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
			const previousData = client.getQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list']);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMCustomer[]>(
					['pdam', 'customer', 'list'],
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
				client.setQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list'], context.previousData);
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
			await client.invalidateQueries(['pdam', 'customer', 'list']);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: PDAMCustomer) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list']);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list'], previousData);
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
				client.setQueryData<PDAMCustomer[]>(['pdam', 'customer', 'list'], context.previousData);
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
			await client.invalidateQueries(['pdam', 'customer', 'list']);
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
			$updateData.mutate(d);
		}
		isActive = '';
	}

	// onMount(async() => {
	// 	branchs = await fetchBranch();
	// })

	$: queryOptions = {
		queryKey: ['pdam', 'customer', 'list'],
		queryFn: () => fetchCustomer(),
		keepPreviousData: true
	};
</script>

<div class="container fluid">
	<div class="subtitle block">Customer</div>
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
							<div class="column py-0 columns is-mobile">
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
			{/if}
		</div>
	</Query>
	<hr class="p-0 m-0 my-2" />
	<div class="block mt-3">
		<button
			class="button is-success"
			on:click={() => {
				data = { ...initData };
				isActive = 'is-active';
			}}>+ New</button
		>
	</div>
	{#if isActive === 'is-active'}
	<FormCustomer {branchs} data={{ ...data }} bind:isActive on:onSave={onSave} />
	{/if}
</div>

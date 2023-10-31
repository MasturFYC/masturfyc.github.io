<script lang="ts">
	import { Query, useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import type { PDAMBranch } from '$lib/interfaces';
	import fetchApi from '$lib/fetch-api';
	import FormBranch from './form-branch.svelte';

	const client = useQueryClient();

	const fetchBranch = async (): Promise<PDAMBranch[]> => {
		const data = await fetchApi.get('/v2/pdam/branch/').json<PDAMBranch[]>();

		return data;
	};

	let isUpdating = 0;

	const fetchUpdateData = async (e: PDAMBranch): Promise<PDAMBranch> =>
		await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.put(e, `/v2/pdam/branch/${e.id}`)
			.json();

	const fetchCreateData = async (e: PDAMBranch): Promise<PDAMBranch> =>
		await fetchApi
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.post(e, '/v2/pdam/branch/')
			.json();

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: PDAMBranch) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMBranch[]>(['pdam', 'branch', 'list']);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMBranch[]>(
					['pdam', 'branch', 'list'],
					[
						...previousData
						//e
					]
				);
			}

			return previousData;
		},
		onSuccess: async (data: any, variable: PDAMBranch, context) => {
			setTimeout(() => {
				isUpdating = 2;
			}, 1000);

			// fetchSuccess = true;
		},

		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<PDAMBranch[]>(['pdam', 'branch', 'list'], context.previousData);
			}
			//      selectedCategoryId.set($category.id)
			isUpdating = 0;
		},
		// Always refetch after error or success:
		onSettled: async (
			data: any,
			error: any,
			variables: PDAMBranch,
			context: PDAMBranch[] | undefined
		) => {
			await client.invalidateQueries(['pdam', 'branch', 'list']);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: PDAMBranch) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<PDAMBranch[]>(['pdam', 'branch', 'list']);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<PDAMBranch[]>(['pdam', 'branch', 'list'], previousData);
			}

			return previousData;
		},
		onSuccess: async (data: any, variable: PDAMBranch, context) => {
			// fetchSuccess = true;
			setTimeout(() => {
				isUpdating = 2;
			}, 1000);
		},

		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<PDAMBranch[]>(['pdam', 'branch', 'list'], context.previousData);
				//        selectedCategoryId.set($category.id)
			}
			isUpdating = 0;
		},
		onSettled: async (
			data: any,
			error: any,
			variables: PDAMBranch,
			context: PDAMBranch[] | undefined
		) => {
			await client.invalidateQueries(['pdam', 'branch', 'list']);
		}
	});

	const initData: PDAMBranch = {
		id: 0,
		name: '',
		address: ''
	};

	let data = initData;
	let isActive = '';

	$: queryOptions = {
		queryKey: ['pdam', 'branch', 'list'],
		queryFn: () => fetchBranch(),
		keepPreviousData: true
	};

	function onSave(e: CustomEvent<PDAMBranch>): void {
		const d = e.detail;
		if (d.id === 0) {
			$createData.mutate(d);
		} else {
			$updateData.mutate(d);
		}
		isActive = '';
	}
</script>

<div class="container fluid">
	<div class="columns is-mobile">
		<div class="column">
			<div class="subtitle block">Cabang</div>
		</div>
		<div class="column is-narrow">
			<button
			class="button is-success is-light"
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
				<div>Loading branch...</div>
			{:else}
				<div class="container">
					<hr class="p-0 m-0 my-2" />
					{#each queryResult.data ?? [] as c, i (c.id)}

						<div class="columns">
							<!-- <div class="column py-0 columns is-mobile"> -->
							<!-- <div class="column pb-0 is-narrow">{c.id}.</div> -->
							<div class="column has-text-weight-bold  pb-0">{c.name}</div>
							<!-- </div> -->
							<div class="column is-8 pb-0">{c.address}</div>
							<div class="column is-narrow  pb-0">
								<button
									class="button is-small is-link is-light"
									on:click={() => {
										data = c;
										isActive = 'is-active';
									}}>Edit</button
								>
							</div>
						</div>
						<hr class="p-0 m-0 my-2" />
						{/each}
				</div>
			{/if}
		</div>
	</Query>
	{#if isActive === 'is-active'}
	<FormBranch data={{ ...data }} bind:isActive on:onSave={onSave} />
	{/if}
</div>

<script lang="ts">
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import { useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import type { UnitKoperasi } from '$lib';
	import IconButton from '@smui/icon-button';

	export let unitId = 0;
	export let page = 0;
	export let limit = 0;

	let fetchSuccess = false;
	let open = false;
	
	const client = useQueryClient();

	let initUnit: UnitKoperasi = {
        id: 0,
        name: '',
				description:''
    };

  let unit: UnitKoperasi = {...initUnit};

	let dirty = false;
	let clicked = 'no';

	const fetchUnitById = async (id: number) => {
		const { data } = await axios.get<UnitKoperasi>(`/koperasi/unit/${id}`);
		return data;
	};

	const fetchUpdateData = async (e: UnitKoperasi): Promise<UnitKoperasi> =>
		await axios.patch(`/koperasi/unit/patch/${e.id}`, e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const fetchCreateData = async (e: UnitKoperasi): Promise<UnitKoperasi> =>
		await axios.post('/koperasi/unit/insert', e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: UnitKoperasi) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<UnitKoperasi[]>(['units', { page: page, limit: limit }]);

			// Optimistically update to the new value
			if (previousData) {        
				client.setQueryData<UnitKoperasi[]>(['units', { page: page, limit: limit }], previousData);
			}

			return previousData;
		},
		 onSuccess: async () => {
			fetchSuccess = true;
		//  closeForm(true)
		 },
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<UnitKoperasi>(['units', { page: page, limit: limit }], context.previousData);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['units']);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: UnitKoperasi) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<UnitKoperasi[]>(['units',  { page: page, limit: limit }]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<UnitKoperasi[]>(['units',  { page: page, limit: limit }], [...previousData]);
			}

			return previousData;
		},
		 onSuccess: async () => {
			fetchSuccess = true;
		//  closeForm(true)
		    },
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousData) {
				client.setQueryData<UnitKoperasi>(['units',  { page: page, limit: limit }], context.previousData);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
			await client.invalidateQueries(['units']);
		}
	});

	onMount(async () => {

		if (unitId > 0) {
      const data = client.getQueryData<UnitKoperasi>(['units', { id: unitId }]) ?? 
      await client.fetchQuery(['units', { id: unitId }], () =>fetchUnitById(unitId));
      unit = data ?? {...initUnit};
		}
	});

	$: isNameValid = unit.name.length > 2;
	$: isDisabled = !isNameValid || !dirty;

	$: if(fetchSuccess) {
		if(unit.id === 0) {
			unit = {...initUnit}
		}
		open = false;
		fetchSuccess = false;
	}

	$: if(clicked === 'yes') {
		if (unit.id === 0) {
			$createData.mutate(unit);
		} else {
			$updateData.mutate(unit);
		}
		clicked = 'no';
	}

</script>

<IconButton
			class="material-icons icon"
			size="{unitId === 0 ? 'normal' : 'button'}"
			on:click={async () => (open = true)}			
			aria-label="New unit">{unitId === 0 ? 'note_add' : 'edit'}</IconButton>	

<Dialog
	surface$style="width: 480px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title">Unit Koperasi</Title>
	<Content id="simple-content" style="overflow:unset">
		<div class="flex-row flexwrap px-20 mt-10">
			<div class="flex-col flex-1 w-min-300">
				<Textfield
					bind:dirty
					bind:value={unit.name}
					use={[InitialFocus]}
					label="Nama"
					type="text"
					invalid={!isNameValid}
					input$placeholder="e.g. nama unit"
					variant="filled"
				/>
			</div>
			<div class="flex-col flex-1 w-min-300 mt-20">
				<Textfield
					textarea
					label="Deskripsi"
					input$rows={5}
					bind:dirty
					bind:value={unit.description}
				/>
			</div>
		</div>
	</Content>
	
	<Actions>
		<Button
			ripple
			color="secondary"
			class="size-sm ml-6"
			on:click={()=>clicked = 'no'}>Batal</Button
		>
		<Button disabled={isDisabled} color="primary" ripple
		on:click={()=>clicked = 'yes'}>Simpan</Button>
	</Actions>
</Dialog>	
	<!-- <pre>{JSON.stringify(member, null, 3)}</pre> -->

<style lang="scss">
	/* :global(.ctrl-style) {
    display: flex;
    flex-direction: column;
    row-gap: 1px;
  } */
	.w-min-300 {
		min-width: 300px;
	}
	.px-20 {
		padding-left: 10px;
		padding-right: 10px;
	}

	* :global(.w-100) {
		width: 100%;
		min-width: 280px;
	}

	:global(.ctrl-style > div) {
		margin-top: -3px;
		/* border: 1px solid #333; */
	}
	* :global(.mdc-deprecated-list-item) {
		height: 26px;
	}

	* :global(.ml-6) {
		margin-left: 6px;
	}

	* :global(.form-customer) {
		display: flex;
		flex-direction: row;
		column-gap: 10px;
		align-items: center;
	}
	.flexwrap {
		flex-wrap: wrap;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import FormField from '@smui/form-field';
	import Switch from '@smui/switch';
	import { useMutation, useQueryClient, useQuery } from '@sveltestack/svelte-query';
	import axios from '../../lib/axios-base';
	import type { MemberKoperasi, UnitKoperasi } from '../../lib';
	import { unit_koperasi } from '../../lib/store';
	import Select, {Option} from '@smui/select';
	import dayjs from 'dayjs'
    import { push } from 'svelte-spa-router';

	export let params = {id: '0'}

	console.log(params)

	const memberId = parseInt(params.id ?? '0');
	const pageId = 0; // parseInt($page.url.searchParams.get('page') ?? '0');
	const limit = 0; //parseInt($page.url.searchParams.get('limit') ?? '0');	
	const txt = ''; //$page.url.searchParams.get('txt') ?? '';

	let refFocus: Textfield;
	let fetchSuccess = false;
	
	let dispatch = createEventDispatcher();
  let selectedUnit: UnitKoperasi;
	const client = useQueryClient();

	let initMember: MemberKoperasi = {
		member_id: 0,
		unit_id: 0,
		name: '',
		created_at: dayjs().format('YYYY-MM-DD'),
		address: '',
		is_active: true,
		type_id: 0,
		phone: '',
		unit_name: '',
		description: ''
	};

  let member: MemberKoperasi = initMember;

	let dirty = false;
	let showRaw = false;

	const fetchMemberById = async (id: number) => {
		const { data } = await axios.get<MemberKoperasi>(`/koperasi/member/${id}`);
		return data;
	};

	const fetchUpdateData = async (e: MemberKoperasi): Promise<MemberKoperasi> =>
		await axios.patch(`/koperasi/member/patch/${e.member_id}`, e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const fetchCreateData = async (e: MemberKoperasi): Promise<MemberKoperasi> =>
		await axios.post('/koperasi/member/insert', e, {
			headers: { 'Content-Type': 'application/json' }
		});

	const createData = useMutation(fetchCreateData, {
		onMutate: async (e: MemberKoperasi) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousData = client.getQueryData<MemberKoperasi[]>(['members', txt, { page: pageId, limit: limit }]);

			// Optimistically update to the new value
			if (previousData) {        
				client.setQueryData<MemberKoperasi[]>(['members', txt, { page: pageId, limit: limit }], previousData);
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
				client.setQueryData<MemberKoperasi>(['members', txt, { page: pageId, limit: limit }], context.previousData);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['members', { id: memberId }]);
			await client.invalidateQueries(['members', txt, { page: pageId, limit: limit }]);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: MemberKoperasi) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousMember = client.getQueryData<MemberKoperasi[]>(['members', txt, { page: pageId, limit: limit }]);

			// Optimistically update to the new value
			if (previousMember) {
				client.setQueryData<MemberKoperasi[]>(['members', txt, { page: pageId, limit: limit }], [...previousMember]);
			}

			return previousMember;
		},
		 onSuccess: async () => {
			fetchSuccess = true;
		//  closeForm(true)
		    },
		// If the mutation fails, use the context returned from onMutate to roll back
		onError: (err: any, variables: any, context: any) => {
			if (context?.previousMember) {
				client.setQueryData<MemberKoperasi>(['members', txt, { page: pageId, limit: limit }], context.previousMember);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
      await client.invalidateQueries(['members', { id: memberId }]);
			await client.invalidateQueries(['members', txt, { page: pageId, limit: limit }]);
		}
	});

	function handleSubmit(e: Event & { readonly submitter: HTMLElement | null }) {
		e.preventDefault();
		e.stopPropagation();

		if (member.member_id === 0) {
			$createData.mutate(member);
		} else {
			$updateData.mutate(member);
		}
	}


	const fetchUnits = async () => {
		const { data } = await axios.get<UnitKoperasi[]>('/koperasi/unit/list');
		return data;
	};

  const getUnitKey = (e: UnitKoperasi) => {
    return e ? `${e.id}` : '0';
  }

	const loadUnit = async () => {
		const data = client.getQueryData<UnitKoperasi[]>(['koperasi', 'units']) ??
			(await client.fetchQuery(['koperasi', 'unit'], () => fetchUnits()));
		unit_koperasi.update((o) => (o = data ?? []));
	};

	onMount(async () => {
		loadUnit();

		if (memberId > 0) {
      const data = client.getQueryData<MemberKoperasi>(['members', { id: memberId }]) ?? 
      await client.fetchQuery(['members', { id: memberId }], () =>fetchMemberById(memberId));
      member = data ?? initMember;
		}
    selectedUnit = $unit_koperasi.filter(o => o.id === member.unit_id)[0];
	});

	$: if (refFocus) refFocus.focus();

	$: member.unit_id = selectedUnit ? selectedUnit.id : 0;
  $: isUnitValid = member.unit_id > 0
	$: isNameValid = member.name.length > 2;
	$: isDisabled = !isNameValid || !dirty || !isUnitValid;

	$: if(fetchSuccess) {
		push(`/koperasi?txt=${txt}&page=${pageId}&limit=${limit}`)
	}


</script>

<div class="max-w-640">
	<form on:submit={handleSubmit}>
		<div class="flex-row flexwrap px-20 mt-10">
			<div class="flex-col flex-1 w-min-300">
				<Textfield
					bind:this={refFocus}
					bind:dirty
					bind:value={member.name}
					label="Nama"
					type="text"
					invalid={() => !isNameValid}
					input$placeholder="e.g. nama member"
					variant="filled"
				/>
				<Select
					class="w-100"
					key={getUnitKey}
					label="Unit"
					variant="filled"
					invalid={() => !isUnitValid}
					bind:dirty
					bind:value={selectedUnit}
				>
					{#each $unit_koperasi as c (c.id)}
						<Option value={c}>{c.name}</Option>
					{/each}
				</Select>
			</div>
			<div class="flex-col flex-1 w-min-300">
				<Textfield
					label="Alamat"
					variant="filled"
					input$placeholder="e.g. Jl. Aria Wiralodra No. 11"
					bind:dirty
					bind:value={member.address}
				/>
				<Textfield
					label="Telephone"
					variant="filled"
					input$placeholder="e.g. 0851 XXXX XXXX"
					bind:dirty
					bind:value={member.phone}
				/>
			</div>
		</div>
		<div class="px-20">
			<FormField>
				<Switch
					name="form-active"
					bind:checked={member.is_active}
					on:click={() => (dirty = true)}
				/>
				<span slot="label">Masih aktif ?</span>
			</FormField>
		</div>
		<hr />

		<div class="button-group px-20 flex-row gap-x-20 flexreverse">
			<FormField>
				<Switch name="form-raw" bind:checked={showRaw} />
				<span slot="label">View raw</span>
			</FormField>
			<div class="flex-1">{''}</div>
			<div>
				<Button
					ripple
					color="secondary"
					class="size-sm ml-6"
					href={`/koperasi?txt=${txt}&page=${pageId}&limit=${limit}`}
					type="button">Batal</Button
				>
				<Button disabled={isDisabled} type="submit" color="primary" ripple>Simpan</Button>
			</div>
		</div>
	</form>
</div>

{#if showRaw}
	<hr />
	<div class="px-20 overflow-x-auto">
		<pre>{JSON.stringify(member, null, 3)}</pre>
	</div>
{/if}

<style lang="scss">
	/* :global(.ctrl-style) {
    display: flex;
    flex-direction: column;
    row-gap: 1px;
  } */
	.w-min-300 {
		min-width: 300px;
	}
	.overflow-x-auto {
		overflow-x: auto;
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

	.button-group {
		align-items: center;
	}

	.gap-x-20 {
		column-gap: 20px;
	}
	.flexwrap {
		flex-wrap: wrap;
	}
	.flexreverse {
		flex-wrap: wrap-reverse;
	}
	hr {
		border-color: var(--border-color);
		border-width: 1px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		padding: 0;
		margin: 0;
	}
	.max-w-640 {
		max-width: 640px;
		margin: 0 auto;
	}
</style>

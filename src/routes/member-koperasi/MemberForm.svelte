<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import FormField from '@smui/form-field';
	import Switch from '@smui/switch';
	import { useMutation, useQueryClient } from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import type { MemberKoperasi, UnitKoperasi } from '$lib';
	import { unit_koperasi } from '$lib/store';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import { initMember } from './store';

	export let page = 0; // parseInt($page.url.searchParams.get('page') ?? '0');
	export let limit = 0; //parseInt($page.url.searchParams.get('limit') ?? '0');
	export let txt = ''; //$page.url.searchParams.get('txt') ?? '';

	const dispatch = createEventDispatcher();
	let fetchSuccess = false;
	let open = false;

	let selectedUnit: UnitKoperasi;
	const client = useQueryClient();

	export let member: MemberKoperasi; // = {...initMember};

	let dirty = false;
	let clicked = 'no action was clicked';

	// const fetchMemberById = async (id: number) => {
	// 	const { data } = await axios.get<MemberKoperasi>(`/koperasi/member/${id}`);
	// 	return data;
	// };

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
			const previousData = client.getQueryData<MemberKoperasi[]>([
				'members',
				txt,
				{ page: page, limit: limit }
			]);

			// Optimistically update to the new value
			if (previousData) {
				client.setQueryData<MemberKoperasi[]>(
					['members', txt, { page: page, limit: limit }],
					previousData
				);
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
				client.setQueryData<MemberKoperasi>(
					['members', txt, { page: page, limit: limit }],
					context.previousData
				);
			}
		},
		// Always refetch after error or success:
		onSettled: async () => {
			await client.invalidateQueries(['members']);
		}
	});

	const updateData = useMutation(fetchUpdateData, {
		onMutate: async (e: MemberKoperasi) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await client.cancelQueries();

			// Snapshot the previous value
			const previousMember = client.getQueryData<MemberKoperasi[]>([
				'members',
				txt,
				{ page: page, limit: limit }
			]);

			// Optimistically update to the new value
			if (previousMember) {
				client.setQueryData<MemberKoperasi[]>(
					['members', txt, { page: page, limit: limit }],
					[...previousMember]
				);
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
				client.setQueryData<MemberKoperasi>(
					['members', txt, { page: page, limit: limit }],
					context.previousMember
				);
				//        selectedCategoryId.set($category.id)
			}
		},
		onSettled: async () => {
			await client.invalidateQueries(['members']);
		}
	});

	const getUnitKey = (e: UnitKoperasi) => {
		return e ? `${e.id}` : '0';
	};

	const setSelectedUnit = (id: number) => {
		if (id > 0) {
			selectedUnit = $unit_koperasi.filter((o) => o.id === id)[0];
		}
	};

	onMount( () => setSelectedUnit(member.unit_id))

	//$: member.unit_id = selectedUnit ? selectedUnit.id : 0;
	$: isUnitValid = selectedUnit && selectedUnit.id > 0;
	$: isNameValid = member.name.length > 2;
	$: isCodeValid = () => {
		if (member.code.length === 9) {
			let s = member.code.split('.');
			if (s.length === 3) {
				if (s[0].length === 2 && s[1].length === 2 && s[2].length === 3) {
					let _n1 = parseInt(s[1]);
					let _n2 = parseInt(s[2]);
					if (isNaN(_n1)) return false;
					if (isNaN(_n2)) return false;
					return true;
				}
				return false;
			}
			return false;
		}
	};

	$: isDisabled = !isNameValid || !dirty || !isUnitValid || !isCodeValid();

	$: if (fetchSuccess) {
		if (member.member_id === 0) {
			member = { ...initMember };
		}
		open = false;
		fetchSuccess = false;
		dispatch("update", {data: {...member}})
	}

	$: if (clicked === 'yes') {
		if (member.member_id === 0) {
			$createData.mutate({ ...member, unit_id: selectedUnit.id });
		} else {
			$updateData.mutate({ ...member, unit_id: selectedUnit.id });
		}
		clicked = 'no';
	}

	$: setSelectedUnit(member.unit_id);

</script>

<IconButton
	title="Edit member"
	size={member.member_id === 0 ? 'normal' : 'button'}
	class="material-icons icon"
	on:click={async () => {
		open = true;
	}}
	aria-label="New member">{member.member_id === 0 ? 'note_add' : 'edit'}</IconButton
>

<Dialog
	surface$style="width: 480px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title" style={'margin: 0 16px 16px 16px;padding:0'}>Anggota Koperasi</Title>
	<Content id="simple-content" style="overflow:unset;margin:0 16px;padding:0">
		<div class="flex-row flexwrap mt-10">
			<div class="flex-col flex-1 w-min-300">
				<div class="flex-row flex-wrap">
				<Textfield
					use={[InitialFocus]}
					bind:dirty
					bind:value={member.code}
					label="Nomor anggota"
					input$maxlength={9}
					type="text"
					class="min-w-280 flex-1"
					invalid={!isCodeValid()}
					on:blur={() => member.code = member.code.toUpperCase()}
					input$placeholder="e.g. XX.00.999"
					variant="filled"
				/>
				<Select
					input$class="flex-1 w-100 w-min-300"
					key={getUnitKey}
					label="Unit"
					variant="filled"
					invalid={!isUnitValid}
					bind:dirty
					bind:value={selectedUnit}
				>
					{#each $unit_koperasi as c (c.id)}
						<Option value={c}>{c.name}</Option>
					{/each}
				</Select>
			</div>

				<Textfield
					bind:dirty
					bind:value={member.name}
					input$maxlength={50}
					label="Nama"
					type="text"
					invalid={!isNameValid}
					input$placeholder="e.g. nama member"
					variant="filled"
				/>
			</div>
			<div class="flex-col flex-1 w-min-300">
				<Textfield
					label="Alamat"
					variant="filled"
					input$maxlength={128}
					input$emptyValueUndefined
					input$placeholder="e.g. Jl. Aria Wiralodra No. 11"
					bind:dirty
					bind:value={member.address}
				/>
				<Textfield
					label="Telephone"
					variant="filled"
					input$maxlength={25}
					input$emptyValueUndefined
					input$placeholder="e.g. 0851 XXXX XXXX"
					bind:dirty
					bind:value={member.phone}
				/>
			</div>
		</div>
	</Content>

	<Actions>
		<FormField>
			<Switch name="form-active" bind:checked={member.is_active} on:click={() => (dirty = true)} />
			<span slot="label">Aktif ?</span>
		</FormField>
		<div class="flex-1">{''}</div>
		<div>
			<Button ripple color="secondary" class="size-sm ml-6" on:click={() => (clicked = 'no')}
				>Batal</Button
			>
			<Button disabled={isDisabled} color="primary" ripple on:click={() => (clicked = 'yes')}
				>Simpan</Button
			>
		</div>
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

	* :global(.w-100) {
		width: 100%;
		min-width: 280px;
	}

	:global(.ctrl-style > div) {
		margin-top: -3px;
		/* border: 1px solid #333; */
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

	* :global(.min-w-280) {
		max-width: 280px;
	}
</style>

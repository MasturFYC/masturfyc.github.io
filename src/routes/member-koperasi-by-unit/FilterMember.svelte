<script lang="ts">
	import Select, { Option } from '@smui/select';
	import { unit_koperasi } from '$lib/store';
	import type { UnitKoperasi } from '$lib';
  import { createEventDispatcher, onMount } from 'svelte';

	export let unitId = 0;
  let selectedUnit: UnitKoperasi;
  const dispatch = createEventDispatcher();

  const dispatchFilter = (e: UnitKoperasi | undefined = undefined) => {
    if(selectedUnit) {
      dispatch("search", {txt: selectedUnit.id})
    }
  }

  const getKey = (e: UnitKoperasi) => {
    return e ? `${e.id}` : '0'
  }
	const setSelectedUnit = (id: number) => {
		if (id > 0) {      
			selectedUnit = $unit_koperasi.filter((o) => o.id === id)[0];
		}
	};
	
  onMount(() => setSelectedUnit(unitId))

  $: setSelectedUnit(unitId);  
  $: dispatchFilter(selectedUnit);

</script>

<Select
	title="Row limit per page"
	key={getKey}
	aria-label="limit-control"
	class={'shaped-outlined'}
	variant="outlined"
	input$name="category-control"
	bind:value={selectedUnit}
>
	{#each $unit_koperasi as c (c.id)}
		<Option value={c}>{c.name}</Option>
	{/each}
</Select>

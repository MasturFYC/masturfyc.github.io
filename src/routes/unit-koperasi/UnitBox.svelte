<script lang="ts">
	import { goto } from '$app/navigation';
  import UnitForm from './UnitForm.svelte';
  import DeleteItem from './DeleteItem.svelte';
  import type { UnitKoperasi } from '$lib';
  import {current_unit_id} from '../member-koperasi/store'
	import IconButton from '@smui/icon-button';


  export let unit: UnitKoperasi;
	export let page = 0;
	export let limit = 0;

</script>
<div class="box-shadow radius-1 border-1">
  <div class="div-content">
    <div class="div-name">{unit.name}</div>
    <div>{unit.description??''}</div>
  </div>
    <div class="flex-row gap-x-10">
      <UnitForm {unit} {page} {limit} />
      <DeleteItem unitId={unit.id} {page} {limit} />
      <IconButton 
      title={"Show member by unit"}
      size="button"
      class="material-icons" 
      on:click={() => {
        current_unit_id.update(() => unit.id)
        goto("/member-koperasi-by-unit")
      }}
      aria-label="Account">account_circle</IconButton>
  </div>
</div>

<style lang="scss">
 	* :global(.icon:visited) {
		color: var(--text-color);
	}

.div-name {
  font-weight: 400;
  font-size: large;
  //color: var(--accent-color)
}
.div-content {
  margin: 12px;
}
.box-shadow {
  box-shadow: 1px 1px 5px var(--shadow-color);
  min-width: 220px;
  max-width: 480px;
  flex: 1;
  background-color: var(--control-background);
}
</style>
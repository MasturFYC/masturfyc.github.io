<script lang="ts">
  import UnitForm from './UnitForm.svelte';
  import DeleteItem from './DeleteItem.svelte';

  export let unitId: number = 0;
	export let page = 0;
	export let limit = 0;

</script>
<div class="box-shadow radius-1 border-1">
  <div class="div-content">
    <div class="div-name"><slot name="name" /></div>
    <div><slot name="description" /></div>
  </div>
    <div class="flex-row gap-x-10">
      <UnitForm unitId={unitId} {page} {limit} />
      <DeleteItem {unitId} {page} {limit} />
  </div>
</div>

<style lang="scss">
 	* :global(.icon:visited) {
		color: var(--text-color);
	}

.div-name {
  font-weight: 700;
  //color: var(--accent-color)
}
.div-content {
  margin: 12px;
}
.box-shadow {
  box-shadow: 1px 1px 5px var(--shadow-color);
  max-width: 220px;
  width: 100%;
}
</style>
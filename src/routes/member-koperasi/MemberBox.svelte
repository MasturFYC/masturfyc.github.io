<script lang="ts">
  import IconButton from '@smui/icon-button';
  import MemberForm from './MemberForm.svelte';
    import DeleteItem from './DeleteItem.svelte';

  export let memberId: number = 0;
	export let page = 0; // parseInt($page.url.searchParams.get('page') ?? '0');
	export let limit = 0; //parseInt($page.url.searchParams.get('limit') ?? '0');	
	export let txt = ''; //$page.url.searchParams.get('txt') ?? '';

</script>
<div class="box-shadow radius-1 border-1">
  <div class="div-content">
    <div class="div-name"><slot name="name" /></div>
    <div><slot name="address" /></div>
    <div class="div-unit"><slot name="unit" /></div>
    <div><slot name="active" /></div>
  </div>
    <div class="flex-row gap-x-10">
      <MemberForm {memberId} {txt} {limit} {page} />
      <DeleteItem {memberId} {page} {limit} />
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
.div-unit {
  margin: 12px 0;
}
</style>
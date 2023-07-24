<script lang="ts">
  import IconButton from '@smui/icon-button';

  export let memberId: number = 0;
  export let page: number = 0;
  export let limit: string = '0';
  export let txt: string = '';

</script>
<div class="box-shadow radius-1 border-1">
  <div class="div-content">
    <div class="div-name"><slot name="name" /></div>
    <div><slot name="address" /></div>
    <div class="div-unit"><slot name="unit" /></div>
    <div><slot name="active" /></div>
  </div>
    <div class="flex-row gap-x-10">
      <IconButton        
        size="button"
        class="material-icons icon"
        href={`#/member/${memberId}`}
        aria-label="Edit this member">edit</IconButton
      >    
      <IconButton
        size="button"
        class="material-icons icon"
        href={`/delete-member?id=${memberId}`}
        aria-label="Delete this member">delete</IconButton
      >
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
}
.div-unit {
  margin: 12px 0;
}
</style>
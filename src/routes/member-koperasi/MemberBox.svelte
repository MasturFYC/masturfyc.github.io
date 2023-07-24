<script lang="ts">
  import MemberForm from './MemberForm.svelte';
    import DeleteItem from './DeleteItem.svelte';
    import type { MemberKoperasi } from '$lib';
    import { initMember } from './store';


  export let member: MemberKoperasi = {...initMember};

  export let page = 0; // parseInt($page.url.searchParams.get('page') ?? '0');
	export let limit = 0; //parseInt($page.url.searchParams.get('limit') ?? '0');	
	export let txt = ''; //$page.url.searchParams.get('txt') ?? '';

  $: koma = (member.address && member.phone) ? ', ':''

</script>
<div class="box-shadow radius-1 border-1">
  <div class="div-content">
    <div class="div-name">{member.name}</div>
    <div>{member.address ?? ''}{koma}{member.phone ?? ''}</div>
    <div class="div-unit">{member.unit_name}</div>
    <div>No. {member.code}</div>
    <div>Aktif? {member.is_active ? 'Ya' : 'Tidak'}</div>
  </div>
    <div class="flex-row gap-x-10">
      <MemberForm {member} {txt} {limit} {page} />
      <DeleteItem memberId={member.member_id} {page} {limit} />
  </div>
</div>

<style lang="scss">
 	* :global(.icon:visited) {
		color: var(--text-color);
	}

.div-name {
  //font-weight: 700;
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
.div-unit {
  margin: 12px 0;
}
</style>
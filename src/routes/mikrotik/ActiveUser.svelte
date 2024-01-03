<script lang="ts">
	import type { iUserActive } from "$lib/interfaces";

  export let  users: iUserActive[] = [];
  export let innerWidth: number = 0;

</script>

{#each users as d, i (d.id)}
<div class="columns is-gapless {innerWidth <= 640 ? 'p-2 has-background-light':i%2===1?'my-1 p-1 has-background-light':'px-1 my-1'}">
  <div class="column is-1">{d.id.substring(4, d.id.length)}</div>
  <div class="column is-2 has-text-weight-bold">{d.name}</div>
  <div class="column is-2">{d.comment}</div>
  <div class="column is-1">{d.service}</div>
  <div class="column is-2">{d.sessionId}</div>
  <div class="column is-2 has-text-weight-bold">{d.address}</div>
  <div class="column is-2">{d.callerId}</div>
</div>
{/each}
<script lang="ts">
	import type { iUserSecret } from "$lib/interfaces";

  export let users: iUserSecret[] = [];
</script>

{#each users as d (d.id)}
<tr>
  <td>{d.id}</td>
  <td>{d.name}</td>
  <td>{d.comment}</td>
  <td>{d.service}</td>
  <td>{d.profile}</td>
  <td>{d.remoteAddress}</td>
  <td>{d.lastCallerId}</td>
</tr>
{/each}
<script lang="ts">
	import type { iUserActive } from "$lib/interfaces";

  export let  users: iUserActive[] = []
</script>

{#each users as d (d.id)}
<tr>
  <td>{d.id}</td>
  <td>{d.name}</td>
  <td>{d.comment}</td>
  <td>{d.service}</td>
  <td>{d.sessionId}</td>
  <td>{d.address}</td>
  <td>{d.callerId}</td>
</tr>
{/each}
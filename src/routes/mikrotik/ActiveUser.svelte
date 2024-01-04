<script lang="ts">
	import type { iUserActive } from '$lib/interfaces';

	export let users: iUserActive[] = [];
	export let innerWidth: number = 0;
</script>

{#each users as d, i (d.id)}
	<div
		class="columns is-mobile is-gapless {innerWidth <= 640
			? 'p-2  message message-body'
			: i % 2 === 1
			? 'my-1 p-1  message'
			: 'px-1 my-1'}"
	>
		<div class="column is-5">
			<div class="columns is-gapless">
				<div class="column is-2">{d.id.substring(4, d.id.length)}</div>
				<div class="column is-4 has-text-weight-bold">{d.name}</div>
				<div class="column is-6">{d.comment}</div>
			</div>
		</div>
		<div class="column is-7">
			<div class="columns is-gapless">
				<div class="column is-2">{d.service}</div>
				<div class="column is-3">{d.sessionId}</div>
				<div class="column is-4 has-text-weight-bold">{d.address}</div>
				<div class="column is-3">{d.callerId}</div>
			</div>
		</div>
	</div>
{/each}
<div class="mt-4">Total: {users.length}</div>

<script lang="ts">
	import type { iUserSecret } from '$lib/interfaces';

	export let users: iUserSecret[] = [];
	export let innerWidth: number = 0;
</script>

{#each users as d, i (d.id)}
	<div
		class="columns is-mobile is-gapless {innerWidth <= 640
			? 'p-2 has-background-light message-body'
			: i % 2 === 1
			? 'my-1 p-1 has-background-light'
			: 'px-1 my-1'}"
	>
		<div class="column is-5">
			<div class="columns is-gapless">
				<div class="column is-2">{d.id}</div>
				<div class="column is-4 has-text-weight-bold">{d.name}</div>
				<div class="column is-6">{d.comment}</div>
			</div>
		</div>
		<div class="column is-7">
			<div class="columns is-gapless">
				<div class="column is-2">{d.service}</div>
				<div class="column is-3">{d.profile}</div>
				<div class="column is-4 has-text-weight-bold">{d.remoteAddress}</div>
				<div class="column is-3">{d.lastCallerId}</div>
			</div>
		</div>
	</div>
{/each}

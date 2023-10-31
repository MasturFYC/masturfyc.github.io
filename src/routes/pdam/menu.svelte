<script lang="ts">
	const menu = [
		{ id: 2, name: 'Cabang' },
		{ id: 3, name: 'Import' },
		{ id: 1, name: 'Customer' },
		{ id: 4, name: 'Download Card' }
	];
	export let currentMenu = 1;
</script>

<aside class="menu">
	<ul class="menu-list">
		{#each menu as m (m.id)}
			<li>
				<a
					href="#{m.id}"
					class={m.id === currentMenu ? 'is-active' : ''}
					on:click={() => (currentMenu = m.id)}>{m.name}</a
				>
			</li>
		{/each}
	</ul>
</aside>

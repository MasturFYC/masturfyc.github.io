<script lang="ts">
	import logo from '$assets/logo.svg'
	export let clientHeight = 0;
	let isActive = false;
	let menu = [
		//{id:1,name:"Home",href:"/"},
    {id:2,href:"/bilangan",name:"Bilangan"},
    {id:3,href:"/ketua-dprd",name:"Ketua DPRD"},
    {id:4,href:"/pt-gpm",name:"PT. Galuh Persada Makmur"}
	]
	
	let drop = [
    {id:1,href:"/undangan-tahlil",name:"Undangan Tahlil"},
    {id:2,href:"/pdam",name:"Kartu PDAM"},
    {id:3,href:"/label103",name:"Label-103"},
	]
</script>	

	<!-- svelte-ignore a11y-no-redundant-roles -->
	<nav		
		class="navbar is-fixed-top"
		role="navigation"
		aria-label="main navigation"
		bind:clientHeight
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img
					src="{logo}"
					width="112"
					height="28"
					class="is-tranparent"
					alt="Logo"
				/>
			</a>

			<!-- svelte-ignore a11y-interactive-supports-focus -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a
				role="button"
				class="navbar-burger{isActive ? ' is-active' : ''}"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				on:click={() => (isActive = !isActive)}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div
			id="navbarBasicExample"
			class="navbar-menu{isActive ? ' is-active' : ''}"
		>
			<div class="navbar-start">
				{#each menu as c (c.id) }
				<a class="navbar-item" href="{c.href}" on:click={() => (isActive=false)}>{c.name}</a>	
				{/each}
				
				<div class="navbar-item has-dropdown is-hoverable{isActive ? ' is-active' : ''}">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="navbar-link">Download</a>

					<div class="navbar-dropdown">
						{#each drop as d (d.id) }							
						<a class="navbar-item" on:click={() => (isActive=false)} href="{d.href}">{d.name}</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- <div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light"> Log in </a>
					</div>
				</div>
			</div> -->
		</div>
	</nav>

<script lang="ts">
	import logo from '$assets/logo.svg'
	export let clientHeight = 0;
	let isActive = false;
	let menu = [
		{id:1,name:"Home",href:"/"},
		{id:2,name:"ID-Card",href:"/pdam"},
	]
	
</script>	

	<!-- svelte-ignore a11y-no-redundant-roles -->
	<nav		
		class="navbar"
		role="navigation"
		aria-label="main navigation"
		bind:clientHeight
	>
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img
					src="{logo}"
					width="64"
					height="96"
					alt="Logo"
				/>
			</a>

			<a
				href="/#"
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
				<a class="navbar-item" href="{c.href}">{c.name}</a>	
				{/each}
				
				<!-- <div class="navbar-item has-dropdown is-hoverable{isActive ? ' is-active' : ''}">
					<a class="navbar-link"> More </a>

					<div class="navbar-dropdown">
						<a class="navbar-item" href="/undangan-tahlil"> About </a>
						<a class="navbar-item"> Jobs </a>
						<a class="navbar-item"> Contact </a>
						<hr class="navbar-divider" />
						<a class="navbar-item"> Report an issue </a>
					</div>
				</div> -->
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

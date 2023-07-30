<script lang="ts">
  import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { user, user_role } from '$lib/store';
	import axios from '$lib/axios-base';

	type formParam = Event & { readonly submitter: HTMLElement | null } & {
		currentTarget: EventTarget & HTMLFormElement;
	};

	export let open = false;

	const loadUser = async () => {
		await axios
			.get('/admin/user', {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => response.data)
			.then((data) => {
				user.update((u) => (u = data.name));
				user_role.update((o) => (o = data.role));
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	onMount(() => loadUser());

</script>

<div class="top-app-bar-container">
	<TopAppBar variant="static" prominent={false} dense class="primary">
		<Row class="bar-row">
			<Section class="bar-section">
				<IconButton on:click={() => (open = !open)}
					class="material-icons">menu</IconButton
				>
				<Title><a href="/">Kopma Unwir</a></Title
				>
			</Section>
			<Section align="end" toolbar>
				<IconButton class="material-icons icons" aria-label="Download">account_circle</IconButton>
				<IconButton
					on:click={()=>goto("/login")}
					class="material-icons"
					aria-label="Bookmark this page">login</IconButton
				>
			</Section>
		</Row>
	</TopAppBar>
</div>

<style lang="scss">
	@use '@material/theme/color-palette';
	
	a {
		text-decoration: none;
		color: inherit;
	}
	* :global(.bar-section) {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}

	* :global(.bar-row) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.top-app-bar-container {
		width: 100%;
		overflow: hidden;
	}

	@media (max-width: 480px) {
		.top-app-bar-container {
			margin: 0;
			padding: 0;
		}
		* :global(.bar-row) {
			gap: 0;
			overflow-x: hidden;
		}
	}
	* :global(.primary) {
		background-color: var(--control-background); // color-palette.$amber-900;
		color: var(--text-color);
		padding: 6px 0;
		// color: color-palette.$grey-100;
	}
	* :global(.material-icons) {
		color: var(--text-color);
	}
</style>

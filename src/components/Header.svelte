<script lang="ts">
	//import { page } from 'svelte/store';
	import { onMount } from 'svelte';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { user, user_role } from '../lib/store';
	import axios from '../lib/axios-base';
	import { fly } from 'svelte/transition';
	import dayjs from 'dayjs';
	import {push, pop, replace, link} from 'svelte-spa-router'

	type formParam = Event & { readonly submitter: HTMLElement | null } & {
		currentTarget: EventTarget & HTMLFormElement;
	};

	let showSearch = false;
	let controlSearch: HTMLInputElement;
	let txt = '';

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
				console.log(error.response.data);
			});
	};

	const searchMember = (e: CustomEvent<any>) => {
		showSearch = !showSearch;
	};

	const findMember = async (e: string) => {
		await replace(`/search/${txt}/0/5`);
	}
	onMount(() => loadUser());

	const handleSubmit = (e: formParam) => {
		findMember(txt);
	};

	$: if (showSearch)
		if (controlSearch) {
			controlSearch.focus();
		}
</script>

<div class="top-app-bar-container">
	<TopAppBar variant="static" prominent={false} dense class="primary">
		<Row class="bar-row">
			<Section class="bar-section">
				<IconButton
				on:click={() => push("/")}
					class="material-icons">menu</IconButton
				>
				<Title><a href="/" use:link>Kopma Unwir</a></Title
				>
			</Section>
			<Section align="end" toolbar>
				<IconButton class="material-icons" aria-label="Download">account_circle</IconButton>
				{#if showSearch}
					<form class="flex-row w-100" on:submit|preventDefault={handleSubmit}>
						<input
							in:fly={{ x: 150, duration: 500, delay: 100 }}
							out:fly={{ x: 150, duration: 500, delay: 100 }}
							aria-label="search-control"
							name="search-control"
							class="flex-1 w-100 search-box"
							type="text"
							placeholder="e.g. nama anggota"
							maxlength="50"
							bind:value={txt}
							bind:this={controlSearch}
						/>
					</form>
				{/if}
				<IconButton
					on:click={(e) => searchMember(e)}
					class="material-icons"
					aria-label="Print this page">search</IconButton
				>
				<IconButton
					href="/login"
					use={[link]}
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
		width: 100vw;
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
		background-color: color-palette.$amber-900;
		color: color-palette.$grey-100;
	}
	* :global(.material-icons) {
		color: color-palette.$grey-100;
	}

	.search-box {
		height: 28px;
		padding-left: 16px;
		font-size: medium;
		border-radius: 14px;
		outline-style: solid;
		outline-offset: 0;
		outline-width: 1px;
		outline-color: var(--border-color);
		color: var(--text-color);
		background-color: var(--control-background);
		border: none;
	}
	.search-box:focus-within {
		outline-style: solid;
		outline-width: 2px;
		outline-color: var(--accent-color);
		border: none;
	}
</style>

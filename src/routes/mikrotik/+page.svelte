<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { iUserActive, iUserSecret } from '$lib/interfaces';
	import { onMount } from 'svelte';

	import ActiveUser from './ActiveUser.svelte';
	import InactiveUser from './InactiveUser.svelte';
	import ActiveUserTool from './ActiveUserTool.svelte';

	type iUserTab = {
		id: number;
		name: string;
		isActive: string;
	};

	let innerWidth: number = 0;

	let inactive_user: iUserSecret[] = [];
	let active_user: iUserActive[] = [];
	let currentTab = 1;
	let isLoaded = 'is-loading';
	let txt = '';
	let is_grouped = false;

	let tabs: iUserTab[] = [
		{ id: 1, name: 'Inactive user', isActive: 'is-active' },
		{ id: 2, name: 'Active user', isActive: '' }
	];

	const loadInactiveUser = async () => {
		const list = await fetchApi
			.url('https://mikrotik.sapulidi.site/api/v1/secret', true)
			.get()
			.json<iUserSecret[]>();

		inactive_user = list.sort(); //list.map((m) => ({ ...m, isActive: false }));
	};

	const loadActiveUser = async () => {
		const list = await fetchApi
			.url('https://mikrotik.sapulidi.site/api/v1/active', true)
			.get()
			.json<iUserActive[]>();

		isLoaded = '';
		active_user = list;
	};

	const filterActiveUser = (search: string): iUserActive[] => {
		let condition = new RegExp(search);
		if (is_grouped) {
			if(search === "{All}") {
				return active_user.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
			} else {
				return active_user
					.filter((f) => condition.test(f.comment))
					.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
			}
		} else {
			if (search) {
				return active_user
					.filter((f) => condition.test(f.name.toLocaleLowerCase()))
					.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
			}
		}
		return active_user;
	};

	onMount(async () => {
		loadInactiveUser();
		loadActiveUser();
	});

	const changeActiveTab = (t: iUserTab) => {
		currentTab = t.id;
		tabs = tabs.map((m) => {
			if (t.id === m.id) {
				m.isActive = 'is-active';
			} else {
				m.isActive = '';
			}
			return m;
		});
	};

	function reload(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		isLoaded = 'is-loading';
		loadInactiveUser();
		loadActiveUser();
	}

	function searchUser(e: CustomEvent<string>): void {
		is_grouped = false;
		txt = e.detail;
	}

	function groupComment(e: CustomEvent<any>): void {
		is_grouped = true;
		txt = e.detail;
	}
</script>

<svelte:head>
	<title>Sapulidi Users</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="columns is-align-items-end">
	<div class="column is-4">
		<div class="title">Sapulidi users</div>
	</div>
	<div class="column">
		<div class="columns is-mobile is-align-items-end">
			<div class="column">
				Inactive user: <b>{inactive_user.length}</b>
			</div>
			<div class="column">
				Active user: {active_user.length}
			</div>
			<div class="column">
				Total user: {active_user.length + inactive_user.length}
			</div>
		</div>
	</div>
	<div class="column is-narrow">
		<button class="button is-primary {isLoaded}" on:click={reload}> Refresh </button>
	</div>
</div>

<div class="tabs">
	<ul>
		{#each tabs as t}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<li class={t.isActive}><a on:click={() => changeActiveTab(t)}>{t.name}</a></li>
		{/each}
	</ul>
</div>
{#if currentTab === 2}
	<ActiveUserTool on:searchUser={searchUser} users={active_user} on:groupComment={groupComment} />
{/if}
{#if innerWidth >= 640}
	<div class="columns is-gapless my-1 p-1 has-background-light">
		<div class="column is-1">ID</div>
		<div class="column is-2">NAME</div>
		<div class="column is-2">COMMENT</div>
		<div class="column is-1">SERVICE</div>
		<div class="column is-2">{currentTab === 1 ? 'PROFILE' : 'SESSION'}</div>
		<div class="column is-2">ADDRESS</div>
		<div class="column is-2">MAC</div>
	</div>
{/if}
{#if currentTab === 1}
	<InactiveUser users={inactive_user} bind:innerWidth />
{:else}
	<ActiveUser users={filterActiveUser(txt)} bind:innerWidth />
{/if}

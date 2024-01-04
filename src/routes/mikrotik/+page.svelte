<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { iUserActive, iUserSecret } from '$lib/interfaces';
	import { onMount } from 'svelte';

	import ActiveUser from './ActiveUser.svelte';
	import ActiveUserTool from './ActiveUserTool.svelte';
	import InactiveUser from './InactiveUser.svelte';

	type iUserTab = {
		id: number;
		name: string;
		isActive: string;
		icon: string;
	};

	let innerWidth: number = 0;

	let inactive_user: iUserSecret[] = [];
	let active_user: iUserActive[] = [];
	let currentTab = 1;
	let isLoaded = 'is-loading';
	let txt = '';
	let searchText = '';
	let is_grouped = false;
	let selectedGroup='';

	let tabs: iUserTab[] = [
		{ id: 1, name: 'Inactive user', isActive: 'is-active', icon: 'fa-power-off' },
		{ id: 2, name: 'Active user', isActive: '', icon: 'fa-wifi' }
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
			if (search === '{All}') {
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
		searchText = txt;
	}

	function groupComment(e: CustomEvent<any>): void {
		is_grouped = true;
		txt = e.detail;
		selectedGroup = txt;
	}
</script>

<svelte:head>
	<title>Sapulidi Users</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="container is-max-desktop">
	<div class="columns is-align-items-end">
		<div class="column is-4">
			<div class="title is-family-secondary">Sapulidi users</div>
		</div>
		<div class="column">
			<div class="columns is-mobile is-align-items-center">
				<div class="column">
					<span class="icon"><i class="fa fa-power-off"></i></span>
					<span class="is-size-4"><b>{inactive_user.length}</b></span>
				</div>
				<div class="column">
					<span class="icon"><i class="fa fa-wifi"></i></span>
					<span class="is-size-4">{active_user.length}</span>
				</div>
				<div class="column">
					<span class="icon"><i class="fa fa-cloud"></i></span>
					<span class="is-size-4">{active_user.length + inactive_user.length}</span>
				</div>
				<div class="column is-narrow">
					<button class="button is-warning {isLoaded}" on:click={reload}>
						<span class="icon">
							<i class="fa-solid fa-rotate"></i>
						</span>
						<span>Refresh</span></button
					>
				</div>
			</div>
		</div>
	</div>
	<hr class="p-0 m-0" />
	<div class="tabs">
		<ul>
			{#each tabs as t}
				<li class={t.isActive}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={() => changeActiveTab(t)}>
						<span class="icon is-small">
							<i class="fa {t.icon}"></i>
						</span>
						<span>{t.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	{#if currentTab === 2}
		<ActiveUserTool on:searchUser={searchUser} 
		users={active_user} on:groupComment={groupComment}
		selectedGroup={selectedGroup}
		txt={searchText}
		 />
	{/if}
	{#if innerWidth >= 640}
		<div class="columns is-gapless my-1 p-1 has-background-light has-text-weight-semibold">
			<div class="column is-5">
				<div class="columns is-gapless">
					<div class="column is-2">ID</div>
					<div class="column is-4">NAME</div>
					<div class="column is-6">COMMENT</div>
				</div>
			</div>
			<div class="column is-7">
				<div class="columns is-gapless">
					<div class="column is-2">SERVICE</div>
					<div class="column is-3">{currentTab === 1 ? 'PROFILE' : 'SESSION'}</div>
					<div class="column is-4">ADDRESS</div>
					<div class="column is-3">MAC</div>
				</div>
			</div>
		</div>
	{/if}
	{#if currentTab === 1}
		<InactiveUser users={inactive_user} bind:innerWidth />
	{:else}
		<ActiveUser users={filterActiveUser(txt)} bind:innerWidth />
	{/if}
</div>

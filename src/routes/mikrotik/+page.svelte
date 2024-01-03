<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { iUserActive, iUserSecret } from '$lib/interfaces';
	import { onMount } from 'svelte';

  import ActiveUser from './ActiveUser.svelte';
  import InactiveUser from './InactiveUser.svelte';


  type iUserTab = {
    id: number;
    name: string;
    isActive: string;
  }

	let inactive_user: iUserSecret[] = [];
  let active_user: iUserActive[] = [];
  let currentTab = 1;
  let isLoaded = "is-loading";

  let tabs: iUserTab[] = [
    {id: 1, name: 'Inactive user', isActive: 'is-active'},
    {id: 2, name: 'Active user', isActive: ''}
  ]

	const loadInactiveUser = async () => {
		const list = await fetchApi
			.url('https://mikrotik.sapulidi.site/api/v1/secret', true)
			.get()
			.json<iUserSecret[]>();

		inactive_user = list; //list.map((m) => ({ ...m, isActive: false }));
	};

	const loadActiveUser = async () => {
		const list = await fetchApi
			.url('https://mikrotik.sapulidi.site/api/v1/active', true)
			.get()
			.json<iUserActive[]>();

      isLoaded = "";
		active_user = list;
	};

	onMount(async () => {
		loadInactiveUser();
		loadActiveUser();
	});

  const changeActiveTab = (t: iUserTab) => {
    currentTab = t.id;
    tabs = tabs.map(m => {
      if(t.id === m.id) {
        m.isActive = 'is-active'
      } else {
        m.isActive = '';
      }
      return m;
    })
  }


	function reload(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
    isLoaded = "is-loading";
		loadInactiveUser();
		loadActiveUser();
	}
</script>
<svelte:head>
	<title>Sapulidi Users</title>
</svelte:head>

<div>
  <div class="columns is-align-items-end">
    <div class="column">
      <div class="title">Sapulidi users</div>
    </div>
    <div class="column">Inactive user: <b>{inactive_user.length}</b></div>
    <div class="column is-narrow">
      <button class="button is-primary {isLoaded}" on:click={reload}>
        Refresh
      </button>
    </div>
  </div>
  
  <div class="tabs">
    <ul>
      {#each tabs as t }
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <li class="{t.isActive}"><a on:click={() => changeActiveTab(t)}>{t.name}</a></li>
      {/each}
    </ul>
    <hr />
  </div>
  <div class="table-container">
	<table class="table is-small is-fullwidth">
		<thead>
			<tr>
				<th>ID</th>
				<th>NAME</th>
				<th>COMMENT</th>
				<th>SERVICE</th>
				<th>{currentTab === 1 ? 'PROFILE':'SESSION'}</th>
				<th>ADDRESS</th>
				<th>MAC</th>
			</tr>
		</thead>
		<tbody>
      {#if currentTab === 1}
      <InactiveUser users={inactive_user} />
      {:else}
      <ActiveUser users={active_user} />
      {/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="3">Inactive user: {inactive_user.length}</td>
				<td colspan="3">Active user: {active_user.length}</td>
				<td>Total user: {active_user.length + inactive_user.length}</td>
			</tr>
		</tfoot>
	</table>
  </div>
</div>
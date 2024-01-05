<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { iCustomer, iUserActive, iUserRouter } from '$lib/interfaces';
	import UserInfo from './UserInfo.svelte';

	export let users: iUserActive[] = [];
	export let innerWidth: number = 0;
	export let customers: iCustomer[] = [];

	let selectedUser: iUserActive; 
	let isActive = '';

	const getUserRouter = async (name: string) => {
		return await fetchApi
			.get(`/v3/routers/${name}`)
			.json<iUserRouter>();
	};

	const loadMemberNotAssociated = async () => {
		return await fetchApi
			.get(`/v3/routers/list-not-associated`)
			.json<iCustomer[]>();
	};


	async function show_user_info(data: iUserActive) {
		const user  = await getUserRouter(data.name);

//		if(user.member_id === 0) {
			if(customers.length === 0) {
				customers = await loadMemberNotAssociated();
			}
//		}

		selectedUser = {...data, isAssociated: user && user.member_id != 0};
		isActive = 'is-active';
	}

	function onSave(e: CustomEvent<iUserActive>): void {
		isActive = '';
		//console.log(e.detail);
	}

	async function reloadMember(e: CustomEvent<any>): Promise<void> {
		customers = await loadMemberNotAssociated();
	}
</script>

{#each users as d, i (d.id)}
	<div
		class="columns is-mobile is-gapless {innerWidth <= 640
			? 'p-2  has-background-light message-body'
			: i % 2 === 1
			? 'my-1 p-1 has-background-light'
			: 'px-1 my-1'}"
	>
		<div class="column is-5">
			<div class="columns is-gapless">
				<div class="column is-2">{d.id.substring(4, d.id.length)}</div>
				<div class="column is-4 has-text-weight-bold">
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<a on:click={() => show_user_info(d)}>{d.name}</a>
				</div>
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

{#if isActive === 'is-active'}

<UserInfo
	data={{ ...selectedUser }}
	bind:isActive
	on:onSave={onSave}
	on:reloadMember={reloadMember}
	customers={customers}
/>

{/if}
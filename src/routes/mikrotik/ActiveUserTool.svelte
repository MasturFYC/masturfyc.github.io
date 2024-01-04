<script lang="ts">
	import type { iUserActive } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';

	type ReportGroup = {
		comment: string;
		data: iUserActive[];
	};

	export let users: iUserActive[] = [];
  export let selectedGroup = '';
  export let txt = '';

	const dispatch = createEventDispatcher();

	let userName: string = txt;
	let comment: string = selectedGroup;

	const submit = async () => {
		dispatch('searchUser', userName.toLowerCase());
	};

	const groupBy = (data: iUserActive[] | undefined): ReportGroup[] => {
		if (data) {
			const groupedKeys = data.reduce((group: { [key: string]: iUserActive[] }, item) => {
				if (!group[item.comment]) {
					group[item.comment] = [];
				}
				group[item.comment].push(item);
				return group;
			}, {});

			return Object.entries(groupedKeys)
				.map(([label, data]) => {
					return {
						comment: label,
						data
					};
				})
				.sort((a, b) => (a.comment < b.comment ? -1 : a.comment > b.comment ? 1 : 0));
		}

		return [];
	};

	function changeGroup(e: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		dispatch('groupComment', comment);
	}
</script>

<div class="columns">
	<div class="column is-narrow">
		<div class="control has-icons-left is-fullwidth">
			<div class="select">
				<select
					bind:value={comment}
					placeholder="Select comment"
					on:change={changeGroup}
				>
					<option value={'{All}'}>{'{All}'}</option>
					{#each groupBy(users) as u}
						<option value={u.comment}>{u.comment}</option>
					{/each}
				</select>
				<span class="icon is-small is-left">
					<i class="fa-solid fa-location-pin"></i>
				</span>
			</div>
		</div>
	</div>
	<div class="column">
		<form on:submit|preventDefault={submit}>
			<div class="columns is-gapless is-mobile">
				<div class="column mr-2">
					<div class="control has-icons-left">
						<input type="text" class="input" bind:value={userName} placeholder="User name" />
						<span class="icon is-small is-left">
							<i class="fas fa-user"></i>
						</span>
					</div>
				</div>
				<div class="column is-narrow">
					<button type="submit" class="button is-info">
						<span class="icon">
							<i class="fa-solid fa-magnifying-glass"></i>
						</span>
						<span>Search</span>
					</button>
				</div>
			</div>
		</form>
	</div>
</div>

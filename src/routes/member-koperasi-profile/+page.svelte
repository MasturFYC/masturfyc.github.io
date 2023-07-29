<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import axios from '$lib/axios-base';
	import type { MemberKoperasi, iAccount } from '$lib';
	import { initMember } from '../member-koperasi/store';
	import ProfileBox from './ProfileBox.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import { coa_payments } from '$lib/store';
	import SpBox from './SpBox.svelte';
	import SwList from './SwList.svelte';
	import ShrList from './ShrList.svelte';
	import SwPin from './SwPin/index.svelte';

	const member_id = parseInt($page.url.searchParams.get('id') ?? '0');
	const client = useQueryClient();
	let member: MemberKoperasi = { ...initMember };

	const tab_profile = 'Profile';
	const tab_sp = 'Simpanan Pokok';
	const tab_sw = 'Simpanan Wajib';
	const tab_shr = 'Simpanan Hari Raya';
	const tab_pin = 'Pinjaman';
	const tab_resume = 'Resume';
	const tab_history = 'History';
	const tab_setting = 'Settings';
	
	const tabs = [tab_profile, tab_pin, tab_sw, tab_shr, tab_sp, tab_resume, tab_history, tab_setting];
	let active = tab_profile;

	async function fetchMember(id: number) {
		const { data } = await axios.get<MemberKoperasi>(`/koperasi/member/${id}`);
		return data;
	}

	async function fetchCoaPayments() {
		const { data } = await axios.get<iAccount[]>('/coa/payment');
		return data;
	}

	async function loadMember(id: number) {
		const data =
			client.getQueryData<MemberKoperasi>(['members', { id: id }]) ??
			(await client.fetchQuery<MemberKoperasi>(['members', { id: id }], () => fetchMember(id)));
		member = data ?? { ...initMember };
	}

	const loadAccount = async () => {
		const data =
			client.getQueryData<iAccount[]>(['coa', 'payment']) ??
			(await client.fetchQuery<iAccount[]>(['coa', 'payment'], () => fetchCoaPayments()));
		coa_payments.update(() => data ?? []);
	};

	onMount(() => {
		loadMember(member_id);
		if ($coa_payments.length === 0) {
			loadAccount();
		}
	});
</script>

<svelte:head>
	<title>Profile Anggota - (Kopma Unwir)</title>
</svelte:head>

<section class="mt-20 mb-20">
	<div class="title mb-20">{member.name}</div>
	<div class="flex-row flex-wrap">
		<TabBar {tabs} let:tab bind:active>
			<Tab {tab} minWidth>
				<Label>{tab}</Label>
			</Tab>
		</TabBar>
		<div class="flex-1 box-shadow">
			{#if active === tab_profile}
				<ProfileBox {member} on:update={(e) => (member = e.detail.data)} />
			{:else if active === tab_sp}
				<SpBox {member} />
			{:else if active === tab_sw}
				<SwList {member} />
			{:else if active === tab_shr}
				<ShrList {member} />
			{:else if active === tab_pin}
				<SwPin {member} />
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	* :global(.mdc-tab-bar) {
		max-width: 200px;
	}
	* :global(.mdc-tab__text-label) {
		text-align: left;
		flex: 1;
	}
	* :global(.mdc-tab) {
		flex-direction: column;
		width: 100%;
		margin: 0;
	}
	* :global(.mdc-tab-scroller__scroll-content) {
		overflow-y: visible;
		overflow-x: hidden;
		flex-direction: column;
		align-items: flex-start;
	}

	* :global(.mdc-tab-indicator__content--underline) {
		border: none;
		width: 100%;
	}

	* :global(.mdc-tab-indicator--active) {
		border-left: 3px solid var(--accent-color);
		background-color: var(--control-background);
	}

	.box-shadow {
		flex: 1;
		background-color: var(--control-background);
		padding: 12px 24px;
		min-height: 100%;
		max-width: 960px;
	}

	@media screen and (max-width: 480px) {
		* :global(.mdc-tab-bar) {
			max-width: 100%;
		}
		* :global(.mdc-tab) {
			flex-direction: row;
		}

		* :global(.mdc-tab__content) {
			padding-left: 6px;
			padding-right: 6px;
		}

		* :global(.mdc-tab-scroller__scroll-content) {
			overflow-y: hidden;
			overflow-x: scroll;
			flex-direction: row;
			align-items: center;
		}

		* :global(.mdc-tab-indicator__content--underline) {
			border: none;
			background: inherit;
		}

		* :global(.mdc-tab-indicator--active) {
			border: none;
			background-color: var(--control-background);
			border-top: 2px solid var(--accent-color);
		}
		.box-shadow {
			padding: 12px;
		}
	}
</style>

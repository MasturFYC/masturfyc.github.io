<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
  import { page } from '$app/stores'
	import { onMount } from 'svelte';
  import axios from '$lib/axios-base'
	import type { MemberKoperasi, iAccount } from '$lib';
  import { initMember } from '../member-koperasi/store';
  import ProfileBox from './ProfileBox.svelte';

  import { goto } from '$app/navigation';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
	import SpBox from './SpBox.svelte';

  const member_id = parseInt($page.url.searchParams.get('id') ?? '0')
  const client = useQueryClient();
  let member: MemberKoperasi = { ...initMember };
  let coas: iAccount[] = [];

  const tab_profile = 'Profile';
  const tab_sp = 'Simpanan Pokok';
  const tab_sw = 'Simpanan Wajib';
  const tab_shr = 'Simpanan Hari Raya';
  const tab_pin = 'Pinjaman';
  const tabs = [tab_profile, tab_sp, tab_sw, tab_shr, tab_pin];
  let active = tab_profile;

  async function fetchMember(id: number) {
    const {data} = await axios.get<MemberKoperasi>(`/koperasi/member/${id}`)
    return data;
  }

  async function fetchCoaPayments() {
    const {data} = await axios.get<iAccount[]>('/coa/payment')
    return data;
  }

  async function loadMember (id: number) {
    const data = client.getQueryData<MemberKoperasi>(['members', {id: id}]) ??
    await client.fetchQuery<MemberKoperasi>(['members', {id: id}], () => fetchMember(id));
    member = data ?? {...initMember};
  }

	const loadAccount = async () => {
		const data =
			client.getQueryData<iAccount[]>(['coa', 'payment']) ??
			(await client.fetchQuery<iAccount[]>(['coa', 'payment'], () => fetchCoaPayments()));
		coas = data ?? [];
	};


  onMount( () => {
    loadMember(member_id);
    loadAccount();
  })

</script>
<svelte:head>
  <title>Profile Anggota - (Kopma Unwir)</title>
</svelte:head>

<section class="mt-20 mb-20">
  <div class="title mb-20">{member.name}</div>

  <div>
    <TabBar tabs={tabs} let:tab bind:active>
      <Tab {tab} minWidth>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>

  {#if active === tab_profile}
    <ProfileBox {member} on:update={(e) => member = e.detail.data} />
  {:else if active === tab_sp}
      <SpBox {member} {coas} />
  {/if}
</section>
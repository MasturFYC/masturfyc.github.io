<script lang="ts">
	import { onMount } from "svelte";


type iMember = {
  id: number;
  name: string;
  created_at: string;
  address?: string;
  phone?: string;
  is_active: boolean;
  type_id: number;
}

type iCustomer = iMember & {
  unit_id: number;
  unit_name?: string;
  paket_id: number;
  paket_name?: string;
}

const endpoint = '/customer/index';

let customers: iCustomer[] = []

const loadCustomer = async (callback: (e: iCustomer[]) => void) => {
  const data = await fetch(endpoint);
  callback(await data.json())
}

onMount(() => {
  loadCustomer((e: iCustomer[]) => {
    customers = e;
  })
})

</script>
<h1>Welcome to Fine Young Canibals</h1>
<p>Visit <a href="https://sapulidi.site">sapulidi.site</a> to read the documentation</p>
<ul>
{#each customers as c (c.id)}
  <li>{c.name}
{/each}
</ul>
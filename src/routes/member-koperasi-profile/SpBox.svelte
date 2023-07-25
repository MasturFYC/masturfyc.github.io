<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import axios from '$lib/axios-base';
	import type { Transaction, TransactionDetail, MemberKoperasi, iAccount } from '$lib';
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import ViewJournal from '../../components/ViewJournal.svelte';
	import Select,{Option} from '@smui/select';

	const client = useQueryClient();

  export let member: MemberKoperasi;
  export let coas: iAccount[] = [];

	const initDetail: TransactionDetail = {
		id: 0,
		trx_id: 0,
		account_id: 0,
		description: 'Simpanan pokok',
		debt: 0,
		cred: 0,
		ref_id: 0,
		name: 'Simpanan pokok',
		is_new: true
	};

	const accountId = 301;
	let cred = 25000;

	let trx: Transaction = {
		id: 0,
		name: 'SIMPANAN-POKOK',
		member_id: member.member_id,
		created_at: dayjs().format('YYYY-MM-DD'),
		updated_at: dayjs().format('YYYY-MM-DD'),
		is_valid: true,
		description: 'Penerimaan simpanan pokok dari ' + member.name,
		details: [
			{ ...initDetail, account_id: 301, cred: 25000, name: getAccountName(301) },
			{ ...initDetail, account_id: 101, debt: 25000, name: getAccountName(101) }
		]
	};

  let selectedAccount: iAccount;

  function getAccountName (e: number, name = 'Simpanan pokok') {
    if(coas && coas.length > 0) {
      const d = coas.filter(o => o.id === e)[0]
      if(d) {
        return d.name
      }
    }
    return name;
  }

	async function fetchTransaction(id: number) {
		const { data } = await axios.get<Transaction>(
			`/koperasi/member/simpanan-pokok/${id}/${accountId}`
		);
		return data;
	}

	async function loadTransaction(id: number) {
		const data =
			client.getQueryData<Transaction>(['trx', { id: id }]) ??
			(await client.fetchQuery<Transaction>(['trx', { id: id }], () => fetchTransaction(id)));
		if (data && data.id > 0) {
			trx = data;
		}
	}

  const getAccountKey = (e: iAccount) => {
    return e ? `${e.id}` : '0'
  }
  
	onMount(() => {
		loadTransaction(member.member_id);
	});


	// const getSimpananPokok = (details: TransactionDetail[]) => {
	// 	const d = details.filter((f) => f.account_id === accountId)[0];
	// 	if (d) {
	// 		return d.cred;
	// 	}
	// 	return 0;
	// };

  const setSelectedAccount = (details: TransactionDetail[] | undefined) => {
    if(details && details.length > 0) {
      const d = details.filter(o => o.account_id < 200 )[0];
      if(d && coas && coas.length > 0) {
        const p = coas.filter(f => f.id === d.account_id)[0];
        if(p) {
          selectedAccount = p;
        }
      } 
    }
  }

  const setDetailAccount = (acc: iAccount | undefined) => {
    if(acc && trx && trx.details) {
      const details = trx.details;
      const i = details.findIndex(f => f.account_id < 200);
      if(i >= 0)
      {
        const d = {
          ...details[i],
          account_id: acc.id,
          name: acc.name
        };
        details.splice(i,1,d);
        trx = {...trx, details: details}
      }
    }
  }

  const postSP = async () => {
    const url = '/trx/transaction/insert';
		const {data} = await axios.post(url, trx, {
			headers: { 'Content-Type': 'application/json' }
		});

    if(data.id > 0) {
			trx.id = data.id;
     	client.invalidateQueries(['trx', { id: member.member_id }])
		}
  }

  $: setSelectedAccount(trx.details)
  $: setDetailAccount(selectedAccount)

</script>

<div class="box-shadow">
	<div class="div-content p-y-2">
		{#if trx.id === 0}
			<div>
				<div class="mb-10">{member.name} belum mempunyai data simpanan pokok, ingin membuatnya?</div>
				<div class="flex flex-row mb-10">
					<Textfield
						bind:value={cred}
						label="Default jumlah simpanan"
						input$maxlength={9}
						type="number"
						input$placeholder="e.g. 25000"
						variant="filled"
					/>
          <Select
					input$class="flex-1"
					key={getAccountKey}
					label="Akun penerimaan"
					variant="filled"
					bind:value={selectedAccount}
				>
					{#each coas as c (c.id)}
						<Option value={c}>{c.name}</Option>
					{/each}
				</Select>          
				</div>
				<Button
        on:click={() => postSP()}
        variant="outlined">Buat simpanan pokok</Button>
			</div>
		{:else}
			<div class="flex-row flex-center">{member.name} sudah mempunyai simpanan pokok. <ViewJournal {trx} /></div>
		{/if}
	</div>
</div>

<!-- <pre>{JSON.stringify(trx, null, 3)}</pre> -->

<style lang="scss">
	* :global(.icon:visited) {
		color: var(--text-color);
	}

	.div-content {
		margin: 12px;
	}
	.box-shadow {
		box-shadow: 1px 1px 5px var(--shadow-color);
		flex: 1;
		background-color: var(--control-background);
	}
	.p-y-2 {
		padding: 12px 0;
	}
</style>

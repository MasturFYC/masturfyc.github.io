<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';
	import type { LoanTransaction, Loan, MemberKoperasi, TransactionDetail, iAccount } from '$lib';
	import dayjs from 'dayjs';
	import Button from '@smui/button';
	import Dialog, { Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { Title } from '@smui/top-app-bar';
	import Select, { Option } from '@smui/select';
	import { coa_payments } from '$lib/store';
	import Property from '../../../components/Property.svelte';
	import { numberToText } from '$lib/conver-number-to-string';
	import { acc_cash, acc_loan, acc_provision } from '../store';

	const dispatch = createEventDispatcher();

	export let trx: LoanTransaction;
	export let title = 'Pinjaman';

	let open = false;
	let dirty = false;
	let price = 0;
	let description = '';
	let created_at = dayjs().format('YYYY-MM-DD');
	let clicked = 'no action';
	let selectedAccount: iAccount;
	let period = 0;

	const getAccountKey = (e: iAccount) => {
		return e ? `${e.id}` : '0';
	};

	const setSelectedAccount = (details: TransactionDetail[] | undefined) => {
		if (details && details.length > 0) {
			const d = details.filter((o) => o.account_id < 111)[0];
			if (d && $coa_payments.length > 0) {
				const p = $coa_payments.filter((f) => f.id === d.account_id)[0];
				if (p) {
					selectedAccount = p;
				}
			}
		}
	};

	// const setPrice = (details: TransactionDetail[] | undefined) => {
	// 	if (details && details.length > 0) {
	// 		const d = details.filter((o) => o.account_id === acc_provision)[0];
	// 		if (d) {
	// 			price = d.debt;
	// 		}
	// 	}
	// };

	const setData = (e: LoanTransaction) => {
		setSelectedAccount(e.details);
		description = trx.description ?? '';
		price = trx.loan.nominal;
		period = trx.loan.period;
		created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
	};

	const setDetailAccount = (acc: iAccount | undefined) => {
		if (acc && trx && trx.details) {
			const details = trx.details;
			const i = details.findIndex((f) => f.account_id < acc_loan);
			if (i >= 0) {
				const d = {
					...details[i],
					account_id: acc.id,
					name: acc.name
				};
				details.splice(i, 1, d);
				trx = { ...trx, details: details };
				dirty = true;
			}
		}
	};

	function getProsentase(nominal: number): number {
		if (nominal <= 20000000) return 1.0;
		else if (nominal >= 21000000 && nominal <= 30000000) return 1.2;
		else return 1.5;
	}

	let principal = 0;
	let service = 0;
	let prosentase = 0;
	let provision = 0;

	const previewChange = (n: number, p: number) => {
		prosentase = getProsentase(n);
		principal = n / p;
		service = n * (prosentase / 100.0);
		provision = n * (1.0 / 100.0);
	};

	function changeNominal(n: number /* nominal */, p: number /* period */) {

		const _prosentase = getProsentase(n);

		const _principal = n / p;
		const _service = n * (_prosentase / 100.0);
		const _provision = n * (1.0 / 100.0);

		const loan = {
			...trx.loan,
			nominal: n,
			period: p,
			principal: _principal,
			service_price: _service,
			provision: _provision,
		};

		const details = trx.details;

		if (details && details.length > 0) {
			let i = details?.findIndex((f) => f.account_id === acc_loan);
			if (i >= 0) {
				const d1 = details[i];
				details.splice(i, 1, { ...d1, cred: 0, debt: n });
			}
			i = details?.findIndex((f) => f.account_id === acc_provision);
			if (i >= 0) {
				const d1 = details[i];
				details.splice(i, 1, { ...d1, cred: _provision, debt: 0 });
			}
			i = details?.findIndex((f) => f.account_id === acc_cash);
			if (i >= 0) {
				const d1 = details[i];
				details.splice(i, 1, { ...d1, cred: n - _provision, debt: 0 });
			}
		}

		return { ...trx, 
			description: description,
			created_at: created_at,
			loan: loan,
			details: [...(details ?? [])] };
	}

	// const setTransactionDetils = (e: TransactionDetail[] | undefined) => {
	// 	if (e && e.length > 1) {
	// 		const d1 = e[0];
	// 		const d2 = e[1];
	// 		d1.cred = price;
	// 		d1.debt = 0;
	// 		d2.debt = price;
	// 		d2.cred = 0;
	// 		d2.account_id = selectedAccount.id;
	// 		d2.name = selectedAccount.name;

	// 		return [d1, d2];
	// 	}
	// 	return [];
	// };

	const resetData = () => {
		setSelectedAccount(trx.details);
		if (trx.id === 0) {
			price = 0;
		} else {
			price = trx.loan.nominal;
		}
		period = trx.loan.period;
		description = trx.description ?? '';
		created_at = dayjs(trx.created_at).format('YYYY-MM-DD');
	};

	$: setDetailAccount(selectedAccount);

	$: setData(trx);

	$: isPriceValid = price > 0;
	$: isPeriodValid = period > 0;
	$: isAccountValid = selectedAccount && selectedAccount.id > 0;
	$: isDisabled = !isPriceValid || !isAccountValid || !dirty || !isPeriodValid;

	//$: changeNominal(price, period)
	//$: setSelectedAccount(trx.details);

	$: if (clicked === 'yes') {
		clicked = 'no action';
		const isNew = trx.id === 0;
		//		dirty = false;
		dispatch('change', {
			data: changeNominal(price, period)
		});

		if (isNew) {
			resetData();
		}
	}

	$: if (clicked === 'no') {
		clicked = 'no action';
		resetData();
	}

	$: previewChange(price, period);
</script>

<IconButton
	title={trx.id === 0 ? `Ajukan ${title.toLowerCase()}` : `Edit ${title.toLowerCase()}`}
	class="material-icons icon"
	size="{trx.id === 0 ? 'normal' : 'button'}"
	on:click={async () => {
		open = true;
	}}
	aria-label="New transaction">{trx.id === 0 ? 'note_add' : 'edit'}</IconButton
>

<Dialog
	surface$style="width: 640px; max-width: calc(100vw - 32px);overflow:unset;"
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	bind:open
>
	<Title id="simple-title" style={'margin: 16px;padding:0'}>{title}</Title>
	<Content id="simple-content" style="overflow:unset;margin:0 16px;padding:0">
		<form			
			on:submit|preventDefault={() => {
				clicked = 'yes';
				open = false;
			}}
		>
		<div class="flex-row gap-x-2 flex-wrap gap-y-2">
			<div class="flex-1 flex-col">
					<div class="flex-row flex-1">
						<div class="flex-col flex-1">
							<Textfield
								use={[InitialFocus]}
								bind:dirty
								bind:value={price}
								label="Besar pinjaman"
								type="number"
								invalid={!isPriceValid}
								input$placeholder="e.g. 125000"
								variant="filled"
							/>
							<Textfield
								use={[InitialFocus]}
								bind:dirty
								bind:value={period}
								label="Jumlah periode"
								type="number"
								invalid={!isPeriodValid}
								input$placeholder="e.g. 10"
								variant="filled"
							/>
						</div>
						<div class="flex-col">
							<Textfield
								bind:dirty
								bind:value={created_at}
								label="Tanggal transaksi"
								type="date"
								variant="filled"
							/>
							<Select
								key={getAccountKey}
								label="Akun pengeluaran"
								variant="filled"
								invalid={!isAccountValid}
								bind:value={selectedAccount}
							>
								{#each $coa_payments as c (c.id)}
									<Option value={c}>{c.name}</Option>
								{/each}
							</Select>
						</div>
					</div>
					<Textfield
						bind:dirty
						bind:value={description}
						textarea
						class="mt-20"
						label="Deskripsi"
						input$rows={3}
						input$emptyValueUndefined
						input$maxlength={256}
					/>

			</div>
			<div class="w-120">
				<div class="flex-row gap-x-4 gap-y-2 flex-wrap mb-10">
					<div class="flex-col gap-y-2">
						<Property label="Prosentase" value={`${prosentase.toLocaleString('id-ID')}%`} />
						<Property label="Provisi" value={provision.toLocaleString('id-ID')} />
						<Property label="Uang diterima kreditur" value={(price - provision).toLocaleString('id-ID')} />
					</div>
					<div class="flex-col gap-y-2 flex-1">
						<Property label="Pokok" value={principal.toLocaleString('id-ID')} />
						<Property label="Jasa pinjaman" value={service.toLocaleString('id-ID')} />
						<Property
							label="Angsuran / periode (Pokok + Jasa)"
							value={(principal + provision).toLocaleString('id-ID')}
						/>
					</div>
				</div>
				<Property label="Terbilang" value={numberToText((price - provision).toString())} />
	
			</div>

		</div>
			<input disabled={isDisabled} type="submit" style={'display:none'} />
		</form>
	</Content>

	<Actions>
		<Button ripple color="secondary" on:click={() => (clicked = 'no')}>Batal</Button>
		<Button disabled={isDisabled} color="primary" ripple on:click={() => (clicked = 'yes')}
			>Simpan</Button
		>
	</Actions>
</Dialog>

<style lang="scss">
	* :global(input[type='number']::-webkit-outer-spin-button),
	* :global(input[type='number']::-webkit-inner-spin-button) {
		-webkit-appearance: none;
		margin-right: 0;
	}

	* :global(input[type='number']) {
		-moz-appearance: textfield;
	}

	.gap-y-2 {
		row-gap: 12px;
	}

	.gap-x-4 {
		column-gap: 24px;
	}

	.gap-x-2 {
		column-gap: 12px;
	}
	.w-120 {
		width: 250px;
	}

	@media screen and (max-width: 600px) {
		.w-120 {
		width: 100%;
	}
	}
</style>

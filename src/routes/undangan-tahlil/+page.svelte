<script lang="ts">
	import dayjs from 'dayjs';
	import { UndanganTahlil } from '$lib/interfaces';
	import Modal from '$lib/components/Modal.svelte';
	import { user } from '$lib/store';
	import { onMount } from 'svelte';

	let is_download = false;
	let clicked = 'no';
	let showModal = false;

	const getBada = (e: dayjs.Dayjs) => {
		const j = e.hour();
		const m = e.minute();
		if (j >= 12 && j < 16) return `${e.format('HH.mm')} WIB (Ba'da Dzuhur)`;
		else if (j >= 16 && j < 18) return `${e.format('HH.mm')} WIB (Ba'da Ashar)`;
		else if (j >= 18 && j < 19) return `${e.format('HH.mm')} WIB (Ba'da Maghrib)`;
		else if (j >= 19 && j < 24) return `${e.format('HH.mm')} WIB (Ba'da Isya)`;
		return `${e.format('HH.mm')} WIB (Ba'da Subuh)`;
	};

	let data = new UndanganTahlil(
		false,
		'',
		dayjs().format('YYYY-MM-DD'),
		'',
		dayjs().format('dddd'),
		dayjs().format('HH:mm'),
		getBada(dayjs()),
		'',
		'',
		215.9,
		330.3
	);

	const contohData = () => {
		const jam = dayjs().hour(19).minute(20);
		return new UndanganTahlil(
			false,
			'Megawati',
			jam.format('YYYY-MM-DD'),
			'mengenang 100 hari wafatnya ibunda',
			jam.format('dddd'),
			jam.format('HH:mm'),
			getBada(jam),
			'Jl. Cempaka No. 120-C Kel. Margasari Kedoya - Jakarta Selatan',
			'Puan Maharani',
			215.9,
			330.3
		);
	};

	$: {
		data.hari = dayjs(data.tanggal).format('dddd');
		data.waktu = getBada(dayjs(data.tanggal + ' ' + data.jam));
	}

	const handleSubmit = async () => {
		is_download = true;

		const baseUrl = import.meta.env.VITE_API_URL;
		let filename = '';
		const url = baseUrl + 'v1/undangan-tahlil';

		await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/pdf',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...data,
				tanggal: dayjs(data.tanggal).format('DD MMMM YYYY')
			})
		})
			.then((response) => {
				filename = response.headers.get('x-suggested-filename') ?? 'undangan-tahlil.pdf';
				return response.blob();
			})
			.then((pdfBlob) => {
				const blob = new Blob([pdfBlob], { type: 'application/pdf' });
				var url = window.URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = url;
				a.download = filename;
				a.click();
				a.remove();
				setTimeout(() => (is_download = false), 1000);
				window.URL.revokeObjectURL(url);
			})
			.catch((error) => {
				is_download = false;
				console.log(error);
			});
	};

	onMount(() => {
		user.set('')
	})

	$: if (clicked === 'yes') {
		showModal = false;
		data = contohData();
		clicked = 'no';
	}
</script>

<svelte:head>
	<title>Undangan Tahlil</title>
	<meta name="description" content="Undangan tahlil this app" />
</svelte:head>

<section>
	<div class="title">Undangan Tahlil</div>

	<div class="flex-row gap-x-20 flex-wrap flex-base">
		<div class="flex-1 mb-10">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="flex-col flex-1">
					<div class="flex-row gap-x-6 flex-center">
						<label style="display: flex;flex-direction: row; gap: 6px;align-items:baseline">
							<input id="gen" type="checkbox" bind:checked={data.jenisKelamin} />
							<span>Jenis kelamin ({data.jenisKelamin ? 'Laki-laki' : 'Perempuan'})</span>
						</label>
					</div>
					<label>
						<span class="label-span">Nama {data.jenisKelamin ? 'almarhum' : 'almarhumah'}</span>
						<input
							type="text"
							bind:value={data.namaAlmarhum}
							class="flex-1"
						/>
					</label>
					<label>
						<span class="label-span">Tanggal dan jam acara</span>
						<div class="flex flex-row gap-x-2 flex-1">
							<input type="date" bind:value={data.tanggal} class="flex-1" style="width: 100%;" />
							<input type="time" bind:value={data.jam} style="width:120px" />
						</div>
					</label>
					<label>
						<span class="label-span">Acara peringatan</span>
						<input
							type="text"
							bind:value={data.acara}
							class="flex-1"
						/>
					</label>
					<label>
						<span class="label-span">Tempat acara dilangsungkan</span>
						<textarea
							rows="3"
							bind:value={data.tempatAcara}
							class="flex-1"
						/>
					</label>
					<label>
						<span class="label-span">Nama pemangku hajat</span>
						<input
							type="text"
							bind:value={data.pemangkuHajat}
							class="flex-1"
						/>
					</label>
				</div>
				<div class="mt-2">
					<button type="submit" disabled={is_download}>Download</button>
					<button type="button" disabled={is_download || $user === ''} on:click={() => (showModal = true)}
						>Kasih saya contoh data</button
					>
					{#if is_download}
						<div>Please wait...</div>
					{/if}
				</div>
			</form>
		</div>
	</div>
</section>

<Modal bind:showModal>
	<div slot="header">Contoh data</div>
	<div>
		<pre>{JSON.stringify(contohData(), null, 2)}</pre>
	</div>
	<div slot="footer" class="flex-row flex-base gap-x-20">
		<div class="flex-1">
			Jika anda setuju dengan contoh data ini, click Yes. Tekan ESC kalo tidak setuju dan menutup
			dialog ini.
		</div>
		<button on:click|preventDefault={() => (clicked = 'yes')}>Yes setuju</button>
	</div>
</Modal>

<style lang="scss">
	section {
		max-width: 420px;
	}
	pre {
		overflow-x: scroll;
	}
	.title {
		margin: 24px 0;
	}
	label {
		display: flex;
		flex-direction: column;
		row-gap: 3px;
		margin-bottom: 12px;
	}

	.label-span::after {
		content: ':';
	}

	label > span {
		font-size: 0.75rem;
		color: #555;
	}

	button {
		cursor: pointer;
	}
	.gap-x-6 {
		column-gap: 6px;
	}
	.flex-base {
		align-items: baseline;
	}
</style>

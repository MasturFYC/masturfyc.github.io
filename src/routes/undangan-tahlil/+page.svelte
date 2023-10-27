<script lang="ts">
	import dayjs from 'dayjs';
	import { UndanganTahlil } from '$lib/interfaces';
	import Modal from '$lib/components/Modal.svelte';
	import { user } from '$lib/store';
	import { onMount } from 'svelte';
	import fetchApi from '$lib/fetch-api';

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
			'Mega Loman',
			jam.format('YYYY-MM-DD'),
			'mengenang 100 hari wafatnya ibunda',
			jam.format('dddd'),
			jam.format('HH:mm'),
			getBada(jam),
			'Jl. Cempaka No. 120-C Kel. Margasari Kedoya - Jakarta Selatan',
			'Ibu Paun',
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

		// const baseUrl = import.meta.env.VITE_API_URL as string;
		let filename = 'undangan-tahlil.pdf';
		const endpoint = '/v1/undangan-tahlil';

		await fetchApi
			.headers({
				Accept: 'application/pdf',
				'Content-Type': 'application/json'
			})
			.url(endpoint)
			.post({
				...data,
				tanggal: dayjs(data.tanggal).format('DD MMMM YYYY')
			})
			.blob((blob) => {
				//const blob = new Blob([pdfBlob], { type: 'application/pdf' });
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
		user.set('');
	});

	$: if (clicked === 'yes') {
		showModal = false;
		data = contohData();
		clicked = 'no';
	}
</script>

<svelte:head>
	<meta property="og:description" content="Undangan tahlil" />
	<title>Undangan Tahlil</title>
	<meta name="description" content="Undangan tahlil" />
</svelte:head>

<section>
	<h1 class="title">Undangan Tahlil</h1>
	<div class="columns">
		<div class="column is-half">
			<form on:submit|preventDefault={handleSubmit}>
				<label class="checkbox block">
					<input id="gen" type="checkbox" bind:checked={data.jenisKelamin} />
					<span class="ml-1">Jenis kelamin ({data.jenisKelamin ? 'Laki-laki' : 'Perempuan'})</span>
				</label>
				<div class="field block">
					<label class="label">
						<span>Nama {data.jenisKelamin ? 'almarhum' : 'almarhumah'}</span>
						<input class="input column is-full" type="text" bind:value={data.namaAlmarhum} />
					</label>
				</div>

				<div class="field block">
					<label class="label">
						<span>Tanggal dan jam acara</span>
						<div class="columns is-mobile is-gapless">
							<input class="input column is-date" type="date" bind:value={data.tanggal} />
							<input class="input column is-5 is-date" type="time" bind:value={data.jam} />
						</div>
					</label>
				</div>

				<div class="field block">
					<label class="label">
						<span>Acara peringatan</span>
						<input class="input is-full" type="text" bind:value={data.acara} />
					</label>
				</div>

				<div class="field block">
					<label class="label">
						<span>Tempat acara dilangsungkan</span>
						<textarea class="textarea is-full" rows="3" bind:value={data.tempatAcara} />
					</label>
				</div>

				<div class="field block">
					<label class="label">
						<span>Nama pemangku hajat</span>
						<input type="text" class="input" bind:value={data.pemangkuHajat} />
					</label>
				</div>

				<div class="block is-mobile">
					<button class="button is-primary block mr-2" type="submit" disabled={is_download}
						>Download</button
					>
					<button class="button is-info block" type="button" on:click={() => (showModal = true)}
						>Kasih saya contoh data</button
					>
					{#if is_download}
						<div>Please wait...</div>
					{/if}
				</div>
			</form>
		</div>
	</div>
	<Modal bind:showModal>
		<div slot="header" class="subtitle block">Contoh data</div>
		<div>
			<pre>{JSON.stringify(contohData(), null, 2)}</pre>
		</div>
		<div slot="footer" class="flex">
			<div>
				Jika anda setuju dengan contoh data ini, click Yes. Tekan ESC kalo tidak setuju dan menutup
				dialog ini.
			</div>
			<button class="button is-primary" on:click|preventDefault={() => (clicked = 'yes')}
				>Yes setuju</button
			>
		</div>
	</Modal>
</section>

<style lang="scss">
	label {
		font-size: small;
		font-weight: 400;
		line-height: 1.75;
	}

	.flex {
		display: flex;
		flex-direction: row;
		column-gap: 16px;
		align-items: flex-start;
	}
</style>

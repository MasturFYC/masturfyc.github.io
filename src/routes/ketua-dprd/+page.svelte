<script lang="ts">
	import { crossfade, scale, type CrossfadeParams, type TransitionConfig } from 'svelte/transition';
	import images, { type Bupati } from './image';
	//import background from './taufik-hidayat.jpg'

	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale as (node: Element, params: CrossfadeParams, intro: boolean) => TransitionConfig
	});

	let selected: Bupati | null = null;
	let loading: Bupati | null = null;

	//const ASSETS = `https://sveltejs.github.io/assets/crossfade`;

	const load = (image: Bupati) => {
		const timeout = setTimeout(() => (loading = image), 100);

		const img = new Image();

		img.onload = () => {
			selected = image;
			clearTimeout(timeout);
			loading = null;
		};

		img.src = `${image.url}`;
	};
</script>

<svelte:head>
	<meta property='fb:app_id' content='1284186342222033' />
	<meta property='og:type' content='website' />
	<meta property='og:title' content='Ketua DPRD Indramayu dari masa ke masa' />
	<meta property='og:url' content='https://masturfyc.github.io/ketua-dprd' />
	<meta property='og:image' content='https://masturfyc.github.io/taufik-hidayat.jpg' />
	<meta property='og:image:secure_url' content='https://masturfyc.github.io/taufik-hidayat.jpg' />
	<meta property='og:image:type' content='image/jpeg' />
	<meta property='og:image:width' content='400' />
	<meta property='og:image:height' content='300' />
	<meta property='og:description' content='Ketua DPRD Indramayu dari masa ke masa' />
	<title>Ketua DPRD Indramayu dari masa ke masa</title>
	<meta name='description' content='Ketua DPRD Indramayu' />
</svelte:head>

<div class="container">
	<div class="phone">
		<h1>Ketua DPRD Indramayu dari masa ke masa</h1>
		<div class="grid">
			{#each images as image}
				<div class="square">
					{#if selected !== image}
						<button
							style="background-image:url('{image.url}');background-size:cover;background-repeat:no-repeat;background-blend-mode:multiply;background-color:{image.color}cc"
							class="btn"
							on:click={() => load(image)}
							in:receive={{ key: image.id }}
							out:send={{ key: image.id }}>{loading === image ? '...' : image.id}</button
						>
					{/if}
				</div>
			{/each}
		</div>

		{#if selected}
			{#await selected then d}
				<div class="photo" in:receive|global={{ key: d.id }} out:send|global={{ key: d.id }}>
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<img alt={d.name} src={d.url} on:click={() => (selected = null)} />

					<p class="credit">
						<a target="_blank" rel="noreferrer" href={d.url}>{d.name}</a>
						({d.period.from} - {d.period.to})
					</p>
				</div>
			{/await}
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.btn {
		background-size: cover;
		background-repeat: no-repeat;
		background-blend-mode: difference;
	}

	.phone {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 52vmin;
		height: 76vmin;
		border: 2vmin solid #ccc;
		border-bottom-width: 10vmin;
		padding: 3vmin;
		border-radius: 2vmin;
	}

	h1 {
		font-weight: 300;
		text-transform: uppercase;
		font-size: 4vmin;
		margin: 0.2em 0 0.5em 0;
	}

	.grid {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 2vmin;
	}

	button {
		width: 100%;
		height: 100%;
		color: white;
		font-size: 5vmin;
		border: none;
		margin: 0;
		will-change: transform;
	}

	.photo,
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.photo {
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;
	}

	img {
		object-fit: cover;
		cursor: pointer;
	}

	.credit {
		text-align: right;
		font-size: 2.5vmin;
		padding: 1em;
		margin: 0;
		color: white;
		font-weight: bold;
		opacity: 0.6;
		background: rgba(0, 0, 0, 0.4);
	}

	.credit a,
	.credit a:visited {
		color: white;
	}
</style>

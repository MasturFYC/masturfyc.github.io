<script lang="ts">
	import HeaderPage from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	import advanced from 'dayjs/plugin/advancedFormat';
	import locale from 'dayjs/locale/id';

	dayjs.locale(locale);
	dayjs.extend(timezone);
	dayjs.extend(utc);
	dayjs.extend(advanced);
</script>

<svelte:head>
	<title>Home</title>
	<meta property="fb:app_id" content="1284186342222033" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://sapulidi.site/ketua-dprd" />
	<meta property="og:title" content="Ketua DPRD Indramayu" />
	<meta property="og:image:url" content="https://masturfyc.github.io/taufik-hidayat.jpg" />
	<meta property="og:image:secure_url" content="https://masturfyc.github.io/taufik-hidayat.jpg" />
	<meta property="og:image:secure" content="https://masturfyc.github.io/taufik-hidayat.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="445" />
	<meta property="og:image:height" content="563" />
	<meta property="og:description" content="Ketua DPRD Indramayu dari masa ke masa" />
</svelte:head>

<div class="hero is-justify-content-space-between is-fullheight">	
	<HeaderPage />
	<div class="columns px-4 flex-1 block">
		<aside class="column is-3">
			<div>
				<a href="/undangan-tahlil">Undangan Tahlil</a>
			</div>
			<div class="mt-2">
				<a href="/bilangan">Bilangan</a>
			</div>
			<div class="mt-2">
				<a href="/ketua-dprd">Ketua DPRD Indramayu</a>
			</div>
			<div class="fb-login-button" data-width="90" data-size="32" data-button-type="button" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div>
			<div>
				<!-- svelte-ignore a11y-misplaced-scope -->
				<fb:login-button id="fb-login" scope="public_profile,email" onlogin="checkLoginState();">
				</fb:login-button>
			
				<div id="status">
				</div>
			</div>
		</aside>
		<main class="column">
			<slot />
		</main>
	</div>
	<Footer />
</div>

<style lang="scss">
	.flex-1 {
		flex: 1;
	}

	@media screen and (max-width: 480px) {
		* :global(.pad12) {
			padding: 0 12px;
		}
	}
</style>

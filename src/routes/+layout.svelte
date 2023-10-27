<script lang="ts">
	import HeaderPage from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	import advanced from 'dayjs/plugin/advancedFormat';
	import locale from 'dayjs/locale/id';

	import sapulidi from '$lib/images/sapulidi.jpg';
	import Menu from '$lib/components/menu.svelte';

	dayjs.locale(locale);
	dayjs.extend(timezone);
	dayjs.extend(utc);
	dayjs.extend(advanced);
</script>

<svelte:head>
	<meta property="fb:app_id" content="1284186342222033" />
	<meta property="og:url" content="https://masturfyc.github.io" />
	<meta name="description" content="Mastur FYC Home page" />
	<meta property="og:image" content={sapulidi} />
	<meta property="og:image:secure_url" content={sapulidi} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content="Mastur FYC  Home page" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mastur FYC Home page" />
</svelte:head>

<HeaderPage />
<div class="hero is-fullheight-with-navbar">
	<div class="hero-body p-0">
		<div class="container is-align-self-flex-start is-fullhd">
			<div class="columns is-gapless is-flex is-flex-wrap-wrap-reverse">
				<div class="column is-one-quarter has-background-white-bis">
					<Menu />
				</div>
				<main class="column">
					<div class="m-5 div-main">
						<slot />
					</div>
				</main>
			</div>
		</div>
	</div>
	<Footer />
</div>

<style lang="scss">
	.div-main {
		min-width: 280px;
	}
</style>

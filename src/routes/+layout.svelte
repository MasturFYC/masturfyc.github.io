<script lang="ts">
	import HeaderPage from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	import advanced from 'dayjs/plugin/advancedFormat';
	import locale from 'dayjs/locale/id';

	//import Menu from '$lib/components/menu.svelte';

	// let height = 0;
	// let clientHeight = 0;

	dayjs.locale(locale);
	dayjs.extend(timezone);
	dayjs.extend(utc);
	dayjs.extend(advanced);
</script>

<svelte:head>
	<meta property="fb:app_id" content="1284186342222033" />
	<meta property="og:url" content="https://masturfyc.github.io" />
	<meta name="description" content="Mastur FYC Home page" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content="Mastur FYC  Home page" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mastur FYC Home page" />
</svelte:head>

<HeaderPage />
<div class="hero is-fullheight-with-navbar">
	<div class="hero-body">
		<div class="container is-align-self-flex-start">
			<div class="my-div">
				<!-- <div class="columns is-flex is-flex-wrap-wrap-reverse"> -->
				<!-- <div class="column is-3 has-background-white-bis" style="min-width:180px">
					<Menu />
				</div>
				<main class="column m-2" style="min-width:300px;min-height:calc(100vh - {clientHeight + height + 8}px)">
				</main>
			</div> -->
				<slot />
			</div>
		</div>
	</div>
	<Footer />
</div>

<style lang="scss">
	@media screen and (min-width: 640px) {
		.my-div {
			max-width: 960px;
			margin: 12px auto;
//			border: 1px solid #ccc;
		}
	}
</style>

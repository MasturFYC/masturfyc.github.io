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
</svelte:head>

<div class="container">
	<HeaderPage />
	<div class="dashboard">
		<div>
				<div class="box">
					<a href="/undangan-tahlil">Undangan Tahlil</a>
				</div>
				<div class="box">
					<a href="/bilangan">Bilangan</a>
				</div>
		</div>
		<main class="main-content flex-1">
			<slot />
		</main>
	</div>
  <Footer />
</div>

<style lang="scss">
	:global(.box) {
		text-align: center;
		display: block;
		border: 2px solid #999;
		margin-bottom: 12px;
		background-color: #f7f9f9;
		padding: 6px 12px;
	}

	.dashboard {
		display: flex;
		flex-direction: row;
		column-gap: 24px;
    flex: 1;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-items: space-between;
		padding: 0;
		margin: 0 auto;
		min-height: 100vh;
		max-width: 960px;
	}

	:global(body) {
		padding: 0;
		margin: 0;
	}

	a {
		//		color: #ddd;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}  
</style>

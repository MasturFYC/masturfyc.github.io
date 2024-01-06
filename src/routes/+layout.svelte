<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import HeaderPage from '$lib/components/Header.svelte';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import dayjs from 'dayjs';
	import locale from 'dayjs/locale/id';
	import advanced from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import utc from 'dayjs/plugin/utc';

	//import Menu from '$lib/components/menu.svelte';

	// let height = 0;
	// let clientHeight = 0;

	dayjs.locale(locale);
	dayjs.extend(timezone);
	dayjs.extend(utc);
	dayjs.extend(advanced);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false
				//staleTime: 5 * 60 * 1000
			}
		}
	});
	let height:number;
</script>

<QueryClientProvider client={queryClient}>
	<HeaderPage bind:height />
	<div class="columns is-gapless is-flex-direction-column m-0 p-0" style="height: calc(100vh - {height}px);">
		<div class="column mx-5">
			<main class="my-6 is-fullwidth">
				<slot />
			</main>
		</div>
		<div class="column is-narrow">
			<Footer />
		</div>
	</div>
</QueryClientProvider>

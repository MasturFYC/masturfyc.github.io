<script lang="ts">
	import Router from 'svelte-spa-router'
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import routes from './routes/routes.js'
	import 'app.css'

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false
			}
		}
	});

</script>

<main>
	<QueryClientProvider client={queryClient}>
		<Header />
	<Router {routes}/>
	<Footer />
	</QueryClientProvider>
</main>

<style lang="scss">
	main {
		margin: 0 auto;
		padding: 0;
	}

	.flex {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}
	.flex-1 {
		flex: 1;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
			padding: 0;
			margin: 0;
		}
	}

</style>


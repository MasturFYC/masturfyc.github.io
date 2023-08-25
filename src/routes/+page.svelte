<script lang='ts'>
//	import { page } from '$app/stores';
//	import welcome from '$lib/images/svelte-welcome.webp';
//	import welcome_fallback from '$lib/images/svelte-welcome.png';
//	import { user } from '$lib/store';
import sapulidi from '$lib/images/sapulidi.png'
</script>

<svelte:head>
	<title>Home</title>
	<meta property='fb:app_id' content='1284186342222033' />
	<meta property='og:type' content='article' />
	<meta property='og:url' content='https://masturfyc.github.io' />
	<meta property='og:title' content='Home page' />
	<meta property='og:image' content="{sapulidi}" />
	<meta property='og:image:secure_url' content="{sapulidi}" />
	<meta property='og:image:type' content='image/png' />
	<meta property='og:image:width' content='1200' />
	<meta property='og:image:height' content='673' />
	<meta property='og:description' content='Home page' />
	<title>Home page</title>
</svelte:head>

<section>
<div class='mt-20'>Welcome to FYC Home page</div>
<img src={sapulidi} width="200" alt="test background" />
</section>

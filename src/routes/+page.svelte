<script lang='ts'>
//	import { page } from '$app/stores';
//	import welcome from '$lib/images/svelte-welcome.webp';
//	import welcome_fallback from '$lib/images/svelte-welcome.png';
//	import { user } from '$lib/store';
import { MetaTags } from 'svelte-meta-tags';
import sapulidi from '$lib/images/sapulidi.jpg'
</script>

<svelte:head>
	<!-- <meta property='fb:app_id' content='1284186342222033' />
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://masturfyc.github.io' />
	<meta property='og:title' content='Home page' />
	<meta property='og:image' content="{sapulidi}" />
	<meta property='og:image:secure_url' content="{sapulidi}" />
	<meta property='og:image:type' content='image/jpeg' />
	<meta property='og:image:width' content='1200' />
	<meta property='og:image:height' content='630' />
	<meta property='og:description' content='Home page' />
	 -->
	<title>Home page</title>
</svelte:head>

<MetaTags
	title='Home pag | Demystifying SPA Metadata'
	canonical="https://www.canonical.ie/"
	description='How to configure popular SPA frameworks to maintain quality site metadata.'
	openGraph={{
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    images: [
      {
        url: sapulidi,
        width: 1200,
        height: 630,
        alt: 'Og Image Alt'
      }]
		}}
  facebook={{
    appId: '1284186342222033'
  }}		
/>

<section>
<div class='mt-20'>Welcome to FYC Home page</div>
<img src={sapulidi} width="200" alt="test background" />
</section>

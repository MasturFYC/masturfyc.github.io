<script lang="ts">
  import HeaderPage from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css';

  import dayjs from 'dayjs';
	import utc from "dayjs/plugin/utc"
	import timezone from "dayjs/plugin/timezone"
	import advanced from "dayjs/plugin/advancedFormat"
  import locale from 'dayjs/locale/id'

  dayjs.locale(locale)
	dayjs.extend(timezone)
	dayjs.extend(utc)
	dayjs.extend(advanced)

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="container">
    <HeaderPage />
    <main class="main-content flex-1">
      <slot />
    </main>
    <Footer />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }
</style>
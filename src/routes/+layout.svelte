<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$lib/images/svelte-logo.svg';
  import { page } from '$app/stores';
  import {browser} from '$app/environment'
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import { theme, toggleTheme } from '$lib/store';
  import Drawer, { AppContent, Content, Header, Title, Subtitle, Scrim } from '@smui/drawer';
  import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
  import { user } from '$lib/store';
  import HeaderPage from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte'
  import IconButton from '@smui/icon-button';
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


  let open = false;
  let active = 'Inbox';
  let innerWidth = 0
  function setActive(value: string) {
    active = value;
    if(browser && screen.width <= 600) {
      open = false
    }
  }

  function loadTheme() {
    const mql = window?.matchMedia('(prefers-color-scheme: dark)');
    theme.update(() => (mql.matches ? 'dark' : 'light'));
    toggleTheme.update(() => mql.matches);
  }
  onMount(() => {
    loadTheme();
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      }
    }
  });
  function autoModeWatcher(): void {
    const mql = window?.matchMedia('(prefers-color-scheme: dark)');
    function setColorScheme(scheme: boolean) {
      if (scheme) {
        const themeLink: HTMLLinkElement | null = document.head.querySelector('#theme2');
        if (themeLink) {
          themeLink.media = `screen and (prefers-color-scheme: ${scheme ? 'dark' : 'light'})`;
        }
      }
    }
    setColorScheme(mql.matches);
    mql.onchange = () => {
      setColorScheme(mql.matches);
    };
  }
  $: variant = () : 'modal' | 'dismissible' | undefined  => innerWidth < 600 ? 'modal' : 'dismissible';
</script>
<svelte:window bind:innerWidth />
<svelte:head>
<!-- SMUI Styles -->
{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>
<QueryClientProvider client={queryClient}>
  <div class="drawer-container">
    <Drawer variant="{variant()}" bind:open>
      <Header>
        <div class="flex-row flex-center">
          <IconButton class="icon-a" name={`show-dahsboard`} on:click={() => (open = !open)}>
            <img src={logo} alt="Logo" />
          </IconButton>
          <div>
            <Title>Kopma - Unwir</Title>
            <Subtitle>Koperasi Mahasiswa Universitas Wiralodra Indramayu</Subtitle>
          </div>
        </div>      
      </Header>
      <Content>
        {#if $user}
        <List>
          <Separator />
          <Subheader tag="h6">Master</Subheader>
          <Item
            activated={active === 'UnitKoperasi'}
            href="/unit-koperasi"
            aria-current={$page.url.pathname.startsWith('/unit-koperasi') ? 'page' : undefined}
            on:click={async () => {
            setActive('UnitKoperasi');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">group_work</Graphic>
            <Text>Unit</Text>
          </Item>
          <Item
            activated={active === 'Member'}
            href="/member-koperasi"
            aria-current={$page.url.pathname.startsWith('/member-koperasi') ? 'page' : undefined}
            on:click={async () => {
            setActive('Member');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">manage_accounts</Graphic>
            <Text>Member</Text>
          </Item>
          <Separator />
          <Subheader tag="h6">Report</Subheader>
          <Item
            disabled
            activated={active === 'Report'}
            href="/report"
            aria-current={$page.url.pathname.startsWith('/report') ? 'page' : undefined}
            on:click={async () => {
            setActive('Report');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">calculate</Graphic>
            <Text>Laporan keuangan</Text>
          </Item>
        </List>
        {/if}
        <Footer />
      </Content>
    </Drawer>
    <!-- Don't include fixed={false} if this is a page wide drawer.
    It adds a style for absolute positioning. -->
    <!-- <Scrim /> -->
    {#if variant() === 'modal'}
    <Scrim />
    {/if}
    <AppContent class="app-content">
      <HeaderPage bind:open />
      <main class="main-content flex-1">
        <slot />
      </main>
    </AppContent>
  </div>
</QueryClientProvider>
<style lang="scss">
  .flex-center {
    align-items: center;
  }

  .drawer-container {
    // display: block;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
  }
  * :global(.app-content) {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    position: relative;
    flex: 1;
    min-height: 100vh;
  }
  
  .main-content {
    box-sizing: border-box;
  }
</style>
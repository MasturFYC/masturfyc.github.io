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
  import HeaderPage from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte'
  import IconButton from '@smui/icon-button';
  import '../app.css';

  let open = false;
  let active = 'Inbox';
  let innerWidth = 0
  function setActive(value: string) {
    active = value;
    if(browser && screen.width <= 600) {
      open = false
    }
  }

  // function getPreferredColorScheme() {
  //   if (window.matchMedia) {
  //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //       return 'dark';
  //     } else {
  //       return 'light';
  //     }
  //   }
  //   return 'light';
  // }

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
          <!-- <Item
            href="/trx"
            on:click={() => setActive('Star')}
            activated={active === 'Star'}
            aria-current={$page.url.pathname.startsWith('/trx') ? 'page' : undefined}
            >
            <Graphic class="material-icons" aria-hidden="true">star</Graphic>
            <Text>Transaksi</Text>
          </Item>
          <Item
            href="/beban"
            on:click={() => setActive('Sent Mail')}
            activated={active === 'Sent Mail'}
            aria-current={$page.url.pathname.startsWith('/beban') ? 'page' : undefined}
            >
            <Graphic class="material-icons" aria-hidden="true"><span class="material-icons">
            view_list
            </span></Graphic>
            <Text>Beban</Text>
          </Item>          
          <Item
            href="/journal"
            on:click={() => setActive('Journal')}
            activated={active === 'Journal'}
            aria-current={$page.url.pathname.startsWith('/journal') ? 'page' : undefined}
            >
            <Graphic class="material-icons" aria-hidden="true">leaderboard</Graphic>
            <Text>Jurnal umum</Text>
          </Item>
          <Item
            activated={active === 'Order'}
            href="/orders"
            aria-current={$page.url.pathname.startsWith('/orders') ? 'page' : undefined}
            on:click={async () => {
            setActive('Order');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">shopping_cart</Graphic>
            <Text>Order</Text>
          </Item> -->
          <Separator />
          <Subheader tag="h6">Master</Subheader>
          <!-- <Item
            activated={active === 'Coa'}
            href="/coa"
            aria-current={$page.url.pathname.startsWith('/coa') ? 'page' : undefined}
            on:click={async () => {
            setActive('Coa');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">add_task</Graphic>
            <Text>Chart of Account</Text>
          </Item> -->
          <!-- <Item
            activated={active === 'Paket'}
            href="/paket"
            aria-current={$page.url.pathname.startsWith('/coa') ? 'page' : undefined}
            on:click={async () => {
            setActive('Paket');
            }}
            >
            <Graphic class="material-icons" aria-hidden="true">record_voice_over</Graphic>
            <Text>Paket</Text>
          </Item> -->
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
      <Footer />
    </AppContent>
  </div>
</QueryClientProvider>
<style lang="scss">
  .flex-center {
    align-items: center;
  }
  //.div-main {
  //  margin: 0;
//    width: 100%;
//    max-width: 100vw;
//    min-height: 100vh;
//    position: relative;
//    border: 5px solid #999;
 // }

  // * :global(.card-display) {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  // }
  // * :global(.card-container) {
  //   display: inline-flex;
  //   /* justify-content: center; */
  //   align-items: center;
  //   min-height: 200px;
  //   width: 380px;
  //   max-width: 100%;
  //   overflow-x: auto;
  //   margin-right: 20px;
  //   margin-bottom: 20px;
  // }
  // * :global(.card-container > *) {
  //   margin: 0 auto;
  //   background-color: var(--mdc-theme-text-hint-on-background, rgba(255, 255, 255, 0.15));
  //   border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  // }
  .drawer-container {
    // display: block;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
    // height: 100%;
    // min-height: calc(100vh - 160px);
  }
  * :global(.app-content) {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    position: relative;
    justify-content: space-between;
    flex: 1;
//    overflow: auto;
//    position: relative;
    min-height: 100vh;
  }
  
  .main-content {
    //    overflow: auto;
    box-sizing: border-box;
  }
  // @media screen and (max-width: 600px) {
  //   // * :global(.card-container) {
  //   //   margin-right: 0;
  //   //   padding-right: 0;
  //   //   padding-left: 0;
  //   // }
  //   .div-main {
  //     display: inherit;
  //     justify-items: center;
  //     /* margin-right: 0;
  //     padding-right: 2px;
  //     padding-left: 4px; */
  //   }
  // }
</style>
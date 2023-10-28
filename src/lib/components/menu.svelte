<script lang="ts">
  type Menu = {
    id: number;
    href: string;
    title: string;
  }
  const menu: Menu[] = [
    {id:1,href:"/undangan-tahlil",title:"Undangan Tahlil"},
    {id:2,href:"/bilangan",title:"Bilangan"},
    {id:3,href:"/ketua-dprd",title:"Ketua DPRD Indramayu"},
    {id:4,href:"/pdam",title:"Kartu PDAM"},
    {id:5,href:"/label103",title:"Label-103"},
    {id:6,href:"/pt-gpm",title:"PT. Galuh Persada Makmur"}
  ];
  let currentMenu = 0;
  
</script>
<aside class="menu m-2">
  <p class="menu-label mt-5">General</p>
  <ul class="menu-list">
  {#each menu as m (m.id)}
  <li>
    <a href="{m.href}" class="{m.id === currentMenu ? 'is-active':''}" on:click={() => currentMenu = m.id}>{m.title}</a>
  </li>
  {/each}
</ul>
  <div
    class="fb-login-button"
    data-width="90"
    data-size="32"
    data-button-type="button"
    data-layout=""
    data-auto-logout-link="false"
    data-use-continue-as="false"
  ></div>
  <div>
    <!-- svelte-ignore a11y-misplaced-scope -->
    <fb:login-button
      id="fb-login"
      scope="public_profile,email"
      onlogin="checkLoginState();"
    >
    </fb:login-button>

    <div id="status"></div>
  </div>
</aside>
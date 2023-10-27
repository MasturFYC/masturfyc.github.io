<aside class="menu">
  <div class="mx-5 my-4">
  <div>
    <a href="/undangan-tahlil">Undangan Tahlil</a>
  </div>
  <div class="mt-2">
    <a href="/bilangan">Bilangan</a>
  </div>
  <div class="mt-2">
    <a href="/ketua-dprd">Ketua DPRD Indramayu</a>
  </div>
  <div class="mt-2">
    <a href="/pdam">Kartu PDAM</a>
  </div>
  <div class="mt-2">
    <a href="/label103">Label 103</a>
  </div>
  <div class="mt-2">
    <a href="/pt-gpm">PT. Galuh Persada Makmur</a>
  </div>
  <br />
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
</div>
</aside>
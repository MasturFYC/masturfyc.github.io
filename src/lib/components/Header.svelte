<script lang="ts">
	import logo from '$assets/logo.svg';
	// export let clientHeight = 0;
	let isActive = false;
	let itemActive = '';
	let menu = [
		//{id:1,name:"Home",href:"/"},
		{ id: 2, href: '/bilangan', name: 'Bilangan' },
		{ id: 3, href: '/ketua-dprd', name: 'Ketua DPRD' },
		{ id: 4, href: '/pt-gpm', name: 'PT. Galuh Persada Makmur' }
	];

	let drop = [
		{ id: 1, href: '/undangan-tahlil', name: 'Undangan Tahlil' },
		{ id: 2, href: '/pdam', name: 'Kartu PDAM' },
		{ id: 3, href: '/label103', name: 'Label-103' }
	];
	let drop2 = [
		{ id: 1, href: '/php-error-13', name: 'php8.2-fpm Error 13' },
		{ id: 2, href: '/tailscale-up', name: 'Networking menggunakan tailscale' },
		{ id: 3, href: '/nginx-php-fpm-config', name: 'Nginx + PHP-FPM Configuration' },
		{ id: 4, href: '/ssh-background', name: 'Run shh connection in background' },
		{ id: 5, href: '/zram', name: 'Configure zram in Ubuntu 22.04' },
	];
	// let redirectUri = import.meta.env.VITE_FB_REDIRECTURI;
	// let status = '';
</script>

<svelte:head>
	<script>
		function statusChangeCallback(response) {
			// Called with the results from FB.getLoginStatus().
			// console.log('statusChangeCallback');
			// console.log(response);                   // The current login status of the person.
			if (response.status === 'connected') {
				// Logged into your webpage and Facebook.
				testAPI();
			} else {
				// Not logged into your webpage or we are unable to tell.
				document.getElementById('status').innerHTML = 'Please log ' + 'into this webpage.';
			}
		}

		function checkLoginState() {
			// Called when a person is finished with the Login Button.
			FB.getLoginStatus(function (response) {
				// See the onlogin handler
				statusChangeCallback(response);
			});
		}

		window.fbAsyncInit = function () {
			FB.init({
				appId: '1284186342222033',
				cookie: true,
				xfbml: true,
				version: 'v17.0'
			});

			FB.getLoginStatus(function (response) {
				// Called after the JS SDK has been initialized.
				statusChangeCallback(response); // Returns the login status.
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');

		function testAPI() {
			// Testing Graph API after login.  See statusChangeCallback() for when this call is made.
			//console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', { locale: 'id_ID', fields: 'email,name' }, function (response) {
				//console.log('Successful login for: ' + response);
				document.getElementById('status').innerHTML =
					'<span id="username">' + response.email + '</span>!';
				document.getElementById('fb-login').style.display = 'none';
			});
		}
	</script>
</svelte:head>
<div id="fb-root"></div>
<!-- svelte-ignore a11y-no-redundant-roles -->
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="navbar-brand">
		<a class="navbar-item" href="/" on:click={() => (isActive = false)}>
			<img src={logo} width="64" height="28" alt="Logo" />
		</a>

		<!-- svelte-ignore a11y-interactive-supports-focus -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a
			role="button"
			class="navbar-burger{isActive ? ' is-active' : ''}"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			on:click={() => (isActive = !isActive)}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu{isActive ? ' is-active' : ''}">
		<div class="navbar-start">
			{#each menu as c (c.id)}
				<a
					class="navbar-item is-tab{itemActive === c.name ? ' is-active' : ''}"
					href={c.href}
					on:click={() => {
						isActive = false;
						itemActive = c.name;
					}}>{c.name}</a
				>
			{/each}

			<div class="navbar-item has-dropdown is-hoverable{isActive ? ' is-active' : ''}">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="navbar-link is-arrowless">Download</a>

				<div class="navbar-dropdown">
					{#each drop as d (d.id)}
						<a
							class="navbar-item"
							on:click={() => {
								isActive = false;
								itemActive = '';
							}}
							href={d.href}>{d.name}</a
						>
					{/each}
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable{isActive ? ' is-active' : ''}">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="navbar-link is-arrowless">Blog</a>

				<div class="navbar-dropdown">
					{#each drop2 as d (d.id)}
						<a
							class="navbar-item"
							on:click={() => {
								isActive = false;
								itemActive = '';
							}}
							href={d.href}>{d.name}</a
						>
					{/each}
				</div>
			</div>			
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<div id="status"></div>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

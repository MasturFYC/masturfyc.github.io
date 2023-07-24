<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import { user, refresh_token as refToken, acces_token as accToken, user_role } from '../lib/store';
	import { onDestroy } from 'svelte';
	import { InitialFocus } from '@smui/dialog';
	import axios from '../lib/axios-base';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import {push} from 'svelte-spa-router'

	let user_value = '';
	let username_or_email = '';
	let password = '';
	let err_user = '';
	const client = useQueryClient();

	user.subscribe((u) => (user_value = u));
	let unsubscribe = user.subscribe((u) => (user_value = u));

	async function handleLogin(
		e: Event & { readonly submitter: HTMLElement | null } & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		e.preventDefault();

		if (!username_or_email || !password) {
			alert('please enter your credentials');
			return;
		}

		const headers = {
			'Content-Type': 'application/json'
		};
		await axios
			.post(
				'/v1/login',
				{
					name: username_or_email,
					password: password
				},
				{ headers: headers }
			)
			.then((response) => response.data)
			.then((data) => {
				const { access_token, refresh_token } = data.tokens;
				//sessionStorage.setItem("access_token", access_token);
				//console.log(data)
				user.update((u) => (u = username_or_email));
				refToken.update((o) => (o = refresh_token));
				accToken.update((o) => (o = access_token));
				loadUser();
				push('/');
			})
			.catch((error) => {
				console.log(error);
				err_user = 'User not found';
			});

		// By the way, you MUST return the values to the store, otherwise
		// it will end up as undefined, which is bad
	}

	async function loadUser() {
		await axios
			.get('/admin/user', {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => response.data)
			.then((data) => {
				user.update((u) => (u = data.name));
				user_role.update((o) => (o = data.role));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function handleLogout() {
		user.update((u) => (u = ''));
		accToken.update((o) => (o = ''));
		refToken.update((o) => (o = ''));
		client.removeQueries();
		push('/');
	}

	$: isDisabled = username_or_email.length === 0 || password.length === 0;

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="login mt-20">
	{#if !user_value}
		<div class="title">Login</div>
		<form on:submit={handleLogin} autocomplete="off">
			<div class="form-field">
				<Textfield
					label="User name or email"
					type="text"
					variant="filled"
					input$use={[InitialFocus]}
					bind:value={username_or_email}
				/>
				<Textfield type="password" label="Password" variant="filled" bind:value={password} />
			</div>
			<div style="color: red;margin-top:20px">{err_user}</div>
			<div class="button-group">
				<Button ripple color="secondary" type="button" on:click={() => push('/')}>
					<Label>Batal</Label>
				</Button>
				<Button color="primary" ripple type="submit" disabled={isDisabled}>
					<Label>Login</Label>
				</Button>
			</div>
		</form>
	{:else if user_value}
		<div class="form-field mt-20">
			<div><strong>You are logged in as: {user_value}</strong></div>
			<Button color="primary" ripple on:click={handleLogout}>
				<Label>Logout</Label>
			</Button>
		</div>
	{/if}
</div>

<style lang="scss">
	.form-field {
		display: flex;
		flex-direction: column;
	}
	.button-group {
		display: flex;
		flex-direction: row;
		column-gap: 6px;
		align-items: center;
		justify-content: center;
		flex: 1;
		margin-top: 12px;
	}
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title {
		margin: 24px;
	}
</style>

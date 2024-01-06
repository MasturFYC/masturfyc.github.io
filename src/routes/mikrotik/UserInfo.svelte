<script lang="ts">
	import fetchApi from '$lib/fetch-api';
	import type { iCustomer, iUserActive } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let isActive = '';
	export let data: iUserActive;
  export let customers: iCustomer[] = [];
  let customer: iCustomer | undefined = undefined;
	let customerId: number = 0;
	let isLoading = false;
	let isRemoving = false;

	const setSelectedCustomer = (id: number) => {
		if(id > 0) {
			customer = customers.filter(f => f.id === id)[0];
		}
	}

	const associatedUserWithMember = async (userName: string, customerId: number, comment: string) => {

		const result = await fetchApi
		.headers({
			'Content-Type': "application/json;charset=utf-8",
			'Accept': 'application/json'
		})
		.post({
			name: userName,
			member_id: customerId,
			comment: comment
		},
		'/v3/routers/insert')
		.json<iUserActive>();
	
		// if(result) {
		// 	data.isAssociated = true;
		// }

		setTimeout(() => {
			isLoading = false;
		}, 500);
	}

	async function doSave(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
		if(customerId > 0) {
			isLoading = true;
			await associatedUserWithMember(data.name, customerId, data.comment);			
		}
		
		dispatch('onSave', customerId);
	}
	
	async function removeAssociation(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
		
		isRemoving = true;

		const result = await fetchApi
		.headers({
			'Accept': 'application/json'
		})
		.delete(`/v3/routers/delete/${data.name}`)
		.json<iUserActive>();
	
		if(result) {
			data.customerId = undefined;
			dispatch("reloadMember", 0);
		}

		setTimeout(() => {
			isRemoving = false;
		}, 500);

	}


	$: setSelectedCustomer(customerId);



</script>

<div class="modal {isActive} px-3 is-warning">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal-background" on:click={() => (isActive = '')}></div>
	<div class="modal-card box is-paddingless">
		<header class="modal-card-head">
			<p class="modal-card-title is-family-secondary">Sapulidi user</p>
			<button
				class="delete has-background-danger-dark"
				aria-label="close"
				on:click={() => (isActive = '')}
			/>
		</header>
		<section class="modal-card-body is-size-7-tablet">
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label min-w120">Name</label>
				</div>
				<div class="field-body">
					<div class="field is-expanded">
						<div class="field has-addons">
							<p class="control">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a class="button is-static">
									{data.id}
								</a>
							</p>
							<p class="control is-expanded has-icons-left has-icons-right">
								<input type="text" maxlength={50} class="input" bind:value={data.name} />
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
								{#if data.customerId}
								<span class="icon is-small is-right">
									<i class="fas fa-check"></i>
								</span>
								{/if}
							</p>
						</div>
						{#if data.customerId}
						<p class="help">Association with: {data.customerId}</p>
						{/if}
					</div>
				</div>
			</div>


			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label min-w120">Comment</label>
				</div>
				<div class="field-body">
					<div class="field">
						<p class="control is-expanded has-icons-left">
							<input type="text" maxlength={50} class="input" bind:value={data.comment} />
							<span class="icon is-small is-left">
								<i class="fas fa-location"></i>
							</span>
						</p>
					</div>
				</div>
			</div>


			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label min-w120">IP, MAC</label>
				</div>
				<div class="field-body">
					<div class="field">
						<p class="control has-icons-left is-fixed">
							<input type="text" maxlength={50} class="input" bind:value={data.address} placeholder="192.168.x.x" />
							<span class="icon is-small is-left">
								<i class="fas fa-server"></i>
							</span>
						</p>
					</div>
					<div class="field">
						<p class="control is-expanded has-icons-left is-fixed">
							<input type="text" maxlength={50} readonly class="input" bind:value={data.callerId} />
							<span class="icon is-small is-left">
								<i class="fa-solid fa-desktop"></i>
							</span>
						</p>
					</div>
				</div>
			</div>

      <div class="field is-horizontal">
				<div class="field-label">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label min-w120">Service, Session</label>
				</div>
				<div class="field-body">
					<div class="field">
						<p class="control has-icons-left">
							<input type="text" maxlength={50} readonly class="input" bind:value={data.service} />
							<span class="icon is-small is-left">
								<i class="fa-brands fa-servicestack"></i>
							</span>
						</p>
					</div>
					<div class="field">
						<p class="control is-expanded has-icons-left">
							<input type="text" maxlength={50} readonly class="input" bind:value={data.sessionId} />
							<span class="icon is-small is-left">
								<i class="fa-solid fa-key"></i>
							</span>
						</p>
					</div>
				</div>
			</div>

      {#if !data.customerId}
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label min-w120">Associated with member</label>
        </div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="control">
              <div class="select is-fullwidth">
                <select bind:value={customerId}>
                  {#each customers as c}
                    <option value="{c.id}">{c.name} - {c.unit_name} ({c.paket_name})</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/if}

		</section>
		<footer class="modal-card-foot py-4">
			<div class="columns container is-mobile">
				<div class="column">
					<button disabled={!data.customerId || isRemoving || isLoading}
						class="button is-light {isRemoving ? 'is-loading':''}"
						on:click={removeAssociation}>Remove Association</button
					>
				</div>
				<div class="column is-narrow">
					<div class="buttons">
						<!-- <button disabled class="button is-link is-light" on:click={() => (isActive = '')}>Cancel</button> -->
						<button disabled={isLoading || isRemoving} class="button is-primary {isLoading ? 'is-loading':''}" on:click={doSave}>Done</button
						>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>
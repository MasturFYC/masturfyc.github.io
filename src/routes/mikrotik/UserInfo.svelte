<script lang="ts">
	import type { iCustomer, iUserActive } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let isActive = '';
	export let data: iUserActive;
  export let customers: iCustomer[] = [];
  //export let customer: iCustomer;

</script>

<div class="modal {isActive} px-4">
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
		<section class="modal-card-body">
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">Name</label>
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
							<p class="control is-expanded has-icons-left">
								<input type="text" maxlength={50} class="input" bind:value={data.name} />
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">Comment</label>
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
					<label class="label">IP, MAC</label>
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
							<input type="text" maxlength={50} readonly class="input is-danger" bind:value={data.callerId} />
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
					<label class="label">Service, Session</label>
				</div>
				<div class="field-body">
					<div class="field">
						<p class="control has-icons-left">
							<input type="text" maxlength={50} readonly class="input is-danger" bind:value={data.service} />
							<span class="icon is-small is-left">
								<i class="fa-brands fa-servicestack"></i>
							</span>
						</p>
					</div>
					<div class="field">
						<p class="control is-expanded has-icons-left">
							<input type="text" maxlength={50} readonly class="input is-danger" bind:value={data.sessionId} />
							<span class="icon is-small is-left">
								<i class="fa-solid fa-key"></i>
							</span>
						</p>
					</div>
				</div>
			</div>

      {#if !data.isAssociated}
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">Associated with member</label>
        </div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  {#each customers as c}
                    <option value="{c.id}">{c.name} - {c.unit_name} ({c.paket_name})</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {:else}
        <!-- <div>Database info: <strong>{customer.name}</strong> - 
          {customer.address}, {customer.unit_name} 
          ({customer.paket_name}).
        </div> -->
        <div>User <strong>{data.name}</strong> sudah diasosiasikan dengan database.</div>
      {/if}

		</section>
		<footer class="modal-card-foot py-4">
			<div class="columns container is-mobile">
				<div class="column">
					<!-- <button disabled
						class="button is-danger is-light"
						on:click={() => dispatch('removeCustomer', data)}>Remove</button
					> -->
				</div>
				<div class="column is-narrow">
					<div class="buttons">
						<!-- <button disabled class="button is-link is-light" on:click={() => (isActive = '')}>Cancel</button> -->
						<button class="button is-primary" on:click={() => dispatch('onSave', data)}>Done</button
						>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>
<!-- 
<style lang="scss">
  label {
    min-width: 110px;
  }
</style> -->
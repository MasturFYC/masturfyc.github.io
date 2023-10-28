<script lang="ts">
	export let isActive = '';

	let dialog: HTMLDialogElement;
</script>

<div class="modal {isActive}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal-background" on:click={() => (isActive = '')}></div>
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title"><slot name="header" /></p>
			<button class="delete has-background-danger-dark" aria-label="close" on:click={() => (isActive = '')} />
		</header>
		<section class="modal-card-body">
			<slot name="body" />
		</section>
		<footer class="modal-card-foot">
			<slot name="footer" />
		</footer>
	</div>
</div>

<style lang="scss">
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

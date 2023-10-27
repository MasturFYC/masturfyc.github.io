<script lang="ts">
	export let showModal = false;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) {
    dialog.showModal();
    //document.body.style.position = '';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.left = `-${window.scrollX}px`;
    document.body.style.overflowY = "hidden";
  }

	$: if (dialog && !showModal) {
    dialog.close();
    const scrollY = document.body.style.top;
    const scrollX = document.body.style.left;
    //document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.overflowY = "auto";
    window.scrollTo(parseInt(scrollX || '0') * -1, parseInt(scrollY || '0') * -1);    
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<slot name="footer">
			<button autofocus on:click={() => dialog.close()}>Close</button>
		</slot>
	</div>
</dialog>

<style lang="scss">
  * :global(body) {
    position: fixed;
  }
    
  hr {
    border-bottom:none;
    border-left: none;
    border-right: none;
  }
	dialog {
	//	max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		box-shadow: 0px 10px 24px #777;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	
	dialog > div {
		padding: 1em;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>

<script lang="ts">
  export let label: string | undefined = undefined;
  export let value: string | undefined = undefined;
</script>
<div>
  <div class="p-label">{label??''}</div>
  <div class="p-value">{value??'-'}</div>
</div>
<style lang="scss">
	.p-label {
		color: var(--label-color, rgba(0, 0, 0, 0.75));
		font-style: oblique;
    cursor: default;
	}
  .p-label::after {
    content: ':';
    font-style: normal;
    padding-left: 4px;
  }
</style>
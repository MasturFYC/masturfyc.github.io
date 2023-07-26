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
		//font-style: oblique;
    cursor: default;
    font-size: 0.85em;
    line-height: 1.0em;
	}
  .p-label::after {
    content: ':';
    font-style: normal;
    padding-left: 4px;
  }
  .p-value {
    font-size: 1.1em;
  }
</style>
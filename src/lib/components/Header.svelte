<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="top-app-bar">
	<div class="box">
	<a href="/">Home</a>
</div>
</div>

<style lang="scss">
	.top-app-bar {
		overflow-x: hidden;
		display: flex;
		flex-direction: row;
		column-gap: 16px;
		border-bottom: 1px solid #ddd;
//		background-color: #444;
//		color: #ddd;
		max-width: 960px;
		height: 52px;
		align-items: center;
	}
	.top-app-bar a {
//		color: #ddd;
		text-decoration: none;
	}
	.top-app-bar  a:hover {
		text-decoration: underline;
	}
</style>

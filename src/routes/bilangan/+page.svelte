<script>
	import { numberToText } from '$lib/components/convert-number-to-string';
	import { cardNumber, format, getNumber } from '$lib/components/format';
  import json from 'highlight.js/lib/languages/javascript';

	let value = '11000000000000000';


	$: bilangan = numberToText(getNumber(value).toString())?.trim();

</script>

<section>
	<div class="title mt-20">Bilangan</div>
	<div class="mt-20 mb-20">Setelah sekian lama akhirnya saya bisa membuat penyebutan untuk bilangan sampai 11 ribu T. 😀</div>
	<div>
		<input style="width:95%" type="text" use:format={cardNumber} bind:value />
	</div>
  <div class="mt-10">Wanna try? Change the number.</div>
	<div class="mt-20">💥 <code class="language-json font-bold">{bilangan}</code></div>
</section>

<style lang="scss">
  section {
    max-width: 420px;
  }
</style>
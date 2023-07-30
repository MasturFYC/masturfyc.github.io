<script lang="ts">
	export let desc: string | undefined = undefined;
	export let idPicture = 0;

	const backs = [
		{
			id: 0,
			url: 'https://komunitaskretek.or.id/wp-content/uploads/2020/07/49697442548_e8551c3834_k.jpg'
		},
		{
			id: 1,
			url: 'https://komunitaskretek.or.id/wp-content/uploads/2020/07/49697442548_e8551c3834_k.jpg'
		},
		{
			id: 2,
			url: 'https://komunitaskretek.or.id/wp-content/uploads/2020/07/49697442548_e8551c3834_k.jpg'
		},
		{
			id: 3,
			url: 'https://komunitaskretek.or.id/wp-content/uploads/2020/07/49697442548_e8551c3834_k.jpg'
		},

		{
			id: 4,
			url: 'https://images.tokopedia.net/img/cache/700/product-1/2018/10/22/3447289/3447289_51ab6cd5-6efa-4af0-922b-75efd9b6d89d_960_1280.jpeg'
		},
		{
			id: 5,
			url: 'https://images.tokopedia.net/img/cache/700/product-1/2018/10/22/3447289/3447289_51ab6cd5-6efa-4af0-922b-75efd9b6d89d_960_1280.jpeg'
		},
		{
			id: 6,
			url: 'https://images.tokopedia.net/img/cache/700/product-1/2018/10/22/3447289/3447289_51ab6cd5-6efa-4af0-922b-75efd9b6d89d_960_1280.jpeg'
		},
		{
			id: 7,
			url: 'https://images.tokopedia.net/img/cache/700/product-1/2018/10/22/3447289/3447289_51ab6cd5-6efa-4af0-922b-75efd9b6d89d_960_1280.jpeg'
		},
		{
			id: 8,
			url: 'https://www.meroketetapjaya.com/files/uploads/2021/08/NPK_Mutiara_16_16_16Asset_4@3x1-medium.png'
		},
		{
			id: 9,
			url: 'https://www.idh.id/thumbs/f4xw2ylomftwk4ronfsgqltjmqxxk4dmn5qwi4zpmruxg5dsnfrhk5dpoixtimrrgmztaobvhaxxa4tpmr2wg5bpgeztgmrwgm2dgnrtf43do22jjfuvozcbk5mho6sforus44dom4-/f4xw2ylomftwk4ronfsgqltjmqxxk4dmn5qwi4zpmruxg5dsnfrhk5dpoixtimrrgmztaobvhaxxa4tpmr2wg5bpgeztgmrwgm2dgnrtf43do22jjfuvozcbk5mho6sforus44dom47xopjwgaycm2b5gyyda-.png'
		},
		{
			id: 10,
			url: 'https://www.idh.id/thumbs/f4xw2ylomftwk4ronfsgqltjmqxxk4dmn5qwi4zpmruxg5dsnfrhk5dpoixtimrrgmztaobvhaxxa4tpmr2wg5bpgeztgmrwgm2dgnrtf43do22jjfuvozcbk5mho6sforus44dom4-/f4xw2ylomftwk4ronfsgqltjmqxxk4dmn5qwi4zpmruxg5dsnfrhk5dpoixtimrrgmztaobvhaxxa4tpmr2wg5bpgeztgmrwgm2dgnrtf43do22jjfuvozcbk5mho6sforus44dom47xopjwgaycm2b5gyyda-.png'
		}
	];
	const getBackground = (id: number) => {
		return backs.filter((f) => id === id)[id];
	};
</script>

<div class="min-w-[200px] border border-gray-200 drop-shadow-sm bg-white rounded-md">
	<slot name="picture">
		<div
			class="div-image rounded-t-md"
			style={`background:url('${
				getBackground(idPicture)?.url
			}');background-size: cover;background-position: center;`}
		/>
	</slot>
	<div class="p-2">
		<div class="flex-1"><slot name="name" /></div>
		<div><slot name="variant" /></div>
		<div class="m5-4">
			<span class="font-bold">Rp <slot name="price" /></span>
			<span>{'/'}&nbsp;<slot name="unit" /></span>
		</div>
	</div>
	{#if desc}
		<div class="bg-amber-300 px-4 py-1 text-xs rounded-tr-full flex-none">
			{desc}
		</div>
	{/if}
</div>

<style lang="postcss">
	.div-image {
		min-height: 220px;
	}
</style>

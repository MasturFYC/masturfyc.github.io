<div class="flex-1 min-w-[200px] border border-gray-200 drop-shadow-sm bg-white rounded-md">
	<slot name="picture">
		<div class="div-image rounded-t-md" />
	</slot>
	<div class="p-2 text-sm">
			<div class="flex-1"><slot name="name" /></div>			
    <div><slot name="variant" /></div>
      <div><span class="font-bold"><slot name="price" /></span>
        <span>{'/'}&nbsp;<slot name="unit" /></span>
        </div>
	</div>
</div>

<style lang="postcss">
	.div-image {
		background-image: url('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		min-height: 120px;
	}
</style>

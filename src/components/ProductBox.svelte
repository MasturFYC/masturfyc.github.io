<div class="box">
	<slot name="picture">
		<div class="div-image" />
	</slot>
	<div class="p-16">
		<div class="flex-row">
			<span class="product-name flex-1"><slot name="name" /></span>
			<span class="product-price"><slot name="price" /></span>&nbsp;{'/'}&nbsp;<slot name="unit" />
		</div>
		<div>
			<slot name="variant" />
		</div>
	</div>
</div>

<style>
	.div-image {
		background-image: url('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		min-height: 120px;
	}

	.product-name {
		font-size: large;
	}
	.product-price {
		font-weight: 700;
	}

	.box {
		border: 1px solid #cdcdcd;
		border-radius: 3px;
		min-width: 280px;
		flex: 1;
		box-shadow: 1px 1px 3px #cecece;
	}
	.p-16 {
		padding: 16px;
	}
	.flex-row {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}
	.flex-1 {
		flex: 1;
	}
</style>

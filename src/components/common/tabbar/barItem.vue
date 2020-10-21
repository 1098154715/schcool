<template>
	<div class="tar-item" @click="itemClick">
		<slot v-if="!isact" name="item-img"></slot>
		<slot v-else name="item-img-act"></slot>
		<div :class="{isact1:isact}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'barItem',
		props: {
			path: String
		},
		data() {
			return {
				isact: false,
			}

		},
		methods: {
			itemClick() {
				this.isact=!this.isact;
				console.log(this.path)
				this.$router.replace(this.path)
			}
		}

	}
</script>

<style>
	.tar-item {
		flex: 1;
		text-align: center;
		height: 49px;
	}

	.tar-item img {
		width: 24px;
		height: 24px;
	}

	.isact1 {
		color: #5FBD45;
	}
</style>

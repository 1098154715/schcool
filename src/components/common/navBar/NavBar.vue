<template>
	<div class="nav-bar">
		<!--添加插槽，上面不用id是因为很多地方要用
		  下面用div是因为插槽不不能设置样式-->
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="left"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style>
	.nav-bar {
		display: flex;
		line-height: 44px;
		height: 44px;
		text-align: center;
	}

	.left,
	.right {
		width: 60px;
	}

	.center {
		flex: 1;
		color: white;
	}
</style>

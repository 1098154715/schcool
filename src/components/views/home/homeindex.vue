<template>
	<div id="home">
		<nav-bar class="home-bar-background" >
			<div slot="center">购物车</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "components/common/navBar/NavBar.vue"
	export default {
		name: "homeindex",
		components: {
			NavBar
		}
	}
</script>

<style>
	.home-bar-background{
		background-color: #5FBD45;
	}
</style>

<template>
	<div id="app">
		<router-view></router-view>
		<index></index>
	</div>
</template>

<script>
	import index from 'components/index.vue'

	export default {
		name: 'App',
		components: {
			index
		}
	}
</script>

<style>

</style>

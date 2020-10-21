<template>
  <div class="hello">
	<bar-item path="homeindex">
		<img slot="item-img" src="../../../assets/img/tabbar/component.png" />
		<img slot="item-img-act" src="../../../assets/img/tabbar/component_cur.png" />
		<div slot="item-text">首页</div>
		<div slot="item-text">首页</div>
	</bar-item>
	<bar-item path="mycartindex">
		<img slot="item-img" src="../../../assets/img/tabbar/plugin.png" />
		<img slot="item-img-act" src="../../../assets/img/tabbar/plugin_cur.png" />
		<div slot="item-text">购物车</div>
		<div slot="item-text">购物车</div>
	</bar-item>
	<bar-item path="orderindex">
		<img slot="item-img" src="../../../assets/img/tabbar/basics.png" />
		<img slot="item-img-act" src="../../../assets/img/tabbar/basics_cur.png" />
		<div slot="item-text">订单</div>
		<div slot="item-text">订单</div>
	</bar-item>
	<bar-item path="mysettingindex">
		<img slot="item-img" src="../../../assets/img/tabbar/about.png" />
		<img slot="item-img-act" src="../../../assets/img/tabbar/about_cur.png" />
		<div slot="item-text">我的</div>
		<div slot="item-text">我的</div>
	</bar-item>


  </div>
</template>

<script>
	import barItem from "components/common/tabbar/barItem.vue"
	
export default {
	name:'barPage',
  components:{
	barItem
  }
 
}
</script>

<style scoped>
.hello{
	display: flex;
	background-color: aliceblue;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}
.isact1{
	color: red;
}
</style>

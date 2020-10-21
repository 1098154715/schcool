import vue from 'vue';
import VueRouter from 'vue-router';
import homeindex from '../views/home/homeindex.vue'
import mycartindex from '../views/mycart/mycartindex.vue'
import mysettingindex from '../views/mysetting/mysettingindex.vue'
import orderindex from '../views/order/orderindex.vue'
const routerPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
return routerPush.call(this, location).catch(error=> error)
}
//安装插件
vue.use(VueRouter);
const routes=[
	{path:'/',name:"homeindex",components:{default:homeindex}},
		{path:'/homeindex',name:"homeindex",component:homeindex},
		{path:'/mycartindex',name:"mycartindex",component:mycartindex},
		{path:'/orderindex',name:"orderindex",component:orderindex},
		{path:'/mysettingindex',name:"mysettingindex",component:mysettingindex},
]
const router =new VueRouter({
	routes,
	mode:'history'
});

export default router
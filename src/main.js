import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './index.vue'
import AboutHero from './aboutHero.vue'
import Story from './story.vue'
import Scenery from './scenery.vue'
import Video from './video.vue'
import ImageDownload from './imgdownload.vue'

VueRouter.prototype.goBack = function () { 
　　this.isBack = true;
　　window.history.go(-1);
}

/*自定义组件*/
import link from './bot-link.vue'
const botlink = {
    install : function(Vue){
        Vue.component('bot-link', link);
    }
}
Vue.use(botlink);

Vue.use(VueRouter);

var routes = [
    {path:'/index', component:Index},
    {path:'/abouthero', component:AboutHero},
    {path:'/story', component:Story},
    {path:'/scenery', component:Scenery},
    {path:'/video', component:Video},
    {path:'/imgdownload', component:ImageDownload},
    {path:'*', redirect:'/index'}	
]; 

//生成VueRouter对象  
var router = new VueRouter({
    routes,
    /*控制路由切换的时候滚动条位置*/
    scrollBehavior (to, from, savedPosition) {
     if (savedPosition) {
      return savedPosition
     } else {
      return { x: 0, y: 0 }
     }
    }
});   

new Vue({
  router,
  el : '#app',
  data : {　
　　　transitionName: 'slide-right'  // 默认动态路由变化为slide-right　
　},
  watch: {
  　　'$route' (to, from) {
  　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
  　　　　　　if(isBack) {
  　　　　　　　　this.transitionName = 'slide-right';
  　　　　　　} else {
  　　　　　　    this.transitionName = 'slide-left';
  　　　　　}
  　　　　this.$router.isBack = false
  　　  }
　   }
});

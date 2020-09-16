import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

 let router = new Router({
  routes: [
    {
      path: '/login',
      component:()=>import("@/views/Login"),
      meta:{title:"登录"}
    },
    {
      path: '/',
      component:()=>import("@/views/Layout"),
      meta:{title:"xx管理系统"},
      redirect:"/index",
      children:[
       {
        path:'/index',
        component:()=>import("@/views/Index"),
        meta:{title:"后台首页"}

       },
       {
        path:'/menu',
        component:()=>import("@/views/System/Menu"),
        meta:{title:"菜单管理"}
       },
       {
        path:'/role',
        component:()=>import("@/views/System/Role"),
        meta:{title:"角色管理"}
       },
       {
        path:'/user',
        component:()=>import("@/views/System/User"),
        meta:{title:"管理员管理"}

       },
       {
         path:'/banner',
         component:()=>import('@/views/Shop/Banner'),
         meta:{title:"轮播"}
       },
       {
         path:'/gategory',
         component:()=>import('@/views/Shop/Gategory'),
         meta:{title:"分类管理"}
       },
       {
         path:'/goods',
         component:()=>import('@/views/Shop/Goods'),
         meta:{title:"商品管理"}
       },
       {
         path:'/member',
         component:()=>import('@/views/Shop/Member'),
         meta:{title:"会员管理"}
       },
       {
         path:'/sekill',
         component:()=>import('@/views/Shop/Sekill'),
         meta:{title:"秒杀管理"}
       },
       {
         path:'/specs',
         component:()=>import('@/views/Shop/Specs'),
          meta:{title:"商品属性"}
       }
      ]
    },
  ]
})
// 判断是否登录  路由前置守卫
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
   next();
})
export default router;

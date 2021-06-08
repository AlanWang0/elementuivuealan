import Vue from 'vue'
import VueRouter from 'vue-router'


//引入登录组件
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
Vue.use(VueRouter)

const routes = [
  //重定向到/login路径
  { 
    path: '/',
    redirect: '/login' 
  },
  //配置登录组件路径
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/home',
    name:"Home",
    component:Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  //如果用户访问的登录页，直接放行
  if(to.path === '/login') return next()
  //从 sessionStorage 中获取到 保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token，强制跳转到登录页
  if(!tokenStr) return next('/login')
  next()
})
export default router

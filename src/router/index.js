import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    redirect:'home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/tabbar/HomeContainer.vue')
  },
  {
    path: '/home/newsList',
    component: () => import('../components/newList/NewList.vue')
  },
  {
    path: '/member',
    component: () => import('../components/tabbar/MemberContainer.vue')
  },{
    path:'/home/newsinfo/:id',
    component: () => import('../components/newList/NewInfo.vue')
  },
  {
    path: '/home/photoList',
    component: () => import('../components/photos/photoList.vue')
  },
  {
    path: '/home/photoinfo/:id',
    component: () => import('../components/photos/photoInfo.vue')
  },{
    path:'/home/goodsList',
    component: () => import('../components/goods/goodList.vue')
  },
  {
    path: '/shopcar',
    component: () => import('../components/tabbar/ShopCarContainer.vue')
  },
  {
    path: '/search',
    component: () => import('../components/tabbar/SearchContainer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'mui-active'
})

export default router

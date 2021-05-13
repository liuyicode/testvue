import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      showFooter:true
    }
  },
 
  {
    path: '/contact',
    name: 'Contact',
    component: Index
  },
  {
    path: '/product',
    name: 'Contact',
    component: Index
  },
  {
    path: '/activity',
    name: 'Contact',
    component: Index
  },
  {
    path: '/consult',
    name: 'Contact',
    component: Index
  },
  {
    path: '/cochain',
    name: 'Contact',
    component: Index
  },
  // {
  //   path: '/Index',
  //   name: 'index',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

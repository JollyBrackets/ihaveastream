import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/stream/:id',
    name: 'Stream',
    component: () => import(/* webpackChunkName: "stream" */ '../views/Stream.vue'),
    props: true
  },
  {
    path: '/create-Stream',
    name: 'Create Stream',
    component: () => import(/* webpackChunkName: "create-stream" */ '../views/CreateStream.vue'),
    props: true
  },
  {
    path: '/search/:searchTerm?',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artists',
      name: 'artists',
      component: Home,
    },
    {
      path: '/artists/:artistId',
      name: 'songs',
      component: () => import('./views/ArtistSongs.vue')
    },
    {
      path: '/artists/:artistId/:songId',
      name: 'tab',
      component: () => import('./views/SongTab.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/credits',
      name: 'credits',
      component: () => import('./views/Credits.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import editCard from './views/editCard.vue'

const editCard = ()=>import("./views/editCard.vue")
const createCard = ()=>import("./views/createCard.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/card/:id',
      name: 'editCard',
      component: editCard
    },
    {
      path: '/card',
      name: 'createCard',
      component: createCard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

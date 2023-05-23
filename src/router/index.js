import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Reviews from "@/views/Reviews.vue"
import Personal_account from "@/views/Personal_account.vue"
import Authorization from "@/views/Authorization.vue"
import Basket from "@/views/Basket.vue"
import Catalogue from "@/views/Catalogue.vue"
import Registration from "@/views/Registration.vue"
import Tour from "@/views/Tour.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal_account
    },
    {
      path: '/autho',
      name: 'autho',
      component: Authorization
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalogue
    },
    {
      path: '/regist',
      name: 'regist',
      component: Registration
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    },
  ]
})

export default router

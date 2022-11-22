import { createRouter, createWebHistory } from 'vue-router'
import menu from '../views/menu.vue'
import Order from '../views/Order.vue'
import HomeView from '../views/HomeView.vue'
import Select from '../views/CourseSelect.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView,
      meta:{
        layout: 'Main'
      }
    },
    {
      path: '/menu',
      name: 'menu',
      //component: menu,
      meta:{
        layout: 'Menu'
      }
    },
    {
      path: '/order',
      name: 'order',
      meta:{
        layout: 'Order'
      }
    },
    {
      path: '/select',
      name: 'select',
      meta:{
        layout: 'Select'
      }
      // component: select,
      
    },,{
      path: '/form',
      name: 'form',
      // component: FormView,
      meta:{
        layout: 'Default'
      }

    },
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import menu from '../views/menu.vue'
import Order from '../views/Order.vue'
import Select from '../views/CourseSelect.vue'
import Regular from '../views/regular.vue'
import Premium from '../views/premium.vue'




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
      path: '/regular',
      name: 'regular',
      meta:{
        layout: 'Regular'
      }
    },
    {
      path: '/premium',
      name: 'premium',
      meta:{
        layout: 'Premium'
      }
    },

    {
      path: '/select',
      name: 'select',
      meta:{
        layout: 'Select'
      }
    },{
      path: '/admin',
      name: 'admin',
      meta:{
        layout: 'Admin'
      }
    },{
      path: '/adminhome',
      name: 'try',
      meta:{
        layout: 'Try'
      }
    },{
      path: '/cart',
      name: 'cart',
      meta:{
        layout: 'Cart'
      }
    }
  ]
})


export default router
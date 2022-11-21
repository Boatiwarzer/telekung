import { createRouter, createWebHistory } from 'vue-router'
import menu from '../views/menu.vue'
import HomeView from '../views/HomeView.vue'
import CourseSelect from '../views/CourseSelect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      // component: HomeView,
      meta:{
        layout: 'Main'
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu,
      meta:{
        layout: 'Menu'
      }
    },
    {
      path: '/select',
      name: 'select',
      // component: select,
      meta:{
        layout: 'Menu'
      }
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
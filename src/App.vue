
<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
</script> -->

<template>
  <component :is="layout">
    <div></div>
    <RouterView />
  </component>

</template>


<script>
import Main from '@/layouts/Main.vue'
import Menu from '@/views/menu.vue'
import Select from '@/views/CourseSelect.vue'
import Order from '@/views/Order.vue'
import Regular from './views/regular.vue'
import Admin from '@/views/Admin.vue'
import Premium from './views/premium.vue'
import Try from '@/views/Try.vue'
import Cart from '@/views/Cart.vue'




// import Default from '@/layouts/Default.vue'
export default {
  components:
  {
    Main,
    Menu,
    Select,
    Order,
    Regular,
    Premium,
    Admin,
    Try,
    Cart,
    
  },
  computed:{
    layout(){
      console.log(this.$route.meta);
      return this.$route.meta.layout;
    },
  },
};
</script>
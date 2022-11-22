
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
// import Default from '@/layouts/Default.vue'
export default {
  components:
  {
    Main,
    Menu,
    Select,
    Order
    // Select,
    // Default
  },
  computed:{
    layout(){
      console.log(this.$route.meta);
      return this.$route.meta.layout;
    },
  },
};
</script>
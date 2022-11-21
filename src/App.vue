
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <component :is="layout">
    <div></div>
    <RouterView />
  </component>

</template>


<script>
import Main from '@/layouts/Main.vue'
import Menu from '@/layouts/Menu.vue'
// import Select from '@/layouts/Select.vue'
// import Default from '@/layouts/Default.vue'
export default {
  components:
  {
    Main,
    Menu,
    Select,
    Default
  },
  computed:{
    layout(){
      console.log(this.$route.meta);
      return this.$route.meta.layout || Default;
    },
  },
};
</script>
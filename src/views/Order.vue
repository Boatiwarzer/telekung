<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="button" >Order</router-link>
        
    </div>
    <div class="flexbox">
    <div class="item">
    <div class="content">
      <div v-for="menu in selectmenu" :key="menu.id" >
        <img v-if="menu.value === 1" :src="menu.picture" alt="...">
      </div>
      <p>11111</p>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <p>22222</p>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <p>33333</p>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <p>44444</p>
    </div>
  </div>
    </div>
</template>

<script>
import { useSelectMenuStore } from '../stores/order.js';
export default {
    data() {
      return {
        selectmenu: [],
      };
    },
  async mounted(){
    await useSelectMenuStore().fetchData();
    this.selectmenu = useSelectMenuStore().getselectmenu;
    console.log(this.selectmenu);
  },
}
</script>

<style>

</style>
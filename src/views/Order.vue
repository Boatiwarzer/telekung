<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    
    
    
    
    <div class="order">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="butto" >Order</router-link>
        
    </div>
    <div class="icon">
      <font-awesome-icon icon="fa-regular fa-cart-shopping" />
            </div>

    <div>
      <div v-for="menu in selectmenu" :key="menu.id" style="display: inline; ">
            <img v-if="menu.value === 1" :src="menu.picture" alt="..." class="profilecolor2">
      </div>
    </div>
    
    
  <!-- <div class="item">
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
    </div> -->
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
head{
  color: blueviolet;
  font-size: x-large;
 
}
</style>
<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    
    
    
    
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="butto" >Order</router-link>
        
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
        image_src:'',
      };
    },
  async mounted(){
    await useSelectMenuStore().fetchData();
    this.selectmenu = useSelectMenuStore().getselectmenu;
    this.normal()
  },
  methods:{
        normal(){
            this.image_src='https://cdn.discordapp.com/attachments/1039195786585579550/1044184930789371924/normal-menu.jpg';

        },
        regular(){
            this.image_src='https://cdn.discordapp.com/attachments/1039195786585579550/1044173205092450315/regular-menu.jpg';
        },
        premium(){
            this.image_src='https://cdn.discordapp.com/attachments/1039195786585579550/1044184964884865094/premium-menu.jpg';
        },
  },
}
</script>

<style>
head{
  color: blueviolet;
  font-size: x-large;
 
}
</style>
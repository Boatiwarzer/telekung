<template>
  <link rel="stylesheet" href="../src/assets/style.css">
  <link rel="stylesheet" href="../src/assets/main.css">
  

  <div id="background" >
  <div>
    
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/menu" class="button" >Menu</router-link>
      <router-link to="/select" class="button" >Table</router-link>
    <div class="dropdown">
        <router-link to="/order" class="dropbtn" >Order</router-link>
        <div class="dropdown-content">
          <a href="Order">Normal</a>
          <a href="regular">Regular</a>
          <a href="premium">Premium</a>
        </div>
  
    </div>
    <div class="topright">
      <router-link to="/cart" ><font-awesome-icon icon="fa-solid fa-cart-shopping " style="color:brown" size="2x" /></router-link>

    </div>
</div>
</div>
  
         
  <!-- <div class="costom">
    <button @click="normal=!normal" class="button">normal</button>
    <button @click="regular=!regular" class="button">regular</button> 
    <button @click="premium=!premium" class="button">premium</button> 
      
  </div> -->

  <div>
    
    <div class="row">
      
      <div class = "col-md-4" v-for="menu in selectmenu" :key="menu.value===1" style="display: inline-block;" >
          <div v-if="menu.value === 1" class="profilecolor">
          <img :src="menu.picture" class="profilecolor2">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;ชื่อเมนู : {{menu.name}}</h3>
          <!-- <div v-if="menu.name === 'ตับหมู'" class="flex items-center justify-center gap-x-4">
            <button class="butto" @click="increment">+</button>
            {{ count }}
            <button class="butto" @click="decrement">-</button>
          </div> -->
          
          
          <!-- &nbsp;&nbsp;&nbsp;&nbsp;<button>Add To Cart</button> -->

          <div class="card-footer">
            &nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary" @click="addCard(menu)">Add To Cart</button>
          </div>
         

        </div>
          

      </div>
      

</div>
    
    
    
  </div>
  <div>
    <tbody>
      <!-- <tr v-for="product in carts"></tr> -->
    </tbody>
  </div>
  
  
</template>

<script>

// import { isTemplateNode } from '@vue/compiler-core';
import { useSelectMenuStore } from '../stores/order.js';

export default {
  data() {
    return {
      selectmenu: [],
      image_src:'',
      count: 0,
      food:0,
      f:0,
      carts:[],

    };
  },
async mounted(){
  await useSelectMenuStore().fetchData();
  this.selectmenu = useSelectMenuStore().getselectmenu;
  this.normal()
},methods: {
    increment () {
      this.count++;
    },
    decrement () {
      if(this.count > 0){
        this.count-- ;
      }
    },
    addCard:function(menu){
      console.log(this.food);
      // if(menu.id=1){
      //   this.food+=1;
      //   if(this.coffee<=1){
      //     this.carts.push({
      //     qty:1,
      //   })
      //   }else{

      //   }
        
      // }
    },
  },
  computed: {

    

  }

}

</script>

<style>

head{
color: blueviolet;
font-size: x-large;

}
</style>
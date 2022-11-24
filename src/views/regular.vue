<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="../src/assets/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div id="background" class="min-h-screen">
    <div>
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
      <div class="dropdown">
          <router-link to="/order" class="dropbtn" >Order</router-link>
          <div class="dropdown-content">
            <a href="Order">Normal</a>
            <a href="#">Regular</a>
            <a href="premium">Premium</a>
          </div>
    
      </div>
      <div class="topright">
        <div><font-awesome-icon icon="fa-solid fa-cart-shopping" />shop</div>
      </div>
</div>
</div>
    
           
    <div>
        <div class="row">
        <div class = "col-md-4" v-for="menu in selectmenu" :key="menu.value===1" style="display: inline-block;" >
            <div v-if="menu.value === 1" class="profilecolor">
            <img :src="menu.picture" class="profilecolor2">
            <h3>ชื่อเมนู : {{menu.name}}</h3>
            <div class="card-footer">
              <button class="btn btn-primary" @click="addCard(menu)">Add To Cart</button>
          </div>
            </div>
        </div>

	</div>

      
      <div class="row">
        <div class = "col-md-4" v-for="menu in selectmenu" :key="menu.value===1" style="display: inline-block;" >
            <div v-if="menu.value === 2" class="profilecolor">
            <img :src="menu.picture" class="profilecolor2">
            <h3>ชื่อเมนู : {{menu.name}}</h3>
            <div class="card-footer">
              <button class="btn btn-primary" @click="addCard(menu)">Add To Cart</button>
          </div>
            </div>
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
        image_src:'',
        counter: 2,

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
}

</script>

<style>

</style>
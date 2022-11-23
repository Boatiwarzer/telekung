<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div id="background" class="min-h-screen">
    <div>
      
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
      <div class="dropdown">
          <router-link to="/order" class="dropbtn" >Order</router-link>
          <div class="dropdown-content">
            <a href="#">Normal</a>
            <a href="#">Regular</a>
            <a href="#">Premium</a>
          </div>
    
      </div>
      <div class="topright">
        <div><font-awesome-icon icon="fa-solid fa-cart-shopping" />shop</div>
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
            <h3>ชื่อเมนู : {{menu.name}}</h3>
            </div>
            <!-- <div class="wrapper" v-if="menu.value === 1">
              <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button">
                -
              </button>
              <input class="quantity" type="text" name="name" :value="counter">
              <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button">
                +
              </button> -->
        <!-- </div>
÷-->
        </div>

	</div>
      
      
      
    </div>
    
    <!-- <botton @click="dropdown=!dropdown">menu</botton>
    <div class="rounded-lg animate-fadeIn" v-if="dropdown">this is dropdown</div> -->
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
        counter: 1,

      };
    },
  async mounted(){
    await useSelectMenuStore().fetchData();
    this.selectmenu = useSelectMenuStore().getselectmenu;
    this.normal()
  },methods: {
        changeCounter: function(num){
				this.counter += +num
				console.log(this.counter)
				!isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;
            
			}
		},
		computed: {
      

		}
  // methods:{
  //       normal(){
  //           this.normal === false && this.regular === true && this.premium === true;
  //       },
  //       regular(){
  //           this.normal === false && this.regular === false && this.premium === true;
  //       },
  //       premium(){
  //           this.normal === false && this.regular === false && this.premium === false;
  //       },
  // },
}

</script>

<style>

head{
  color: blueviolet;
  font-size: x-large;
 
}
</style>
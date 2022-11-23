<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    
    
    
    <div id="background" class="min-h-screen">
    <div class="order">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="butto" >Order</router-link>
      </div>
    <div class="icon">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100px" height="100px" viewBox="0 0 902.86 902.86" style="enable-background:new 0 0 902.86 902.86;"
	 xml:space="preserve">
    <g>
      <g>
        <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
          M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
        <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
          c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
          c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
          C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
          c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
          M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
          S619.162,694.432,619.162,716.897z"/>
      </g>
    </g>
  </svg></div>
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
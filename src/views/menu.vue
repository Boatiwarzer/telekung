<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="../src/style.css">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        
    </div>
    <div class="header">
        <h1>My Menu</h1>
    </div>
    <div class="costom">
        <button @click="normal" class="button">normal</button>
        <button @click="regular" class="button">regular</button> 
        <button @click="premium" class="button">premium</button> 

    </div>
    <div class="regular">
        <img :src="this.image_src">
    </div>
  
</template>

<script>
export default {
    data() {
    return{
        image_src:'https://cdn.discordapp.com/attachments/1039195786585579550/1044184930789371924/normal-menu.jpg',
    }}
    ,
    mounted() {
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

    }
    }





</script>

<style>
.bg-regular{
    background-image: url("https://cdn.discordapp.com/attachments/1039195786585579550/1044173205092450315/regular-menu.jpg");
    background-position: center;
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
}
</style>
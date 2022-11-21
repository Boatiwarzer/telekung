<template>
    <link rel="stylesheet" href="../src/assets/style.css">
    <link rel="stylesheet" href="../src/style.css">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        
    </div>
    <div class="header">
        <h1>my menu</h1>
    </div>
        
    <div class="bg-regular">
        <!-- <p>chack</p> -->
    </div>
  
</template>

<script>
export default {

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
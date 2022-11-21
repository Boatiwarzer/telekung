<template >
     <div id="background" class="min-h-screen">
   
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
    </div>
    <div>
        <h1 class="h1"><strong><ins>Telekung</ins></strong></h1>
    </div>
</div>
</template>

<script>

export default{
   
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;400&display=swap');

#background {
  /* background-image: url(../assets/images/back.png);  */
    background-color: #ff844b;
    background-size: cover;
    background-repeat: no-repeat;
    animation: bgmain 10s infinite;
}
.h1{
    /* display:block; */
    @apply bg-blue-900 border-4 border-amber-200;
    font-size: 300%;
    color: #FFFFAB;
    text-align: center;
    font-family: 'Mali', cursive;
    margin-left: 35%;
    margin-right: 35%;
    padding: 1%;
    animation: fadeIn 2s;
    /* width: 50%;  */
    
    
}
.button{
    display: inline-block;
    padding: 3px 10px;
    font-size: 100%;
    font-family: 'Prompt', sans-serif;
    color: #080073;
    text-align: center;
    padding: 2%;
    margin-left: auto;
    animation: fadeIn 3s;
}
.button:hover {background-color: #ffd670}
.button:active {
  background-color: #b8f66c;
  box-shadow: 0 5px #ca1313;
  transform: translateY(2px);
  margin-left: auto;
}
</style>
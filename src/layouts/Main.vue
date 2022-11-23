<template >
<div id="background" class="min-h-screen">
   
    <div class="h" style="">
        <div class="name">
        <strong><ins>Tele Shabu!</ins></strong>
        </div>
        <div>
        <router-link to="/" class="butto">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="button" >Order</router-link>
        
        
    </div>
</div>
</div>

    <!-- <div>
        <h1 class="h1"><strong><ins>Tele Shabu</ins></strong></h1>
    </div> -->


<div id="background2" class="min-h-screen">
    <div>
        
    </div>

</div>
</template>

<script>

export default{
   
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;400&display=swap');
*{
    font-family: 'Mali', cursive;
}
#background {
  /* background-image: url(../assets/images/back.png);  */
  background-image: url("https://cdn.discordapp.com/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
  padding: 2%;
}

#background2 {
  /* background-image: url(../assets/images/back.png);  */
  background-image: url("https://media.discordapp.net/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
  background-repeat: repeat-x;
}
.h{
    display: flex;
    color: #ffffff;
    justify-content: space-between; 
    font-family: 'Mali', cursive;
    font-size: 100%;
}

.name{
    font-size: 200%;
}

/* .h1{
    display:block;
    @apply border-4 border-slate-100;
    background-color: #0d6551;
    font-size: 260%;
    color: #e3d0d0;
    text-align: center;
    font-family: 'Mali', cursive;
    margin-left: 1;
    margin-right: 80%;
    padding: 1%;
    animation: fadeIn 2s;
    width: 50%; 
    
    
} */

.butto{
    padding: 20px;
    font-size: 100%;
    font-family: 'Mali', cursive;
    color: #f7f7f9;
    background-color: #3a830c;
    text-align: center;
    padding: 2%;
    margin: 4px 2px 20px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Mali', cursive;
}
.button{
    padding: 3px 10px;
    font-size: 100%;
    font-family: 'Prompt', sans-serif;
    color: #FFFFAB;
    text-align: center;
    padding: 2%;
    margin-left: auto;
    animation: fadeIn 3s;
    font-family: 'Mali', cursive;
    
   
}
.button:hover {background-color: #176d40;border-radius: 12px;}
.button:active {
  background-color: #4e8e00;
  box-shadow: 0 5px #ca1313;
  transform: translateY(2px);
  margin-left: auto;
  border-radius: 12px;
}
</style>
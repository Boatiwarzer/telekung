<template >
<div id="background" class="min-h-screen">
   
    <div class="h">
        <h1 class="h1"><strong><ins>Tele Shabu</ins></strong></h1>
        <span>
        <router-link to="/" class="butto">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        <router-link to="/order" class="button" >Order</router-link>
        </span>
        
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
  background-image: url("https://i.pinimg.com/564x/2e/46/3e/2e463e1c0f4582c6d85e1b8efcade91f.jpg");
  padding: 2%;
}

#background2 {
  /* background-image: url(../assets/images/back.png);  */
  background-image: url("https://media.discordapp.net/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
  background-repeat: repeat-x;
}


.h1{
    /* display:block; */
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
    /* width: 50%;  */
    
    
}

/* .butto{
    display: inline-block;
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
} */
.button{
    
    background-color: #00c496; /* Green */
    border: none;
    color: rgb(251, 251, 251);
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px 20px 20px;
    cursor: pointer;
    
   
}
.button:hover {background-color: #176d40}
.button:active {
  background-color: #4e8e00;
  box-shadow: 0 5px #ca1313;
  transform: translateY(2px);
  margin-left: auto;
}
</style>
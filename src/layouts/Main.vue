<template >
    <link rel="stylesheet" href="../assets/style.css">

    <div id="background" class="min-h-screen">
   
    <div class="h" >
        <!-- <div class="name">
        <strong>Tele Shabu!</strong>
        </div> -->

        <div class="fonts">
        <router-link to="/" class="butto">Home</router-link>
        <router-link to="/menu" class="button1" >Menu</router-link>
        <router-link to="/select" class="button1" >Table</router-link>
        <router-link to="/order" class="button1" >Order</router-link>
            
        </div>

    </div>
    
</div>

<div>
    .............................................................................................................................................................................................................................................................................................................................................................................................
</div>
<div id="background2" class="min-h-screen">
<div class="gap">
    <!-- <img class="w-full aspect-video ..." src="https://i.pinimg.com/564x/4c/62/53/4c6253a290d6d5bcb9c6c69685dde500.jpg" /> -->
    <img class="w-full aspect-square" src="https://cdn.discordapp.com/attachments/1034523519125557309/1045043933580894370/Screenshot_2022-11-24_012152.png" alt="shabu" width="800" height="800">
    <h1 class="slo">Tele Shabu</h1>
    <div class="slo">อิ่มอร่อยกับ เทเลชาบู หม้อไฟแห่งความสุข</div>
    <!-- ... -->
</div>
</div>

<div>
    .............................................................................................................................................................................................................................................................................................................................................................................................
</div>
<div id="background3" class="min-h-screen">
    <div class="icon">
        <div> Follow us </div>
        <font-awesome-icon icon="fa-solid fa-phone" />
         02-32633910
         <font-awesome-icon icon="fa-brands fa-facebook" />
    </div>
</div>


</template>

<script>

export default{
   
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@200;400&display=swap');
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
  background-color: black;
  padding: 2%;
}
#background3 {
  /* background-image: url(../assets/images/back.png);  */
  background-image: url("https://cdn.discordapp.com/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
  padding: 2%;
}

div.gap {
background-color: black ;
  margin: 10px;
  /* border: px solid rgb(141, 117, 117); */
  /* float: ; */
  width: 1000px;
  display: inline-flex;
}



/* .h{
    display: flex;
    color: #ffffff;
    justify-content: space-between; 
    font-family: 'Mali', cursive;
} */

.name{
    font-size: 200%;
    color: #f8f8f8;
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
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Mali', cursive;
}
.button1{
    padding: 3px 10px;
    font-size: 100%;
    font-family: 'Prompt', sans-serif;
    color: #f8f8f8;
    text-align: center;
    padding: 2%;
    margin-left: auto;
    font-family: 'Mali', cursive;
    
    
   
}
.button1:hover {background-color: #176d40;border-radius: 12px;}
.button1:active {
  background-color: #2c7b52;
  box-shadow: 0 5px #ca1313;
  transform: translateY(2px);
  margin-left: auto;
  border-radius: 12px;
}



.slo{
    font-size: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: 'Mali', cursive;
    padding: 1%;
   
}
.icon{
    color: #f7f7f9;
}
</style>
<template>
    <link rel="stylesheet" href="../src/assets/style.css">
  <link rel="stylesheet" href="../src/assets/main.css">
  

  <div id="background" class="min-h-screen">
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
  </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
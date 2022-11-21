<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">คอร์ส</RouterLink>
      </nav>
  </header>

  <RouterView />
  <div>
    telekung 
  </div>
</template>



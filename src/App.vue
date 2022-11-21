<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">คอร์ส</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>



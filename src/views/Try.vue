<template>
    <div class="flex items-center justify-center gap-x-4">
      <button class="text-blue-800" @click="decrement">
        -
      </button>
      {{ number }}
      <button
        class="px-4 py-2 text-white bg-red-600 focus:outline-none"
        @click="increment">
        +
      </button>
    </div>
  </template>
  <script>
  import { ref } from 'vue';
  export default {
    setup() {
      const number = ref(0);
  
      function increment() {
        number.value++;
      }
      function decrement() {
        number.value--;
      }
      return { number, increment, decrement };
    },
  };
  </script>
  <style>
  *{
    @apply text-green-900 text-3xl
  }
</style>
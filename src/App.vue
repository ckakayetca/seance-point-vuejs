<script setup>
import Home from './views/Home.vue';
import CoreHeader from './components/CoreHeader.vue'
import CoreFooter from './components/CoreFooter.vue'
</script>

<template>
  <CoreHeader></CoreHeader>
  <div class="container">
    <Home></Home>
  </div>
  <CoreFooter></CoreFooter>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

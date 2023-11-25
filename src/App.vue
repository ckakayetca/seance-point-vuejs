<script setup>
import CoreHeader from './components/core/CoreHeader.vue'
import CoreFooter from './components/core/CoreFooter.vue'
import Register from './views/auth/Register.vue';
import Home from './views/Home.vue';
import NewSeance from './views/seances/NewSeance.vue';
import Login from './views/auth/Login.vue';
</script>

<template>
  <CoreHeader></CoreHeader>
  <div class="container">
    <Register></Register>
    <Login></Login>
  </div>
  <CoreFooter></CoreFooter>
</template>

<style scoped>
</style>

<script setup>
import CoreHeader from './components/core/CoreHeader.vue'
import CoreFooter from './components/core/CoreFooter.vue'
</script>

<template>
  <CoreHeader></CoreHeader>
  <div class="container">
    <router-view></router-view>
  </div>
  <CoreFooter></CoreFooter>
</template>

<style scoped>
</style>

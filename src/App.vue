<script setup>
import CoreHeader from './components/core/CoreHeader.vue'
import CoreFooter from './components/core/CoreFooter.vue'
import Register from './views/auth/Register.vue';
import Home from './views/Home.vue';
import NewSeance from './views/seances/NewSeance.vue';
import Login from './views/auth/Login.vue';
import NotFound from './views/NotFound.vue';
import Profile from './views/auth/Profile.vue';
import EditProfile from './views/auth/EditProfile.vue';
import Seances from './views/seances/Seances.vue'

</script>

<template>
  <CoreHeader></CoreHeader>
  <div class="container">
    <Seances></Seances>
  </div>
  <CoreFooter></CoreFooter>
</template>

<style scoped>
</style>

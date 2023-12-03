<script>
import CoreHeader from './components/core/CoreHeader.vue'
import CoreFooter from './components/core/CoreFooter.vue'
import { useAuthStore } from './stores/auth';
import { getProfile } from './api/api';

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore }
  },
  components: { CoreFooter, CoreHeader},
  async created() {
    let res = await getProfile();

    const user = res.data;
    this.authStore.setUser(user)
  },
  async beforeUpdate() {
  }
}
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

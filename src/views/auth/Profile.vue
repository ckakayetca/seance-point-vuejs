<script>
import { useAuthStore } from '../../stores/auth';
import { dateFromNow } from '../../utils/utils';
import AppLoader from '../../components/shared/AppLoader.vue'
export default {
  setup() {
    return {
      authStore: useAuthStore(),
    }
  },
  components: { AppLoader },
  data() {
    return {
      user: this.authStore.user,
      hasAppointments: false,
      hasSeances: false,
      isLoading: true,
    }
  },
  created() {
    if(this.authStore.user.seances) {
      this.hasSeances = true;
      this.isLoading = false;
    }

    if(this.authStore.user.appointments) {
      this.hasAppointments = true;
    }
  },
  mounted() {
  },
  methods: {
    dateFromNow,
  }
}
</script>

<template>
  <template v-if="isLoading">
    <AppLoader></AppLoader>
  </template>
  <template v-else>

    <h1>Hi, {{ user.username }}!</h1>
    <h1>Here is some information about your profile!</h1>
    <div class="detail">
      <h2 class="index">Your email:</h2>
      <p>{{ user.email }}</p>
    </div>
    <div class="detail">
      <h2 class="index">Your phone number:</h2>
      <p>{{ user.tel }}</p>
    </div>
    <div class="detail">
      <h2 class="index">You are a member since:</h2>
      <p> {{ dateFromNow(user.created_at) }}</p>
    </div>
    <div class="detail">
      <h2 class="index">Number of seances created:</h2>
      <p>{{ user.seances.length }}</p>
    </div>
    <div class="detail">
      <h2 class="index">Number of appointments:</h2>
      <p>{{ user.appointments.length }}</p>
    </div>
    <div class="detail">
      <h2 class="index">Number of reviews left:</h2>
      <p>{{ user.reviews.length }}</p>
    </div>

    <div class="btn-container">

      <router-link to="/auth/my-appointments" class="button" v-if="hasAppointments">
        My Appointments
      </router-link>
      <router-link to="/auth/my-seances" class="button" v-if="hasSeances">
        My Seances
      </router-link>
      <router-link to="/auth/profile/edit" class="button">Edit Profile</router-link>
    </div>
  </template>
  </template>

  <style scoped>
    h1 {
      text-align: center;
      font-size: 2rem;
    }

    .detail {
      justify-content: center;
      align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}


p {
  text-align: center;
  border-bottom: 1px solid darkorchid;
  width: 200px;
}

.button {
  width: auto;
  padding: 10px;
  margin: 20px;
  position: relative;
  display: inline-block;
  ;
}

.btn-container {
  text-align: center;
  justify-content: space-evenly;
  display: block;
  width: 100%;
}
</style>
<script>
import SeanceReview from './SeanceReview.vue';
import { getSeance } from '../../api/api';
import { fullDate } from '../../utils/utils';
import AppLoader from '../../components/shared/AppLoader.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { appoint } from '../../api/api';
import { useVuelidate } from '@vuelidate/core'
import { useAuthStore } from '../../stores/auth';

export default {
  setup() {
    return {
      v$: useVuelidate(),
      authStore: useAuthStore(),
    }
  },
  components: { SeanceReview, AppLoader, VueDatePicker },
  async created() {
    this.seanceId = this.$route.params.id
    const res = await getSeance(this.seanceId);
    this.seance = res.data;

    if(this.authStore.user._id == this.seance.postedBy._id) {
      this.isOwner = true;
    }

    this.takenDatesList = this.seance.appointments.map((s) => new Date(s.date).toDateString())

    const userIds = this.seance.appointments.map((s) => s.userId)
    if(userIds.includes(this.authStore.user._id)) {
      this.hasAppointment = true;
    }

    this.isLoading = false;
  },
  data() {
    return {
      seanceId: '',
      seance: null,
      isLoading: true,
      date: null,
      isOwner: false,
      hasAppointment: false,
      takenDatesList: [],
    }
  },
  methods: {
    fullDate,
    async onAppoint() {
      let val = await this.v$.$validate();

      if(!val) {
        return
      }

      let res = await appoint(this.seanceId, { date: this.date });
      console.log(res.data)

      this.$router.push('/auth/my-appointments')
    }
  },
  validations() {
    return {
      date: {
        required: true,
      }
    }
  }
}
</script>

<template>
  <template v-if="isLoading">
    <AppLoader></AppLoader>
  </template>

  <template v-else>
    <div class="details-container">
      <h1>{{ seance.title }}</h1>

      <div class="owner-details">
        <p>Posted by <span>{{ seance.postedBy.username }} on {{ fullDate(seance.created_at) }}</span></p>
      </div>

      <div class="owner-buttons" v-if="isOwner">
        <router-link to="/seances/id/edit">
          <button>Edit</button>
        </router-link>
        <button class="button">Delete</button>
      </div>

      <div class="description">
        <p>{{ seance.description }}</p>
      </div>

      <div class="details">
        <div class="detail">
          Type: {{ seance.type }}
        </div>
        <div class="detail">
          Duration: {{ seance.duration }} hours
        </div>
        <div class="detail">
          Price: {{ seance.price }}$
        </div>
      </div>

      <div class="appointment-con">
        <template v-if="hasAppointment">
          <h2>You have an appointment for this seance! Have fun :)</h2>
        </template>

        <template v-else-if="!isOwner">
          <h2>Here you can make an appointment!</h2>

          <form class="appointment" @submit.prevent="onAppoint">
            <div class="form-control">
              <label for="date">Date</label>
              <VueDatePicker v-model="date" :disabled-dates="takenDatesList"></VueDatePicker>
            </div>
            <button>Make an appointment</button>
          </form>
        </template>
      </div>

      <SeanceReview :seance-id="seance._id" :is-owner="isOwner"></SeanceReview>
    </div>
  </template>
</template>


<style scoped>
.appointment {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
}

.form-control {
  display: flex;
  align-items: center;
  flex-direction: row;
}

input {
  width: 100px;
}

h1 {
  text-align: center;
  font-size: 3em;
}

.owner-details {
  text-align: center;
}

.owner-buttons {
  text-align: center;
}

.description {
  margin: 30px;
  text-align: center;
  width: 40em;
}

.details {
  display: flex;
  justify-content: center;
}

.detail {
  margin: 30px 30px;
  border: 2px solid darkorchid;
  padding: 20px;
  border-radius: 10px;
}

.details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-align: center;
}
</style>
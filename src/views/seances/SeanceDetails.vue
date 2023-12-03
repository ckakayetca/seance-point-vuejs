<script>
import SeanceReview from './SeanceReview.vue';
import { getSeance } from '../../api/api';
import { fullDate } from '../../utils/utils';
import AppLoader from '../../components/shared/AppLoader.vue';

export default {
    components: { SeanceReview, AppLoader },
    async created() {
      this.seanceId = this.$route.params.id
      const result = await getSeance(this.seanceId);
      this.seance = result.data;
      this.isLoading = false;
    },
    data() {
      return {
        seanceId: '',
        seance: null,
        isLoading: true,
      }
    },
    methods: {
      fullDate,
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

      <div class="owner-buttons">
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
          Duration: {{seance.duration}} hours
        </div>
        <div class="detail">
          Price: {{ seance.price }}$
        </div>
      </div>

      <div class="appointment-con">
        <h2>You have an appointment for this seance! Have fun :)</h2>

        <h2>Here you can make an appointment!</h2>

        <form action="" class="appointment">
          <div class="form-control">
            <label for="date">Date</label>
            <input type="text" />
          </div>
          <button>Make an appointment</button>
        </form>
      </div>

      <SeanceReview :seance-id="seance._id"></SeanceReview>
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
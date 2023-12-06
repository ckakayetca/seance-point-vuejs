<script>
import { deleteAppointment, getAppointments } from '../../api/api';
import { useAuthStore } from '../../stores/auth';
import { fullDate } from '../../utils/utils';
export default {
    setup() {
        return {
            authStore: useAuthStore(),
        }
    },
    data() {
        return {
            noApps: false,
            isLoading: true,
            appsList: [],
        }
    },
    async created() {
        let res = await getAppointments();
        console.log(res.data)
        this.appsList = res.data;

        if (this.appsList.length == 0) {
            this.noApps = true;
        }

        this.isLoading = false;
    },
    methods: {
        fullDate,
        async onAppCancel(id) {
            let res = await deleteAppointment(id);

            this.$router.go()
        }
    }

}
</script>

<template>

    <!-- if not loading -->
    <template v-if="!isLoading">

        <!-- no appoinments -->
        <div class="no-apps" v-if="noApps">
            <h1>You have no appointments!</h1>
            <RouterLink to="/auth/profile" class="button">Go Back</RouterLink>
        </div>

        <!-- has appointments -->
        <template v-else>
            <h1>My Appointments</h1>
            <div class="cards-container">
                <div class="seance-card" v-for="app in appsList" :key="app._id">
                    <h3>
                        <a class="title"><span>{{ app.seanceId.title }}</span></a>
                    </h3>
                    <p>Type: {{ app.seanceId.type }}</p>
                    <p>Price: 50$</p>
                    <p>{{ fullDate(app.date) }}</p>

                    <div class="btn-container">
                        <button class="button" @click="onAppCancel(app._id)">Cancel Appointment</button>
                        <router-link :to="`/seances/${app.seanceId._id}`" class="button">
                            Go to Seance
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </template>

    <!-- loading -->
    <template v-else>
        <AppLoader></AppLoader>
    </template>
</template>


<style scoped>
h1 {
    font-size: 3em;
}

.title {
    font-size: 1.5em;
}

.seance-card {
    justify-content: space-evenly;
    gap: 0.3em;
    padding: 2em;
    background-color: darkorchid;
}

.btn-container {
    margin-top: 1em;
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
}

.btn-container .button {
    font-size: 0.7em;
    padding: 0.5em 1em;
    border-radius: 10px;
}

.no-apps {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.no-apps a {
    margin: 2em auto;
    padding: 0.5em 1em;
    font-size: 3em;
}
</style>
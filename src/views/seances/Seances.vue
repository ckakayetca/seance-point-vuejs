<script>
import { getAllSeances, getMySeances } from '../../api/api';
import { dateFromNow } from '../../utils/utils'
import { useAuthStore } from '../../stores/auth';
import { mapState } from 'pinia';

export default {
    setup() {
        return {
            authStore: useAuthStore(),
        }
    },
    props: {
        mySeances: Boolean,
    },
    async created() {
        if(this.mySeances) {
            let res = await getMySeances();
            this.seancesList = res.data
        } else {
            let res = await getAllSeances();
            this.seancesList = res.data
        }
        this.isLoading = false;
    },
    data() {
        return {
            seancesList: [],
            isLoading: true,
        }
    },
    methods: {
        dateFromNow
    },
    computed: {
        ...mapState(useAuthStore, ["isLoggedIn"])
    }
}
</script>

<template>
    <template v-if="isLoading">
        <AppLoader></AppLoader>
    </template>
    <template v-else-if="seancesList.length == 0">
        <h1 v-if="!mySeances">No seances have been posted for now.</h1>
        <h1 v-else>You haven't posted any seances yet</h1>
        <router-link to="/" class="button">Go Back</router-link>
        <router-link to="/seances/create" class="button">Post a Seance</router-link>
    </template>

    <template v-else>
        <h1 v-if="!mySeances">Seances Page</h1>
        <h1 v-else>My Seances</h1>
        <div class="cards-container">
            <div class="seance-card" v-for="seance in seancesList" :key="seance._id">
                <router-link :to="`/seances/${seance._id}`" class="button h3">
                    {{ seance.title }}
                </router-link>
                <p>{{seance.type}}</p>
                <p>{{ seance.price }}$ for an appointment</p>
                <p>{{  dateFromNow(seance.created_at) }}</p>
            </div>
        </div>
    </template>
</template>


<style>
    .h3 {
        font-weight: bold;
        font-size: 1.17em
    }
    .cards-container {
        margin: 3em 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 3em;
        font-size: 1.2em;
    }

    .seance-card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        gap: 1em;
        background-color: rgb(179, 61, 238);
        border: 4px solid darkorchid;
        padding: 3em 2em;
        border-radius: 1em;
        color: #dfdfdf;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4);
        width: 20em;
        height: 20em;
    }

    .seance-card .button {
        margin: 0;
        border-radius: 0.7em;
    }
</style>
<script>
import { logout } from '../../api/api';
import { useAuthStore } from '../../stores/auth';
import { mapState } from 'pinia';


export default {
    computed: {
        ...mapState(useAuthStore, ["isLoggedIn"])
    },
    methods: {
        async onLogout() {
            let res = await logout();
            if(this.$route.path === "/") {
                this.$router.go();
            } else {
                this.$router.push('/')
            }
        }
    }
}
</script>

<template>
    <header>
        <!-- Feature directed navigation (home, about, seances) -->
        <nav class="left">
            <ul>
                <li><router-link to="/" class="button">Home</router-link></li>
                <li><router-link to="/seances" class="button">Seances</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/seances/create" class="button">New Seance</router-link></li>
            </ul>
        </nav>
        <!-- Auth-directed navigation (login, register, logout, profile) -->
        <nav class="right">
            <ul>
                <template v-if="!isLoggedIn">
                    <li><router-link to="/auth/login" class="button">Login</router-link></li>
                    <li><router-link to="/auth/register" class="button">Register</router-link></li>
                </template>
                <template v-else>
                    <li><router-link to="/auth/profile" class="button">My Profile</router-link></li>
                    <li><a class="button" @click="onLogout">Logout</a></li>
                </template>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
header {
    width: 100%;
    height: 4em;
    background-color: darkorchid;
    display: flex;
    flex-direction: row;
    box-shadow: 0 10px 15px black;
    justify-content: space-between;
    margin-bottom: 3em;
}

nav {
    display: flex;
    height: 100%;
}

.left {
    justify-self: flex-start;
}

.right {
    justify-self: flex-end;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}
</style>
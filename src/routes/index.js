import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Seances from '../views/seances/Seances.vue'
import SeanceDetails from '../views/seances/SeanceDetails.vue'
import NewSeance from '../views/seances/NewSeance.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Profile from '../views/auth/Profile.vue'
import EditProfile from '../views/auth/EditProfile.vue'
import MyAppointments from '../views/auth/MyAppointments.vue'
import { useAuthStore } from "../stores/auth";
import authentication from "./middlewares/authentication";


const routes = [
    { path: '/', component: Home },
    {
        path: '/seances', children: [
            { path: '', component: Seances },
            { path: ':id', component: SeanceDetails },
            { path: ':id/edit', component: NewSeance },
            { path: 'create', component: NewSeance }
        ]
    },
    {
        path: '/auth',
        children: [
            { path: 'login', component: Login },
            { path: 'register', component: Register },
            { path: 'profile', component: Profile },
            { path: 'profile/edit', component: EditProfile },
            { path: 'my-seances', component: Seances },
            { path: 'my-appointments', component: MyAppointments },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(authentication);

export default router;
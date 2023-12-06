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
import Error from '../components/core/Error.vue'
import { useAuthStore } from "../stores/auth";
import authentication from "./middlewares/authentication.js";
import auth from './middlewares/authorization.js'


const routes = [
    { path: '/', component: Home },
    {
        path: '/seances', children: [
            { path: '', component: Seances },
            { path: ':id', component: SeanceDetails },
            { path: ':id/edit', component: NewSeance, props: { editMode: true }, beforeEnter: auth},
            { path: 'create', component: NewSeance, beforeEnter: auth }
        ]
    },
    {
        path: '/auth',
        children: [
            { path: 'login', name: 'login', component: Login, beforeEnter: auth },
            { path: 'register', component: Register, beforeEnter: auth },
            { path: 'profile', component: Profile, beforeEnter: auth },
            { path: 'profile/edit', component: EditProfile, beforeEnter: auth },
            { path: 'my-seances', component: Seances, props: { mySeances: true }, beforeEnter: auth },
            { path: 'my-appointments', component: MyAppointments, beforeEnter: auth },
        ]
    },
    { path: '/error', name: 'error', component: Error, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(authentication);

export default router;
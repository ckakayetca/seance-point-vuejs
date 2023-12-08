import { useAuthStore } from "../../stores/auth";


export default async function auth(to, from) {

    let authStore = useAuthStore();

    if(!authStore.isLoggedIn) {
        if(to.path !== '/auth/login' && to.path !== '/auth/register')
        return { name: 'login'}
    } else if(to.path === '/auth/login' || to.path === '/auth/register') {
        return '/'
    }
}
import { useAuthStore } from "../../stores/auth";
import { getProfile } from "../../api/api";

function hasAuthCookie() {
    return document.cookie.includes('auth');
}
export default async function authentication(to, from, next) {
    console.log('auth')

    const authStore = useAuthStore()
    if(!hasAuthCookie()) {
        authStore.$reset();
    } else {
        let res = await getProfile();
        const user = res.data
        console.log(user)
        authStore.setUser(user)
    }

    return next();
}
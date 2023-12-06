import { useAuthStore } from "../../stores/auth";
import { getProfile } from "../../api/api";

function hasAuthCookie() {
    return document.cookie.includes('auth');
}
export default async function authentication(to, from, next) {

    const authStore = useAuthStore()
    if(!hasAuthCookie()) {
        authStore.$reset();
    } else {
        let res = await getProfile();
        authStore.setUser(res.data)
    }

    return next();
}
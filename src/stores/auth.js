import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        setUser(data) {
            this.user = data;

            if(this.user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        }
    },
})
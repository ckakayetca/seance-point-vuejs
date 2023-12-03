import { defineStore } from "pinia";
import { emptyUser } from "../utils/utils";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: emptyUser,
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
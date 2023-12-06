import { defineStore } from "pinia";

export const useErrorStore = defineStore("error", {
    state: () => ({
        error: '',
    }),
    actions: {
        setError(error) {
            this.error = error;
        }
    },
})
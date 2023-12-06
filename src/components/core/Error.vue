<template>
    <div class="big-error">
        <h1>Uh oh!</h1>
        <h4>{{ message }}</h4>
    </div>
</template>

<script>
import {useErrorStore} from '../../stores/error.js'

export default {
    setup() {
        return {
            errorStore: useErrorStore()
        }
    },
    data() {
        return {
            message: '',
        }
    },
    created() {
        this.message = this.errorStore.error
    }
}
</script>

<style scoped>
.big-error {
    border: 5px solid red;
    padding: 5em;
    text-align: center;
    border-radius: 5em;
    background-color: rgb(255, 155, 155);
}

.big-error h1 {
    font-size: 10em
}

.big-error h4 {
    font-size: 2em;
}
</style>
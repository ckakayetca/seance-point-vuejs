<script>
import useVuelidate from '@vuelidate/core';
import * as vuelidators from '@vuelidate/validators'
import FormInput from '../../components/shared/FormInput.vue';
import { login } from '../../api/api';
import { useAuthStore } from '../../stores/auth';

const userPassRegex = /^\w+$/;
function matchesRegex(regex) {
    return (email) => {
        return regex.test(email);
    }
}

export default {
    components: { FormInput },
    setup() {
        return {
            v$: useVuelidate(),
            authStore: useAuthStore(),
        }
    },
    data() {
        return {
            formData: {
                username: '',
                password: '',
            }
        }
    },
    validations() {
        return {
            formData: {
                username: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(userPassRegex)),
                    minLength: vuelidators.minLength(4),
                },
                password: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(userPassRegex)),
                    minLength: vuelidators.minLength(5),
                },
            }
        }
    },
    methods: {
        async onSubmit() {
            const res = await this.v$.$validate();

            if(!res) {
                return
            }

            const user = await login(this.formData);
            this.authStore.setUser(user.data);
            this.$router.push('/')

        }
    }

}
</script>

<template>
    <!-- Username is required -->
    <!-- Username must match this regex /^\w+$/ -->
    <!-- Username should be at least 4 characters -->

    <!-- Password is required -->
    <!-- Password must match this regex /^\w+$/ -->
    <!-- Password should be at least 5 characters -->

    <form action="" class="login" @submit.prevent="onSubmit">
        <h1>Login Page</h1>

        <fieldset>
            <FormInput field="username" label="Username" required v-model="formData.username" :v$="v$"></FormInput>

            <FormInput field="password" type="password" label="Password" required v-model="formData.password" :v$="v$"></FormInput>

            <div class="form-control">
                <button class="button">Log In!</button>
            </div>
        </fieldset>
    </form>

    <p class="signup">
        Don't have an account?
        <router-link to="/auth/register" class="button"> Sign Up! </router-link>
    </p>
</template>


<style>

.login {
    margin: 1em auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%
}

.login fieldset {
    margin: 3em;
}

.signup {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
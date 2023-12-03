<script>
import useVuelidate from '@vuelidate/core';
import * as vuelidators from '@vuelidate/validators'
import FormInput from '../../components/shared/FormInput.vue';

const emailRegex = /^\w+@abv.bg$/;
const userPassRegex = /^\w+$/;
const telRegex = /^\+359\d{9}$/;

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
        }
    },
    data() {
        return {
            formData: {
                email: '',
                username: '',
                pass: '',
                rePass: '',
                tel: '',
            }
        }
    },
    validations() {
        return {
            formData: {
                email: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(emailRegex)),
                },
                username: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(userPassRegex)),
                    minLength: vuelidators.minLength(4),
                },
                pass: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(userPassRegex)),
                    minLength: vuelidators.minLength(5),
                },
                rePass: {
                    type: String,
                    required: true,
                    matchesPass: vuelidators.helpers.withMessage('The passwords don\'t match!', vuelidators.sameAs(this.formData.pass)),
                },
                tel: {
                    type: String,
                    required: true,
                    matchesRegex: vuelidators.helpers.withMessage('Invalid input!', matchesRegex(telRegex)),
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
        }
    }

}
</script>

<template>
    <!-- Email is required -->
    <!--
              Email must match this regex /^\w+@abv.bg$/
              (letter/digit/underscore) + @abv.bg
              I did this solely to demonstrate a custom validator
             -->

    <!-- Username is required -->
    <!-- Username must match this regex /^\w+$/ -->
    <!-- Username should be at least 4 characters -->

    <!-- Password is required -->
    <!-- Password must match this regex /^\w+$/ -->
    <!-- Password should be at least 5 characters -->
    <!-- Passwords must match (vuelidate sameAs helper) -->

    <!-- Phone is required -->
    <!-- Phone must match this regex /^\+359\d{9}$/ -->
    <!-- Phone should start with +359 and have 9 digits afterwards -->
    <form action="" class="register" @submit.prevent="onSubmit">
        <h1>Registration</h1>

        <fieldset>
            <FormInput field="email" label="E-mail" required v-model="formData.email" :v$="v$"></FormInput>

            <FormInput field="username" label="Username" required v-model="formData.username" :v$="v$"></FormInput>

            <FormInput field="pass" type="password" label="Password" required v-model="formData.pass" :v$="v$"></FormInput>

            <FormInput field="rePass" type="password" label="Confirm Password" required v-model="formData.rePass" :v$="v$"></FormInput>

            <FormInput field="tel" label="Phone number" required v-model="formData.tel" :v$="v$"></FormInput>

            <div class="form-control">
                <button class="button">Sign Up!</button>
            </div>
        </fieldset>
    </form>

    <p class="have-account">
        Already have an account?
        <router-link to="/auth/login" class="button"> Log In! </router-link>
    </p>
</template>


<style>

.register {
    margin: 1em auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.register fieldset {
    margin: 3em;
}

.have-account {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
}


</style>
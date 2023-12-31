<script>
import useVuelidate from '@vuelidate/core';
import * as vuelidators from '@vuelidate/validators'
import FormInput from '../../components/shared/FormInput.vue';
import { editProfile, getProfile } from '../../api/api';

const emailRegex = /^\w+@abv.bg$/;
const userPassRegex = /^\w+$/;
const telRegex = /^\+359\d{9}$/;

function matchesRegex(regex) {
    return (string) => {
        return regex.test(string);
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
                tel: '',
            }
        }
    },
    async created() {
        let res = await getProfile();

        let {email, username, tel} = res.data;

        this.formData = {email, username, tel};

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

            let response = await editProfile(this.formData);
            this.$router.push('/auth/profile')
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

    <!-- Phone is required -->
    <!-- Phone must match this regex /^\+359\d{9}$/ -->
    <!-- Phone should start with +359 and have 9 digits afterwards -->
    <form action="" class="register" @submit.prevent="onSubmit">
        <h1>Profile Edit Page</h1>

        <fieldset>
            <FormInput field="email" label="E-mail" required v-model="formData.email" :v$="v$"></FormInput>

            <FormInput field="username" label="Username" required v-model="formData.username" :v$="v$"></FormInput>

            <FormInput field="tel" label="Phone number" required v-model="formData.tel" :v$="v$"></FormInput>

            <div class="form-control">
                <button class="button">Submit</button>
            </div>
        </fieldset>
    </form>
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
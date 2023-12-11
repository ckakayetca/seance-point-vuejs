
<script>
import { useVuelidate } from '@vuelidate/core'
import { minValue, minLength, required } from '@vuelidate/validators'
import FormInput from '../../components/shared/FormInput.vue'
import { createSeance, getSeance, editSeance } from '../../api/api'

export default {
    props: {
        editMode: Boolean,
    },
    components: { FormInput },
    setup() {
        return {
            v$: useVuelidate(),
        }
    },
    data() {
        return {
            seanceId: '',
            formData: {
                title: '',
                type: '',
                price: 0,
                duration: 0,
                description: '',
            },
            initialState: {},
        }
    },
    validations() {
        return {
            formData: {
                title: { required, minLength: minLength(10) },
                type: { required },
                price: { required, min: minValue(0) },
                duration: { required, min: minValue(1) },
                description: { required, minLength: minLength(25) }
            }
        }
    },
    async created() {
        if(this.editMode) {
            this.seanceId = this.$route.params.id
            let res = await getSeance(this.seanceId);

            let {title, type, price, duration, description } = res.data;

            this.formData = {title, type, price, duration, description}
        }

    },
    mounted() {
        this.initialState = { ...this.formData };
    },
    methods: {
        async onSubmit() {
            const res = await this.v$.$validate();
            if(!res) {
                return
            }

            if(this.editMode) {
                const response = await editSeance(this.seanceId, this.formData)
            } else {
                const response = await createSeance(this.formData)
                this.seanceId = response.data._id
            }
            this.$router.push(`/seances/${this.seanceId}`)
        },
        resetForm() {
            this.formData = { ...this.initialState };
        },
    }
}
</script>

<template>
    <div class="seance">

        <h1 v-if="!editMode">Start your career by posting a seance offer!</h1>
        <h1 v-else>Edit Page</h1>

        <form class="seance" @submit.prevent="onSubmit">

            <FormInput field="title" label="Title" required v-model="formData.title" :v$="v$"></FormInput>

            <FormInput field="type" label="Type" required v-model="formData.type" :v$="v$"></FormInput>

            <FormInput field="price" type="number" label="Price" required v-model="formData.price" :v$="v$"></FormInput>

            <FormInput field="duration" type="number" label="Duration" required v-model="formData.duration" :v$="v$">
            </FormInput>

            <FormInput field="description" type="textarea" label="Description" required :v$="v$">
                <textarea name="description" id="description" v-model="formData.description" cols="30" rows="10"
                    @blur="v$.formData.description.$touch"></textarea>
            </FormInput>

            <div class="form-control btns">
                <button class="button cancel" @click="resetForm">Cancel</button>
                <button class="button post" :disabled="v$.$invalid">Post</button>
            </div>

        </form>
    </div>
</template>

<style scoped>
.btns {
    flex-direction: row;
    justify-content: space-evenly;
}

.button {
    font-size: 2em;
}

.seance {
    margin: 1em auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}

input {
    margin: 0.7em;
}
</style>
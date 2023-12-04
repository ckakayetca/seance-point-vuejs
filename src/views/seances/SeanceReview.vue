<script>
import { getReviews } from '../../api/api';
import { dateFromNow } from '../../utils/utils'
import { useAuthStore } from '../../stores/auth';
import AppLoader from '../../components/shared/AppLoader.vue';
import FormInput from '../../components/shared/FormInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { minValue, maxValue, maxLength } from '@vuelidate/validators'
import { postReview, editReview, deleteReview } from '../../api/api';
export default {
    components: { AppLoader, FormInput },
    setup() {
        return {
            authStore: useAuthStore(),
            v$: useVuelidate(),
        }
    },
    props: {
        seanceId: String,
        isOwner: Boolean,
    },
    async created() {
        const res = await getReviews(this.seanceId);
        this.reviewsList = res.data

        let userIds = this.reviewsList.map((r) => r.postedBy._id);

        if (userIds.includes(this.authStore.user._id)) {
            this.userAlreadyReviewed = true;
        }

        if (this.reviewsList.length > 0) {
            this.noReviews = false;
        }

        this.isLoading = false;
    },
    data() {
        return {
            reviewsList: [],
            showReviewForm: false,
            noReviews: true,
            editMode: false,
            userAlreadyReviewed: false,
            isLoading: true,
            formData: {
                rating: 0,
                text: '',
            }
        }
    },
    methods: {
        dateFromNow,
        checkOwner(review) {
            if (review.postedBy._id == this.authStore.user._id) {
                return true;
            }
            return false;
        },
        toggleReview() {
            this.showReviewForm = !this.showReviewForm;
        },
        toggleEditMode() {
            this.editMode = !this.editMode;
        },
        async onReviewPost() {
            let val = await this.v$.$validate();

            if(!val) {
                return
            }

            if(!this.editMode) {
                let res = await postReview(this.seanceId, this.formData)
            } else {
                let myId = this.authStore.user._id;
                let reviewId = '';

                for(let r of this.reviewsList) {
                    if(r.postedBy._id === myId) {
                        reviewId = r._id;
                        break;
                    }
                }
                console.log(this.seanceId);
                console.log(this.formData)
                let res = await editReview(this.seanceId, reviewId, this.formData)
            }

            this.$router.go()
        },
        async onReviewDelete() { },

    },
    validations() {
        return {
            formData: {
                rating: {
                    type: Number,
                    required: true,
                    minValue: minValue(1),
                    maxValue: maxValue(5),
                }
            }
        }
    }
}
</script>

<template>
    <!-- reviews -->
    <template v-if="!isLoading">
        <div class="reviews-container">
            <div class="reviews-container" v-if="!noReviews">
                <h2>Reviews for this seance:</h2>
                <div class="review-card" v-for="review in reviewsList" :key="review._id">
                    <header class="header">
                        <p>
                            <span v-if="!checkOwner(review)">{{ review.postedBy.username }}</span>
                            <span v-else>You</span>
                            rated <span>{{ review.rating }} stars, {{ dateFromNow(review.created_at) }}</span>
                        </p>
                    </header>
                    <div class="review-content" v-if="review.text">
                        <p> {{ review.text }}</p>
                    </div>
                    <div class="review-owner-buttons" v-if="checkOwner(review)">
                        <button @click="toggleEditMode">Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
            <div class="reviews-container" v-else>
                <h2>There are no reviews for this seance</h2>
            </div>


            <!-- toggle review form if user hasnt reviewed yet-->
            <template v-if="!userAlreadyReviewed">
                <h2 class="button" v-if="!showReviewForm && !isOwner && authStore.isLoggedIn" @click="toggleReview"> Leave a
                    review!</h2>
                <h2 class="button" v-if="showReviewForm" @click="toggleReview()">Hide</h2>
            </template>

            <!-- review form -->
            <div class="leave-review" v-if="showReviewForm || editMode">
                <h2 class="button" @click="toggleEditMode" v-if="editMode">Hide</h2>
                <form class="review" @submit.prevent="onReviewPost">
                    <FormInput field="rating" type="number" label="Rating" v-model="formData.rating" :v$="v$"></FormInput>
                    <FormInput field="text" type="textarea" label="Opinion" :v$="v$">
                        <textarea name="text" id="text" v-model="formData.text" cols="30" rows="10"></textarea>
                    </FormInput>

                    <button v-if="!editMode">Submit</button>
                    <button v-else>Edit Review</button>
                </form>

            </div>

        </div>
    </template>
    <AppLoader v-else></AppLoader>
</template>


<style scoped>
.reviews-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.review-card {
    margin: 1em auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0.5em 1em;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: darkorchid;
    color: #dfdfdf;
}

.review-card .header {
    font-size: 1.5em;
}

.leave-review {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
}

.review {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border: 2px solid darkorchid;
}

.review input {
    margin: 0px auto;
}

.review textarea {
    margin: 20px auto;
    font-size: 16px;
    border-bottom: 2px solid darkorchid;
    width: 20em;
    height: 10em;

}

.review-owner-buttons button {
    font-size: 0.7em;
}

h2 {
    margin: 1em auto;
}

h2.button {
    width: 30em;
}
</style>
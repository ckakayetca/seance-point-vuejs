<script>
export default {

}
</script>

<template>
    <!-- reviews -->
    <div class="reviews-container">
        <div class="reviews-container">
            <h2>Reviews for this seance:</h2>
            <div class="review-card">
                <header class="header">
                    <p>
                        <span>User</span>
                        <!-- <span>You</span> -->
                        rated <span>5 stars, 3 months ago</span>
                    </p>
                </header>
                <div class="review-content">
                    <p>review text</p>
                </div>
                <div class="review-owner-buttons">
                <button>Edit</button>
                <button>Delete</button>
                </div>
            </div>
        </div>
        <!-- <div class="reviews-container" *ngIf="noReviews">
                <h2>There are no reviews for this seance</h2>
            </div> -->


        <!-- toggle review form if user hasnt reviewed yet-->
            <h2 class="button"> Leave a review!</h2>
            <!-- <h2 class="button">Hide</h2> -->

        <!-- review form -->
        <div class="leave-review">
            <h2 class="button">Hide</h2>
            <form class="review">
                <div class="form-control">
                    <label for="rating">Rating</label>
                    <input type="number" name="rating" id="rating" placeholder="1-5" />
                </div>
                <div class="errors">
                    <p class="error"> Rating is required!</p>
                </div>
                <div class="form-control">
                    <label for="reviewText">Opinion</label>
                    <textarea type="text" name="reviewText" id="reviewText"></textarea>
                </div>
                <button>Submit</button>
                <button>Edit Review</button>
            </form>

        </div>

    </div>
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
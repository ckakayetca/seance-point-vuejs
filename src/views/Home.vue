<template>
    <div class="home">
        <h1>Welcome to SeancePoint!</h1>
        <p>
            This is a project developed by Emil Georgiev for SoftUni's Vuejs Exam.
        </p>
        <p>
            Here, as a registered user you will be able to create a public offer for any
            type of seance: Psychology, Astrology, Taro Reading, etc.
        </p>
        <p>Or quite the opposite: Make an appointment for someone's seance offer.</p>
        <p>You are also able to leave a review to express your satisfaction of the user's service.</p>

        <div class="buttons">
            <a class="button">Sign Up!</a>
            <a class="button">Check out the published seances</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .home p {
        font-size: 1.2em;
        margin: 1em auto;
    }
    .home h1 {
        font-size: 3em;
    }

    .buttons {
        margin: 30px auto;
    }

    .buttons a {
        margin: auto 30px;
        font-size: 2em;
        padding: 0.5em;
        border-radius: 0.4em;
    }
</style>
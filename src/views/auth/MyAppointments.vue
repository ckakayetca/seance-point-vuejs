<script>
export default {

}
</script>

<template>
    <!-- <h1>My Appointments</h1> -->

    <div class="no-apps">
            <h1>You have no appointments!</h1>
            <a class="button">Go Back</a>
        </div>

    <!-- <div class="cards-container">
        <div class="seance-card">
            <h3>
                <a class="title"><span>Seance Title</span></a>
            </h3>
            <p>Type: Seance Type</p>
            <p>Price: 50$</p>
            <p>December 23rd 2023, 12:00 AM</p>

            <div class="btn-container">
                <button class="button">Cancel Appointment</button>
                <button class="button">
                    Go to Seance
                </button>
            </div>
        </div>
    </div> -->
</template>


<style scoped>

h1 {
    font-size: 3em;
}

.title {
    font-size: 2em;
}

.seance-card {
    justify-content: space-evenly;
    gap: 0.3em;
    padding: 2em;
    background-color: darkorchid;
}

.btn-container {
    margin-top: 1em;
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
}

.btn-container .button {
    font-size: 0.7em;
    padding: 0.5em 1em;
    border-radius: 10px;
}

.no-apps {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.no-apps a {
    margin: 2em auto;
    padding: 0.5em 1em;
    font-size: 3em;
}


</style>
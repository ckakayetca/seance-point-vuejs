<script>
export default {

}
</script>

<template>
    <h1>Seances Page</h1>
    <!-- <h1>No seances have been posted for now.</h1> -->

    <div class="cards-container">
        <div class="seance-card">
            <h3 class="button">Seance Title</h3>
            <p>Seance Type</p>
            <p>30$ for an appointment</p>
            <p>30 minutes ago</p>
        </div>
        <div class="seance-card">
            <h3 class="button">Seance Title</h3>
            <p>Seance Type</p>
            <p>30$ for an appointment</p>
            <p>30 minutes ago</p>
        </div>
    </div>
</template>


<style>
    .cards-container {
        margin: 3em 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 5em;
        font-size: 1.2em;
    }

    .seance-card {
        flex: 1 1 40%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1em;
        background-color: rgb(179, 61, 238);
        padding: 2em;
        border-radius: 1em;
        color: #dfdfdf;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4);
    }

    .seance-card .button {
        margin: 0;
        border-radius: 0.7em;
    }
</style>
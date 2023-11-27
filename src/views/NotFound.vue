<template>
    <div class="notfound">
        <h1>Uh oh!</h1>
        <h2>Seems like you stumbled on a page that doesn't exist!</h2>
        <a routerLink="/home" class="button">Go to Home Page</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.notfound {
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1 {
    text-align: center;
    font-size: 3rem;
    display: block;
}

.notfound a {
    margin: 100px auto;
    padding: 60px;
    font-size: 3rem;
}
</style>
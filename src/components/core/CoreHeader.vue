<template>
    <header>
        <!-- Feature directed navigation (home, about, seances) -->
        <nav class="left">
            <ul>
                <li><a class="button">Home</a></li>
                <li><a class="button">Seances</a></li>
                <li><a class="button">New Seance</a></li>
            </ul>
        </nav>
        <!-- Auth-directed navigation (login, register, logout, profile) -->
        <nav class="right">
            <ul>
                <li><a class="button">Login</a></li>
                <li><a class="button">Register</a></li>
                <li><a class="button">My Profile</a></li>
                <li><a class="button">Logout</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 100%;
        height: 4em;
        background-color: darkorchid;
        display: flex;
        flex-direction: row;
        box-shadow: 0 10px 15px black;
        justify-content: space-between;
        margin-bottom: 3em;
    }

    nav {
        display: flex;
        height: 100%;
    }

    .left {
        justify-self: flex-start;
    }

    .right {
        justify-self: flex-end;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }
</style>
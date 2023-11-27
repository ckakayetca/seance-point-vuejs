<script>
export default {

}
</script>

<template>
    <h1>Hi, Username!</h1>
  <h1>Here is some information about your profile!</h1>
  <div class="detail">
    <h2 class="index">Your email:</h2>
    <p>Email</p>
  </div>
  <div class="detail">
    <h2 class="index">Your phone number:</h2>
    <p>+359123456789</p>
  </div>
  <div class="detail">
    <h2 class="index">Your email:</h2>
    <p>abv@abv.bg</p>
  </div>
  <div class="detail">
    <h2 class="index">You are a member since:</h2>
    <p>date here</p>
  </div>
  <div class="detail">
    <h2 class="index">Number of seances created:</h2>
    <p>5</p>
  </div>
  <div class="detail">
    <h2 class="index">Number of appointments:</h2>
    <p>5</p>
  </div>
  <div class="detail">
    <h2 class="index">Number of reviews left:</h2>
    <p>5</p>
  </div>

  <div class="btn-container">
    <div
      class="button">
      My Appointments
    </div>
    <div class="button">
      My Seances
    </div>
    <div class="button">Edit Profile</div>
  </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 2rem;
}

.detail {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
}


p {
    text-align: center;
    border-bottom: 1px solid darkorchid;
    width: 200px;
}

.button {
    width: auto;
    padding: 10px;
    margin: 20px;
    position: relative;
    display: inline-block;;
}

.btn-container {
    text-align: center;
    justify-content: space-evenly;
    display: block;
    width: 100%;
}
</style>
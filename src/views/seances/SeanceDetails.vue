<script>
export default {

}
</script>

<template>
    <div class="details-container">
        <h1>Seance Title</h1>

        <div class="owner-details">
            <p>Posted by <span>User on August 13th 2023, 09:05 AM</span></p>
        </div>

        <div class="owner-buttons">
            <button>Edit</button>
            <button>Delete</button>
        </div>

        <div class="description">
            <p>This is a description. This is a description. This is a description. This is a description. </p>
        </div>

        <div class="details">
            <div class="detail">
                Type: Seance Type
            </div>
            <div class="detail">
                Duration: 10 hours
            </div>
            <div class="detail">
                Price: 13$
            </div>
        </div>

        <div class="appointment-con">
                <h2>You have an appointment for this seance! Have fun :)</h2>

                <h2>Here you can make an appointment!</h2>

                <form action="" class="appointment">
                    <div class="form-control">
                        <label for="date">Date</label>
                        <input type="text" />
                    </div>
                    <button>Make an appointment</button>
                </form>
        </div>
    </div>
</template>


<style scoped>

.appointment {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
}

.form-control {
  display: flex;
  align-items: center;
  flex-direction: row;
}

input {
  width: 100px;
}

h1 {
  text-align: center;
  font-size: 3em;
}

.owner-details {
  text-align: center;
}

.owner-buttons {
  text-align: center;
}

.description {
  margin: 30px;
  text-align: center;
}

.details {
  display: flex;
  justify-content: center;
}

.detail {
  margin: 30px 30px;
  border: 2px solid darkorchid;
  padding: 20px;
  border-radius: 10px;
}

.details-container {
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
}
</style>
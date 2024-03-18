<template>
  <div>
    <div class="field">
      <label class="label">Woman Name</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Woman Name"
            v-model="womanName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Details</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Details"
            v-model="womanDetails"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateWoman">UPDATE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "EditWoman",
  data() {
    return {
      womanName: "",
      womanPrice: "",
    };
  },
  created: function () {
    this.getWomanById();
  },
  methods: {
    // Get Woman By Id
    async getWomanById() {
      try {
        const response = await axios.get(
            `http://localhost:5000/women/${this.$route.params.id}`
        );
        this.womanName = response.data.name;
        this.womanDetails = response.data.details;
      } catch (err) {
        console.log(err);
      }
    },

    // Update Woman
    async updateWoman() {
      try {
        await axios.put(
            `http://localhost:5000/women/${this.$route.params.id}`,
            {
              name: this.womanName,
              details: this.womanDetails,
            }
        );
        this.womanName = "";
        this.womanDetails = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
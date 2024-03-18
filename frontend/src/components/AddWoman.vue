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
      <button class="button is-success" @click="saveWoman">SAVE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "AddWoman",
  data() {
    return {
      womanName: "",
      womanDetails: "",
    };
  },
  methods: {
    // Create New Woman
    async saveWoman() {
      try {
        await axios.post("http://localhost:5000/women", {
          name: this.womanName,
          details: this.womanDetails,
        });
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
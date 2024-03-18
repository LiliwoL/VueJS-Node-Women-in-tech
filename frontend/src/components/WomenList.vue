<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
      <tr>
        <th>Woman Name</th>
        <th>Details</th>
        <th class="has-text-centered">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.details }}</td>
        <td class="has-text-centered">
          <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small">
            Edit
          </router-link>
          <a
              class="button is-danger is-small"
              @click="deleteWoman(item.id)">
            Delete
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "WomenList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getWomen();
  },

  methods: {
    // Get All Women
    async getWomen() {
      try {
        const response = await axios.get("http://localhost:5000/women");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Woman
    async deleteWoman(id) {
      try {
        await axios.delete(`http://localhost:5000/women/${id}`);
        this.getWomen();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
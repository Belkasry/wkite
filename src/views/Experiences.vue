<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="activity in activities"
             :key="activity.id">
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              class="align-end text-white"
              height="200"
              :src="activity.pictures[0]?.url"
              cover
          >
            <v-card-title> {{ activity.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4 text-shades-black">
            {{ activity.start_at }} to {{ activity.end_at }}
          </v-card-subtitle>

          <v-card-text>
            {{ activity.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              Share
            </v-btn>

            <v-btn color="orange" link :href="'/experiencesjson/'+activity?.id">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activities: []
    };
  },
  methods: {
    async fetchActivities() {
      for (let i = 1; i < 4; i++) {
        await axios.get("/experiences/" + i + ".json")
            .then(response => this.activities.push(response.data))
            .then(data => {
              console.log(data);
            });
      }
    }
  },
  mounted() {
    this.fetchActivities()
  }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>

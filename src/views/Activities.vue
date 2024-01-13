<script>

import axios from "axios";
import ActivityHomeCard from "@/components/activity/HomeCard.vue";
import {getColorActivity} from "@/utils/services";

export default {
  name: "ActivitiesList",
  components: {ActivityHomeCard},
  data: () => ({
    activities: [],
    activities_grouped_by_type: [],
  }),
  mounted() {
    this.getActivities()
  },
  methods: {
    getColorActivity,
    async getActivities() {
      const {data} = await axios.get("/activitiesjson/all.json")
      this.activities = data;
      this.activities_grouped_by_type = this.groupBy(data, 'type')
      console.log(this.activities_grouped_by_type)
    },
    groupBy(xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
  }
}
</script>

<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-row>
        <template v-for="category in activities_grouped_by_type" :key="category">
          <v-col
              class="mt-2"
              cols="12"
          >
            <strong> {{ category[0].type?category[0].type.toUpperCase():"World" }}</strong>
          </v-col>
          <v-col
              v-for="activity in category"
              :key="activity.id"
              cols="12" md="4" lg="3" xl="2"
          >
           <ActivityHomeCard :activity="activity" :color="getColorActivity(category[0].type)"/>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>

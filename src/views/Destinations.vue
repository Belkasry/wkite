<script>

import axios from "axios";
import DestinationHomeCard from "@/components/destination/HomeCard.vue";

export default {
  name: "DestinationsList",
  components: {DestinationHomeCard},
  data: () => ({
    destinations: [],
    destinations_grouped_by_type: [],
  }),
  mounted() {
    this.getDestinations()
  },
  methods: {
    async getDestinations() {
      const {data} = await axios.get("/destinationsjson/all.json")
      this.destinations = data;
      this.destinations_grouped_by_type = this.groupBy(data, 'type')
      console.log(this.destinations_grouped_by_type)
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
        <template v-for="category in destinations_grouped_by_type" :key="category">
          <v-col
              class="mt-2"
              cols="12"
          >
            <strong> {{ category[0].type?category[0].type.toUpperCase():"World" }}</strong>
          </v-col>
          <v-col
              v-for="destination in category"
              :key="destination.id"
              cols="12" md="4" lg="3" xl="2"
          >
           <DestinationHomeCard :destination="destination"/>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>

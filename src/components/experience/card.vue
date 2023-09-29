<script>
export default {
  name: "card",
  data: () => ({
    loading: false,
    selection: [],
    expanded: false,
  }),
  props: {
    experience: Object,
  },
  methods: {
    getActivityIcon(activity) {
      // Define icons for different activities
      const icons = {
        Hiking: 'mdi-hiking',
        'Mountain Biking': 'mdi-bike',
        Sightseeing: 'mdi-eye',
      };
      return icons[activity] || 'mdi-help-circle';
    },
  },
}
</script>

<template>
  <v-col cols="12" md="4">
    <v-card>
      <v-img
        :src="experience?.destination?.location.country === 'Switzerland' ? 'https://picsum.photos/800/600?random=1' : 'https://picsum.photos/800/600?random=4'"
        alt="Card image"
      ></v-img>

      <v-card-title>{{ experience?.title }}</v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-icon>mdi-calendar</v-icon>
            {{ experience?.start_at }} - {{ experience?.end_at }}
          </v-col>
          <v-col cols="12" sm="6">
            <v-icon>mdi-currency-usd</v-icon>
            {{ experience?.price }}
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-icon>mdi-trekking</v-icon>
        Difficulty: {{ experience?.difficulty }}/5
      </v-card-text>

      <v-card-text>
        <v-icon>mdi-star</v-icon>
        Rating: {{ experience?.rating }}/5
      </v-card-text>

      <v-card-text>
        <v-icon>mdi-clock</v-icon>
        Duration: {{ experience?.duration }}
      </v-card-text>

      <v-card-subtitle>Description:</v-card-subtitle>
      <v-card-text>{{ experience?.description }}</v-card-text>

      <v-card-subtitle>Activities:</v-card-subtitle>
      <v-card-text>
        <v-chip v-for="activity in experience?.activities" :key="activity.id" class="mr-2">
          <v-icon left>{{ getActivityIcon(activity.name) }}</v-icon>
          {{ activity.name }}
        </v-chip>
      </v-card-text>

      <v-card-subtitle>Requirements:</v-card-subtitle>
      <v-card-text>
        <v-chip v-for="requirement in experience?.requirements" :key="requirement.id" class="mr-2">
          <v-icon left>mdi-check-circle</v-icon>
          {{ requirement.name }}
        </v-chip>
      </v-card-text>

      <v-card-subtitle>Notices:</v-card-subtitle>
      <v-card-text>
        <v-chip v-for="notice in experience?.notices" :key="notice.id" class="mr-2">
          <v-icon left>mdi-alert</v-icon>
          {{ notice.name }}
        </v-chip>
      </v-card-text>

      <v-card-subtitle>Important Considerations:</v-card-subtitle>
      <v-card-text>
        <v-chip v-for="consideration in experience?.take_into_account" :key="consideration.id" class="mr-2">
          <v-icon left>mdi-information</v-icon>
          {{ consideration.name }}
        </v-chip>
      </v-card-text>

      <v-card-subtitle>Guide:</v-card-subtitle>
      <v-card-title>{{experience?.guide?.name}}</v-card-title>
      <v-card-text>{{ experience?.guide?.bio }}</v-card-text>

      <v-card-subtitle>Destination:</v-card-subtitle>
      <v-card-text>
        <div>
          <v-icon>mdi-map-marker</v-icon>
          {{ experience?.destination?.label }}, {{ experience?.destination?.location?.country }} - {{ experience?.destination?.location.city }}
        </div>
        <div>
          <v-icon>mdi-domain</v-icon>
          {{ experience?.destination?.location.address }}
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>

</style>

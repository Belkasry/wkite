<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-2 pt-0"
            >

              <v-row>
                <experience-card v-for="i in 12" :key="i" :expanded="false" :experience="experience"/>
              </v-row>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ExperienceCard from "@/components/experience/card.vue";

const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>

<script>
export default {
  components: {
    ExperienceCard,
  },
  data: () => ({
    experience: {
      id: 1,
      title: "Mountain Trekking in the Atlas Mountains",
      description: "Join us for a challenging mountain trek through the stunning Swiss Alps. This 5-day trek will take us through some of the most breathtaking landscapes in Switzerland, including glacial valleys, alpine meadows, and high mountain passes. We will be staying in mountain huts along the way, and will have the opportunity to try some delicious Swiss dishes and explore the local culture. This experience is suitable for experienced trekkers who are in good physical shape.",
      start_at: "2023-06-01",
      end_at: "2023-06-05",
      price: 899,
      difficulty: 3,
      rating: 4.7,
      flexible: true,
      duration: "5 days",
      activities: [
        {id: 1, name: "Hiking"},
        {id: 2, name: "Mountain Biking"},
        {id: 3, name: "Sightseeing"},
      ],
      requirements: [
        {id: 1, name: "Passport"},
        {id: 2, name: "Visa"},
        {id: 3, name: "Travel Insurance"},
      ],
      notices: [
        {id: 1, name: "Altitude sickness is a risk at high elevations."},
        {id: 2, name: "The trek can be physically demanding."},
      ],
      take_into_account: [
        {id: 1, name: "Bring warm clothing as temperatures can drop significantly at high elevations."},
        {id: 2, name: "Bring sunscreen and a hat to protect from the sun."},
      ],
      guide: {
        id: 1,
        name: "John Smith",
        bio: "I am an experienced mountain guide with over 10 years of experience leading treks in the Swiss Alps. I am passionate about sharing my love of the mountains with others, and am always happy to share my knowledge and experience with my clients. I look forward to guiding you on this amazing adventure through the Swiss Alps!"
      },
      destination: {
        id: 1,
        label: "Mount Toubkal",
        description: "Mount Toubkal is the highest peak in the Atlas Mountains and in North Africa. It is located in the Toubkal National Park in Morocco.",
        location: {
          id: 1,
          label: "Mount Toubkal",
          country: "Morocco",
          city: "Marrakesh",
          address: "Toubkal National Park, Morocco",
          lat: 31.0600714,
          lon: -7.9147482,
        },
      },
      pictures: [
        {id: 1, url: "https://picsum.photos/800/600?random=1"},
        {id: 2, url: "https://picsum.photos/800/600?random=2"},
        {id: 3, url: "https://picsum.photos/800/600?random=3"},
      ],
    },
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

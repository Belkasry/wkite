<template>
  <div class="w-100 h-100 pr-10 home mx-5">
    <h2 class="text-black ma-3"
        style="text-shadow: 1px 1px 2px rgba(23,60,75,0.34);"
    >
      Experiences
    </h2>
    <div class="d-flex align-items-start bg-transparent">
      <v-btn
        @click="scrollLeft('experienceContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-left"></v-icon>
      </v-btn>
      <div class="cards d-flex align-items-start" ref="experienceContainer">
        <template
          v-for="experience in experiences"
          :key="experience.id"
        >
          <div class="card-dall-parent-main mx-2 glass">
            <div class="card-dall">
              <v-card
                width="250">
                <div :style="'background:'+getTheme(experience.type)?.color_theme_1">
                  <v-row class="py-1 mx-1">
                    <v-col>
                      <v-progress-linear
                        :model-value="model_carousel[experience.id]==0?100:0"
                        color="white"
                        bg-color="white-4"
                      ></v-progress-linear>
                    </v-col>
                    <v-col v-for="(picture, i) in experience.pictures.slice(0, 3)"
                           :key="i">
                      <v-progress-linear
                        :model-value="i+1==model_carousel[experience.id]?100:0"
                        color="white"
                        bg-color="white-4"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-carousel height="200"
                              v-model="model_carousel[experience.id]"
                              show-arrows="hover"
                              hide-delimiter-background
                              hide-delimiters>
                    <v-carousel-item
                      :value="0">
                      <v-sheet class="w-100 h-100 d-flex align-items-end flex-column"
                               :style="'background:url('+experience.picture_url+')'" style="background-size: cover;">
                        <div class="w-100 mt-auto p-2 d-flex flex-wrap"
                             :style="'background:'+getTheme(experience.type)?.color_theme_1+'aa'">
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small">
                            <strong>Max Participants :</strong> {{ experience.max_participants }}
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small"> {{ experience.booked_nbr }}+ booked
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" v-if="experience.flexible" size="x-small">Flexible
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small"><strong>Duration : </strong> {{
                              experience.duration
                            }}
                            {{ experience.unit_duration }}
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" v-if="!experience.flexible" size="x-small"><strong>FROM
                            :</strong>
                            {{ experience.start_at }} <strong class="mx-1">TO</strong> {{ experience.end_at }}
                          </v-chip>
                        </div>
                      </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item
                      v-for="(picture, i) in experience.pictures.slice(0, 3)"
                      :key="i"
                      :value="i+1"
                    >
                      <v-img
                        cover
                        height="200"
                        :src="picture.url"
                        lazy-src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                      ></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <v-card-item @click="goto('experiences/'+experience.id)" style="cursor: pointer;">
                  <h4>{{ experience.title }}</h4>
                  <v-card-subtitle>
                    <span class="me-1">{{ experience.destination?.label }}</span>
                    <v-icon
                      color="error"
                      icon="mdi-map-marker"
                      size="small"
                    ></v-icon>
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      v-model="experience.rating"
                      color="amber"
                      density="compact"
                      half-increments
                      readonly
                      size="small"
                    ></v-rating>

                    <div class="text-grey ms-4">
                      {{ experience.rating }} ({{ experience.rater_count }})
                    </div>
                  </v-row>
                  <div class="mt-4 w-100 d-flex justify-content-center  pa-1 px-1">
                    <v-btn class="text-subtitle-1"
                           @click="goto('experiences/'+experience.id)"
                           variant="elevated">
                      <v-icon>mdi-cash-multiple</v-icon>
                      Starting : $ {{ experience.price }}
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </template>
        <template
          v-for="experience in experiences"
          :key="experience.id"
        >
          <div class="card-dall-parent-main mx-2 glass">
            <div class="card-dall">
              <v-card
                width="250">
                <div :style="'background:'+getTheme(experience.type)?.color_theme_1">
                  <v-row class="py-1 mx-1">
                    <v-col>
                      <v-progress-linear
                        :model-value="model_carousel[experience.id]==0?100:0"
                        color="white"
                        bg-color="white-4"
                      ></v-progress-linear>
                    </v-col>
                    <v-col v-for="(picture, i) in experience.pictures.slice(0, 3)"
                           :key="i">
                      <v-progress-linear
                        :model-value="i+1==model_carousel[experience.id]?100:0"
                        color="white"
                        bg-color="white-4"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-carousel height="200"
                              v-model="model_carousel[experience.id]"
                              show-arrows="hover"
                              hide-delimiter-background
                              hide-delimiters>
                    <v-carousel-item
                      :value="0">
                      <v-sheet class="w-100 h-100 d-flex align-items-end flex-column"
                               :style="'background:url('+experience.picture_url+')'" style="background-size: cover;">
                        <div class="w-100 mt-auto p-2"
                             :style="'background:'+getTheme(experience.type)?.color_theme_1+'aa'">
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small">
                            <strong>Max Participants :</strong> {{ experience.max_participants }}
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small"> {{ experience.booked_nbr }}+ booked
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" v-if="experience.flexible" size="x-small">Flexible
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" size="x-small"><strong>Duration : </strong> {{
                              experience.duration
                            }}
                            {{ experience.unit_duration }}
                          </v-chip>
                          <v-chip
                            color="white"
                            variant="flat"
                            label class="ma-1" v-if="!experience.flexible" size="x-small"><strong>FROM
                            :</strong>
                            {{ experience.start_at }} <strong class="mx-1">TO</strong> {{ experience.end_at }}
                          </v-chip>
                        </div>
                      </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item
                      v-for="(picture, i) in experience.pictures.slice(0, 3)"
                      :key="i"
                      :value="i+1"
                    >
                      <v-img
                        cover
                        height="200"
                        :src="picture.url"
                        lazy-src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                      ></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <v-card-item @click="goto('experiences/'+experience.id)" style="cursor: pointer;">
                  <h4>{{ experience.title }}</h4>
                  <v-card-subtitle>
                    <span class="me-1">{{ experience.destination?.label }}</span>
                    <v-icon
                      color="error"
                      icon="mdi-map-marker"
                      size="small"
                    ></v-icon>
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      v-model="experience.rating"
                      color="amber"
                      density="compact"
                      half-increments
                      readonly
                      size="small"
                    ></v-rating>

                    <div class="text-grey ms-4">
                      {{ experience.rating }} ({{ experience.rater_count }})
                    </div>
                  </v-row>
                  <div class="mt-4 w-100 d-flex justify-content-center  pa-1 px-1">
                    <v-btn class="text-subtitle-1"
                           @click="goto('experiences/'+experience.id)"
                           variant="elevated">
                      <v-icon>mdi-cash-multiple</v-icon>
                      Starting : $ {{ experience.price }}
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </template>
      </div>
      <v-btn
        @click="scrollRight('experienceContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-right"></v-icon>
      </v-btn>
    </div>
    <h2 class="text-black ma-3"
        style="text-shadow: 1px 1px 2px rgba(23,60,75,0.34);"
    >
      Guides
    </h2>
    <div class="d-flex align-items-start bg-transparent">
      <v-btn
        @click="scrollLeft('guideContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-left"></v-icon>
      </v-btn>
      <div class="cards d-flex align-items-start" ref="guideContainer">
        <template
          v-for="guide in guides"
          :key="guide.id"
        >
          <div class="card-dall-parent-main mx-2">
            <div class="card-dall">
              <v-card
                width="250">
                <div>
                  <v-img
                    cover
                    height="200"
                    :src="guide.pictures[0].url"
                    lazy-src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  ></v-img>
                </div>
                <v-card-item @click="goto('guides/'+guide.id)" style="cursor: pointer;" class="mx-1">
                  <h4>{{ guide.name }}
                    <v-icon color="blue" class="float-end" v-if="guide.verified">mdi-check-decagram</v-icon>
                  </h4>
                  <v-card-subtitle>
                    {{ guide.title }}
                  </v-card-subtitle>
                  <p class="me-1 text-subtitle-2">{{ guide.place?.label }}
                    <v-icon
                      color="error"
                      icon="mdi-map-marker"
                      size="small"
                    ></v-icon>
                  </p>
                </v-card-item>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      v-model="guide.rating"
                      color="amber"
                      density="compact"
                      half-increments
                      readonly
                      size="small"
                    >
                    </v-rating>
                    <pre class="mx-2">{{ guide.rating }}</pre>
                  </v-row>
                  <v-row align="center"
                         class="mx-0">
                    <v-chip size="x-small" label class=" ma-1">{{ guide.nbr_experiences }} Expériences</v-chip>
                    <v-chip size="x-small" label class=" ma-1" color="green">{{ guide.years_experience }} années
                    </v-chip>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </template>
      </div>
      <v-btn
        @click="scrollRight('guideContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-right"></v-icon>
      </v-btn>
    </div>
    <h2 class="text-black ma-3"
        style="text-shadow: 1px 1px 2px rgba(23,60,75,0.34);"
    >
      Destinations
    </h2>
    <div class="d-flex align-items-start bg-transparent">
      <v-btn
        @click="scrollLeft('destinationContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-left"></v-icon>
      </v-btn>
      <div class="cards d-flex align-items-start" ref="destinationContainer">
        <template
          v-for="destination in destinations"
          :key="destination.id"
        >
        <DestinationHomeCard :destination="destination"/>
        </template>
      </div>
      <v-btn
        @click="scrollRight('destinationContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-right"></v-icon>
      </v-btn>
    </div>
    <h2 class="text-black ma-3"
        style="text-shadow: 1px 1px 2px rgba(23,60,75,0.34);"
    >
      Activities
    </h2>
    <div class="d-flex align-items-start bg-transparent">
      <v-btn
        @click="scrollLeft('activityContainer')"
        variant="elevated"
        icon
        class="my-auto"
      >
        <v-icon icon="mdi-chevron-left"></v-icon>
      </v-btn>
      <div class="cards d-flex align-items-start" ref="activityContainer">
        <template
          v-for="activity in activities.slice(0, 15)"
          :key="activity.id"
        >
          <v-sheet
            class="ma-3"
            height="150"
            min-width="150"
            color="red"
            :style="'background:url('+activity.image+') no-repeat center center;background-size: cover;'"
            style="border-radius: 15px;box-shadow: 0 4px 10px rgba(7,36,72,0.39);">
            <v-sheet
              style="background: linear-gradient(to right,rgba(255,255,255,0.06), rgba(255,255,0,0))"
              width="100%"
              height="100%"
              class="d-flex align-items-end flex-column"
              rounded
            >
              <v-sheet style="background:rgba(255,255,255,0.9);!important; border-radius:1px 1px 15px 15px;"
                       class="mt-auto w-100 d-flex justify-content-center">
                <h3 style="text-shadow: 1px 1px 2px rgba(255,255,255,1); "
                    class="text-black">{{ activity.name }}</h3>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </template>
      </div>
      <v-btn
        @click="scrollRight('activityContainer')"
        variant="elevated"
        icon
        class="my-auto">
        <v-icon icon="mdi-chevron-right"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getTheme, goto} from "@/utils/services";
import exp from "constants";

export default {
  computed: {
    exp() {
      return exp
    }
  },
  data: () => ({
    model_carousel: [],
    model_carousel_guide: [],
    drawer: null,
    experiences: [],
    guides: [],
    activities: [],
    destinations: [],
  }),
  mounted() {
    this.getExperiences();
    this.getGuides();
    this.getActivities();
    this.getDestinations();
  },
  methods: {
    goto,
    getTheme,
    scrollLeft(cc) {
      const cardsContainer = this.$refs[cc];
      cardsContainer.scrollTo({
        left: cardsContainer.scrollLeft - 200,
        behavior: 'smooth', // Use smooth behavior for smooth scrolling
      });
    },
    scrollRight(cc) {
      const cardsContainer = this.$refs[cc];
      cardsContainer.scrollTo({
        left: cardsContainer.scrollLeft + 200,
        behavior: 'smooth', // Use smooth behavior for smooth scrolling
      });
    },
    async getExperiences() {
      await axios.get("/experiencesjson/all.json")
        .then(response => this.experiences = (response.data));
    },
    async getGuides() {
      await axios.get("/guidesjson/all.json")
        .then(response => this.guides = (response.data));
    },
    async getActivities() {
      await axios.get("/activitiesjson/all.json")
        .then(response => this.activities = (response.data));
    },
    async getDestinations() {
      await axios.get("/destinationsjson/all.json")
        .then(response => this.destinations = (response.data));
    },
  },
}
</script>
<style lang="scss">
.home {
}

.cards {
  width: 100%;
  overflow-x: auto;
  overflow: hidden;
  white-space: nowrap;
}

.glass {
  border-radius: 16px;
  backdrop-filter: blur(8.6px);
  -webkit-backdrop-filter: blur(8.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
<script setup>
import DestinationHomeCard from "@/components/destination/HomeCard.vue";
</script>

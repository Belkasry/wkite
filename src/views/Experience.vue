<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1 class="my-4">{{ experience.title }}</h1>
          </v-card-title>
          <v-carousel v-if="experience.pictures && experience.pictures.length>0">
            <v-carousel-item
              v-for="(picture,n) in experience?.pictures" :key="picture.url"
              :src="picture.url+'?image='+(n * 5 + 10)"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-text>
            <v-alert>{{ experience.description }}</v-alert>
            <v-alert class="my-3">
              <p><strong>Duration:</strong> {{ experience.duration }} {{ experience.unit_duration }}</p>
              <p v-if="!experience.flexible"><strong>Start at:</strong> {{ experience.start_at }}</p>
              <p v-if="!experience.flexible"><strong>End at:</strong> {{ experience.end_at }}</p>
              <p><strong>Max Participants:</strong> {{ experience.max_participants }}</p>
              <p>
                <v-chip label> {{ experience.booked_nbr }}+ booked</v-chip>
              </p>
              <v-rating v-model="experience.rating" readonly></v-rating>
            </v-alert>
            <v-chip v-if="experience.flexible" class="float-end my-2">Flexible</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Activities</h2>
          </v-card-title>
          <v-card-text>
            <div class=" d-flex">
              <v-alert v-for="activity in experience.activities" :key="activity.id" class="ma-4"
                       :icon="activity.icon ?? 'mdi-leaf-circle'">
                {{ activity.name }}
              </v-alert>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Requirements</h2>
          </v-card-title>
          <v-card-text>
            <div class=" d-flex">
              <div v-for="requirement in experience.requirements" :key="requirement.id" class="ma-4">
                <v-chip label>{{ requirement.name }}</v-chip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Notices</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="notice in experience.notices" :key="notice.id">
                <v-list-item prepend-icon="mdi-information">
                  <v-list-item-title> {{ notice.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Take Into Account</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="item in experience.take_into_account" :key="item.id">
                <v-list-item prepend-icon="mdi-bell-alert-outline">
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2 class="ma-4">Guide : {{ experience.guide?.name }}</h2></v-card-title>
          <v-card-text>
            <v-alert class="my-3">{{ experience.guide?.bio }}</v-alert>
          </v-card-text>

          <v-row>
            <v-col cols="12" md="6">
              <v-container>
                <v-row>
                  <v-col
                    v-for="(picture,n) in experience.guide?.pictures"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-img
                      :src="`${picture?.url}?image=${n * 5 + 10}`"
                      :lazy-src="`${picture?.url}?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      cover
                      class="bg-grey-lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey-lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert class="mx-4 mb-4">
                <v-card-text><strong>Expertise:</strong> {{ experience.guide?.expertise.join(', ') }}</v-card-text>
                <v-card-text><strong>Languages:</strong> {{ experience.guide?.languages.join(', ') }}</v-card-text>
                <v-card-text><strong>Contact:</strong> {{ experience.guide?.contact?.email }} /
                  {{ experience.guide?.contact?.phone }}
                </v-card-text>
                <v-card-text><strong>Certification:</strong> {{ experience.guide?.certification }}</v-card-text>
                <v-card-text><strong>Years of Experience:</strong> {{ experience.guide?.years_experience }}
                </v-card-text>
              </v-alert>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <div class="w-100 h-100" v-if="experience.destination?.location">
              <MapboxMap
                style="height: 400px"
                map-style="mapbox://styles/mapbox/streets-v11"
                :center="[experience.destination?.location?.lon, experience.destination?.location?.lat]"
                :zoom="10"
                access-token="pk.eyJ1IjoiYmVsa2FzcnkiLCJhIjoiY2xuaHJ6YnJuMHBpajJsbmt5eGo2czZpeiJ9.bVW5XRWMs49GcvfbpPQg-Q">
                <MapboxMarker
                  :lng-lat="[experience.destination?.location?.lon, experience.destination?.location?.lat]"/>
              </MapboxMap>
            </div>
          </v-card-text>
          <v-card-title><h2 class="ma-4">Destination :{{ experience.destination?.label }}</h2></v-card-title>
          <v-card-text>
            <v-alert class="my-3">{{ experience.destination?.description }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert icon="mdi-map">
              <strong>Location:</strong> {{ experience.destination?.location?.address }},
              {{ experience.destination?.location?.city }}, {{ experience.destination?.location?.country }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2>Steps</h2></v-card-title>
          <v-card-text>
            <v-timeline side="end" align="start">
              <v-timeline-item v-for="step in experience.steps" :key="step.id" class="w-100">
                <v-card variant="text">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    cover
                  ></v-img>
                  <v-card-title class="text-red-lighten-2">{{ step.label }}</v-card-title>
                  <v-card-text>{{ step.description }}</v-card-text>
                  <v-card-text>
                    <v-chip><strong>Duration: </strong> {{ step.duration }}</v-chip>
                    <v-chip class="mx-4" label v-for="activity in step.activities" :key="activity.id">
                      {{ activity.name }}
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Pricing Details</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(pricing, index) in experience.pricing_details"
                :key="index"
                cols="12"
                md="6"
              >
                <v-card variant="outlined">
                  <v-card-title>
                    {{ pricing.description }} Plan A partir de :
                    <v-chip size="large" label> ${{ pricing.amount }}</v-chip>
                  </v-card-title>
                  <v-card-subtitle>
                    <div>
                      <h3>Included:</h3>
                      <v-alert icon="mdi-check" class="ma-4" label v-for="(include, index) in pricing.includes"
                               :key="index">
                        {{ include }}
                      </v-alert>
                    </div>
                  </v-card-subtitle>
                  <v-card-text>
                    <v-alert v-if="pricing.optional_add_ons.length>0">
                      <h4> Optional Add-ons:</h4>
                      <div
                        class="text-green-darken-1 font-weight-bold ma-4"
                        v-for="(addOn, index) in pricing.optional_add_ons"
                        :key="index"
                      >
                        <v-icon>mdi-check</v-icon>
                        {{ addOn?.description }}
                      </div>
                    </v-alert>
                  </v-card-text>
                  <v-card-actions class="px-4">
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-alert icon="mdi-calendar">
                          <Calendar selectionMode="range" v-model="dates" class="border-1 w-100" inline>
                            <template #date="slotProps">
                              <strong>
                                {{ slotProps.date.day }}
                              </strong>
                              <br>
                              <small class="mx-1">
                                {{
                                  getAmountByDate(pricing, new Date(slotProps.date.year + "-" + slotProps.date.month + "-" + slotProps.date.day))
                                }}
                              </small>
                            </template>
                          </Calendar>
                        </v-alert>
                      </v-col>
                      <v-col>
                        <v-alert icon="mdi-cash" class="row">
                          <div v-if="dates.length">
                            Start Date: {{ formatDate(dates[0]) }}
                            <div v-if="dates.length > 1">End Date: {{ formatDate(dates[1]) }}</div>
                          </div>
                          <v-btn block append-icon="mdi-currency-usd" class="float-end" variant="tonal">
                            Book now at
                            {{ getAmountByDate(pricing, dates[0]) }}
                          </v-btn>
                        </v-alert>
                      </v-col>

                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <v-card>
          <v-card-title>
            <h2 class="ma-4">Meeting Point:
              <v-chip label prepend-icon="mdi-clock" class="float-end">{{ experience.meetingPoint?.time }}</v-chip>
            </h2>

          </v-card-title>
          <v-card-text>
            <v-alert>
              {{ experience.meetingPoint?.instructions }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert icon="mdi-map">
              <strong>Address:</strong> {{ experience.meetingPoint?.location?.address }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2 class="ma-4">Cancellation Policy</h2></v-card-title>
          <v-card-text>
            <v-alert>
              <strong>Notice Period :</strong> {{ experience.cancellation_policy?.notice_period }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert>
              <strong>Refund Percentage :</strong> {{ experience.cancellation_policy?.refund_percentage }}%
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2>User Reviews</h2></v-card-title>
          <v-card-text>
            <v-list v-for="review in experience.user_reviews" :key="review.userId">
              <v-list-item prepend-avatar="https://picsum.photos/800/600?random=12">
                <v-alert>
                  <v-list-item-title>{{ review.username }}</v-list-item-title>
                  <v-rating v-model="review.rating" readonly></v-rating>
                  <v-list-item-subtitle>{{ review.comment }}</v-list-item-subtitle>
                  <v-list-item-subtitle><em>{{ review.date }}</em></v-list-item-subtitle>
                </v-alert>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {MapboxMap, MapboxMarker} from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Calendar from "primevue/calendar"
import axios from "axios";

export default {
  components: {
    MapboxMap, MapboxMarker, Calendar
  },
  data() {
    return {
      dates: [],
      experience: {
        // Paste the JSON object here
      },
    };
  },
  watch: {
    dates: {
      handler(newVal) {
        if (newVal[0] != null && newVal[1] == null) {
          let secondDate = new Date(newVal[0]);
          secondDate.setDate(secondDate.getDate() + 3); // Add 3 days to the selected date.
          this.dates = [newVal[0], secondDate];
        }
      },
      deep: true
    }
  },
  mounted() {
    this.getExperience();
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString();
    },
    getAmountByDate(data, date) {
      const targetDate = new Date(date)
      let amount = data.amount;
      for (let pricing of data.date_based_pricing) {
        const startDate = new Date(pricing.start_date);
        const endDate = new Date(pricing.end_date);

        if (targetDate >= startDate && targetDate <= endDate) {
          amount = pricing.amount;
        }
      }
      // Return default basic amount if date not in any range
      return amount;
    },
    async getExperience() {
      const i=this.$route.params.id ?? 1
      await axios.get("/experiencesjson/" + i + ".json")
        .then(response => this.experience = response.data)
        .then(data => {
          console.log(data);
        });
      // const module='@/static/experiences/'+this.$route.params.id+'.json';
      // console.log(module)
    }
  }
};
</script>

<style>
.mgl-map {
  height: 400px;
  width: 100%;
}
</style>

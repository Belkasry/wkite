<script>
import {getTheme, goto} from "@/utils/services";

export default {
  name: "LongExperienceCard",
  methods: {goto, getTheme},
  data: () => ({
    tab: [],
    model_carousel: 0,
    loading: false,
    selection: [],
    expanded: false,
  }),
  props: {
    experience: Object,
  },
}
</script>

<template>
  <div v-if="experience"
       style="max-width: 800px"
  :style="'box-shadow: 1px 1px 4px 1px '+getTheme(experience.type?experience.type:'nature')?.color_theme_1"
  >
    <div class="card-dall-parent-main">
      <div class="card-dall">
        <v-card
          color="white"
          max-height="85vh"
          variant="tonal"
          elevation="5"
        >
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-sheet class="my-2">
                <div v-if="experience.pictures && experience.pictures.length > 0" class="mx-1">
                  <v-row class="mx-2 py-1">
                    <v-col v-for="(picture, i) in experience.pictures"
                           :key="i">
                      <v-progress-linear
                        :model-value="i===model_carousel?100:0"
                        :color="getTheme(experience.type?experience.type:'nature')?.color_theme_1"
                        bg-color="grey lighten-3"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-carousel height="200"
                              v-model="model_carousel"
                              show-arrows="hover"
                              hide-delimiter-background
                              hide-delimiters>

                    <v-carousel-item
                      v-for="(picture, i) in experience.pictures"
                      :key="i"
                      :value="i"
                    >
                      <v-img
                        cover
                        height="200"
                        :src="picture.url"
                      ></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <v-card-item @click="goto('experiences/'+experience.id)">
                  <h4>{{ experience.title }}</h4>
                  <v-card-subtitle>
                    <span class="me-1">{{ experience.destination?.label }}</span>

                    <v-icon
                      color="error"
                      icon="mdi-map-marker"
                      size="small"
                    ></v-icon>
                  </v-card-subtitle>
                  <h5> Starting : $ {{ experience.price }}</h5>
                </v-card-item>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :model-value="experience.rating"
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
                </v-card-text>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <div class="ma-5">
                    <v-alert
                      icon="mdi-information"
                      class="mt-2 mx-1"
                             variant="tonal"
                             :color="getTheme(experience.type?experience.type:'nature')?.color_theme_1"
                             density="compact">
                      <v-chip label class="ma-1" size="x-small" variant="flat"><strong>Duration : </strong> {{
                          experience.duration
                        }}
                        {{ experience.unit_duration }}
                      </v-chip>
                      <v-chip label class="ma-1" v-if="!experience.flexible" size="x-small" variant="flat"><strong>Start
                        at
                        :</strong>
                        {{ experience.start_at }}
                      </v-chip>
                      <v-chip label class="ma-1" v-if="!experience.flexible" size="x-small" variant="flat"><strong>End
                        at
                        :</strong>
                        {{
                          experience.end_at
                        }}
                      </v-chip>
                      <v-chip label class="ma-1 font-weight-bold" size="x-small" variant="flat">
                        <strong>Max Participants :</strong> {{ experience.max_participants }}
                      </v-chip>
                      <v-chip label class="ma-1" size="x-small" variant="flat"> {{ experience.booked_nbr }}+
                        booked
                      </v-chip>
                      <v-chip label class="ma-1 font-weight-bold" variant="flat" v-if="experience.flexible"
                              size="x-small">Flexible
                      </v-chip>
                    </v-alert>
                    <v-alert
                      icon="mdi-format-list-bulleted-type"
                      class="mt-2 mx-1"
                             variant="tonal"
                             :color="getTheme(experience.type?experience.type:'nature')?.color_theme_1"
                             density="compact">
                      <v-chip label v-for="activity in experience.activities"
                              :key="activity.id"
                              class="ma-2"
                              variant="tonal"
                              :color="getTheme(experience.type?experience.type:'nature')?.color_theme_1"
                              density="compact"
                              :icon="activity.icon"
                      >
                        {{ activity.name }}
                      </v-chip>
                    </v-alert>
                    <v-alert
                             class="mt-2 mx-2"
                             variant="tonal"
                             :color="getTheme(experience.type?experience.type:'nature')?.color_theme_1"
                             density="compact"
                             icon="mdi-cash"
                    >
                      <v-btn block
                             class="my-1"
                             variant="flat"
                             v-for="price in experience.pricing_details"
                             :key="price.id">
                      {{ price.description }} : $ {{ price.amount }}
                      </v-btn>
                    </v-alert>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

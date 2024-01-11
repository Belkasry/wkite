<script>
import {getTheme} from "@/utils/services";

export default {
  name: "LongExperienceCard",
  methods: {getTheme},
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
  <div v-if="experience" :class="experience.type?'card-'+experience.type:'card-snow'">
    <div class="card-dall-parent-main">
      <div class="card-dall">
        <v-card
          max-height="85vh"
        >
          <v-row no-gutters>
            <v-col cols="12" md="5">
              <v-sheet class="my-2">
              <div v-if="experience.pictures && experience.pictures.length > 0" class="mx-1">
                <v-row class="mx-2 py-1">
                  <v-col v-for="(picture, i) in experience.pictures"
                         :key="i">
                    <v-progress-linear
                      :model-value="i===model_carousel?100:0"
                      :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
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
              <v-card-item>
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
            <v-col cols="12" md="5">

              <v-tabs
                v-model="tab[experience.id]"
                :bg-color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                density="compact"
                grow
              >
                <v-tab value="tab-1">
                  <strong><v-icon>mdi-information</v-icon>
                  </strong>
                </v-tab>

                <v-tab value="tab-2">
                  <strong>
                  <v-icon>mdi-cash</v-icon>
                  </strong>
                </v-tab>

                <v-tab value="tab-3">
                  <strong>
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                  </strong>
                </v-tab>
              </v-tabs>
              <v-window v-model="tab[experience.id]">
                <v-window-item
                  :value="'tab-1'"
                >
                  <v-alert>
                    {{ experience.description }}
                  </v-alert>
                </v-window-item>
                <v-window-item
                  :value="'tab-2'"
                >
                  <v-alert v-for="price in experience.pricing_details"
                           :key="price.id"
                           class="mt-2 mx-5"
                           variant="outlined"
                           :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                           density="compact"
                           icon="mdi-cash"
                  >
                    {{ price.description }} : $ {{ price.amount }}
                  </v-alert>
                </v-window-item>
                <v-window-item
                  :value="'tab-3'"
                >
                  <v-alert v-for="activity in experience.activities"
                           :key="activity.id"
                           class="mt-2 mx-5"
                           variant="tonal"
                           :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                           density="compact"
                           :icon="activity.icon"
                  >
                    {{ activity.name }}
                  </v-alert>
                </v-window-item>
              </v-window>

            </v-col>
            <v-col cols="12" md="2">
              <v-alert class="mt-4 mb-1 text-subtitle-1 pa-1 px-1 font-weight-bold mx-2"
                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                       variant="plain">
                Starting : $ {{ experience.price }}
                <v-btn class="float-end" size="x-small" href="#pricing-details"
                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-btn>
              </v-alert>
              <v-alert class="mt-2 mx-1"
                       variant="tonal"
                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
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
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

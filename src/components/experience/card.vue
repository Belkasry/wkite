<script>
import {getTheme} from "@/utils/services";

export default {
  name: "ExperienceCard",
  methods: {getTheme},
  data: () => ({
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
      <div class="card-dall-parent-main" v-if="experience">
        <div class="card-dall">
          <v-card
            max-height="85vh"
          >
            <div v-if="experience.pictures && experience.pictures.length > 0">
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

              <v-alert class="mt-4 mb-1 text-subtitle-1 pa-1 px-1 font-weight-bold"
                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                       variant="plain">
                Starting : $ {{ experience.price }}
                <v-btn class="float-end" size="x-small" href="#pricing-details"
                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-btn>
              </v-alert>

              <div>
                {{ experience.description?.substring(0, 150) }}...<a class="mx-3" href="#description">(+)</a>
              </div>

              <v-alert class="mt-2"
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
            </v-card-text>
          </v-card>
        </div>
      </div>
</template>

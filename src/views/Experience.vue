<template>
  <div v-if="experience && experience.type" class="experience">
    <div
         class="px-4"
         :class="experience.type?'card-'+experience.type:'card-snow'">
      <div v-if="experience" class="pa-3 experience-hiking">
        <v-row>
          <v-col cols="12" md="4" class="full-height">
            <v-row>
              <v-col>
                <div class="card-dall-parent-main">
                  <div class="card-dall">
                    <v-card
                      max-height="85vh"
                    >
                      <div>
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
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="scrollable">
            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2">
                      <div v-if="experience && experience.pictures">
                        <v-card-title>
                          <h4 class="ma-4">
                            <v-icon class="mx-1">mdi-image-multiple</v-icon>
                            Medias
                          </h4>
                        </v-card-title>
                        <v-row no-gutters
                               v-show="adjusted(experience.pictures) && adjusted(experience.pictures).length>0"
                               class="mx-2 mb-2">
                          <template v-for="(image, imgIdx) in adjusted(experience.pictures)" :key="imgIdx">
                            <v-col
                              :cols="image.format=='landscape' ? 6 : 3"
                              class="pa-1"
                            >
                              <v-img
                                :alt="image.format"
                                :src="image.url"
                                cover
                                height="100%"
                              ></v-img>
                            </v-col>
                          </template>
                          <v-col :cols="empty" class="pa-1">
                            <v-btn variant="outlined" class="w-100 h-100">
                              <br/>
                              <v-icon class="ma-1" color="black">mdi-image-multiple</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </div>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2" id="description">
                      <v-card-title>
                        <h4 class="ma-4">
                          <v-icon class="mx-1">mdi-text-long</v-icon>
                          Description
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <v-alert class="ma-1" :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          {{ experience.description }}
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2" id="activities">
                      <v-card-title>
                        <h4 class="ma-4">
                          <v-icon class="mx-2">mdi-format-list-bulleted-type</v-icon>
                          Activities
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <v-slide-group show-arrows>
                          <v-slide-group-item
                            v-for="activity in experience.activities"
                            :key="activity.id"
                          >
                            <v-sheet
                              class="ma-3"
                              height="200"
                              width="150"
                              :style="'background:url('+activity.image+') no-repeat center center fixed;background-size: cover;'"
                              style="border-radius: 15px;box-shadow: 0 4px 10px rgba(7,36,72,0.39);">
                              <v-sheet
                                style="background: linear-gradient(to right,rgba(255,255,255,0.06), rgba(255,255,0,0))"
                                width="100%"
                                height="100%"
                                class="d-flex align-items-end flex-column"
                                rounded
                              >
                                <v-sheet
                                  style="background:rgba(255,255,255,0.9);!important; border-radius:1px 1px 15px 15px;"
                                  class="mt-auto w-100 d-flex justify-content-center">
                                  <h3 style="text-shadow: 1px 1px 2px rgba(255,255,255,1); "
                                      class="text-black">{{ activity.name }}</h3>
                                </v-sheet>
                              </v-sheet>
                            </v-sheet>
                          </v-slide-group-item>
                        </v-slide-group>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2" id="requirements">
                      <v-card-title>
                        <h4 class="ma-4">
                          <v-icon class="mx-2">mdi-exclamation-thick</v-icon>
                          Requirements
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <div class=" d-flex">
                          <div v-for="requirement in experience.requirements" :key="requirement.id" class="ma-4">
                            <v-chip label variant="flat"
                                    :color="getTheme(experience.type?experience.type:'nature').color_theme_1">{{
                                requirement.name
                              }}
                            </v-chip>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2" id="notices">
                      <v-card-title>
                        <h4 class="ma-4">
                          <v-icon class="mx-2">mdi-account-alert-outline</v-icon>
                          Notices
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <v-alert icon="mdi-information"
                                 class="my-1"
                                 v-for="notice in experience.notices"
                                 :key="notice.id"
                                 :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          {{ notice.name }}
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2"
                            id="take-into-account">
                      <v-card-title>
                        <h4 class="ma-4">
                          <v-icon class="mx-2">mdi-bag-personal</v-icon>
                          Take Into Account
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <v-alert icon="mdi-bell-alert-outline"
                                 :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                                 v-for="item in experience.take_into_account" :key="item.id" class="my-1 mx-3">
                          {{ item.name }}
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <v-card class="card-dall"
                          :style="'background:'+getTheme(experience.type?experience.type:'nature').color_theme_1"
                  >
                    <div class="d-flex flex-column w-100 pb-10"
                         style=" background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Toubkal_Orange.jpg/1920px-Toubkal_Orange.jpg') !important;
    background-size: 100% 50% ; !important;"
                    >
                      <v-avatar
                        class="mx-auto mt-2"
                        size="300"
                        :image="experience.guide.pictures[0].url"
                        title="Card title"
                        theme="dark"
                      ></v-avatar>
                      <v-div class="mt-auto w-100">
                        <v-row style="margin-top:-10px !important;" class="justify-content-center d-flex">
                          <v-chip :color="getTheme(experience.type?experience.type:'nature').color_theme_3"
                                  variant="elevated"
                                  class="mx-auto mt-0"
                          >
                            <v-rating
                              v-model="experience.guide.rating"
                              color="amber"
                              density="compact"
                              half-increments
                              readonly
                              size="small"
                            ></v-rating>
                          </v-chip>
                        </v-row>
                        <v-row class="w-100 mx-auto align-content-center d-flex flex-column mt-5">
                          <h4 class="text-white mb-2">
                            <v-icon class="mx-2">mdi-card-account-details</v-icon>
                            Guide : {{ experience.guide?.name }}
                          </h4>
                          <v-alert variant="outlined" color="white">
                            <v-row>
                              <v-col cols="12" md="4" class="d-flex justify-content-center">
                                <strong class="text-white text-center">{{ experience.guide.nbr_participants }} <br/>Participants</strong>
                              </v-col>
                              <v-col cols="12" md="4" class="d-flex justify-content-center">
                                <strong class="text-white text-center">{{ experience.guide.nbr_experiences }} <br/>Experiences</strong>
                              </v-col>
                              <v-col cols="12" md="4" class="d-flex justify-content-center">
                                <strong class="text-white text-center">{{ experience.guide.years_experience }} <br/>Années</strong>
                              </v-col>
                            </v-row>
                          </v-alert>
                        </v-row>
                      </v-div>
                    </div>
                    <v-card-text class="text-center text-white">
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-alert class="h-100">
                            <strong>Activities:</strong> {{ experience.guide?.activities?.join(', ') }}
                          </v-alert>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-alert class="h-100">
                            <strong>Languages:</strong> {{ experience.guide?.languages?.join(', ') }}
                          </v-alert>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-alert class="h-100">
                            <strong>Contact:</strong> {{ experience.guide?.contact?.email }} /
                            {{ experience.guide?.contact?.phone }}
                          </v-alert>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-alert class="h-100">
                            <strong>Certification:</strong> {{ experience.guide?.certification }}
                          </v-alert>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <hr>
                    <v-card-actions
                      :style="'background:'+getTheme(experience.type?experience.type:'nature').color_theme_1"
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        variant="flat"
                      >
                        Voir le profil
                      </v-btn>
                      <v-btn
                        @click="show = !show"
                        :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                        variant="flat"
                      >
                        BIO
                        <v-icon class="mx-2" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <v-card v-show="show" class="mx-5 mt-3"
                      >
                        <v-divider></v-divider>
                        <v-card-text
                        >
                          {{ experience.guide?.bio }}
                        </v-card-text>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="card-dall-parent" id="destination">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2">
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
                      <v-card-title>
                        <h4 class="ma-2">
                          <v-icon class="mx-2">mdi-map-marker</v-icon>
                          Destination :{{ experience.destination?.label }}
                        </h4>
                      </v-card-title>
                      <v-card-text>
                        <v-alert class="my-1" :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          {{
                            experience.destination?.description
                          }}
                        </v-alert>
                        <v-alert icon="mdi-map"
                                 :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          <strong>Location:</strong> {{ experience.destination?.location?.address }},
                          {{ experience.destination?.location?.city }}, {{ experience.destination?.location?.country }}
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card class="mx-auto">
                      <v-toolbar
                        color="rgba(0, 0, 0, 0)"
                      >
                        <v-tabs
                          v-model="day"
                          :bg-color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                          show-arrows
                          grow
                        >
                          <v-tab
                            v-for="(step,stepsIndex) in arrayFromObject(experience.steps)"
                            :key="stepsIndex"
                            :value="stepsIndex"
                          >
                            <v-chip label class="mx-0">
                              <template v-slot:prepend>
                                <v-badge
                                  color="white"
                                  :content="stepsIndex+1"
                                  inline
                                ></v-badge>
                              </template>
                              {{ step[0] }}
                            </v-chip>
                            <template #append v-if="stepsIndex<=step.length">
                              <v-icon>mdi-arrow-right-thin</v-icon>
                            </template>
                          </v-tab>
                        </v-tabs>
                      </v-toolbar>
                      <v-row class="mx-1 mt-1">
                        <v-col
                          v-for="n in 3"
                          :key="n"
                          cols="4"
                        >
                          <v-img
                            :src="`https://picsum.photos/500/300?image=${day * n + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${day * n + 10}`"
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
                      <v-card-text v-if="arrayFromObject((experience.steps))[day]">
                        <div class="font-weight-bold mb-2 w-100 d-flex justify-content-center">
                          <h3 class="mx-auto ">{{ arrayFromObject(experience.steps)[day][0] }}</h3>
                        </div>
                        <v-timeline density="compact" align="start">
                          <v-timeline-item
                            v-for="step in arrayFromObject((experience.steps))[day][1]"
                            :key="step.id"
                            size="x-small"
                          >
                            <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                              <v-card-title class="text-red-lighten-2 mt-3">{{ step.label }}</v-card-title>
                              <v-card-text class="text-black">
                                {{ step.description }}
                              </v-card-text>
                              <v-card-text>
                                <v-chip :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                                  <strong>Duration: </strong>
                                  {{
                                    step.duration
                                  }}
                                </v-chip>
                                <v-chip :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                                        class="mx-4" label
                                        v-for="activity in step.activities"
                                        :key="activity.id">
                                  {{ activity.name }}
                                </v-chip>
                                <v-btn class="float-end"
                                       :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                                  <v-icon class="mx-1">mdi-image-multiple</v-icon>
                                </v-btn>
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card :color="getTheme(experience.type?experience.type:'nature').color_theme_2"
                            id="pricing-details">
                      <h3 class="ma-4">
                        <v-icon class="mx-2">mdi-cash-multiple</v-icon>
                        Pricing Details
                      </h3>
                      <v-toolbar :color="getTheme(experience.type?experience.type:'nature').color_theme_2" class="px-0">
                        <v-tabs
                          v-model="tab_price"
                          color="primary"
                          variant=""
                          grow
                        >
                          <v-tab
                            v-for="(pricing, index) in experience.pricing_details"
                            :key="index"
                            :value="index"
                            :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                          >
                            Plan A partir de :
                            ${{ pricing.amount }}
                          </v-tab>
                        </v-tabs>
                      </v-toolbar>
                      <v-window class="my-3"
                                v-model="tab_price">
                        <v-window-item
                          v-for="(pricing, index) in experience.pricing_details"
                          :key="index"
                          :value="index"
                        >
                          <v-card-subtitle>
                            <div class="my-2">
                              <h3>Included:</h3>
                              <v-alert :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                                       icon="mdi-check" class="ma-1" label
                                       v-for="(include, index) in pricing.includes"
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
                                <!--                                <v-alert icon="mdi-calendar">-->
                                <!--                                  <Calendar selectionMode="range" v-model="dates" class="border-1 w-100" inline>-->
                                <!--                                    <template #date="slotProps">-->
                                <!--                                      <strong>-->
                                <!--                                        {{ slotProps.date.day }}-->
                                <!--                                      </strong>-->
                                <!--                                      <br>-->
                                <!--                                      <small class="mx-1">-->
                                <!--                                        {{-->
                                <!--                                          getAmountByDate(pricing, new Date(slotProps.date.year + "-" + slotProps.date.month + "-" + slotProps.date.day))-->
                                <!--                                        }}-->
                                <!--                                      </small>-->
                                <!--                                    </template>-->
                                <!--                                  </Calendar>-->
                                <!--                                </v-alert>-->
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
                        </v-window-item>
                      </v-window>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card id="meeting-point"
                            :color="getTheme(experience.type?experience.type:'nature').color_theme_2">
                      <v-card-title>
                        <h3 class="ma-4">
                          <v-icon class="mx-2">mdi-human-greeting</v-icon>
                          Meeting Point:
                          <v-chip label prepend-icon="mdi-clock" class="float-end"
                                  :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                            {{ experience.meetingPoint?.time }}
                          </v-chip>
                        </h3>

                      </v-card-title>
                      <v-card-text>
                        <v-alert :color="getTheme(experience.type?experience.type:'nature').color_theme_1"
                                 icon="mdi-car-info">
                          {{ experience.meetingPoint?.instructions }}
                        </v-alert>
                      </v-card-text>
                      <v-card-text>
                        <v-alert icon="mdi-map"
                                 :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          <strong>Address:</strong> {{ experience.meetingPoint?.location?.address }}
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card id="cancellation-policy"
                            :color="getTheme(experience.type?experience.type:'nature').color_theme_2">
                      <v-card-title>
                        <h3 class="ma-4">
                          <v-icon class="mx-2">mdi-file-cancel-outline</v-icon>
                          Cancellation Policy
                        </h3>
                      </v-card-title>
                      <v-card-text>
                        <v-alert :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          <strong>Notice Period :</strong> {{ experience.cancellation_policy?.notice_period }}
                        </v-alert>
                      </v-card-text>
                      <v-card-text>
                        <v-alert :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                          <strong>Refund Percentage :</strong> {{ experience.cancellation_policy?.refund_percentage }}%
                        </v-alert>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="card-dall-parent">
                  <div class="card-dall">
                    <v-card id="user-reviews" :color="getTheme(experience.type?experience.type:'nature').color_theme_2">
                      <h2 class="ma-3">
                        User Reviews</h2>
                      <v-card-text>
                        <v-list v-for="review in experience.user_reviews" :key="review.userId" bg-color="transparent">
                          <v-list-item prepend-avatar="https://picsum.photos/800/600?random=12">
                            <v-alert :color="getTheme(experience.type?experience.type:'nature').color_theme_1">
                              <v-list-item-title>{{ review.username }}</v-list-item-title>
                              <v-rating v-model="review.rating" readonly></v-rating>
                              <v-list-item-subtitle>{{ review.comment }}</v-list-item-subtitle>
                              <v-list-item-subtitle><em>{{ review.date }}</em></v-list-item-subtitle>
                            </v-alert>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="2">
            <div class="text-xs">
              <v-card class="d-flex flex-column py-2 px-1 " variant="text">
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block href="#medias" size="small"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2 text-xs">
                  <v-icon class="mx-1">mdi-image-multiple</v-icon>
                </strong>Medias
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#description"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-text-long</v-icon>
                </strong>Description
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#activities"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-format-list-bulleted-type</v-icon>
                </strong>Activities
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#requirements"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-exclamation-thick</v-icon>
                </strong>Requirements
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#notices"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-account-alert-outline</v-icon>
                </strong>Notices
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small"
                        href="#take-into-account"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-bag-personal</v-icon>
                </strong>Into
                  Account
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#guide"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-2">mdi-card-account-details</v-icon>
                </strong>Guide
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#destination"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-map-marker</v-icon>
                </strong>Destination
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#steps"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-map-marker-path</v-icon>
                </strong>Steps
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small"
                        href="#pricing-details"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-cash</v-icon>
                </strong>Pricing
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#meeting-point"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-human-greeting</v-icon>
                </strong>Meeting
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small"
                        href="#cancellation-policy"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-file-cancel-outline</v-icon>
                </strong>Cancellation
                </v-chip>
                <v-chip label :color="getTheme(experience.type?experience.type:'nature').color_theme_1" variant="flat"
                        block size="small" href="#user-reviews"
                        class="mx-auto my-1 p-2 text-decoration-underline text-xs w-100 justify-content-center"><strong
                  class="ma-2">
                  <v-icon class="mx-1">mdi-message-draw</v-icon>
                </strong>User
                  Reviews
                </v-chip>
              </v-card>
            </div>
          </v-col>


        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import {MapboxMap, MapboxMarker} from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import exp from "constants";
import {getExperience, getTheme, goto} from "@/utils/services";

export default {
  computed: {
    exp() {
      return exp
    }
  },
  components: {
    MapboxMap, MapboxMarker
  },
  data() {
    return {
      model_carousel: 0,
      color_theme_1: "#4d5443",
      color_theme_2: "#103a4d1f",
      color_theme_3: "red",
      theme: {
        surf: {
          color_theme_1: "#fcab00",
          color_theme_2: "rgba(217,211,194,0.12)",
          color_theme_3: "#f5f5aa",
          background_url: "surf-pattern.png",
        },
        snow: {
          color_theme_1: "#446473",
          color_theme_2: "#2D4D5B1F",
          color_theme_3: "#e9f8fe",
          background_url: "snow-pattern.png",
        },
        nature: {
          color_theme_1: "#4d5443",
          color_theme_2: "#103a4d1f",
          color_theme_3: "#fefee9",
          background_url: "nature-pattern.png",
        },
        desert: {
          color_theme_1: "#b98153",
          color_theme_2: "#103a4d1f",
          color_theme_3: "#fefee9",
          background_url: "desert-pattern.png",
        },
      },
      tab_price: null,
      day: 0,
      show: false,
      carousel_step: 0,
      empty: 0,
      pictures: [],
      dates: [],
      experience: {},
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
    goto,
    getTheme,
    adjusted(pictures) {
      if (pictures == null || pictures.length == 0) {
        return [];
      }

      //order by format (landscape, portrait)
      pictures.sort((a, b) => (a.format > b.format) ? 1 : -1);

      let grid = [...pictures];
      //count the number of landscape pictures
      let landscape = pictures.filter(picture => picture.format == 'landscape').length * 6;
      //count the number of portrait pictures
      let portrait = pictures.filter(picture => picture.format == 'portrait').length * 3;
      //calculate the empty spaces
      let empty = 12 - (landscape + portrait) % 12;
      this.empty = empty;
      return grid;
    },
    arrayFromObject(steps) {
      const sts = this.groupByDay(steps);
      return Object.entries(sts);
    },
    groupByDay(steps) {
      if (steps == null || steps.length == 0) {
        return [];
      }
      return steps.reduce((acc, step) => {
        const date = new Date(step.start_at);
        const day = date.toLocaleDateString();
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(step);
        return acc;
      }, {});
    }
    ,
    formatDate(date) {
      return date.toLocaleDateString();
    }
    ,
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
    }
    ,
    async getExperience() {
      let i = this.$route.params.id ? this.$route.params.id : 1;

      this.experience = await getExperience(i);
      // const module='@/static/experiences/'+this.$route.params.id+'.json';
      // console.log(module)
    }
  }
};
</script>

<style lang="scss">
.experience {
  .border-radius-elipse {
    width: 200px;
    height: 100px;
    border-radius: 100px 100px 0 0;
  }

  .full-height {
    max-height: 90vh !important;
    overflow-y: hidden;
  }

  .scrollable {
    height: 90vh;
    overflow-y: auto;
  }

  .experience-hiking {
  }

  .card-dall-parent-main {
    background-size: contain !important;
    border-radius: 16px !important;

    .card-dall {
      border: 19px solid rgba(255, 255, 255, 0.12) !important;
    }
  }

  .card-dall-parent {
    background: #4d54433d;
    background-size: contain !important;
    border-radius: 16px !important;
  }

  .card-dall {
    border-radius: 16px !important;
    backdrop-filter: blur(0.2px) !important;

    .v-card {
      border-radius: 10px !important;
    }
  }

  .card-nature {
    .card-dall-parent-main {
      background: url(/imgs/nature-pattern.png) !important;
      background-size: contain !important;
    }

    .card-dall {
      border: 7px solid rgba(68, 92, 41, 0.51);

      .v-card {
        border: 3px solid #445c29 !important;
        background-color: #fefee9 !important;
      }
    }
  }

  .card-snow {
    .card-dall-parent-main {
      background: url(/imgs/snow-pattern.png) !important;
      background-size: contain !important;
    }

    .card-dall {
      border: 7px solid rgba(220, 227, 231, 0.5);

      .v-card {
        border: 3px solid #446473 !important;
        background-color: #ffffff !important;
      }
    }
  }

  .card-surf {
    .card-dall-parent-main {
      background: url(/imgs/surf-pattern.png) !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }

    .card-dall {
      border: 7px solid #97b68d;

      .v-card {
        border: 3px solid #268a02 !important;
        background-color: #f3f5f6 !important;
      }
    }
  }

  .card-water {
    .card-dall-parent-main {
      background: url(/imgs/water-pattern.png) !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }

    .card-dall {
      border: 7px solid #e9f8fe;

      .v-card {
        border: 3px solid #103a4d !important;
        background-color: rgba(240, 243, 245, 0.97) !important;
      }
    }
  }

  .card-desert {
    .card-dall-parent-main {
      background: url(/imgs/desert-pattern.png) !important;
      background-size: contain !important;
    }

    .card-dall {
      border: 7px solid rgba(214, 148, 94, 0.44);

      .v-card {
        border: 3px solid #b98153 !important;
        background-color: rgba(245, 242, 241, 0.99) !important;
      }
    }
  }
}

</style>

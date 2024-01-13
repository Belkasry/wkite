<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GuideCard",
  props: {
    guide: Object,
    color: String,
  },
  data: () => ({
    show: false,
  }),
}
)
</script>

<template>
  <v-card>
    <div class="d-flex flex-column w-100 pb-10"
         style=" background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Toubkal_Orange.jpg/1920px-Toubkal_Orange.jpg') !important;
    background-size: 100% 50% ; !important;"
    >
      <v-avatar
          class="mx-auto mt-2"
          size="300"
          :image="guide.pictures[0].url"
          title="Card title"
          theme="dark"
      ></v-avatar>
      <div class="mt-auto w-100">
        <v-row style="margin-top:-10px !important;" class="justify-content-center d-flex">
          <v-chip
                  variant="elevated"
                  class="mx-auto mt-0"
          >
            <v-rating
                :model-value="guide.rating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
            ></v-rating>
          </v-chip>
        </v-row>
        <v-row class="w-100 mx-auto align-content-center d-flex flex-column mt-5">
          <v-card-title class="mb-2 mx-auto overflow-x-visible">
              <v-icon class="mx-2">mdi-card-account-details</v-icon>
              Guide : {{ guide?.name }}
          </v-card-title>
          <v-alert variant="outlined" width="80%">
            <v-row>
              <v-col cols="12" md="4" class="d-flex justify-content-center">
                <strong class="text-center">{{ guide.nbr_participants }}
                  <br/>Participants</strong>
              </v-col>
              <v-col cols="12" md="4" class="d-flex justify-content-center">
                <strong class="text-center">{{ guide.nbr_experiences }} <br/>Experiences</strong>
              </v-col>
              <v-col cols="12" md="4" class="d-flex justify-content-center">
                <strong class="text-center">{{ guide.years_experience }} <br/>Années</strong>
              </v-col>
            </v-row>
          </v-alert>
        </v-row>
      </div>
    </div>
    <v-card-text class="text-center">
      <v-row>
        <v-col cols="12" md="6">
          <v-alert variant="outlined" class="h-100" icon="mdi-format-list-bulleted-type">
            <strong>Activities:</strong>
            <v-spacer></v-spacer>{{ guide?.activities?.join(', ') }}
          </v-alert>
        </v-col>
        <v-col cols="12" md="6">
          <v-alert variant="outlined" class="h-100" icon="mdi-translate">
            <strong>Languages:</strong>
            <v-spacer></v-spacer>{{ guide?.languages?.join(', ') }}
          </v-alert>
        </v-col>
        <v-col cols="12" md="6">
          <v-alert class="h-100" variant="outlined" icon="mdi-contacts">
            <strong>Contact:</strong>
            <v-spacer></v-spacer>
            {{ guide?.contact?.email }}
            <v-spacer></v-spacer>
            {{ guide?.contact?.phone }}
          </v-alert>
        </v-col>
        <v-col cols="12" md="6">
          <v-alert class="h-100" variant="outlined" icon="mdi-certificate-outline">
            <strong>Certification:</strong>
            <v-spacer></v-spacer>{{ guide?.certification }}
          </v-alert>
        </v-col>
      </v-row>
    </v-card-text>
    <hr>
    <v-card-actions
    >
      <v-spacer></v-spacer>
      <v-btn
          variant="flat"
      >
        Voir le profil
      </v-btn>
      <v-btn
          @click="show = !show"
          variant="flat"
      >
        BIO
        <v-icon class="mx-2" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card v-show="show" class="mx-5 my-3"
      >
        <v-divider></v-divider>
        <v-card-text
        >
          {{ guide?.bio }}
        </v-card-text>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>

</style>

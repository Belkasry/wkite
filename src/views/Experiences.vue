<template>
  <v-container>
    <v-breadcrumbs :items="['KAITO','Experiences']">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-navigation-drawer floating class="mt-7" color="white" elevation="2">
      <div class="d-flex px-2 my-2">
        <v-btn
          class="flex-grow-1"
          color="grey"
          height="40"
          variant="flat"
        ></v-btn>

        <v-avatar
          class="ms-2"
          color="surface-variant"
          rounded
          variant="flat"
        ></v-avatar>
      </div>

      <div class="d-flex px-2 my-2 align-center">
        <v-btn
          color="grey-lighten-4"
          variant="flat"
          height="40"
          class="flex-grow-1 me-2"
        ></v-btn>

        <v-avatar
          color="surface-variant"
          size="18"
        ></v-avatar>

        <v-avatar
          class="ms-1"
          color="surface-variant"
          size="18"
        ></v-avatar>
      </div>

      <div class="px-2 my-2">
        <v-text-field
          class="mb-4"
          density="compact"
          flat
          hide-details
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
        ></v-text-field>

        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="50%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="20%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="90%"
        ></v-sheet>

        <v-sheet
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="70%"
        ></v-sheet>

        <v-divider class="my-6"></v-divider>

        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="30%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="65%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="70%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        ></v-sheet>

        <v-sheet
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="100%"
        ></v-sheet>

        <v-divider class="my-6"></v-divider>
      </div>
    </v-navigation-drawer>
    <v-container>
    <v-data-iterator
      :items-per-page="3"
      :items="experiences"
      :search="search"
    >
      <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
        <v-toolbar class="px-2 my-3 d-flex justify-content-between" elevation="2" color="white" style="border-radius: 10px">
          <v-text-field
            v-model="search"
            clearable
            density="comfortable"
            hide-details
            placeholder="National Park, City, Country, ..."
            prepend-inner-icon="mdi-magnify"
            style="max-width: 500px;"
            variant="outlined"
          ></v-text-field>
          <div class="mx-auto">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            size="small"
            variant="tonal"
            class="me-2"
            @click="prevPage"
          ></v-btn>
          <v-btn
            :disabled="page === pageCount"
            icon="mdi-arrow-right"
            size="small"
            variant="tonal"
            @click="nextPage"
          ></v-btn>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:default="{ items }">
        <v-container>
        <template
          v-for="(item, i) in items"
          :key="i"
        >
          <LongExperienceCard :experience="item.raw"/>
          <br>
        </template>
        </v-container>
      </template>
      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import {getTheme, goto} from "@/utils/services";
import LongExperienceCard from "@/components/experience/LongCard.vue";

export default {
  components: {LongExperienceCard},
  data() {
    return {
      experiences: [],
      search: "",
    };
  },
  methods: {
    getTheme,
    goto,
    async fetchExperiences() {
      await axios.get("/experiencesjson/all" + ".json")
        .then(response => this.experiences = response.data)
    }
  },
  mounted() {
    this.fetchExperiences()
  }
};
</script>


<template>
  <v-container>
    <v-navigation-drawer floating class="mt-7">
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
    <v-row>
      <v-col cols="12" md="12" v-for="experience in experiences"
             :key="experience.id">
        <LongExperienceCard :experience="experience"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import LongExperienceCard from "@/components/experience/LongCard.vue";
import {getTheme, goto} from "@/utils/services";

export default {
  components: {LongExperienceCard},
  data() {
    return {
      experiences: []
    };
  },
  methods: {
    getTheme,
    goto,
    async fetchExperiences() {
        await axios.get("/experiencesjson/all" + ".json")
            .then(response => this.experiences=response.data)
    }
  },
  mounted() {
    this.fetchExperiences()
  }
};
</script>

<style lang="scss">
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

</style>

<template>
  <div class="w-100 h-100">
    <v-sheet
      class="mx-auto pa-2 pt-6"
      color="#173c4b"
    >
      <h2
      >
        Experiences
      </h2>

      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="experience in experiences"
          :key="experience.id"
        >
          <v-card
            :href="'/experiences/'+experience.id"
            class="ma-3"
            height="200"
            rounded
            width="250">
            <v-img
              :src="experience.picture_url"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150"
              cover
            >
              <v-card-title class="text-white">
                {{experience.title}}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-eye"></v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-group-item>
        <v-slide-group-item
          v-for="n in 5"
          :key="n"
        >
          <v-sheet
            class="ma-3"
            color="grey-lighten-1"
            height="200"
            rounded
            width="250"
          ></v-sheet>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <v-sheet
      class="mx-auto pa-2 pt-6"
      color="#103a4d1f"
    >
      <h2
      >
        Destinations
      </h2>

      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
        >
          <v-sheet
            :width="n === 1 ? 300 : 150"
            color="grey-lighten-1"
            class="ma-3"
            height="200"
            rounded
          ></v-sheet>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <v-sheet
      class="mx-auto pa-2 pt-6"
      color="#14364691"
    >
    <h2
    >
      Activities
    </h2>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="2"
        >
          <v-sheet
            color="grey-lighten-1"
            height="200"
            rounded
          ></v-sheet>
        </v-col>
      </v-row>
    </v-container>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    drawer: null,
    experiences:[],
  }),
  mounted() {
    this.getExperiences();
  },
  methods: {
      async getExperiences() {
       for(let i=1;i<=3;i++){
        await axios.get("/experiencesjson/" + i + ".json")
          .then(response => this.experiences.push(response.data));
       }
        // const module='@/static/experiences/'+this.$route.params.id+'.json';
        // console.log(module)
      }
  },
}
</script>

<template>
  <div class="d-flex justify-content-end flex-column mr-8">
    <v-carousel
        height="50vh"
        hide-delimiters show-arrows="hover"
        v-model="model"
        class="mt-2"
    >
      <v-carousel-item
          max-height="50vh"
          v-for="(item,i) in images"
          :key="i"
          :src="item"
      ></v-carousel-item>
    </v-carousel>
    <v-sheet
        class="my-5 d-flex justify-content-center"
        elevation="8"
        height="20vh"
        :color="'rgba(52,86,103,0.32)'"
    >
      <v-slide-group
          v-model="model"
          selected-class="bg-primary"
          show-arrows
      >
        <v-slide-group-item
            v-for="(image,n) in images"
            :key="n"
            v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
              color="grey-lighten-1"
              :image="image"
              :class="['ma-4', selectedClass]"
              height="100"
              width="100"
              @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                    v-if="isSelected"
                    color="white"
                    size="48"
                    icon="mdi-eye"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
export default {
  props: {
    images: Array,
  },
  data: () => ({
    model: 0,
  }),
}
</script>

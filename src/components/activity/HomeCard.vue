<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ActivityHomeCard",
  props: {
    activity: Object,
    color: String,
  },
})
</script>

<template>
  <v-card
      class="ma-3 zoom"
      height="200"
      min-width="250"
      :style="'background:url('+activity.image+') no-repeat center center;background-size: cover;'"
      style="border-radius: 15px;box-shadow: 0 4px 10px rgba(7,36,72,0.39);
cursor:pointer">
    <v-sheet
        :style="'background: linear-gradient(to right,rgba(255,255,255,0.06), '+color+')'"
        width="100%"
        height="100%"
        class="d-flex align-items-end flex-column"
        rounded
    >
      <div
          style="background:rgba(255,255,255,0.9);!important; border-radius:1px 1px 15px 15px;"
          class="mt-auto w-100 d-flex justify-content-center pa-4"
          min-height="50px"
      >
        <h5 style="text-shadow: 1px 1px 2px rgba(255,255,255,1); "
            class="text-black text-center my-auto">{{ activity.name }}</h5>
      </div>
    </v-sheet>
  </v-card>
</template>

<style scoped>
.zoom:hover {
  transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>

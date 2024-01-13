<template>
  <v-app-bar
    :height="appBarHeight"
    flat :color="'transparent'" class="my-2 px-5 py-1 app-bar">
    <v-card class="d-flex justify-content-around w-100 curvy h-100" color="white">
      <div class="my-auto">
        <v-avatar
          @click="goto('/')"
          alt="Avatar"
          size="60"
          image="/logo.png"
        ></v-avatar>
      </div>
      <div class="my-auto">
        <v-btn
          v-for="link in links"
          :key="link.key"
          :text="link.label"
          :href="link.href"
          variant="text"
          class="font-weight-bold"
        ></v-btn>
      </div>
      <v-responsive max-width="260" class="mr-9 my-auto">
        <v-text-field
          density="compact"
          flat
          hide-details
          dark
          label="Search"
          rounded="lg"
          single-line
          variant="outlined"
          append-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </v-responsive>
    </v-card>
  </v-app-bar>
</template>

<script>
import {goto} from "@/utils/services";

export default {
  methods: {
    goto,
    handleScroll() {
      const currentScrollY = window.scrollY;
      // Check if the user is scrolling down
      if (currentScrollY > this.lastScrollY) {
        // Scrolling down, hide the app bar
        console.log('scrolling down');
        this.shouldElevateOnScroll = true;
      } else {
        // Scrolling up, show the app bar
        console.log('scrolling up');
        this.shouldElevateOnScroll = false;
      }

      // Update the last scroll position
      this.lastScrollY = currentScrollY;
    },
  },
  data: () => ({
    shouldElevateOnScroll: false,
    appBarHeight: 64, // Adjust this value based on your app bar's height
    lastScrollY: 0,
    drawer: null,
    links: [
      {key: 1, label: 'Experiences', href: '/experiences'},
      {key: 2, label: 'Destinations', href: '/destinations'},
      {key: 3, label: 'Guides'},
      {key: 4, label: 'Activities', href: '/activities'},
    ],
  }),
  watch: {
    shouldElevateOnScroll(value) {
      // transite .app-bar based on the value of shouldElevateOnScroll
      document.querySelector('.app-bar').classList.toggle('elevate', value);
    },
  },
  mounted() {
    // Add a scroll event listener to the window
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>
<style>
.curvy {
  border-radius: 120px !important;
}

.bg-01ab983b {
  background-color: rgb(219, 241, 239) !important;
}
.elevate {
  transition: transform 0.3s;
  transform: translateY(-110%) !important;

}
</style>

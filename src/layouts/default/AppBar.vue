<template>
  <v-app-bar flat :color="'#fff'">
    <div class="d-flex align-center justify-around w-100">
        <v-img
          height="90px"
          alt="Avatar"
          src="/public/logo.png"
        ></v-img>
      <v-btn
        v-for="link in links"
        :key="link.key"
        :text="link.label"
        :href="link.href"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
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
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { key: 1, label: 'Experiences' , href: '/experiences'},
      { key: 2, label: 'Destinations' },
      { key: 3, label: 'Guides' },
      { key: 4, label: 'Activities' },
    ],
  }),
}
</script>
<style>
.bg-01ab983b {
  background-color: rgb(219, 241, 239) !important;
}
</style>

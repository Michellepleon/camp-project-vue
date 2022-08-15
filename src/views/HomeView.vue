<template>
  <v-container>
    <v-card>
      <h1 class="teal lighten-1 white--text text-center display-3">
        Summer Camp 2022
      </h1>

      <v-card-text class="teal lighten-1 white--text text-center">
        Welcome to <b>Summer Camp 2022</b>, we love to create amazing memories
        and unforgettable adventures.<br />
        Join us and you will experience many emotions.
      </v-card-text>
    </v-card>

    <v-card color="light-green lighten-3 ">
      <h1 class="white--text text-center display-2">Programs</h1>
    </v-card>

    <v-spacer />

    <v-carousel cycle interval="7000" show-arrows-on-hover hide-delimiters>
      <v-carousel-item v-for="(card, index) in cards" :key="index">
        <v-img :src="card.src" contain eager />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",

  data: () => ({
    cards: [
      {
        title: "Classic",
        // eslint-disable-next-line global-require
        src: require("../assets/program_classic.jpg"),
        flex: 12,
      },
      {
        title: "Arts & Science",
        // eslint-disable-next-line global-require
        src: require("../assets/program_arts.jpeg"),
        flex: 6,
      },
      {
        title: "Extreme",
        // eslint-disable-next-line global-require
        src: require("../assets/program_extreme.jpeg"),
        flex: 6,
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped></style>

<template>
  <v-container>
    <br />
    <v-card>
      <h1 class="teal lighten-1 white--text text-center display-3">
        Summer Camp 2022
      </h1>
      <p class="teal lighten-1 white--text text-center">
        Welcome to Summer Camp 2022, we love to create amazing memories and
        unforgettable adventures.<br />
        Join us and you will experience many emotions.
      </p>
    </v-card>
    <v-card class="mx-auto" max-width="1800">
      <v-system-bar color="green lighten-1" dark>
        <v-spacer></v-spacer>
      </v-system-bar>

      <v-card color="light-green lighten-3 ">
        <h1 class="white--text text-center display-2">Programs</h1>

        <v-spacer></v-spacer>
      </v-card>

      <v-container fluid>
        <v-row dense>
          <v-col v-for="(card, index) in cards" :key="index" :cols="card.flex">
            <v-card :img="card.src">
              <v-img
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- <button><a href="/programs/art&science">Art & Science</a></button> -->
    <!-- <button><a href="/programs/extreme">Extreme</a></button> -->
  </v-container>
</template>

<script>
export default {
  name: "HomeView",

  components: {},

  data: () => ({
    cards: [
      {
        title: "Classic",
        src: "../assets/program_classic.jpg",
        flex: 12,
      },
      {
        title: "Arts & Science",
        src: "../assets/program_arts.jpeg",
        flex: 6,
      },
      {
        title: "Extreme",
        src: "../assets/program_extreme.jpeg",
        flex: 6,
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped></style>

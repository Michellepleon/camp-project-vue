<template>
  <v-footer app dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="cyan accent-4">
        <strong class="subheading">Get connected with us and have fun!</strong>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="20px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="scss" scoped></style>

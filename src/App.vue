<template>
  <v-app>
    <nav-bar />

    <v-main>
      <router-view />
    </v-main>

    <footer-bar />
  </v-app>
</template>

<script>
import navBar from "./components/NavBar.vue";
import footerBar from "./components/FooterBar.vue";

export default {
  components: { navBar, footerBar },
  name: "App",

  data() {
    return {};
  },
};
</script>

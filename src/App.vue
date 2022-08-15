<template>
  <v-app>
    <system-bar />
    <nav-bar />
    <drawer-bar />

    <v-content>
      <br />
      <router-view />
      <br />
    </v-content>

    <footer-bar />
    <bottom-navigation />
  </v-app>
</template>

<script>
import SystemBar from "./components/SystemBar.vue";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
import DrawerBar from "./components/DrawerBar.vue";

export default {
  components: { NavBar, FooterBar, BottomNavigation, DrawerBar, SystemBar },
  name: "App",

  data() {
    return {};
  },
};
</script>

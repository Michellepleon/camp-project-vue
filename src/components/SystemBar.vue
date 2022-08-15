<!-- is not yet active but can be if needed -->
<template>
  <v-system-bar app v-if="$vuetify.breakpoint.xsOnly">
    <v-spacer />
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>12:30</span>
  </v-system-bar>
</template>

<script>
export default {
  name: "SystemBar",
};
</script>

<style lang="scss" scoped></style>

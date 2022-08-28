<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./shared components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

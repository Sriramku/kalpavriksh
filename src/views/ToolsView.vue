<template>
  <div class="about">
    <h1>This is an tools page</h1>
    <button @click="openCalculatorsPage">Calculators</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  components: {},
  methods: {
    openCalculatorsPage() {
      this.$router.push({ path: "/tools/calculators" });
    },
  },
};
</script>

<style></style>

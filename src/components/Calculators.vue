<template>
  <div>
    <button @click="openSimpleCalculator">Simple Calculator</button>
    <simple-calculator :dialogOpen="dialogOpen"></simple-calculator>
  </div>
</template>

<script>
import SimpleCalculator from "./SimpleCalculator.vue";
export default {
  data() {
    return {
      dialogOpen: false,
    };
  },
  components: {
    SimpleCalculator,
  },
  methods: {
    openSimpleCalculator() {
      this.dialogOpen = !this.dialogOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>

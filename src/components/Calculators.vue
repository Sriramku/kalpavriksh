<template>
  <div>
    <button @click="shouldOpenSimpCalc = true">Simple Calculator</button>
    <button @click="shouldOpenAgeCalc = true">Age Calculator</button>
    <simple-calculator :shouldOpenSimpCalc="shouldOpenSimpCalc" @close-dialog="shouldOpenSimpCalc = false"></simple-calculator>
    <age-calculator :shouldOpenAgeCalc="shouldOpenAgeCalc" @close-dialog="shouldOpenAgeCalc = false"></age-calculator>
  </div>
</template>

<script>
import SimpleCalculator from "./SimpleCalculator.vue";
import AgeCalculator from "./AgeCalculator.vue";
export default {
  data() {
    return {
      shouldOpenSimpCalc: false,
      shouldOpenAgeCalc: false,
    };
  },
  components: {
    SimpleCalculator,
    AgeCalculator
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

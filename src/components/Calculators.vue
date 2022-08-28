<template>
  <div>
    <button @click="accessSimpleCalculator(true)">Simple Calculator</button>
    <simple-calculator
      :dialogOpen="dialogOpen"
      @close-dialog="accessSimpleCalculator"
    ></simple-calculator>
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
    accessSimpleCalculator(value) {
      this.dialogOpen = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>

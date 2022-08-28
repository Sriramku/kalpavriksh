<template>
  <div>
    <v-dialog v-model="temp" v-if="dialogOpen">This is v-dialog</v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogOpen"],
  data() {
    return {
      temp: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>

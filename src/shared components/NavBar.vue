<template>
  <div class="navbar">
    <span style="float: left">Kalpavriksh</span>
    <div class="nav-btn">
      <button :style="[getDefaultTabClr('')]" @click="navigate('')">
        Home
      </button>
      <button :style="[getDefaultTabClr('tools')]" @click="navigate('tools')">
        Tools
      </button>
      <button :style="[getDefaultTabClr('games')]" @click="navigate('games')">
        Games
      </button>
      <button
        :style="[getDefaultTabClr('contact')]"
        @click="navigate('contact')"
      >
        Contact me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    navigate(tab) {
      console.log(this.$route);
      console.log(tab);
      if (this.$route.path !== `/${tab}`) {
        this.$router.push({ path: `/${tab}` });
      }
    },
    getDefaultTabClr(tab) {
      console.log(this.$route.path, `/${tab}`);
      if (this.$route.path === `/${tab}`) {
        return `background-color: brown;color: yellow;`;
      } else {
        return `background-color: grey;color: white;`;
      }
    },
  },
};
</script>

<style>
.navbar {
  background-color: #5c5252;
  height: 20%;
  margin: 0 auto;
}

.nav-btn {
  display: inline-block;
  width: 40%;
  height: 80%;
  float: right;
  margin-top: 0.5%;
}

.nav-btn button {
  float: left;
  width: 24%;
  height: 100%;
  border: none;
  margin: 0 0.25%;
}

.nav-btn button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}

.default-tab {
  background-color: brown;
  color: yellow;
}

.all-tab-btns {
  background-color: grey;
  color: white;
}
</style>

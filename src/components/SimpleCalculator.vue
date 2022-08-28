<template>
  <div>
    <v-dialog
      v-model="temp"
      class="simp-calc"
      hide-overlay
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title class="simp-calc-title grey lighten-2">
          Simple Calculator
        </v-card-title>

        <v-card-text class="simp-calc-text">
          <div class="simp-calc-current">{{ current }}</div>
          <div class="btn" @click="current = '0'">C</div>
          <div class="btn" @click="absFunc">+/-</div>
          <div class="btn" @click="percentFunc">%</div>
          <div class="btn operator" @click="addition">+</div>
          <div class="btn" @click="append('7')">7</div>
          <div class="btn" @click="append('8')">8</div>
          <div class="btn" @click="append('9')">9</div>
          <div class="btn operator" @click="substract">-</div>
          <div class="btn" @click="append('4')">4</div>
          <div class="btn" @click="append('5')">5</div>
          <div class="btn" @click="append('6')">6</div>
          <div class="btn operator" @click="multiply">*</div>
          <div class="btn" @click="append('1')">1</div>
          <div class="btn" @click="append('2')">2</div>
          <div class="btn" @click="append('3')">3</div>
          <div class="btn operator" @click="divide">/</div>
          <div class="simp-calc-zero btn" @click="append('0')">0</div>
          <div class="btn" @click="dot">.</div>
          <div class="btn operator" @click="getResult">=</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="temp = false"> Close </v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >
  </div>
</template>

<script>
export default {
  props: ["dialogOpen"],
  data() {
    return {
      previous: null,
      current: "0",
      operator: null,
      operatorClicked: false,
    };
  },
  computed: {
    temp: {
      get() {
        return this.dialogOpen;
      },
      set(value) {
        this.current = "0";
        this.$emit("close-dialog", value);
      },
    },
  },
  methods: {
    absFunc() {
      if (this.current === "0") {
        return;
      }
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percentFunc() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(value) {
      this.operatorClicked = false;
      this.current = `${this.current}${value}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.current = "";
      this.operatorClicked = true;
    },
    addition() {
      this.operator = (a, b) => {
        return a + b;
      };
      this.setPrevious();
    },
    substract() {
      this.operator = (a, b) => {
        return a - b;
      };
      this.setPrevious();
    },
    multiply() {
      this.operator = (a, b) => {
        return a * b;
      };
      this.setPrevious();
    },
    divide() {
      this.operator = (a, b) => {
        return a / b;
      };
      this.setPrevious();
    },
    getResult() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.simp-calc {
  width: 30%;
  margin: 0 auto;
}

.simp-calc .simp-calc-title {
  font-size: 20px;
}

.simp-calc-text {
  text-align: centre;
  font-size: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.simp-calc-current {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
  text-align: right;
  line-height: 50px;
}

.simp-calc-zero {
  grid-column: 1 / 3;
}

.simp-calc-text .btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
}

.simp-calc-text .operator {
  background-color: orange;
  color: white;
}
</style>

<template>
  <div style="display: inline-block">
    <v-dialog
      v-model="dialog"
      class="age-calc"
      hide-overlay
      persistent
      max-width="450"
    >
      <v-card class="age-calc-vcard">
        <v-card-title class="age-title grey lighten-2">
          Age Calculator
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col class="age-calc-text" align-self="center" md="4">Date Of Birth</v-col>
            <v-col>
              <b-form-datepicker
                id="age-datepicker"
                v-model="dob"
                class="mt-2 w-100"
                today-button
                reset-button
                close-button
                locale="en"
                size="sm"
                @input="resetValues"
              >
              </b-form-datepicker>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="age-calc-text" align-self="center" md="4">As of</v-col>
            <v-col>
              <b-form-datepicker
                id="asoftoday-datepicker"
                v-model="asOfDate"
                class="w-100"
                today-button
                reset-button
                close-button
                locale="en"
                size="sm"
                @input="resetValues"
              >
              </b-form-datepicker>
            </v-col>
          </v-row>
          <v-row>
              <div><b>Age: </b></div>
              <div>{{convertToLocaleStr(years)}} years {{convertToLocaleStr(months)}} months {{convertToLocaleStr(days)}} days</div>
              <div>or {{convertToLocaleStr(daysOnly)}} days</div>
              <div>or {{convertToLocaleStr(daysOnly * 24)}} hours</div>
              <div>or {{convertToLocaleStr(daysOnly * 24 * 60)}} minutes</div>
              <div>or {{convertToLocaleStr(daysOnly * 24 * 60 * 60)}} seconds</div>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          <v-btn color="primary" text @click="calculateAge()"> Calculate </v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: ["shouldOpenAgeCalc"],
  data() {
    return {
      dob: new Date("1998-11-13"),
      asOfDate: new Date(),
      days: 0,
      months: 0,
      years: 0,
      daysOnly: 0,
    };
  },
  computed: {
    dialog: {
      get() {
        this.calculateAge();
        return this.shouldOpenAgeCalc;
      },
      set(value) {
        this.$emit("close-dialog", value);
      },
    },
  },
  methods: {
    calculateAge() {
      var d1 = this.asOfDate;
      var d2 = this.dob;
      var m = moment(d1);
      this.daysOnly = m.diff(d2, 'days');
      this.years = m.diff(d2, 'years');
      m.add(-this.years, 'years');
      this.months = m.diff(d2, 'months');
      m.add(-this.months, 'months');
      this.days = m.diff(d2, 'days');
    },
    convertToLocaleStr(number) {
      return number.toLocaleString('en-IN');
    },
    resetValues() {
      this.days = 0
      this.months = 0
      this.years = 0
    }
  },
  watch: {
    dialog(newVal) {
      if (newVal) { // dialog opened
        this.dob = new Date("1998-11-13");
        this.asOfDate = new Date();
        this.resetValues();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.age-calc {
  width: 30%;
  height: 180%;
  margin: 0 auto;
}

.age-calc .age-calc-title {
  font-size: 20px;
}

.age-calc-text {
  text-align: centre;
  font-size: 17px;
}

.age-calc-vcard {
  height: 370px;
}
</style>

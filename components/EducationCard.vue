<template>
  <v-card class="school-card elevation-0" color="transparent">
    <v-row>
      <v-col>
        <v-row class="school-logo-container">
          <v-img class="school-logo" :src="require(`@/assets/img/${school.logo}`)" />
        </v-row>
        <v-row class="justify-center">
          <h3 class="title white--text">{{ school.name }}</h3>
        </v-row>
        <v-row class="justify-center">
          <v-col class="justify-center text-center">
            <h4 class="subtitle white--text">
              {{ school.degree }}
            </h4>
            <h4 class="font-weight-light white--text">
              {{ school.fieldOfStudy }}
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <h5 class="subtitle-text">
            {{
              school.startDate == school.endDate ? school.startDate :
              school.startDate.concat(' - ', school.endDate)
            }}
          </h5>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";

export default {
  props: {
    school: Object,
  },
  created() {
    dayjs.extend(calendar);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", {
      calendar: {
        sameElse: "YYYY",
      },
    });
    this.school.startDate = this.formatDate(this.school.startDate)
    this.school.endDate = this.formatDate(this.school.endDate)
  },
  methods: {
    formatDate: (date) => {
      if (!date) {
        return null;
      }
      return dayjs(date).calendar();
    }
  }
};
</script>

<style scoped lang="scss">
.school-card {
  margin: 0 auto;
  margin-bottom: 20px;
  width: 340px;
  min-height: 420px;
  padding: 30px;
  transition: all 0.2s linear;
  border-radius: 4px;
}

.school-card:hover {
  transform: $transform-scale-cards;
  box-shadow: $bx-shadow;
}

.school-card>.title {
  margin: 0;
}

.school-logo {
  border-radius: 4px;
  max-width: 200px;
}

.school-logo-container {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>

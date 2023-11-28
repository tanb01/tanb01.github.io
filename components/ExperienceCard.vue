<template>
  <v-card class="experience-card darken">
    <v-row class="pa-2">
      <v-row>
        <v-col class="experience-logo-container" cols="12" lg="3" md="2" sm="2">
          <v-img class="experience-logo" width="100px" :src="require(`@/assets/img/${experience.logo}`)" />
        </v-col>
        <v-col>
          <h3 class="title white--text">{{ experience.position }}</h3>
          <h4 class="subtitle white--text">
            {{ experience.company }}
          </h4>
          <h5 class="subtitle-text">
            {{ experience.city }}, {{ experience.country }} · {{ experience.startDate | formatDate }}
          </h5>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";

export default {
  props: {
    experience: Object,
  },
  created() {
    dayjs.extend(calendar);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", {
      calendar: {
        sameElse: "YYYY",
      },
    });
  },
  filters: {
    formatDate: (date) => {
      if (!date) {
        return null;
      }
      return dayjs(date).calendar();
    },
  },
  methods: {
    duration(startDate, endDate) {
      const sD = dayjs(startDate);
      const eD = dayjs(endDate);
      if (eD.diff(sD, "year") <= 0) {
        return { amount: eD.diff(sD, "month"), type: "month" };
      }
      return { amount: eD.diff(sD, "year"), type: "year" };
    }
  },
};
</script>
<style scoped lang="scss">
.experience-card {
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  transition: all 0.2s linear;
  border-radius: 4px;
}

.experience-card:hover {
  transform: $transform-scale-cards;
  box-shadow: $bx-shadow;
}

.experience-card>.title {
  margin: 0;
}

.experience-logo {
  border-radius: 4px;
}

.experience-logo-container {
  display: flex;
  align-items: center;
}
</style>
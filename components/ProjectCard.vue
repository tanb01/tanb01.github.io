<template>
  <v-card class="project-card darken">
    <v-row no-gutters class="mb-4">
      <v-col>
        <h3 class="title white--text">{{ project.name }}</h3>
        <h5 class="subtitle-text">
          {{ project.city.concat(', ', project.country) }} · {{ project.startDate | formatDate }} ·
          {{ duration(project.startDate, project.endDate) }}
        </h5>
        <h5 class="description white--text">
          {{ project.description }}
        </h5>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div>
          <v-chip v-for="tag in project.tags" :key="project.id + tag" class="ma-1 accent2">
            {{ tag }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/es';


export default {
  props: {
    project: Object,
  },
  created() {
    dayjs.extend(calendar);
    dayjs.extend(duration)
    dayjs.extend(relativeTime)
    dayjs.extend(updateLocale);
    dayjs.updateLocale(this.$i18n.locale, {
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
      return dayjs.duration(eD.diff(sD)).locale(this.$i18n.locale).humanize();
    }
  }
};
</script>

<style scoped lang="scss">
.project-card {
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  transition: all 0.2s linear;
  border-radius: 4px;
  align-self: baseline;
  min-height: 240px;
}

.project-card:hover {
  transform: $transform-scale-cards;
  box-shadow: $bx-shadow;
}

.project-card>.title {
  margin: 0;
}
</style>

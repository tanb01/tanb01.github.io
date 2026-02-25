<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="project-card-dialog"
        :color="$vuetify.theme.themes[$vuetify.theme.dark ? 'dark' : 'light'].primary">
        <v-card-title class="title" :color="$vuetify.theme.themes[$vuetify.theme.dark ? 'dark' : 'light'].primary">{{
          project.name }}</v-card-title>
        <v-card-subtitle class="subtitle-text">
          {{ project.city.concat(', ', project.country) }} · {{ project.startDate | formatDate }} ·
          {{ duration(project.startDate, project.endDate) }}
        </v-card-subtitle>
        <v-card-text class="description"
          :style="{ color: $vuetify.theme.themes[$vuetify.theme.dark ? 'dark' : 'light'].complement }">
          {{ project.description }} </v-card-text>
      </v-card>
    </template>
  </v-dialog>
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
    project: {
      type: Object,
      required: true
    }
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
.project-card-dialog {
  margin: 0 auto;
  padding: 10px;
  transition: all 0.2s linear;
  border-radius: 4px;
  align-self: baseline;
}

.project-card-dialog>.title {
  margin-bottom: 10px;
}
</style>
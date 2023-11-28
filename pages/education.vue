<template>
  <v-sheet class="page pageEducation white--text" min-height="100vh">
    <v-row justify="center">
      <v-col align="center">
        <h1 v-html="$t('education.title')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center pa-4">
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'quote' : 'h4 font-italic']" v-html="$t('education.quote')" />
      </v-col>
    </v-row>
    <v-container class="fill-height pa-0 mt-16">
      <EducationCard v-for="school in schools" :key="school.id" :school="school" />
    </v-container>
  </v-sheet>
</template>

<script>
import EducationCard from "@/components/EducationCard";

export default {
  name: "EducationPage",
  components: {
    EducationCard,
  },
  data() {
    return {
      schools: [],
    };
  },
  async fetch() {
    try {
      const $t = sign => $nuxt.$options.i18n.t(sign);
      const schoolsData = $t('education.schools', { returnObjects: true });

      schoolsData.forEach((school) => {
        this.schools.push(school);
      });
      this.schools.sort((a, b) => {
        let dateA = new Date(a.startDate);
        let dateB = new Date(b.startDate);
        return dateB - dateA;
      });
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss">
.pageEducation {
  background-image: $bg-image-light-accent;
}
</style>
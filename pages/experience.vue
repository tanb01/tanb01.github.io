<template>
  <v-sheet class="page pageExperience white--text" min-height="100vh">
    <v-row justify="center" no-gutters>
      <v-col align="center">
        <h1 v-html="$t('experience.title')" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center pa-4">
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'quote' : 'h4 font-italic']" v-html="$t('experience.quote')" />
      </v-col>
    </v-row>
    <v-row :class="$vuetify.breakpoint.smAndUp ? 'justify-center' : ''" no-gutters>
      <v-col class="pa-0" cols="10" lg="10" md="8">
        <v-timeline align-top :dense="$vuetify.breakpoint.mdAndDown">
          <v-timeline-item v-for="experience in experiences" :key="experience.id" color="accent" icon="mdi-buffer"
            fill-dot>
            <ExperienceCard :experience="experience" />
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard";

export default {
  name: "ExperiencePage",
  components: {
    ExperienceCard,
  },
  data() {
    return {
      experiences: [],
    };
  },
  async fetch() {
    try {
      const $t = sign => $nuxt.$options.i18n.t(sign);
      const experienceData = $t('experience.experiences', { returnObjects: true });

      experienceData.forEach((experience) => {
        this.experiences.push(experience);
      });
      this.experiences.sort((a, b) => {
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
.pageExperience {
  background-image: $bg-image-dark-accent;
}
</style>

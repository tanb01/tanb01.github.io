<template>
  <v-sheet class="page pageProject white--text" min-height="100vh">
    <v-row justify="center">
      <v-col align="center">
        <h1 v-html="$t('projects.title')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center pa-4">
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'quote' : 'h4 font-italic']" v-html="$t('projects.quote')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ProjectSection :projects="projects" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import ProjectSection from "@/components/ProjectSection";


export default {
  name: "ProjectPage",
  components: {
    ProjectSection,
  },
  data() {
    return {
      projects: [],
    };
  },
  async fetch() {
    try {
      const $t = sign => $nuxt.$options.i18n.t(sign);
      const projectData = $t('projects.featured', { returnObjects: true });

      projectData.forEach((project) => {
        this.projects.push(project);
      });
      this.projects.sort((a, b) => {
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
.pageProject {
  background-image: $bg-image-light-accent;
}
</style>
<template>
  <v-card class="projectSection pa-auto ma-auto transparent" flat>
    <v-tabs v-model="tab" color="white" centered background-color="transparent" class="mb-6">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1" class="tab-header text-h6 rounded-l-sm white--text" v-html="$t('projects.firstTab')" />
      <v-tab href="#tab-2" class="tab-header text-h6 rounded-r-sm white--text" v-html="$t('projects.secondTab')" />
    </v-tabs>
    <v-tabs-items v-model="tab" id="custom-tab-items">
      <v-tab-item key=0 :value="'tab-1'">
        <v-container class="fill-height pa-0" justify-center>
          <ProjectCard class="ma-4" v-for="project in sortedConsultingProjects" :key="project.id" :project="project" />
        </v-container>
      </v-tab-item>
      <v-tab-item key=1 :value="'tab-2'">
        <v-container class="fill-height pa-0" justify-center>
          <ProjectCard class="ma-4" v-for="project in sortedEngineeringProjects" :key="project.id" :project="project" />
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ProjectCard from '@/components/ProjectCard';

export default {
  name: "ProjectSection",
  props: {
    projects: [],
  },
  components: {
    ProjectCard
  },
  data() {
    return {
      tab: null,
    }
  },
  computed: {
    sortedConsultingProjects() {
      return this.projects[0].consulting.slice().sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    },
    sortedEngineeringProjects() {
      return this.projects[0].engineering.slice().sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    }
  }
}
</script>

<style lang="scss">
.projectSection {
  max-width: 1600px;
  min-height: 700px;
}

#custom-tab-items {
  background-color: transparent !important;
}

.tab-header {
  color: $tb-header-color !important;
}
</style>
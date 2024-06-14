<template>
  <v-card class="projectSection pa-auto ma-auto transparent" flat>
    <v-tabs v-model="tab" color="white" centered background-color="transparent" class="mb-6">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1" class="tab-header text-h6 rounded-l-sm white--text" v-html="$t('projects.firstTab')" />
      <v-tab href="#tab-2" class="tab-header text-h6 rounded-r-sm white--text" v-html="$t('projects.secondTab')" />
    </v-tabs>
    <v-tabs-items v-model="tab" id="custom-tab-items">
      <v-tab-item key=0 :value="'tab-1'">
        <v-container class="fill-height pa-4" justify-center>
          <vue-masonry-wall :items="sortedConsultingProjects" :options="{ width: 600, padding: 16 }"
            :ssr="{ columns: 3 }">
            <template v-slot:default="{ item }">
              <ProjectCard :key="item.id" :project="item" />
            </template>
          </vue-masonry-wall>
        </v-container>
      </v-tab-item>
      <v-tab-item key=1 :value="'tab-2'">
        <v-container class="fill-height pa-4" justify-center>
          <vue-masonry-wall :items="sortedEngineeringProjects" :options="{ width: 600, padding: 16 }"
            :ssr="{ columns: 3 }">
            <template v-slot:default="{ item }">
              <ProjectCard :key="item.id" :project="item" />
            </template>
          </vue-masonry-wall>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ProjectCard from '@/components/ProjectCard';
import VueMasonryWall from 'vue-masonry-wall';

export default {
  name: "ProjectSection",
  props: {
    projects: [],
  },
  components: {
    ProjectCard,
    VueMasonryWall
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
  // max-width: 1600px;
  // min-height: 700px;
}

#custom-tab-items {
  background-color: transparent !important;
}

.tab-header {
  color: $tb-header-color !important;
}
</style>
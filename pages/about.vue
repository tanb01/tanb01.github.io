<template>
  <v-sheet class="page pageAbout white--text" min-height="100vh">
    <v-row justify="center" no-gutters>
      <v-col align="center">
        <h1 v-html="$t('about.title')" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center pa-4">
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'quote' : 'h4 font-italic']" v-html="$t('about.quote')" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <AboutMeCard />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import AboutMeCard from "@/components/AboutMeCard";

export default {
  name: "AboutMePage",
  components: {
    AboutMeCard,
  }
};
</script>

<style lang="scss">
.pageAbout {
  background-image: $bg-image-dark-accent;
}
</style>
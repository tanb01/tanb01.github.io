<template>
  <v-container>
    <div class="about-card white--text font-weight-thin"
      :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-thin pa-10' : 'text-body-1 pa-4 font-weight-thin']"
      v-html="$t('about.description')" />
  </v-container>
</template>

<script>
export default {
  props: {
    about: Object,
  },
};
</script>

<style lang="scss">
.about-card {
  margin: 0 auto;
  max-width: 700px;
  transition: all 0.2s linear;
  border-radius: 4px;
}

.headline {
  font-weight: 300;
  text-align: justify;
}

.highlighted-content {
  color: $accent2;
  font-weight: 700;
}
</style>

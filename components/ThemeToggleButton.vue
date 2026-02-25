<template>
  <v-btn @click="toggleTheme" color="primary" icon>
    <v-icon>{{ themeIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeToggleButton',
  data() {
    return {
      isDark: this.$vuetify.theme.dark,
    };
  },
  computed: {
    themeIcon() {
      return this.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night';
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.$vuetify.theme.dark = this.isDark;
    }
  }
};
</script>

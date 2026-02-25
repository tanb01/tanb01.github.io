<template>
  <v-btn @click="toggleTheme" color="primary" icon>
    <v-icon class="white--text">{{ themeIcon }}</v-icon>
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
      // Apply all theme color variables from nuxt.config.js
      const darkColors = {
        primary: this.$vuetify.theme.themes.dark.primary,
        accent: this.$vuetify.theme.themes.dark.accent,
        accent2: this.$vuetify.theme.themes.dark.accent2,
        accentDarken: this.$vuetify.theme.themes.dark.accentDarken,
        secondary: this.$vuetify.theme.themes.dark.secondary,
        info: this.$vuetify.theme.themes.dark.info,
        warning: this.$vuetify.theme.themes.dark.warning,
        error: this.$vuetify.theme.themes.dark.error,
        success: this.$vuetify.theme.themes.dark.success,
        darken: this.$vuetify.theme.themes.dark.darken,
        complement: this.$vuetify.theme.themes.dark.complement
      };
      const lightColors = {
        primary: this.$vuetify.theme.themes.light.primary,
        accent: this.$vuetify.theme.themes.light.accent,
        accent2: this.$vuetify.theme.themes.light.accent2,
        accentDarken: this.$vuetify.theme.themes.light.accentDarken,
        secondary: this.$vuetify.theme.themes.light.secondary,
        info: this.$vuetify.theme.themes.light.info,
        warning: this.$vuetify.theme.themes.light.warning,
        error: this.$vuetify.theme.themes.light.error,
        success: this.$vuetify.theme.themes.light.success,
        darken: this.$vuetify.theme.themes.light.darken,
        complement: this.$vuetify.theme.themes.light.complement
      };
      const themeColors = this.isDark ? darkColors : lightColors;
      Object.keys(themeColors).forEach(key => {
        this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'][key] = themeColors[key];
      });
    }
  }
};
</script>

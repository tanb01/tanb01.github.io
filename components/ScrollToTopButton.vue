<template>
  <v-btn class="md-5 mr-1 elevation-21 accent"
    :class="this.lastScrollPosition > 500 ? 'visible animate__animated animate__fadeInUp' : 'hidden animate__animated animate__fadeOutDown'"
    dark fab icon right bottom fixed @click="scrollToTop">
    <v-icon x-large>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  props: {
    lastScrollPosition: {
      type: Number
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0
      });
    },
  }
}
</script>

<style scoped>
.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
</style>
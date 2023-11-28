<template>
  <v-card flat tile class="flex text-center primary" height="100vh">
    <v-card-text class="not-found accent--text">
      <strong>404</strong>
    </v-card-text>
    <v-card-text class="not-found-message complement--text text-h3">
      The page you are looking for does not exist.
    </v-card-text>
    <v-btn class="accent" to="/" elevation="2" x-large>
      Home
    </v-btn>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  background-color: $nf-v-card-bg-color !important;
}

.not-found {
  font-size: 8em;
  padding-top: 150px;
}

.not-found-message {
  padding-top: 100px;
}

.v-btn {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
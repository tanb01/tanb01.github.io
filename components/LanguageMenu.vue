<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y max-width="80px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" elevation="0" v-bind="attrs" v-on="on" :small="$vuetify.breakpoint.xsOnly">
          <v-icon :small="$vuetify.breakpoint.xsOnly">
            mdi-translate
          </v-icon>
          <v-icon small>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </template>
      <v-list :dense="$vuetify.breakpoint.xsOnly">
        <v-list-item v-for="(item, index) in  items" :key="index" :to="switchLocalePath(item.locale)" exact>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'ENG', locale: 'en' },
      { title: 'FR', locale: 'fr' },
      { title: 'ES', locale: 'es' },
    ],
  }),
}
</script>
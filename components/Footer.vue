<template>
  <v-footer padless>
    <v-card flat tile class="flex text-center">
      <v-card-text class="footer-style white--text text-subtitle-1">
        <v-card-text>
          <v-btn v-for="item in items" :key="item.title" :href="item.href" link class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <div>
          &copy {{ new Date().getFullYear() }} — <span v-html="$t('footer.copyright')" />
          <strong>Benjamin Tan</strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-linkedin",
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/bentanpro/",
      },
      {
        icon: "mdi-github",
        title: "GitHub",
        href: "https://github.com/tanb01",
      },
    ],
  }),
}
</script>

<style>
.footer-style {
  background-image: url('@/assets/img/low-poly-grid-banner.svg');
}
</style>
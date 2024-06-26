<template>
  <v-app>
    <v-navigation-drawer class="grey darken-4 mt-16 mx-2 rounded-lg" width="200px" mini-variant-width="72px"
      v-model="drawer" :expand-on-hover="$vuetify.breakpoint.lgAndUp" floating :right="$vuetify.breakpoint.mdAndDown" app>
      <v-list rounded>
        <v-list-item-group mandatory active-class="accentDarken--text text--accent">
          <v-list-item v-for="(item, i) in items" :key="i" :to="{ path: localePath(item.to), hash: item.to.hash }"
            @click.native="handleScroll(item.id)" exact>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="$t('navbar.' + item.id)" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :color="navColor" elevation="0" hide-on-scroll>
      <v-row class="align-center" no-gutters>
        <v-col cols="8" class="d-flex offset-sm-2 offset-md-2 offset-lg-0 offset-xl-0"
          :class="$vuetify.breakpoint.lgAndUp ? 'justify-start' : 'justify-center'">
          <nuxt-link :to="localePath('/')" @click.native="handleScroll('home')">
            <h2 v-text="title" class="v-app-bar-title white--text" :class="$vuetify.breakpoint.xsOnly ? 'text-h6' : ''" />
          </nuxt-link>
        </v-col>
        <v-col cols="1" class="d-flex justify-end ml-auto" :class="$vuetify.breakpoint.xsOnly ? 'pr-8' : ''">
          <LanguageMenu />
        </v-col>
        <v-col cols="1" class=" d-flex justify-end" v-if="$vuetify.breakpoint.mdAndDown">
          <v-app-bar-nav-icon icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.mdAndDown" />
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main :class="[$vuetify.breakpoint.lgAndUp ? 'ma-0 pa-0' : 'ma-0 pa-0']">
      <Nuxt />
    </v-main>
    <ScrollToTopButton v-bind:lastScrollPosition="lastScrollPosition" />
    <Footer />
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
import LanguageMenu from "@/components/LanguageMenu";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    LanguageMenu,
    ScrollToTopButton,
    Footer
  },
  data() {
    return {
      title: "BENJAMIN TAN",
      drawer: this.isMobile,
      mini: true,
      navColor: 'transparent',
      lastScrollPosition: 0,
      items: [
        {
          id: "home",
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          id: "about",
          icon: "mdi-shield-account",
          title: "About Me",
          to: { path: "/", hash: "#about" },
        },
        {
          id: "projects",
          icon: "mdi-clipboard-check-multiple-outline",
          title: "Projects",
          to: { path: "/", hash: "#projects" },
        },
        {
          id: "experience",
          icon: "mdi-briefcase",
          title: "Experience",
          to: { path: "/", hash: "#experience" },
        },
        {
          id: "education",
          icon: "mdi-school",
          title: "Education",
          to: { path: "/", hash: "#education" },
        }
      ],
    };
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);

    if (typeof window === 'undefined')
      return window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);

    window.onscroll = () => {
      this.changeNavColor();
    };

    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Set the current scroll position to the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
    handleScroll(sectionId) {
      if (sectionId == 'home') {
        window.scrollTo({
          top: 0,
          left: 0
        })
      }
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${sectionId}`)
        // Verify whether the anchor has been found
        if (anchor) {
          window.scrollTo({
            // Scroll to and place anchor at the top of the view
            top: anchor.getBoundingClientRect().top + window.scrollY
          })
        }
      }
    },
    changeNavColor() {
      if (
        document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ) {
        this.navColor = '#15131f';
      } else {
        this.navColor = 'transparent';
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 1024
    },
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  background-color: $html-bg-color;
}

.v-navigation-drawer {
  position: fixed;
  height: auto !important;
}

.v-icon {
  color-scheme: initial;
}

.theme-switch {
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10px;
  padding-bottom: 20px;
  height: 20px !important;
  width: 20px !important;
}

.v-app-bar {
  left: 0px !important;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.v-app-bar-title {
  letter-spacing: 1px;
}

.v-btn:focus::before {
  opacity: 0 !important;
}

.v-btn--icon::before {
  display: none;
}
</style>

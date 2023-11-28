<template>
  <div>
    <v-row>
      <v-col class="pa-0 rounded-0">
        <v-card>
          <v-parallax class="hero-parallax rounded-0" :src="require('@/assets/img/low-poly-grid-banner.svg')"
            height="100%">
            <v-row align="center" justify="center">
              <v-col
                :class="[$vuetify.breakpoint.mdAndUp ? 'text-left pb-16 pl-16 pt-16 mt-16' : 'text-left pa-4 mt-16 pt-16']"
                cols="12" md="10" sm="7">
                <h2 v-html="$t('hero.greeting')" :class="[$vuetify.breakpoint.mdAndUp ? 'h3-message' : 'h3-message']" />
                <h1 v-html="$t('hero.name')" :class="[$vuetify.breakpoint.mdAndUp ? 'h1-message' : 'h2-message']" />
                <h2 v-html="$t('hero.position')"
                  :class="[$vuetify.breakpoint.mdAndUp ? 'h2-message h2-message-opacity' : 'h4-message h2-message-opacity']" />
                <v-carousel continous cycle vertical :interval="3000" :show-arrows="false" hide-delimiters
                  hide-delimiter-background disabled height="100%">
                  <v-carousel-item>
                    <h2 v-html="$t('hero.firstTitle')"
                      :class="[$vuetify.breakpoint.mdAndUp ? 'h2-message' : 'h3-message']" />
                  </v-carousel-item>
                  <v-carousel-item>
                    <h2 v-html="$t('hero.secondTitle')"
                      :class="[$vuetify.breakpoint.mdAndUp ? 'h2-message' : 'h3-message']" />
                  </v-carousel-item>
                  <v-carousel-item>
                    <h2 v-html="$t('hero.thirdTitle')"
                      :class="[$vuetify.breakpoint.mdAndUp ? 'h2-message' : 'h3-message']" />
                  </v-carousel-item>
                </v-carousel>
                <h2 v-html="$t('hero.endQuote')"
                  :class="[$vuetify.breakpoint.mdAndUp ? 'h2-message h2-message-opacity' : 'h3-message h2-message-opacity']" />
                <h3 v-html="$t('hero.objective')"
                  :class="[$vuetify.breakpoint.mdAndUp ? 'text-h4 mt-8 ' : 'text-h6 mt-8']" />
              </v-col>
            </v-row>
          </v-parallax>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="about" justify="center" align="center">
      <v-col class="pa-0">
        <AboutMePage />
      </v-col>
    </v-row>
    <v-row id="projects" justify="center" align="center">
      <v-col class="pa-0">
        <ProjectPage />
      </v-col>
    </v-row>
    <v-row id="experience" justify="center" align="center">
      <v-col class="pa-0">
        <ExperiencePage />
      </v-col>
    </v-row>
    <v-row id="education" justify="center" align="center">
      <v-col class="pa-0">
        <EducationPage />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import 'animate.css';
import AboutMePage from "@/pages/about.vue";
import ExperiencePage from "@/pages/experience.vue";
import EducationPage from "@/pages/education.vue";
import ProjectPage from "@/pages/project.vue";

export default {
  name: "IndexPage",
  components: { AboutMePage, ExperiencePage, EducationPage, ProjectPage }
};
</script>

<style lang="scss">
.h1-message {
  font-weight: 300px;
  font-size: 6rem;
  transition: color 0.6s ease-out 100ms;
  display: inline-block;
}

.h1-message:hover {
  color: $accent;
}

.h2-message {
  font-weight: 300px;
  font-size: 3.75rem;
}

.h2-message-opacity {
  opacity: 0.5;
}

.h3-message {
  font-weight: 300px;
  font-size: 2rem;
}

.h4-message {
  font-weight: 300px;
  font-size: 1.75rem;
}

.hero-parallax {
  min-height: 750px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 400;
}

.subtitle-text {
  font-size: 1rem;
  font-weight: 300;
  color: $sub-text-color;
  font-style: italic;
}

.description {
  font-size: 1rem;
  font-weight: 300;
  margin-top: 8px;
  text-align: justify;
}

a:link {
  text-decoration: none;
}

.quote {
  font-size: 1.5rem !important;
  font-style: italic;
  font-weight: 300;
  text-align: center;
}

.v-carousel__item {
  color: $accent !important;
}

.page {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>

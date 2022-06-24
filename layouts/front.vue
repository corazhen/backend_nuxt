<template>
  <v-app id="inspire">
    <FrontNav />
    <FrontCarousel/>
    <Nuxt />
    <!-- <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer> -->
  </v-app>
</template>
<script>
// import Nav from '~/components/Nav.vue'
import FrontNav from '~/components/FrontNav.vue'
import FrontCarousel from '~/components/FrontCarousel.vue'

export default {
  data: () => ({ drawer: null }),
  components: {
    // Nav,
    FrontNav,
    FrontCarousel,
  },
  methods: {
    handleLogOut() {
      this.$cookiz.remove('coraTest')
      this.$router.push('/')
    },
  },
  computed: {
    title() {
      return this.$store.state.pageTitle
    },
  },
}
</script>
<style lang="scss" scoped></style>

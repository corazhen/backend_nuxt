<template>
  <v-app id="inspire">
    <v-navigation-drawer class="accent-4" dark permanent v-model="drawer" app>
      <Navuetify />
      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="handleLogOut" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- <Nav></Nav> -->
    <v-app-bar color="orange" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>管理後台 - {{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
// import Nav from '~/components/Nav.vue'
import Navuetify from '~/components/Navuetify.vue'

export default {
  data: () => ({ drawer: null }),
  components: {
    // Nav,
    Navuetify,
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

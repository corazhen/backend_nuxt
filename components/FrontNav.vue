<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <template v-for="(value, i) in frontnav">
        <button class="navBtn" :key="i">
          <nuxt-link :to="value.link">{{ value.title }}</nuxt-link>
        </button>
      </template>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <!-- <v-tab> -->
        <v-badge color="black" content="6" overlap>
          <v-icon>mdi-cart-variant</v-icon></v-badge
        >
        <!-- </v-tab>。 -->
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: 'FrontNav',
  data() {
    return {
      frontnav: [
        {
          title: '最新上架',
          link: '',
          children: [{}],
        },
        {
          title: '關於我們',
          link: '',
          children: [{}],
        },
        {
          title: '購物專區',
          link: '',
          children: [{}],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.navBtn {
  padding: 0.5rem;
  margin-right: 0.5rem;
}
</style>

<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: 'Navuetify',

  data() {
    return {
      items: [
        { title: '留言板', icon: 'mdi-view-dashboard', link: '/messageBoard' },
        { title: '個人檔案', icon: 'mdi-gavel', link: '/loginOk' },
        { title:'購買紀錄', icon: 'mdi-basket', link: '/productRecord'}
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>

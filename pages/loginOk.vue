<template>
  <div class="logout">
    <h1>我的基本資料修改&&登入成功</h1>
    <!-- <button type="primary" @click="handleLogOut">Login out</button> -->
  </div>
</template>
<script>
export default {
  layout: 'front',
  name: 'loginOk',
  middleware: 'memberauth',
  meta: {
    requiresAuth: true,
  },
  // methods: {
  //   handleLogOut() {
  //     this.$cookiz.remove('coraTest')
  //     this.$router.push('/')
  //   },
  // },
  // mounted() {
  //   if (!this.$cookiz.get('coraTest')) {
  //     this.$router.push('/')
  //   }
  // },
}
</script>
<style lang="scss" scoped>
</style>

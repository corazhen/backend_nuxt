<template>
  <h1>我的基本資料修改&&登入成功</h1>
</template>
<script>
export default {
  name: 'loginOk',
  middleware: 'memberauth',
  meta: {
    requiresAuth: true,
  },
  mounted() {
    // if (!this.$cookiz.get('coraTest')) {
    //   this.$router.push('/')
    // }
  },
}
</script>
<style lang="scss" scoped></style>

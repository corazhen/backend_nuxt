<template>
  <div class="tw-w-4/5 tw-m-auto tw-h-screen loginContainer">
    <h1>login in</h1>
    <input v-model="loginForm.username" type="text" placeholder="Username" />
    <p>{{ loginForm.username }}</p>
    <input
      v-model="loginForm.password"
      type="password"
      placeholder="Password"
    />
    <p>{{ loginForm.password }}</p>
    <button type="primary" @click="handleLogin">Login</button>
    <br />
    <!-- <Navuetify></Navuetify> -->
  </div>
</template>
<script>
// import Navuetify from '~/components/Navuetify.vue'

export default {
  // layout: 'front',
  name: 'Home',
  // components: { Navuetify },
  // meta: {
  //   requiresAuth: true,
  // },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        token: '',
      },
    }
  },
  mounted() {
    if (this.$cookiz.get('coraTest')) {
      this.$router.push('/loginOk')
    }
  },
  methods: {
    handleLogin() {
      let username = this.loginForm.username
      let password = this.loginForm.password
      if (username == 'cora' && password == 'abcd1234') {
        const token = 'sucessful!'
        this.$cookiz.set('coraTest', token)
        this.$router.push('/loginOk')
      } else {
        alert('登入失敗')
      }
    },
  },
}
</script>
<style lang="scss" scoped>

</style>

<template>
  <div class="tw-w-4/5 tw-m-auto tw-h-screen">
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
    <button>Clear</button>
  </div>
</template>
<script>
export default {
  layouts: 'front',
  name: 'Home',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        token: '',
      },
    }
  },
  // mounted() {
  //   if (this.$cookiz.get('coraTest')) {
  //     this.$router.push('/loginOk')
  //   }
  // },
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
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}
/* Full-width inputs */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}
/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}
/* Add padding to containers */
.container {
  padding: 16px;
}
/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <h1 class="tw-text-center tw-text-2xl tw-py-6">我的基本資料修改&&登入成功</h1>
    <!-- <div class="tw-w-4/5 tw-bg-gray-50"> -->
    <v-sheet
      color="white"
      elevation="4"
      height="500px"
      shaped
      width="800px"
      class="pa-6 ma-auto "
    >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-col cols="12">
          <v-card class="pa-2"> 我的帳號為 </v-card>
        </v-col>
        <v-text-field
          v-model="name"
          :counter="10"
          maxlength="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="我已同意上述修改規定"
          required
        ></v-checkbox> -->

        <!-- <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn> -->

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <!-- @click="resetValidation" -->
        <v-btn color="blue lighten-5" @click="validate"> save changes </v-btn>
      </v-form>
    </v-sheet>
    <!-- </div> -->
    <!-- <button type="primary" @click="handleLogOut">Login out</button> -->
  </div>
</template>
<script>
export default {
  layout: 'admin',
  name: 'loginOk',
  middleware: 'memberauth',
  meta: {
    requiresAuth: true,
  },
  async asyncData({ store }) {
    await store.dispatch('setPageTitle', { title: '個人檔案' })
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
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
<style lang="scss" scoped></style>

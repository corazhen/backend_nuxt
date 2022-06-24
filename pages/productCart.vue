<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>
      <v-card class="tw-h-screen">
        <v-card-title class="text-h5 grey lighten-2"> 購物清單 </v-card-title>
        <!-- 未來會增加產品的區域 -->
        <!-- <我要產品頁點選加入購車後他就可以直接連動產生到右邊的購物籃> -->
        <v-card-text>
          <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. -->
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> 確認送出 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
<style lang="scss" scoped>
// body {
//   background: #f8f7f2;
// }

// .content {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   flex-wrap: wrap;
//   align-items: center;
//   max-width: 1200px;
//   margin: auto;
// }

// .anim {
//   position: relative;
//   width: 500px;
//   height: 500px;
//   margin-right: 100px;
//   background-image: url('https://picsum.photos/500');
//   overflow: hidden;
// }

// .anim::after {
//   content: '';
//   display: block;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: 1;
//   transform: translateX(0%);
//   transition: transform 1s cubic-bezier(0.16, 0.67, 0.67, 0.98) 0.5s;
// }

// .red::after {
//   background: #7e2242;
// }

// .yellow:after {
//   background: #ffdf65;
// }

// .pink::after {
//   background: #ffb59b;
// }

// .show::after {
//   transform: translateX(-101%);
// }

// .anim:nth-child(2n) {
//   margin-top: 600px;
// }
</style>

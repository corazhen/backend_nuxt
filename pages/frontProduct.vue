<template>
  <div>
    <h1 class="tw-text-center tw-text-2xl tw-py-6">Products</h1>
    <div>
      <!-- 商品卡片 -->
      <v-card class="tw-m-auto" max-width="344">
        <!-- 商品圖片 -->
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <div class="tw-flex tw-justify-between tw-items-center">
          <v-card-title class=""> {{ product.name }} </v-card-title>
          <!-- 加減的數量區 -->
          <div class="tw-flex tw-flex-row tw-m-4">
            <div
              class="tw-flex-grow tw-px-2 tw-border tw-border-solid tw-border-black"
              @click="count++"
            >
              +
            </div>
            <div class="tw-flex-grow-0 borderData tw-px-2">
              {{ count }}
            </div>
            <div
              class="tw-flex-grow tw-px-2 tw-border tw-border-solid tw-border-black"
              @click="subtract"
            >
              -
            </div>
          </div>
        </div>
        <!-- <v-row no-gutters>
          <v-col order="last">
            <v-card class="pa-2" outlined > + </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile> {{counter}} </v-card>
          </v-col>
          <v-col order="first">
            <v-card class="pa-2" outlined tile> - </v-card>
          </v-col>
        </v-row> -->
        <!-- 加入購物車 -->
        <v-card-actions>
          <!-- <v-btn color="orange lighten-2" text>{{ buttonTitle }} </v-btn> -->
          <!-- 購物車用dialog呈現 -->
          <v-dialog v-model="dialog" width="500" >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn> -->
               <v-btn color="orange lighten-2" v-bind="attrs" v-on="on"  text>{{ buttonTitle }} </v-btn>
               <!-- <v-btn color="orange lighten-2" v-on="on" dark v-bind="attrs" text>{{ buttonTitle }} </v-btn> -->
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition> -->
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  layout:'front',
  name: 'frontProduct',
  data: () => ({
    show: false,
    dialog: false,
    count: 1,
    product: {
      name: 'pocky',
    },
    buttonTitle: '加入購物車',
  }),
  methods: {
    subtract() {
      if (this.count <= 0) {
        this.count = 0
      } else {
        this.count -= 1
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.borderData {
  border: 1px 0 1px 0 solid black;
}
</style>

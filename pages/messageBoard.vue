<template>
  <v-data-table
    :headers="headers"
    :items="listData"
    disable-sort
    class="elevation-1"
    :items-per-page="-1"
    :hide-default-footer="true"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <!-- <v-toolbar-title>留言版</v-toolbar-title> -->
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              新增留言
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container class="grey lighten-5">
                <v-col cols="12">
                  <v-text-field
                    label="標題填寫"
                    placeholder="標題填寫"
                    maxlength="100"
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    solo
                    name="input-7-4"
                    label="Solo textarea"
                  ></v-textarea>
                </v-col>
                <v-btn depressed color="primary">確認修改</v-btn>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">確定要刪除該筆留言嗎?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <!-- @click="initialize" -->
      <v-btn color="primary"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  layout: 'admin',
  // async asyncData({ store }) {
  //   await store.dispatch('/messageBoard')
  // },
  middleware: 'memberauth',
  meta: {
    requiresAuth: true,
  },
  async asyncData({ store }) {
    await store.dispatch('setPageTitle', { title: '留言板' })
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: '序',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      { text: 'title', value: 'title' },
      { text: 'time', value: 'time' },
      { text: 'author', value: 'author' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
    defaultItem: {
      name: '',
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? '新增留言板' : '編輯留言板'
    },
    listData() {
      return this.$store.state.messageBoard.messageData
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  // created() {
  //   this.initialize()
  // },

  methods: {
    // initialize() {
    //   this.listData = [
    //     {
    //       id: 1,
    //       title: '123title',
    //       time: '2022/06/23',
    //       content: '123content',
    //       author: 'cora',
    //     },
    //     {
    //       id: 2,
    //       title: '12title',
    //       time: '2022/06/23',
    //       content: '12content',
    //       author: 'cora',
    //     },
    //     {
    //       id: 3,
    //       title: '3title',
    //       time: '2022/06/23',
    //       content: '3content',
    //       author: 'cora',
    //     },
    //     {
    //       id: 4,
    //       title: '45title',
    //       time: '2022/06/23',
    //       content: '45content',
    //       author: 'cora',
    //     },
    //     {
    //       id: 5,
    //       title: '13title',
    //       time: '2022/06/23',
    //       content: '13content',
    //       author: 'cora',
    //     },
    //   ]
    // },

    editItem(item) {
      this.editedIndex = this.listData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.listData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.listData.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.listData[this.editedIndex], this.editedItem)
      } else {
        this.listData.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
<style lang="scss" scoped></style>

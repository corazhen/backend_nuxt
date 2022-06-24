<template>
  <div>
    <!-- simple marquee text -->
    <marquee-text
      @mouseover="pause = !pause"
      @mouseenter="pause = !pause"
      :paused="pause"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna.
    </marquee-text>
    <v-container class="grey lighten-5">
      <v-col cols="12">
        <v-text-field
          label="標題填寫"
          placeholder="標題填寫"
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
      </v-col>
      <v-btn depressed color="primary">新增</v-btn>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="listData"
      :items-per-page="5"
      disable-sort
      class="elevation-1 pa-6"
    >
      <template>
        <v-toolbar>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
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
    </v-data-table>
  </div>
</template>
<script>
export default {
  layout: 'front',
  name: 'Marquee',
  data() {
    return {
      pause: false,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      listData: [
        {
          id: 1,
          title: '123title',
          time: '2022/06/23',
          content: '123content',
          author: 'cora',
        },
        {
          id: 2,
          title: '12title',
          time: '2022/06/23',
          content: '12content',
          author: 'cora',
        },
        {
          id: 3,
          title: '3title',
          time: '2022/06/23',
          content: '3content',
          author: 'cora',
        },
        {
          id: 4,
          title: '45title',
          time: '2022/06/23',
          content: '45content',
          author: 'cora',
        },
        {
          id: 5,
          title: '13title',
          time: '2022/06/23',
          content: '13content',
          author: 'cora',
        },
      ],
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
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? '留言板新增' : '編輯留言板'
    },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
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
}
</script>
<style scoped lang="scss"></style>

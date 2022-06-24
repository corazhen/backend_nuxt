<template>
  <!-- only read -->
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
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
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
  async asyncData({ store }) {
    await store.dispatch('setPageTitle', { title: '購買紀錄' })
  },
  middleware: 'memberauth',
  meta: {
    requiresAuth: true,
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
      { text: 'product', value: 'product' },
      { text: 'time', value: 'time' },
      { text: 'buyer', value: 'buyer' },
      //   { text: 'Actions', value: 'actions', sortable: false },
    ],
    // editedIndex: -1,
  }),
  computed: {
    listData() {
      return this.$store.state.productRecord.productRecordData
    },
  },
}
</script>
<style lang="scss" scoped></style>

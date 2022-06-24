export const state = () => ({
    productRecordData: [
    {
      id: 1,
      product: 'pocky1',
      time: '2022/06/23',
      buyer: 'cora',
    },
    {
      id: 2,
      product: 'pocky1',
      time: '2022/06/23',
      buyer: 'cora',
    },
    {
      id: 3,
      product: 'pocky1',
      time: '2022/06/23',
      buyer: 'cora',
    },
    {
      id: 4,
      product: 'pocky1',
      time: '2022/06/23',
      buyer: 'cora',
    },
    {
      id: 5,
      product: 'pocky1',
      time: '2022/06/23',
      buyer: 'cora',
    },
  ],
})
export const mutations = {
  updateProductRecord(state, data) {
    state.productRecordData = data
  },
}
export const actions = {
//   getBanner
//   async getProductRecord({ dispatch, commit }) {
//     commit('switchLoading', true, { root: true })
//     await this.$axios
//       .get('api/messageData')
//       .then((res) => {
//         commit('updateMessageData', res.data.messageData)
//       })
//       .catch(() => {
//         this.dispatch('admin/handleErrorMessage', error)
//         // this.$router.push("/*");
//       })
//       .finally(() => {
//         commit('switchLoading', false, { root: true })
//       })
//   },
}
export const getters = {}
export const modules = {}

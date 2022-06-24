export const state = () => ({
//     productCartData: [
//     {
//       id: 1,
//       product: 'pocky1',
//       time: '2022/06/23',
//       buyer: 'cora',
//     },
//     {
//       id: 2,
//       product: 'pocky1',
//       time: '2022/06/23',
//       buyer: 'cora',
//     },
//     {
//       id: 3,
//       product: 'pocky1',
//       time: '2022/06/23',
//       buyer: 'cora',
//     },
//     {
//       id: 4,
//       product: 'pocky1',
//       time: '2022/06/23',
//       buyer: 'cora',
//     },
//     {
//       id: 5,
//       product: 'pocky1',
//       time: '2022/06/23',
//       buyer: 'cora',
//     },
//   ],
})
export const mutations = {
  updateProductCartData(state, data) {
    state.productRecordData = data
  },
}
export const actions = {
//  productCart
//   async getproductCart({ dispatch, commit }) {
//     commit('switchLoading', true, { root: true })
//     await this.$axios
//       .get('api/productCar')
//       .then((res) => {
//         commit('updateProductCartData', res.data.productCartData)
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
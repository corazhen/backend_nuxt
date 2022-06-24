export const state = () => ({
    productData: [
    {
      id: 1,
      product: 'pocky',
      price:'',
      inStock:10,

    //   buyer: 'cora',
    },
  ],
})
export const mutations = {
  updateproductData(state, data) {
    state.productData = data
  },
//   更新產品存
//   updateProductinStock(state, data) {
//     state.productData = data
//   },
}
export const actions = {
//   getProduct
  async getProduct({ dispatch, commit }) {
    commit('switchLoading', true, { root: true })
    await this.$axios
      .get('api/product')
      .then((res) => {
        commit('updateMessageData', res.data.messageData)
      })
      .catch(() => {
        this.dispatch('admin/handleErrorMessage', error)
        // this.$router.push("/*");
      })
      .finally(() => {
        commit('switchLoading', false, { root: true })
      })
  },
}
export const getters = {}
export const modules = {}

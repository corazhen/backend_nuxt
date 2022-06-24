export const state = () => ({
    messageData: [
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
})
export const mutations = {
  updateMessageData(state, data) {
    state.messageData = data
  },
}
export const actions = {
  // getBanner
//   async getMessageData({ dispatch, commit }) {
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

export const state = () => ({
    pageTitle: '',
  })

export const mutations = {
  // 更改 page title
  setPageTitle(state, title) {
    state.pageTitle = title
  },
}
// 存放需要記錄在 cookie 的資料
export const actions = {
  //   nuxtServerInit({ commit }, { req }) {
  //     const hasCookieInReq = !!req.headers.cookie
  //     if (hasCookieInReq) {
  //       try {
  //         const allCookies = cookieparser.parse(req.headers.cookie)
  //         const token = allCookies['auth-token']
  //         commit('SET_USER_TOKEN', token)
  //       } catch (error) {
  //         // ...
  //       }
  //     }
  //   },
  // 設定 page title
  // setPageTitle(context, payload) {
  setPageTitle({ commit }, payload) {
    commit('setPageTitle', payload.title)
  },
}

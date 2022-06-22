// const state = () => {
//   return {
//     userToken: undefined,
//   }
// }
// // 存放需要記錄在 cookie 的資料
// const actions = {
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
// }

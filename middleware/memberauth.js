export default ({ app, route, redirect }) => {
  console.log('routerAuth')
  console.log(route.meta[0].requiresAuth)
  if (route.meta[0].requiresAuth) {
    console.log('需要驗證')
    if (
      app.$cookiz.get('coraTest')
    ) {
      console.log('驗證成功')
    } else {
      console.log('驗證失敗')
      return redirect('/')
    }
  }
}

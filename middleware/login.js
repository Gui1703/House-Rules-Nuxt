export default ({ store, route, redirect }) => {
  const user = store.getters['user/userIsLogged']

  if (
    (route.path === '/house-rules' && !user) ||
    (route.path === '/' && !user)
  ) {
    redirect('/login')
  }
  redirect()
}

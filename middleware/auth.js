export default ({ store, route, redirect }) => {
  const user = store.getters['user/userIsLogged']

  if ((route.path === '/login' && user) || (route.path === '/' && user)) {
    redirect('/house-rules')
  }

  redirect()
}

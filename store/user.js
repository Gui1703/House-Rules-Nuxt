export const state = () => ({
  information: {},
  token: '',
})

export const mutations = {
  login(state, data) {
    state.information = data
    state.token = `Bearer ${data.access_token}`
  },

  logout(state) {
    state.information = {}
    state.token = ''
  },
}

export const getters = {
  userIsLogged(state) {
    return state.token
  },
}

export const actions = {
  loginUser(context, user) {
    return this.$axios.$post('/login_json', user).then((res) => {
      context.commit('login', res.data.result)
      return res
    })
  },
}

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  profile_info: {}
})

export const mutations = {
  SET_PROFILE_INFO(state, data) {
    state.profile_info = data
  }
}

export const actions = {
  async getProfileInfo({ commit }) {
    const { data } = await this.$axios.get(
      'https://teamtreehouse.com/pasqualeconte.json'
    )
    commit('SET_PROFILE_INFO', data)
  },
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('authentication/SET_AUTH', auth)
  }
}

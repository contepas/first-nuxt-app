// export const namespaced = true

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
  }
}

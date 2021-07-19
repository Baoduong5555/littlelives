// initial state
// shape: [{ id, quantity }]
const state = () => ({
  count: 0,
})

// getters
const getters = {
  count: ({count}) => count
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
  },
}

// mutations
const mutations = {
  increase (state) {
    state.count = state.count + 1
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
export default {
  namespaced: true,
  state: {
    val: 0
  },
  mutations: {
    PLUS (state) {
      state.val++
    }
  }
}
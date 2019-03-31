export default {
  namespaced: true,
  state: {
    isImageModalActive: false,
    modalImageUrl: ''
  },
  getters: {

  },
  mutations: {
    setIsImageModalActive(state, val) {
      state.isImageModalActive = !!val
    },
    setModalImageUrl(state, val) {
      state.modalImageUrl = val
    }
  },
  actions: {
    showModal({ commit }, url) {
      commit('setIsImageModalActive', true),
        commit('setModalImageUrl', url)
    },
    closeModal({ commit }) {
      commit('setIsImageModalActive', false)
      commit('setModalImageUrl', '')
    }
  }
}

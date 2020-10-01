import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
    'Hola',
    'Hello',
    'Ciao'
    ]
  },
  mutations: {
    DELETE_MSG(state) {
      state.messages.pop()
    }
  },
  actions: {
    removeMessage({ commit }) {
      commit('DELETE_MSG')
    }
  },
  modules: {
  }
})

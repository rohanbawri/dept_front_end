import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      token: ''
    }
  },
  mutations: {
    getToken: function (state) {
      return state.user.token
    },
    setToken: (state, newToken) => {
      state.user.token = newToken
    }
  },
  action: {
    setToken: (context, NewToken) => {
      setTimeout(function () {
        context.commit('setToken', NewToken)
      }, 1000)
    }
  }
})

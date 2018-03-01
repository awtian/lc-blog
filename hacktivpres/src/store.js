import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const db = axios.create({baseURL: 'http://localhost:3000'})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    loadAll ({commit}) {
      db.get('/articles/')
        .then(({data}) => {
          commit('SET_POSTS', data.reverse())
        })
        .catch(err => console.log(err))
    }
  }
})

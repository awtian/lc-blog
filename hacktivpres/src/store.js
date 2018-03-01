import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const db = axios.create({baseURL: 'http://localhost:3000'})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
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
    },
    loadCreator ({commit}, creator) {
      db.get(`/articles/author/${creator}`)
        .then(({data}) => {
          commit('SET_POSTS', data)
        })
        .catch(err => console.log(err))
    },
    loadCategory ({commit}, category) {
      db.get(`/articles/category/${category}`)
        .then(({data}) => {
          commit('SET_POSTS', data.reverse())
        })
        .catch(err => console.log(err))
    }
  }
})

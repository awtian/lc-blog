import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import swal from 'sweetalert'

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
    },
    SET_USER (state, payload) {
      state.login = payload
    },
    ADD_POST (state, payload) {
      state.posts.unshift(payload)
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
    },
    logout ({commit}) {
      localStorage.clear()
      commit('SET_USER', false)
    },
    addPost ({commit}, payload) {
      db.post('/articles', payload, {headers: {token: localStorage.auth}})
        .then(({data}) => {
          commit('ADD_POST', data)
          swal("Yatta!!", "You've submitted new article", "success");
          router.push('/')
        })
    },
    deleteArt ({commit, dispatch}, id) {
      db.delete(`/articles/${id}`, {headers: {token: localStorage.auth}})
      .then(({data}) => {
        dispatch('loadAll')
        swal("Yatta!!", "You deleted the article", "success");
      })
    }
  }
})

<template>
  <div class="home">
    <a @click="loadAll"><h1> Latest Blogs </h1></a>
    <div class="container articles">
      <div class="columns is-multiline" v-for="post in posts" :key="post._id"> 
        <div class="column article">
           <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">{{post.title}}</p>
                  <p class="subtitle is-6 article-subtitle">
                    <button @click="deleteArt(post._id)" v-if="login===post.creator"> delete </button>
                    <button @click="edit" v-if="login===post.creator"> edit </button><br />
                    <a @click="loadCreator(post.creator)">by {{post.creator}}</a><br />
                    <a @click="loadCategory(post.category)"> Category: {{post.category}}</a>
                  </p>
                </div>
              </div>
            <div class="content article-body">
                <img :src="post.image" class="image is-16by9"/> <br />
                <p>{{post.content}} </p>
              </div>
            </div>
          </div>
          <!-- <h2>{{post.title}}</h2>
          {{post.creator}} <br/>
          <img :src="post.image" /> <br />
          {{post.content}} -->
       </div>
      </div>
    </div>
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState([
      'posts',
      'login'
    ])
  },
  methods: {
    ...mapActions([
      'loadAll',
      'loadCreator',
      'loadCategory',
      'deleteArt',
      'edit'
    ])
  },
  created () {
    this.loadAll()
    this.$store.commit('SET_USER', localStorage.user)
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
html,body {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background: #F0F2F4;
}
.navbar.is-white {
  background: #F0F2F4;
}
.navbar-brand .brand-text {
  font-size: 1.11rem;
  font-weight: bold;
}
.articles {
  margin: 5rem 0;
}
.articles .content p {
    line-height: 1.9;
    margin: 15px 0;
}
.author-image {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border: 3px solid #ccc;
    border-radius: 50%;
}
.media-center {
  display: block;
  margin-bottom: 1rem;
}
.media-content {
  margin-top: 3rem;
}
.article, .promo-block {
  margin-top: 6rem;
}
div.column.is-8:first-child {
  padding-top: 0;
  margin-top: 0;
}
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.article-subtitle {
  color: #909AA0;
  margin-bottom: 3rem;
}
.article-body {
  line-height: 1.4;
  margin: 0 6rem;
}
.promo-block .container {
  margin: 1rem 5rem;
}
</style>

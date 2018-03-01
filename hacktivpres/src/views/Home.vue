<template>
  <div class="home">
    <h1> Latest Blogs </h1>
    <div class="container articles">
      <div class="columns is-multiline" v-for="post in posts" :key="post._id"> 
        <div class="column">
           <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">{{post.title}}</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a>by {{post.creator}}</a>
                  </p>
                </div>
              </div>
            <div class="content article-body">
                <img :src="post.image" /> <br />
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                <h3 class="has-text-centered">Feugiat sed lectus vestibulum mattis.</h3>
                <p> Molestie ac feugiat sed lectus vestibulum. Feugiat sed lectus vestibulum mattis. Volutpat diam ut venenatis tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie at. Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.
                </p>
              </div>
            </div>
          </div>
          <h2>{{post.title}}</h2>
          {{post.creator}} <br/>
          <img :src="post.image" /> <br />
          {{post.content}}
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
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'loadAll'
    ])
  },
  created () {
    this.loadAll()
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

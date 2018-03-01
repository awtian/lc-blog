<template>
  <div class="container columns">
    <div class="column is-half is-offset-3">
      <h1>Post a new article</h1>
      <form @submit.prevent="addPost(newpost)">
        Title:<br>
        <input type="text" name="firstname" v-model="newpost.title"><br />
        Category:<br />
        <input type="text" name="lastname" v-model="newpost.category"><br />
        image link:<br/>
        <input type="text" name="lastname" v-model="newpost.image"> <br />
        Content: <br />
        <textarea class="textarea is-primary" placeholder="10 lines of textarea" rows="10" cols="50" v-model="newpost.content"></textarea> <br />
      <button type="submit"> add </button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      newpost: {
        title: null,
        content: null,
        category: null,
        image: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addPost'
    ])
  }
}
</script>

<style>

</style>

<template>
  <div class="container columns">
    <div class="column is-half is-offset-3">
      <h1>Post a new article</h1>
      <form>
  Title:<br>
  <input type="text" name="firstname"><br />
  Category:<br />
  <input type="text" name="lastname"><br />
  image link:<br/>
  <input type="text" name="lastname"> <br />
  textarea class="textarea is-primary" placeholder="10 lines of textarea" rows="10"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newpost: {
        title: null,
        content: null,
        category: null
      }
    }
  }
}
</script>

<style>

</style>

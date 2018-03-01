<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      this.$db.post('/users/',{token: response.authResponse.accessToken})
        .then(({data})=>{
          localStorage.auth = data.jwt
          localStorage.user = data.user.email
          this.$store.commit('SET_USER', localStorage.user)
          this.$router.push('/')
          })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}

.fb-signin-button:hover {
  cursor: pointer;
}
</style>

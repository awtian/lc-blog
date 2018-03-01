import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import FBSignInButton from 'vue-facebook-signin-button'
import swal from 'sweetalert'
import axios from 'axios'

Vue.prototype.$db = axios.create({baseURL: 'http://localhost:3000'})
Vue.prototype.$swal = swal
Vue.use(FBSignInButton)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

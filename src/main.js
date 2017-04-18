import Vue from 'vue'
import axios from 'axios'

import App from './App'

Vue.config.productionTip = false

window.axios = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 3000,
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

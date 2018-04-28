import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router
})

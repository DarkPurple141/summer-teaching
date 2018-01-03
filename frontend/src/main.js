// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePrism from 'vue-prism'
import VueAnalytics from 'vue-analytics'
import HTTP from './http'
import { labs, weeks } from './init'

Vue.use(VuePrism)
Vue.use(VueAnalytics, {
   id : 'UA-25942721-2',
   router
})

import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-yaml.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
     labs: labs,
     weeks: weeks
  }
})

import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

/* plugins */
// region
import apiPath from './plugins/apiPath'
import logError from './plugins/logError'
import axios from './plugins/axios'

Vue.use(apiPath)
Vue.use(logError)
Vue.use(axios)
// endregion


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')

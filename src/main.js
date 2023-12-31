import Vue from 'vue'
import App from './App.vue'
import router from '../router/router'
import { register } from 'swiper/element/bundle';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

register()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

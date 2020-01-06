import Vue from 'vue';
import App from './App.vue';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad);

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faLaravel, faReact, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

require('./assets/styles/custom.sass');

library.add([faDatabase, faVuejs, faLaravel, faReact, faNodeJs, faJs]);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

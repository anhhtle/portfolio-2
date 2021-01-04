import Vue from 'vue';
import App from './App.vue';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

require('./assets/styles/custom.sass');

library.add([faDatabase, faVuejs, faLaravel]);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

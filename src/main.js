import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain, faHandHoldingDollar, faHourglassStart, faMoneyBill1, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBrain, faPeopleGroup, faHourglassStart, faMoneyBill1, faHandHoldingDollar)



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(BootstrapVue3).mount('#app')

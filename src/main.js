import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/styles.css'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import smStore from './store/myStote1';
import stProfile from './store/storeProfile';

import axios from './utils/axios.js'


library.add(fas, far, fab)
dom.watch();

const app = createApp(App)


app.use(smStore)
app.use(stProfile)


app.use(router)
app.mount('#app')


app.config.globalProperties.$axios = { ...axios }
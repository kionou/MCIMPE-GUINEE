import { createApp } from 'vue'

import App from './App.vue'
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import vClickOutside from "click-outside-vue3";
import { registerScrollSpy } from 'vue3-scroll-spy';
import {createBootstrap} from 'bootstrap-vue-next'


// Add the necessary CSS

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { vMaska } from "maska"
import i18n from "./i18n"
import { initFirebaseBackend } from './authUtils'
import { configureFakeBackend } from './helpers/fake-backend';

import BootstrapVueNext from 'bootstrap-vue-next'


import "@/assets/scss/app.scss";
import "@vueform/multiselect/themes/default.css"

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/js/bootstrap.js';




// PINIA
import pinia from '@/state/pinia'

const firebaseConfig = {
  apiKey:"AIzaSyCqS9cSPrDCNSQ-Ku2kZf5DBWjPPv7hvcA",
  authDomain:"test-demo-774f8.firebaseapp.com",
  databaseURL:"https://test-demo-774f8-default-rtdb.firebaseio.com",
  projectId: "test-demo-774f8",
  storageBucket:"test-demo-774f8.appspot.com" ,
  messagingSenderId:"916438010670",
  appId: "1:916438010670:web:c70cf404da6c0fe7b048bf",
  measurementId: "G-1N6FB2GG55"
};

// if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
//   initFirebaseBackend(firebaseConfig);
// } else {
//   configureFakeBackend();
// }

import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/slider/themes/default.css';






createApp(App)
  .use(pinia)
  .use(router)
 
  // .use(require('vue-chartist'))

  .use(createBootstrap())
  .use(VueApexCharts)
  .use(vClickOutside)
  .use(i18n)
  .use(registerScrollSpy)
  .directive("maska", vMaska)
  .mount('#app')

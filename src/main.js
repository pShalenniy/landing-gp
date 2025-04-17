import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import { createGtm } from 'vue-gtm';

import './scss/main.scss';

import '@babel/polyfill';
import router from './router';

import Image from './components/utils/Image';
import store from './store';

import LazyLoadDirective from './directives/LazyLoadDirective';

createApp(App)
  .use(store)
  .use(router)
  .directive('lazyload', LazyLoadDirective)
  .use(
    createGtm({
      id: `${process.env.VUE_APP_MARVIN_GTM}`,
      debug: JSON.parse(process.env.VUE_APP_MARVIN_GTM_DEBUG),
      enabled: store.getters['cookies/isGoogleAnalyticsCookies'],
      vueRouter: router
    })
  )
  .component('app-image', Image)
  .mount('#app');

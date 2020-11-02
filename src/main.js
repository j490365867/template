import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'; // lang i18n
import '@/styles/index.scss';

import App from './App';
import store from './store';
import router from './router';
import http from '@/utils/http';
import i18n from '@/utils/i18n';
import moment from 'moment';
import Cookies from 'js-cookie';

import '@/permission'; // permission control
import 'lib-flexible/flexible';
// set ElementUI lang to EN
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype.$moment = moment;
Vue.prototype.$Cookies = Cookies;

moment.locale('zh-cn');

new Vue({
  el: '#app',
  router,
  store,
  http,
  i18n,
  render: h => h(App)
});

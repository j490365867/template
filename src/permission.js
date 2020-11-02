import router from './router';
// import store from './store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getPageTitle } from '@/utils/common';
// import { setSid } from '@/utils/auth';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  next();

  // if (to.path === '/index' && to.query.sid) {
  //   // if is logged in, set sid
  //   setSid(to.query.sid);
  //   store.commit('user/SET_SID', to.query.sid);
  // }

  // determine whether the user has logged in and need auth
  // if (to.path === '/login') {
  //   // if is logged in, redirect to the home page
  //   window.location.href = process.env.VUE_APP_SERVER_ADDRESS + '/login';
  //   NProgress.done();
  // } else {
  //   const hasGetUserInfo = store.getters.name;
  //   if (hasGetUserInfo) {
  //     next();
  //     NProgress.done();
  //   } else {
  //     // get info
  //     store.dispatch('user/getInfo').then((res) => {
  //       next();
  //       NProgress.done();
  //     });
  //   }
  // }
});

router.afterEach(() => {
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;
  // finish progress bar
  NProgress.done();
});

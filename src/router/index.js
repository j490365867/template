import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 404 page must be placed at the end !!!
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: { title: 'index', affix: true }
      }
    ]
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

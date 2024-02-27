import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Factory from '../views/Factory.vue';
import Home from '../Home.vue';
import Enterprise from '../views/Enterprise.vue';
import Resource from '../views/Resource.vue';
import WorkCenter from '../views/WorkCenter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/workcenter',
    name: 'workcenter',
    component: WorkCenter,
    meta: {
      layout: 'dashboard-layout',
      title: 'Work Center Modeling Page',
    },
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource,
    meta: {
      layout: 'dashboard-layout',
      title: 'Resource Modeling Page',
    },
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: Enterprise,
    meta: {
      layout: 'dashboard-layout',
      title: 'Enterprise Modeling Page',
    },
  },
  {
    path: '/factory',
    name: 'factory',
    component: Factory,
    meta: {
      layout: 'dashboard-layout',
      title: 'Factory Modeling Page',
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'dashboard-layout',
      title: 'Home Page',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from) => {
  // Set the title if set
  window.document.title =
    to.meta && to.meta.title
      ? 'App - ' + (to.meta.title as string)
      : 'Application';
});

export default router;
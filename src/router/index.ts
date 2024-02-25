import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Factory from '../views/Factory.vue';
import Home from '../Home.vue';

const routes: Array<RouteRecordRaw> = [
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

export default router;
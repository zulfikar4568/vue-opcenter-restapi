import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/main.scss';
import 'ant-design-vue/dist/reset.css';
import DashboardLayout from './layouts/DashboardLayout.vue';
import router from './router';

const app = createApp(App);
app.use(Antd)
  .component('dashboard-layout', DashboardLayout)
  .use(router)
  .mount('#app');
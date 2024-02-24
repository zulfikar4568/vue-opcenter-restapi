import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/main.scss';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Antd)
  .mount('#app');
import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import OtherPage from './OtherPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/other-page', component: OtherPage } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

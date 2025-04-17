import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Technology from '../views/Technology';
import Request from '../views/Request';
import PrivacyPolicy from '../views/PrivacyPolicy';
import Terms from '../views/Terms';
import Cookies from '../views/Cookies';
import AcceptablePolicy from '../views/AcceptablePolicy';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showStaticSections: true }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology,
    meta: { showStaticSections: true }
  },
  {
    path: '/request',
    name: 'Request',
    component: Request,
    meta: { showStaticSections: true }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/cookies-policy',
    name: 'Cookies',
    component: Cookies
  },
  {
    path: '/acceptable-use-policy',
    name: 'AcceptablePolicy',
    component: AcceptablePolicy
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

export default router;

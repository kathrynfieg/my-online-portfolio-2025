import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';
import ProjectsView from '@/views/Projects.vue';
import BlogView from '@/views/Blog.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/blog', component: BlogView },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes,
});

export default router;

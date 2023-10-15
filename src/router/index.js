// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import( '@/views/Experiences.vue'),
      },
    ],
  },
  {
    path: '/experience/test',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'test',
        component: () => import( '@/views/Experience.vue'),
      },
    ],
  },
  {
    path: '/experiences/:id',
    name:'experience',
    component: () => import('@/views/Experience.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

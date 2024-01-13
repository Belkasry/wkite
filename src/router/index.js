// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import( '@/views/Home.vue'),
      },
      {
        path: '/experiences',
        name: 'Experiences',
        component: () => import( '@/views/Experiences.vue'),
      },
      {
        path: '/destinations',
        name: 'Destinations',
        component: () => import( '@/views/Destinations.vue'),
      },
      {
        path: '/activities',
        name: 'Activities',
        component: () => import( '@/views/Activities.vue'),
      },
      {
        path: '/experiences/:id',
        name:'Experience',
        component: () => import('@/views/Experience.vue'),
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

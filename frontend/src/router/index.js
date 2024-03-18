import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/AddWoman.vue'
import Edit from '../components/EditWoman.vue'
import Index from '../components/WomenList.vue'

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

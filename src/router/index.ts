import UsersListView from '@/views/users/UsersListView.vue'
import UsersCreateView from '@/views/users/UsersCreateView.vue'
import UsersEditView from '@/views/users/UsersEditView.vue'
import UsersDeleteView from '@/views/users/UsersDeleteView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UsersListView
    },
    {
      path: '/users/:id/edit',
      name: 'users_edit',
      component: UsersEditView
    },
    {
      path: '/users/:id/delete',
      name: 'users_delete',
      component: UsersDeleteView
    },
    {
      path: '/users/create',
      name: 'users_create',
      component: UsersCreateView
    },
  ]
})

export default router

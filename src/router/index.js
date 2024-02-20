import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Profile from '../pages/Profile.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/signup',
  name: 'Signup',
  component: Signup
},
{
  path: '/profile',
  name: 'Profile',
  component: Profile
}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

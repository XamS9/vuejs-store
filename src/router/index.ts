import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import { useUserStore } from '../stores/user';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: Auth,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});
router.beforeEach((to, from, next) => {
    if (to.name != 'Authentication' && !isAuthenticated()) {
      next({ name: 'Authentication' });
    } if (to.name === 'Authentication' && isAuthenticated()){
        next({name: 'Home'})
    }
    next()
  });
  
  function isAuthenticated(): boolean {
    const token = localStorage.getItem("user_token");
    return !!token;
  }
  

export default router;

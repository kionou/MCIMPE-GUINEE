import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import Layout from '@/views/Layout.vue'

import Accueil from '@/views/Accueil.vue'
import Login from '@/views/Login.vue'
import Autorisation from '@/views/Autorisation.vue'
import Reinitialisation from '@/views/Reinitialisation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        { path: '/', name: 'accueil', component: Accueil},
        { path: '/login', name: 'login', component: Login},
        { path: '/demande', name: 'demande', component: Autorisation},
        { path: '/reinitialiser', name: 'reinitialiser', component: Reinitialisation},
       

      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.meta.requiresAuth;
//   const isAuthenticated = store.getters['auth/isAuthenticated'];
// console.log('isAuthenticated',isAuthenticated);
//   if (requiresAuth && !isAuthenticated) {
//     next('/login');
  // } 
  // else if ((to.name === 'Singmpme' || to.name === 'Loginmpme') && isLoggedIn) {
  //   // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
  //   // redirigez-le vers la page mon_espace
  //   next('/mon-espace');
  // }
//   else {
//     next();
//   }
// });

export default router

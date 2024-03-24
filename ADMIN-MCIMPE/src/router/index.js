import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
import store from "../store"


const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isAuthenticated = store.getters['auth/isAuthenticated'];
    console.log('isAuthenticated',isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    // Si la route nécessite une authentification et l'utilisateur n'est pas connecté,
    // redirigez-le vers la page de connexion
    next('/');
  } else if ((to.name === 'login' ) && isAuthenticated) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
    next('/index');
  }
  else {
    next();
  }
});



export default router;

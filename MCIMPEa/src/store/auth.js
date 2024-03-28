// store/modules/auth.js
import { isTokenExpired } from '@/functions/util.js';

const state = {
  authenticatedUser: null,
};

const getters = {
  authenticatedUser: (state) => state.authenticatedUser,
  isAuthenticated: (state) => state.authenticatedUser !== null,
};

const mutations = {
  SET_AUTHENTICATED_USER(state, user) {
    state.authenticatedUser = user;
  },
  CLEAR_AUTHENTICATED_USER(state) {
    state.authenticatedUser = null;
  },
};

const actions = {
  setAuthenticatedUser({ commit }, user) {
    const now = Math.floor(Date.now() / 1000);
    const tokenExpiration = now + user.expires_in;
    const userSessionData = {
      id: user.user.Entreprises || user.user.Identifiant,
      nom: user.user.Nom,
      prenom: user.user.Prenoms,
      email: user.user.email,
      whatsapp: user.user.Whatsapp,
      profile:user.user.profile,
      token: user.access_token,
      tokenExpiration: tokenExpiration,
    };

    commit('SET_AUTHENTICATED_USER', userSessionData);
    localStorage.setItem('authenticatedUserData', JSON.stringify(userSessionData));
  },
  clearAuthenticatedUser({ commit }) {
    commit('CLEAR_AUTHENTICATED_USER');
    localStorage.removeItem('authenticatedUserData');
  },
  loadAuthenticatedUser({ commit }) {
    const storedUserData = localStorage.getItem('authenticatedUserData');
    if (storedUserData) {
      const data = JSON.parse(storedUserData);
      if (!isTokenExpired(data.tokenExpiration)) {
        commit('SET_AUTHENTICATED_USER', JSON.parse(storedUserData));
      } else {
        commit('CLEAR_AUTHENTICATED_USER');
        localStorage.removeItem('authenticatedUserData');
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

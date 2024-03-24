<script>

import simplebar from "simplebar-vue";
import { avatar3, avatar4, avatar1 } from "@/assets/images/users/data"
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
     
      avatar3, avatar4, avatar1,
     
    };
  },
  components: { simplebar },
  mounted() {
    console.log("index",this.loggedInUser);
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
   shouldShowNavbar() {
    this.$store.dispatch('auth/loadMyAuthenticatedUser')
    
      return (
        this.isAuthenticated &&
        this.$route.path !== '/'
       
      );
    },
    loggedInUser() {
      return this.$store.getters['auth/myAuthenticatedUser'];
    },
  },
  
  watch: {
    isAuthenticated(newValue) {
      console.log('User is logged in:', newValue);
    },
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },

     async logout() {
    try {      
     
     console.log('deconnexion');             
    await this.$store.dispatch('auth/clearMyAuthenticatedUser'); // Appel de l'action pour déconnecter l'utilisateur
    this.$router.push('/'); // Redirection vers la page de connexion
                

    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }

   

  
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-light.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="19" />
            </span>
          </router-link>
        </div>

        <BButton variant="white" id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>
      </div>

      <div class="d-flex">
        <BDropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" :src="avatar1" alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1">
              <div v-if="currentUser">
                {{ currentUser.displayName }}
              </div>
              <div v-else>Henry</div>
            </span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <BDropdownItem>
            <router-link to="/contacts/profile" v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" class="text-body">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                {{ $t("navbar.dropdown.henry.list.profile") }}
              </span>
            </router-link>
          </BDropdownItem>
         
       
          <BDropdownDivider></BDropdownDivider>
          <a href="#" @click="logout" class="dropdown-item text-danger">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            Déconnexion
          </a>
        </BDropdown>

        <div class="dropdown d-inline-block">
          <BButton variant="white" type="button" class="btn header-item noti-icon right-bar-toggle toggle-right" @click="toggleRightSidebar">
            <i class="bx bx-cog bx-spin toggle-right"></i>
          </BButton>
        </div>
      </div>
    </div>
  </header>
</template>

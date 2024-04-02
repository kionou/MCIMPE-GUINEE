<template>
  <Layout>
    <Loading v-if="loading" style="z-index: 99999;"></Loading>
    <PageHeader title="Utilisateurs" pageTitle="Tableau de bord" />
    <BRow>
      <BCol lg="12">
        <BTabs class="default-tabs" content-class="p-3 text-muted">
          <BTab active class="border-0">
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="fas fa-home"></i>
              </span>
              <span class="d-none d-sm-inline-block">Personnels</span>
            </template>
            <Personnel ></Personnel>
          </BTab>
          <BTab>
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="far fa-user"></i>
              </span>
              <span class="d-none d-sm-inline-block">Entreprises</span>
            </template>
            <Entreprise ></Entreprise>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import Loading from '@/components/others/loading.vue';
import Personnel from '../../components/admin/users/defaut.vue';
import Entreprise from '../../components/admin/users/entreprise.vue';
import axios from 'axios';
import axiosInstance from "@/lib/axiosConfig";

export default {
  components: {
    Layout,
    PageHeader,
    Loading,
    Personnel,
    Entreprise
  },
  data() {
    return {
      loading: false,
     
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters['auth/myAuthenticatedUser'];
    }
  },
  async mounted() {
    console.log("uusers", this.loggedInUser);
    //  await this.fetchData();
  },
  methods: {
    async fetchData() {
    const apiUrl = "https://cors-proxy.fringe.zone/https://bd-mcipme.org/bd-services/public/api/secteurs-activites";

    try {
      // Utilisation d'axios pour effectuer la requête HTTP
      const response = await axiosInstance.get('/secteurs-activites', {
        params: {
          Direction: 'DNCIC',
          sous: true
        }
      });
      
      console.log('response', response.data);
      return response.data.data; // Retourne uniquement la partie 'data' de la réponse
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  },
   
  }
}
</script>

<style lang="" scoped>
  /* Ajoutez vos styles ici si nécessaire */
</style>

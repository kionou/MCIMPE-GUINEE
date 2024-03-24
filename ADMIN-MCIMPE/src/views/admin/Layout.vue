<template>
    <div>
       
        <Layout>
    <PageHeader title="Default" pageTitle="Dashboards" />

        <RouterView />
            
  </Layout>
      

    </div>
</template>

<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header.vue";

export default {
    name: 'McimpeGuineeLayout',
    components:{
       
    Layout,
    PageHeader,
   
    },

    data() {
        return {
            isPageConnexion: false,
            isPageInscription: false,
        };
    },
    watch: {
        // Observer le changement de route pour déterminer si la page est celle de connexion ou d'inscription
        // $route(to, from) {
        //     this.isPageConnexion = to.name === 'login';
        //     this.isPageInscription = to.name === 'inscription';
        // },
    },
    mounted() {
    //     window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    //     this.isPageConnexion = this.$route.name === 'login';
    //     this.isPageInscription = this.$route.name === 'inscription';
    },


    methods: {

    },
};
</script>

<style lang="css" scoped>

</style>
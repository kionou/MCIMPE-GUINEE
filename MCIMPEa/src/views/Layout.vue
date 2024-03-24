<template>
    <div>
       
        <Navbar   v-if="!isPageConnexion " />
        <RouterView />
        <footer v-if="!isPageConnexion " v id="footer" class="footer  ">
            <Footer />
        </footer>

    </div>
</template>

<script>
import Navbar from '@/components/Layouts/navbar.vue';
import Footer from '@/components/Layouts/footer.vue';

export default {
    name: 'McimpeGuineeLayout',
    components:{
        Navbar , Footer 
    },

    data() {
        return {
            isPageConnexion: false,
            isPageInscription: false,
        };
    },
    watch: {
        // Observer le changement de route pour déterminer si la page est celle de connexion ou d'inscription
        $route(to, from) {
            this.isPageConnexion = to.name === 'login';
            this.isPageInscription = to.name === 'inscription';
        },
    },
    mounted() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
        this.isPageConnexion = this.$route.name === 'login';
        this.isPageInscription = this.$route.name === 'inscription';
    },


    methods: {

    },
};
</script>

<style lang="css" scoped>

</style>
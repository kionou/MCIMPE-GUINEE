<template >
  
     <Layout>
      <Loading v-if="loading" style="z-index: 99999;"></Loading>
    <PageHeader title="Partenaires" pageTitle="Tableau de bord" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="border-bottom">
            <div class="d-flex align-items-center">
              <BCardTitle class="mb-0 flex-grow-1">Liste des Partenaires</BCardTitle>

              <div class="flex-shrink-0 d-flex">
                <BLink href="#!" @click="$router.push({ path: '/partenaires/ajouter' })"  class="btn btn-primary me-1">Ajouter</BLink>
                <BCol xxl="4" lg="6">
                <MazInput v-model="searchQuery"  no-radius type="email"  color="info" size="sm" placeholder="Recherchez ..." />
              </BCol>
              </div>
            </div>
          </BCardBody>
          <BCardBody v-if="paginatedItems.length === 0" class="noresul">
            <div >
          <span> Vous n'avez pas encore de personnel, vous pouvez également en ajouter un !! </span>
           </div>
          </BCardBody>

        <BCardBody v-else> 
          <div class="py-2 d-flex justify-content-center align-items-center flex-wrap">
            <div class="carde" v-for="partenaire in paginatedItems" :key="partenaire.id">
          <div class="carde-img">
      
            <img v-if="partenaire.logo === null" src="@/assets/img/ninba1.png" alt="">
          
          <img v-else :src="partenaire.logo" alt="">
     
    </div>
    <div class="carde-title">{{ partenaire.NomPartenaire }}</div>
    <div class="carde-subtitle">
      <p class="texte-content">Url: <span>{{ partenaire.SiteWeb }}</span></p>
      <p class="texte-content">Direction: <span>{{ partenaire.Direction }}</span></p>
    </div>
    <hr class="carde-divider">
    <div class="carde-footer">
      <ul class="list-unstyled hstack gap-1 mb-0">
                       
                       <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit">
                         <Blink href="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Blink>
                       </li>
                       <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete">
                         <Blink href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Blink>
                       </li>
                       <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                         <router-link to="/jobs/job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-lock-outline"></i></router-link>
                       </li>
                     </ul>
    </div>
            </div>
           </div>
           <BRow>
              <BCol lg="12">
                <div class="container_pagination">
                  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
                </div>
              </BCol>
            </BRow>
        </BCardBody>
          
          
        </BCard>
      </BCol>
    </BRow>


 
    

  </Layout>
</template>
<script>
 import Layout from "../../layouts/main.vue";
 import PageHeader from "@/components/page-header.vue";
 import {successmsg} from "@/lib/modal.js"
import Swal from 'sweetalert2'
import Pag from '@/components/others/pagination.vue'
import axios from '@/lib/axiosConfig.js'
import Loading from '@/components/others/loading.vue';


export default {
    components: {
    Layout,
    PageHeader,
    Loading ,
    Pag,
    
  },
 computed: {


totalPages() {
return Math.ceil(this.partenairesOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.partenairesOptions.slice(startIndex, endIndex);
},
},

data() {
    return {
        control: {
            name: '',

        },
         partenairesOptions:[],
         loading:true,
         data:'',
         currentPage: 1,
         itemsPerPage: 12,
    };
},


async  mounted() {
 await    this.fetchPartenaires()

},


methods: {
  updateCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
    });
  },
  updatePaginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.partenairesOptions.slice(startIndex, endIndex);
  },
  async fetchPartenaires() {
try {
  await this.$store.dispatch('fetchPartenairesData');
   this.partenairesOptions = JSON.parse(JSON.stringify(this.$store.getters['getPartenaires']));
   this.loading = false
  console.log('Partenaires récupérés :', this.partenairesOptions);

  // Continuez avec le reste de votre code pour traiter les partenaires
} catch (error) {
  console.error('Erreur lors de la récupération des partenaires :', error.message);
}
},


  filterByName() {
this.currentPage = 1;
if (this.control.name !== null) {
   const tt = this.control.name;
  const  searchValue = tt.toLowerCase()
  this.partenairesOptions = [...this.$store.getters['getPartenaires']].filter(partenaire => {
    const codePartenaire = partenaire.CodePartenaire || '';
    const nomPartenaire = partenaire.NomPartenaire || '';
    return codePartenaire.toLowerCase().includes(searchValue) || nomPartenaire.toLowerCase().includes(searchValue);
  });

} else {
this.partenairesOptions = [...this.$store.getters['getPartenaires']];
 
}

},
},

}
</script>
<style lang="css" scoped>

.carde {
  
  width: 280px;
  height: 370px;
  background: var(--bg-color);
  border: 2px solid var(--color-primary);
  box-shadow: 4px 4px var(--color-primary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  align-items: center;
  justify-content: center;
    margin-right: 20px;
    margin-bottom: 20px;
 
}

.carde:last-child {
  justify-content: flex-end;
}

.carde-img {
   /* border: 1px solid red; */
   width: 120px;
   height: 120px;
}

.carde-img img {

  width: 100%;
  height: 100%;

}



.carde-title {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #323232;
  
 
}

.carde-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #323232;
  width: 100%;
}

.carde-divider {
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 50px;
}

.carde-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.carde-price {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color);
}

.carde-price span {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color-sub);
}

.card-btn {
  height: 35px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 15px;
  transition: all 0.3s;
}

.card-btn svg {
  width: 100%;
  height: 100%;
  fill: var(--main-color);
  transition: all 0.3s;
}



.card-btn:hover {
  border: 2px solid var(--main-focus);
}

.card-btn:hover svg {
  fill: var(--main-focus);
}

.card-btn:active {
  transform: translateY(3px);
}
.carde .carde-subtitle .texte-content {

font-weight: bold;
font-size: 13px;
margin-bottom: 10px !important;

}
i{

    font-size: 18px;

}
    
</style>
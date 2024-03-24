<template >
    <Layout>
   <PageHeader title="Pme" pageTitle="Tableau de bord" />
   <BRow>
     <BCol lg="12">
       <BCard no-body>
         <BCardBody class="border-bottom">
           <div class="d-flex align-items-center">
             <BCardTitle class="mb-0 flex-grow-1">Liste des PME</BCardTitle>

             <div class="flex-shrink-0 d-flex">
               <BLink href="#!" @click="$router.push({ path: '/partenaires/ajouter' })"  class="btn btn-primary me-1">Ajouter</BLink>
               <BCol xxl="4" lg="6">
               <MazInput v-model="searchQuery"  no-radius type="email"  color="info" size="sm" placeholder="Recherchez ..." />
             </BCol>
             </div>
           </div>
         </BCardBody>
        

          <BRow class="justify-content-center">
      <div class="parent">
       <div class="carde">
      <div class="content-box">
          <span class="carde-title">3D Card</span>
          <!-- <p class="carde-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p> -->
          <p class="texte-content carde-content">Date creation: <span>1900</span></p>
          <div class="texte">
          <p class="texte-content">Region: <span>Conakry</span></p>
          <p class="texte-content">Ville: <span>Conakry</span></p>
          <p class="texte-content">Secteur Activité: <span>Conakry</span></p>
          <p class="texte-content">Taille: <span>Conakry</span></p>
          <p class="texte-content">Email: <span>kionou.00@gmail.com</span></p>
          <p class="texte-content">Contact: <span> +227 0757408303</span></p>
          <div class="w-100 d-flex justify-content-center" style="border: 3px solid #eff2f7; background-color: white; padding: 5px;">
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
                       <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                        <BDropdown toggle-class="btn btn-sm btn-soft-primary" menu-class="dropdown-menu-end"
                              variant="white" right>
                              <template #button-content>
                                <i class="mdi mdi-dots-vertical"></i>
                              </template>
                              <BDropdownItem href="#">Open</BDropdownItem>
                              <BDropdownItem href="#">Edit</BDropdownItem>
                              <BDropdownItem href="#">Rename</BDropdownItem>
                              <BDropdownDivider />
                              <BDropdownItem href="#">Remove</BDropdownItem>
                            </BDropdown>
                       </li>
                     </ul>

          </div>
      </div>
      <div class="date-box">
         <img src="../../assets/img/guinea.png" alt="">
      </div>
  </div>
</div>
     </div>

     <div class="parent">
       <div class="carde">
      <div class="content-box">
          <span class="carde-title">3D Card</span>
          <!-- <p class="carde-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p> -->
          <p class="texte-content carde-content">Date creation: <span>1900</span></p>
          <div class="texte">
          <p class="texte-content">Region: <span>Conakry</span></p>
          <p class="texte-content">Ville: <span>Conakry</span></p>
          <p class="texte-content">Secteur Activité: <span>Conakry</span></p>
          <p class="texte-content">Taille: <span>Conakry</span></p>
          <p class="texte-content">Email: <span>kionou.00@gmail.com</span></p>
          <p class="texte-content">Contact: <span> +227 0757408303</span></p>
          <div class="w-100 d-flex justify-content-end">
          

          </div>
      </div>
      <div class="date-box">
          <span class="month">JUNE</span>
          <span class="date">29</span>
      </div>
  </div>
</div>
     </div>

     <div class="parent">
       <div class="carde">
      <div class="content-box">
          <span class="carde-title">3D Card</span>
          <!-- <p class="carde-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p> -->
          <p class="texte-content carde-content">Date creation: <span>1900</span></p>
          <div class="texte">
          <p class="texte-content">Region: <span>Conakry</span></p>
          <p class="texte-content">Ville: <span>Conakry</span></p>
          <p class="texte-content">Secteur Activité: <span>Conakry</span></p>
          <p class="texte-content">Taille: <span>Conakry</span></p>
          <p class="texte-content">Email: <span>kionou.00@gmail.com</span></p>
          <p class="texte-content">Contact: <span> +227 0757408303</span></p>
          <div class="w-100 d-flex justify-content-end">
          <span class="see-more">
            <i class="bx bx-show"></i>
          </span>

          </div>
      </div>
      <div class="date-box">
          <span class="month">JUNE</span>
          <span class="date">29</span>
      </div>
  </div>
</div>
     </div>
      
    </BRow>
         
       </BCard>
     </BCol>
   </BRow>


   <BModal v-model="AddPartenaire" hide-footer centered header-class="border-0" title-class="font-18" size="lg">
     <div>
   
   <div class="account-pages " style="width:100%;">
     <BContainer>
       <BRow >
         <BCol >
           <BCard no-body class="overflow-hidden" style=" box-shadow:none !important;
            border: 1px solid #c9d1d9 !important;">
             <div class="bg-primary-subtle">
               <BRow>
                 <BCol cols="12 text-center">
                   <div class="modalheader p-4">
                     <h5 class="text-primary">Ajouter un partenaire</h5>
                     
                   </div>
                 </BCol>
                 
               </BRow>
             </div>
             <BCardBody class="pt-0">
               <div>
                 <router-link to="#">
                   <div class="avatar-md profile-user-wid ">
                 <span class="avatar-title rounded-circle" style="position: relative; z-index: 33;">
                   <img src="@/assets/img/armoirie.png" alt style="width: 75%; height: 75%; z-index: 33;"/>
                 </span>
               </div>
                 </router-link>
               </div>
               <div class="p-2">
                 <BForm class="form-horizontal">
                   <BRow>
                     <BCol md="6">
                     <div class="mb-3 position-relative">
                       <label for="userpassword">Code partenaire</label>
                     <MazInput v-model="code"  no-radius type="text"  color="info" placeholder="exemple@gmail.com" />
                      <!-- <small v-if="v$.step2.code.$error">{{v$.step2.code.$errors[0].$message}}</small>  -->
                     </div>
                  </BCol>

                  <BCol md="6">
                     <div class="mb-3 position-relative">
                       <label for="userpassword">Nom partenaire</label>
                     <MazInput v-model="nom"  no-radius type="text"  color="info" placeholder="exemple@gmail.com" />
                      <!-- <small v-if="v$.step2.nom.$error">{{v$.step2.nom.$errors[0].$message}}</small>  -->
                     </div>
                  </BCol>
                   </BRow>

                   <BRow>
                     <BCol md="6">
                     <div class="mb-3 position-relative">
                       <label for="userpassword">Site web</label>
                     <MazInput v-model="url"  no-radius type="url"  color="info" placeholder="exemple@gmail.com" />
                      <!-- <small v-if="v$.step2.url.$error">{{v$.step2.url.$errors[0].$message}}</small>  -->
                     </div>
                  </BCol>

                  <BCol md="6">
                     <div class="mb-3 position-relative">
                       <label for="userpassword">Logo partenaire</label>
                     <MazInput v-model="prenom"  no-radius type="text"  color="info" placeholder="exemple@gmail.com" />
                      <!-- <small v-if="v$.step2.prenom.$error">{{v$.step2.prenom.$errors[0].$message}}</small>  -->
                     </div>
                  </BCol>
                   </BRow>

                   <BRow>
                     <BCol md="12">
                     <div class="mb-3 position-relative">
                       <label for="userpassword">Mot de passe </label>
                       <div class="form-ckeditor">
                       <ckeditor v-model="editorData" :editor="editor"></ckeditor>

                     </div>
                     </div>
                  </BCol>

                  
                   </BRow>

                  




                   <BRow class="mb-0">
                     <BCol cols="12" class="text-end">
                       <div class="boutton">
                       <button class="" @click="PasswordOtp()">Réinitialiser</button>
                      </div>
                     </BCol>
                   </BRow>
                 </BForm>
               </div>
             </BCardBody>
           </BCard>
           
         </BCol>
       </BRow>
     </BContainer>
   </div>
 </div>
   </BModal>
   

 </Layout>
</template>
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import Pagination from "@/components/common/pagination.vue"
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
   components: {
   Layout,
   PageHeader,
   Pagination , ckeditor: CKEditor.component
 },
 data() {
   return { 
      editor: ClassicEditor,
      

     plugins: [
       "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
       "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
       "save table contextmenu directionality emoticons template paste textcolor",
     ],
     toolbar:
       "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
     options: {
       height: 300,
       style_formats: [
         { title: "Bold text", inline: "b" },
         { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
         { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
         { title: "Example 1", inline: "span", classes: "example1" },
         { title: "Example 2", inline: "span", classes: "example2" },
         { title: "Table styles" },
         { title: "Table row 1", selector: "tr", classes: "tablerow1" },
       ],
     },
     AddPartenaire:false
   }
 },
}
</script>
<style lang="css" scoped>

.parent {
  width: 340px;
  padding: 20px;
  perspective: 1000px;
}

.carde {
  padding-top: 50px;
 
  border: 3px solid #eff2f7;
  transform-style: preserve-3d;
  background: linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0),
      repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%);
  background-size: 60px 60px;
  background-position: 0 0, 0 0;
  background-color: #f0f0f0;
  width: 100%;
 
  transition: all 0.5s ease-in-out;
}

.carde .texte {

margin-top: 10px;
}

.carde .texte-content {
color: #f0f0f0 !important;
font-weight: bold;
font-size: 13px;
margin-bottom: 10px !important;

}

/* .carde:hover {
  background-position: -100px 100px, -100px 100px;
  transform: rotate3d(0.5, 1, 0, 30deg);
} */

.content-box {
  background: var(--color-primary);
  /* border-radius: 10px 100px 10px 10px; */
  transition: all 0.5s ease-in-out;
  padding: 35px 25px 10px 25px;
  transform-style: preserve-3d;
}

.content-box .carde-title {
  display: inline-block;
    font-size: 16px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    position: absolute;
    top: -33px;
    right: 24px;
}

.content-box .carde-title:hover {
  transform: translate3d(0px, 0px, 60px);
}

.content-box .carde-content {
    
    font-weight: 700;
    color: #f2f2f2;
    position: absolute;
    right: 33px;
    top: 80px;
}

.content-box .carde-content:hover {
  transform: translate3d(0px, 0px, 60px);
}

.content-box .see-more {
  cursor: pointer;
   
    display: flex;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: var(--color-primary);
    background: white;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    
}
.content-box .see-more i {
  font-size: 20px;
}
.content-box .see-more:hover {
  transform: translate3d(0px, 0px, 60px);
}

.date-box {
  position: absolute;
  top: -24px;
  left: 13px;
  height: 60px;
  width: 60px;
  border: 1px solid #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
}

.date-box img {
 width: 100%;
 height: 100%;
}

   
</style>
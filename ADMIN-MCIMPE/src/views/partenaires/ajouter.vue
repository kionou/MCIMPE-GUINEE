<template >
     <Layout>
    <PageHeader title="Partenaires" pageTitle="Tableau de bord" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="border-bottom">
            
            
              
      <div>
    
    <div class="account-pages ">
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
    
             
         
          </BCardBody>
         
          
        </BCard>
      </BCol>
    </BRow>


   
    

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
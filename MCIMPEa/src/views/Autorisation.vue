<template>
  
    <div>
        <div>
    <div class="container-fluid  d-flex justify-content-center align-items-center general" >
      <div class="form-container">
        <p class="title">Demande d'Autorisation</p>
        <p class="text-center">Prêt à explorer une collaboration ? Remplissez le formulaire ci-dessous 
          pour démarrer votre demande de partenariat avec nous !
        </p>
        <small class="text-center">{{error}}</small>
        <form class="form">
        
    <v-container>
      <v-row>
        <v-col cols="12" md="4" >
          <v-text-field  v-model="nom"  label="Nom" name="nom"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined"  ></v-text-field>
          <small v-if="v$.nom.$error">{{ v$.nom.$errors[0].$message }}</small>
        </v-col>

        <v-col cols="12" md="4" >
            <v-text-field  v-model="prenom"  label="Prenoms" name="prenom"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined"  ></v-text-field>
            <small v-if="v$.prenom.$error">{{ v$.prenom.$errors[0].$message }}</small>
        </v-col>

        <v-col cols="12" md="4" >
            <v-text-field  v-model="email"  label="Adresse Email" name="email"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined"  ></v-text-field>
            <small v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12" md="4" >
                <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />

              <small v-if="v$.phoneNumber.$error">{{ v$.phoneNumber.$errors[0].$message }}</small>
        </v-col>

        <v-col cols="12" md="4" >
        
  <v-file-input v-model="lettre" :show-size="1000"  color="blue-grey-lighten-2" label="Lettre Manuscrites"  prepend-icon="bi bi-paperclip"  variant="outlined"
    counter accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx">
    
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName.id">
        <v-chip v-if="index < 2" class="me-2" color="blue-grey-lighten-2" size="small" label >
          {{ fileName }}
        </v-chip>

        <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2" >
          +{{ lettre.length - 2 }} File
        </span>
      </template>
    </template>
    
  </v-file-input>
  <small v-if="v$.lettre.$error">{{ v$.lettre.$errors[0].$message }}</small>

          
        </v-col>

        <v-col cols="12" md="4" >
            <v-file-input v-model="rccm" :show-size="1000"  color="blue-grey-lighten-2" label="Fichier Rccm"  prepend-icon="bi bi-paperclip"  variant="outlined"
    counter accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx">
    
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName.id">
        <v-chip v-if="index < 2" class="me-2" color="blue-grey-lighten-2" size="small" label >
          {{ fileName }}
        </v-chip>

        <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2" >
          +{{ rccm.length - 2 }} File
        </span>
      </template>
    </template>
    
  </v-file-input>
  <small v-if="v$.rccm.$error">{{ v$.rccm.$errors[0].$message }}</small>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>

        <v-col cols="12" md="4" >
        <v-select v-model="ProduitAlimentaire" :items=choix  persistent-hint  color="blue-grey-lighten-2" label="Produits Alimentaires"  variant="outlined"
                  item-title="state" item-value="abbr"></v-select>
            <small v-if="v$.ProduitAlimentaire.$error">{{ v$.ProduitAlimentaire.$errors[0].$message }}</small>
        </v-col>

        <v-col cols="12" md="4" >
        
        <v-file-input v-model="Certificat" :show-size="1000"  color="blue-grey-lighten-2" label="Certificat du Produit"  prepend-icon="bi bi-paperclip"  variant="outlined"
          counter accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx">
          
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName.id">
              <v-chip v-if="index < 2" class="me-2" color="blue-grey-lighten-2" size="small" label >
                {{ fileName }}
              </v-chip>
      
              <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2" >
                +{{ Certificat.length - 2 }} File
              </span>
            </template>
          </template>
          
        </v-file-input>
        <small v-if="v$.Certificat.$error">{{ v$.Certificat.$errors[0].$message }}</small>
      
                
         </v-col>

        <v-col cols="12" md="4" >
          <v-text-field  v-model="NumCarteBio"  label="Numero Carte Biometrique" name="NumCarteBio"   color="blue-grey-lighten-2" type="text" hide-details  variant="outlined"  ></v-text-field>
          <small v-if="v$.NumCarteBio.$error">{{ v$.NumCarteBio.$errors[0].$message }}</small>
        </v-col>

       

       
      </v-row>
    </v-container>



    <v-container>
      <v-row>

        <v-col cols="12" md="4" >
        
        <v-file-input v-model="CarteBiometrie" :show-size="1000"  color="blue-grey-lighten-2" label="Fichier Carte Biometrie"  prepend-icon="bi bi-paperclip"  variant="outlined"
          counter accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx">
          
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName.id">
              <v-chip v-if="index < 2" class="me-2" color="blue-grey-lighten-2" size="small" label >
                {{ fileName }}
              </v-chip>
      
              <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2" >
                +{{ CarteBiometrie.length - 2 }} File
              </span>
            </template>
          </template>
          
        </v-file-input>
        <small v-if="v$.CarteBiometrie.$error">{{ v$.CarteBiometrie.$errors[0].$message }}</small>
        <small v-if="validateDemandeMatch()">ce champs est obligatoire!.</small>
      
                
              </v-col>

              <v-col cols="12" md="4" >
        
        <v-file-input v-model="FichierArreter" :show-size="1000"  color="blue-grey-lighten-2" label="Fichier d'arreter"  prepend-icon="bi bi-paperclip"  variant="outlined"
          counter accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx">
          
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName.id">
              <v-chip v-if="index < 2" class="me-2" color="blue-grey-lighten-2" size="small" label >
                {{ fileName }}
              </v-chip>
      
              <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2" >
                +{{ FichierArreter.length - 2 }} File
              </span>
            </template>
          </template>
          
        </v-file-input>
        <small v-if="v$.FichierArreter.$error">{{ v$.FichierArreter.$errors[0].$message }}</small>
      
                
              </v-col>
        <v-col cols="12" md="4" >
          <v-text-field  v-model="DateArreter"  label="Date d'arreter" name="DateArreter"   color="blue-grey-lighten-2" type="date" hide-details  variant="outlined"  ></v-text-field>
          <small v-if="v$.DateArreter.$error">{{ v$.DateArreter.$errors[0].$message }}</small>
        </v-col>

       

       
      </v-row>
    </v-container>
          <div class="boutton">
                   <button class="" @click="submit()">ENVOYER</button>
                   </div>


        </form>
      </div>
    </div>

  </div>
    </div>
    
</template>

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import useVuelidate from '@vuelidate/core';     
import { require, lgmin, lgmax  , ValidEmail,   } from '@/functions/rules';
import axios from '@/lib/axiosConfig.js'
import MazDialog from 'maz-ui/components/MazDialog'



export default {
    name: 'DNPMECLDemandePartenanriat',
  components: {
     MazPhoneNumberInput ,  MazDialog 
  }, 

  data() {
    return {
      loading:false,
      nom:'',
      prenom:'',
      email: '',
      phoneNumber: '',
      lettre: [],
      rccm:[],
      ProduitAlimentaire:'',
      CarteBiometrie:[],
      NumCarteBio:'',
      Certificat:[],
      FichierArreter:[],
      DateArreter:'',
      error:'',
      TypeDemande:'',
     v$:useVuelidate(), 
     choix: [
        { state: "Oui", abbr: "Oui" },
        { state: "Non", abbr: "Non" },
      ],
    };
    
  },
 
  validations: {
    nom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
     
    },
    prenom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
    },
    email: {
      require,  
      ValidEmail, 
    },
    phoneNumber: {
      require,
    },

    lettre: {
      require,
    },
    rccm: {
      require,
    },
    ProduitAlimentaire: {
      
    },
    Certificat: {
     
    },
    CarteBiometrie: {
      
    },
    NumCarteBio: {
     
    },
    FichierArreter: {
    
    },

    DateArreter: {
     
    },
  
   
 
  },

  async mounted() {
   
 
  },

  methods: {
    onPhoneNumberUpdate(updatedResult) {
      this.results = updatedResult;
    },
    validateDemandeMatch() {
      
     return this.NumCarteBio !== "" 
    },
   
  

    async submit() {
       console.log('lettre',this.rccm);
        this.v$.$touch()
        this.error = ''
        if (this.v$.$errors.length == 0 ) {
         this.loading = true
            let DataPartenariat = {
            NomStructure: this.nom,
            Libelle: this.prenom,
            Description: this.email,
            AdresseEmail: this.phoneNumber,
            Telephone: this.lettre[0],
            TypeDemande: this.rccm[0],
            TypePartenariat: this.ProduitAlimentaire,
            Region:this.CarteBiometrie[0],

            NumCarteBio: this.NumCarteBio,
            Certificat: this.Certificat[0],
            FichierArreter: this.FichierArreter[0],
            DateArreter:this.DateArreter
        }
        console.log('eeedata', DataPartenariat);
          try {
        //    const response = await axios.post('/gestion-des-demandes', DataPartenariat);
           console.log('response.sousprefecture', response);
          if (response.data.status === 'success') {
            this.loading = false
            this.isOpen = true
            
          } else {
            this.loading = false
         
          }
          
        } catch (error) {
           console.error('Erreur post:', error);
         }
          
          
          
}else{
  console.log('pas bon' , this.v$.$errors );



}
    },

    
  
   

  },
  created() {
  
  },
};
</script>

<style lang="css" scoped>

.supp {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    z-index: 3;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}



.general {

  padding: 20px 60px 60px;
}

.form-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
 
  background-color: white;
  padding: 2rem;
  color: black;
 
  border: 1px solid rgb(216, 213, 213);

}

.form .content {

  border: 1px solid var(--color-secondary);
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-groupe {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-groupe label {
  display: block;
  color: #000;
  margin-bottom: 4px;
  margin-left: 7px;
}

.titre {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  font-size: 12px;
}

.input-groupe input,
.form-select,
textarea {
  width: 100%;
  border-radius: 0.5rem !important;
  border: 2px solid #e5e7eb;
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus,
.input-groupe textarea:focus {
  border-color: var(--color-primary);
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.sign {
  display: block;
  width: 300px;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 30px;
}

.no-scroll {
  overflow: hidden;

}
.scroll{
  overflow: auto;
}

@media screen and (max-width: 768px) {

  .form-container {
    /* width: 700px; */
    max-width: 100%;
    padding: 10px;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }

  .title{
   
    font-size: 22px;
    /* line-height: 2rem; */
    
}

}

@media screen and (max-width: 550px) {
  .general {

    padding: 15px 10px;
  }

  .sign {

    width: 200px;

  }

}

.sign:hover {

  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  background-color: white;

}

</style>
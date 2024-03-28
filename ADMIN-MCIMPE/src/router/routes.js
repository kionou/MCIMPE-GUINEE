
export default [

  // To start account
  {
    path: "/",
    name: "login",
    component: () => import("../views/account/login.vue"),
   
  },
  {
    path: "/reinitialiser",
    name: "reinitialiser",
    component: () => import("../views/account/recoverpw-sample.vue")
  },

   // To finish account

    // To start dashboards

  {
    path: "/dncic",
    name: "Dncic",
    meta: { requiresAuth: true },
    component: () => import("../views/dashboards/dncic.vue")
  },
  {
    path: "/dni",
    name: "Dni",
    meta: { requiresAuth: true },
    component: () => import("../views/dashboards/default.vue")
  },

 // To finish dashboards


  // To start users

  {
    path: "/utilisateurs",
    name: "users",
    meta: { requiresAuth: true },
    component: () => import("../views/users/defaut.vue")
  },

 // To start partenaires

 {
  path: "/partenaires",
  name: "partenaires",
  meta: { requiresAuth: true },
  component: () => import("../views/partenaires/defaut.vue")
},
{
  path: "/partenaires/ajouter",
  name: "partenaire-add",
  meta: { requiresAuth: true },
  component: () => import("../views/partenaires/ajouter.vue")
},
{
  path: "/partenaires/update/:id",
  name: "partenaire-put",
  props:true,
  meta: { requiresAuth: true },
  component: () => import("../views/partenaires/update.vue")
},
// To finish partenaires

 // To start pme

 {
  path: "/industrie",
  name: "industrie",
  meta: { requiresAuth: true },
  component: () => import("../views/pme/default.vue")
},
// {
//   path: "/pme/ajouter",
//   name: "partenaire-add",
//   meta: { requiresAuth: true },
//   component: () => import("../views/pme/ajouter.vue")
// },
// To finish pme


  // To start localites

  {
    path: "/localite/regions",
    name: "regions",
    meta: { requiresAuth: true },
    component: () => import("../views/localites/regions.vue")
  },
  {
    path: "/localite/prefectures",
    name: "prefectures",
    meta: { requiresAuth: true },
    component: () => import("../views/localites/prefectures.vue")
  },
  {
    path: "/localite/sous-prefectures",
    name: "sous_prefectures",
    meta: { requiresAuth: true },
    component: () => import("../views/localites/sousprefecture.vue")
  },
  {
    path: "/localite/quartiers",
    name: "quartiers",
    meta: { requiresAuth: true },
    component: () => import("../views/localites/quartier.vue")
  },

 // To finish localites

 
 // To start secteur

 {
  path: "/secteurs",
  name: "secteurs",
  meta: { requiresAuth: true },
  component: () => import("../views/secteurs/secteurs.vue")
},
{
  path: "/sous-secteurs",
  name: "sous-secteurs",
  meta: { requiresAuth: true },
  component: () => import("../views/secteurs/sousSecteur.vue")
},
 

 // To start archive

 {
  path: "/archive",
  name: "archive",
  meta: { requiresAuth: true },
  component: () => import("../views/archives/default.vue")
},
{
  path: "/archive/detail/:id",
  name: "archive-detail",
  meta: { requiresAuth: true },
  props:true,
  component: () => import("../views/archives/detail.vue")
},

// To start documents

{
  path: "/documents/categories",
  name: "documents-categorie",
  meta: { requiresAuth: true },
  component: () => import("../views/documents/categorie.vue")
},
{
  path: "/documents/sous-categories",
  name: "documents-sous-categorie",
  meta: { requiresAuth: true },
  props:true,
  component: () => import("../views/documents/souscategorie.vue")
},
{
  path: "/documents/fichier",
  name: "documents-fichier",
  meta: { requiresAuth: true },
  props:true,
  component: () => import("../views/documents/fichier.vue")
},
 
 
  
  
 
 
  
  

];

import { useAuthStore, useAuthFakeStore } from "@/state/pinia";
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
    path: "/index",
    name: "Dashboard",
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
// To finish partenaires

 // To start pme

 {
  path: "/pme",
  name: "pme",
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

 

 
 
 
  
  
 
 
  
  
  // {
  //   path: "/form/advanced",
  //   name: "Form Advanced",
  //   meta: { title: "Form Advanced", authRequired: true },
  //   component: () => import("../views/forms/advanced.vue")
  // },
  // {
  //   path: "/form/elements",
  //   name: "Form Elements",
  //   meta: { title: "Form Elements", authRequired: true },
  //   component: () => import("../views/forms/elements.vue")
  // },
  //  {
  //   path: "/form/layouts",
  //   name: "Form Layouts",
  //   meta: { title: "Form Layouts", authRequired: true },
  //   component: () => import("../views/forms/layouts.vue")
  // },
  // {
  //   path: "/form/editor",
  //   name: "Form Editors",
  //   meta: { title: "Form Editors", authRequired: true },
  //   component: () => import("../views/forms/editors.vue")
  // },
  // {
  //   path: "/form/uploads",
  //   name: "File Uploads",
  //   meta: { title: "Form File Uploads", authRequired: true },
  //   component: () => import("../views/forms/uploads.vue")
  // },
  // {
  //   path: "/form/validation",
  //   name: "Form Validation",
  //   meta: { title: "Form Validation", authRequired: true },
  //   component: () => import("../views/forms/validation.vue")
  // },
  // {
  //   path: "/form/wizard",
  //   name: "Form Wizard",
  //   meta: { title: "Form Wizard", authRequired: true },
  //   component: () => import("../views/forms/wizard.vue")
  // },
  // {
  //   path: "/form/repeater",
  //   name: "Form Repeater",
  //   meta: { title: "Form Repeater", authRequired: true },
  //   component: () => import("../views/forms/repeater.vue")
  // },
  // {
  //   path: "/form/mask",
  //   name: "Form Mask",
  //   meta: { title: "Form Mask", authRequired: true },
  //   component: () => import("../views/forms/mask.vue")
  // },
  
];

<template >
  <div>
    <RouterView />
  </div>
</template>


<script>
  // import AOS from "aos/dist/aos"

// import "@/assets/vendor/aos/aos.css"
// import "aos/dist/aos.css"
import "@/assets/css/style.css"
import "@/assets/vendor/php-email-form/validate.js"
// import "@/assets/js/main.js"

import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/assets/vendor/boxicons/css/boxicons.min.css"

  export default {
  name:'App',
  watch: {
    created() {
    
    },
    $route(to,) {
      const name = to.name.toLowerCase()
      const title = name 
        // ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        // : name
      document.title = `Mcimpe-Guinee - ${title}`

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  },
  
}
</script>
<style lang="css" scoped>
  
</style>
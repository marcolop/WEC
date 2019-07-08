<template>
  <div class="page-container">
      <md-toolbar class="md-primary md-medium">
        <img  class="image" src="../assets/ms-icon-150x150.png">
        <!--<h2>Tel:8112341090</h2>-->
         <md-tabs class="md-transparent md-alignment" md-alignment="left">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Sobre Nosotros"></md-tab>
            <md-tab id="tab-posts" md-label="contacto"></md-tab>
            <md-tab id="tab-post" href="https://www.corporativolibra.com/worldelitecollege/moodle/" md-label="Acceso a Escuela de idiomas"></md-tab>
            <md-tab id="tab" md-label="Accesso a preparatoria"></md-tab>
            <md-tab id="tab-posts" md-label="Llamanos"></md-tab>
          </md-tabs>
      </md-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-toolbar.md-theme-default.md-primary {
  background-color: #972420;
}
.md-aligment {
  margin-left: 23px;
}
.image {
 width:  75px;
 height: 75px;
 margin-left: 50px;
}
.md-primary {
  color: red;
}
</style>

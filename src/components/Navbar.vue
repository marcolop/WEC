<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <img  class="image" src="../assets/ms-icon-150x150.png">
         <md-tabs class="md-transparent md-alignment" md-alignment="right">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Classes Por Skype"></md-tab>
            <md-tab id="tab-posts" md-label="Sobre Nosotros"></md-tab>
            <md-tab id="tab-favorites" md-label="Contacto"></md-tab>
          </md-tabs>
          <md-button class="md-dense md-accent">Acceso  A Campuss</md-button>
      </md-app-toolbar>
    </md-app>
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
  background-color: #B09A57;
}
.image {
 width:  75px;
 height: 75px;
 margin-left: 50px;
}
.md-alignment {
  margin-left: 350px;
}
.md-primary {
  color: red;
}
</style>

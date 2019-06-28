<template>
  <div class="beneficios-class1">
     <h1 class="bajar-h1">POR QUE WEC ES LA MEJOR OPCIÓN PARA MI?</h1>
     <div class="container1 icons-size">
         <md-icon class="md-size-2x">school</md-icon>
         <md-icon class="md-size-2x">computer</md-icon>
         <md-icon class="md-size-2x">attach_money</md-icon>
        </div>
       <div class="container2">
        <div>
          <h3>Los Mejores Maestros</h3>
          <p>Profesionales y Experimentados</p>
          <p>Apasionados por la Enseñanza</p>
          <p>Pacientes</p>
          </div>
          <div class="">
          <h3>100% Online</h3>
          <p>Clases en Vivo</p>
          <p>Plataforma 24/7</p>
          </div>
          <div>
          <h3>Paquetes pensando en ti</h3>
          <p>Individual</p>
          <p>Dual</p>
          <p>Grupal</p>
          </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'Wec',
  data () {
    return {
    }
  }
}
</script>
<style>
/*clase gridlayout*/
.container2 {
  display: grid;
  grid-template-columns: 30% 25% 30%;
  column-gap: 100px;
  color: white;
}
.container1 {
  display: grid;
  margin-left: 200px;
  grid-template-columns: 5% 55% 10%;
  column-gap: 100px;
}
.online-class {
  color: white;
  margin-top: 20px;
}
/*class color letras*/
.color{
  color: white;
  margin-right: 200px;
}
.bajar-h1{
  top: 30px;
  position: relative;
  color: white;
}
.beneficios-class1 {
  margin-top: 100px;
  background-color: #B09A57;
  padding-bottom: 50px;
}
.icons-size {
  margin-top: 70px;
}
</style>

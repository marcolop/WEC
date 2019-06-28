<template>
  <div class="beneficios-class">
     <h1 class="bajar-h1">Nuestra metodología</h1>
     <div class="grid-container hover-class">
       <img v-for="(image,index) in images" :key="index" v-bind:src="image.url">
     </div>
     <div class="container size-1">
         <p>Maestros con amplia experiencia en la enseñanza de tu idioma</p>
         <div>
           <p>Atencion Personalizada de nuestros asesores</p>
         </div>
         <div>
            <p>Clases de 60 minutos en vivo</p>
         </div>
         <div>
           <p>Plataforma de repaso y actividades 24/7</p>
         </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'Beneficios',
  data () {
    return {
      images: [
        {url: require('../assets/iconos/maestros.png')},
        {url: require('../assets/iconos/min.png')},
        {url: require('../assets/iconos/atencion.png')},
        {url: require('../assets/iconos/plataforma.png')}
      ]
    }
  }
}
</script>
<style>
.hover-class img{
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}
.bajar-h1{
  top: 30px;
  position: relative;
  color: white;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 190px;
  margin-top: 60px;
  margin-left: 140px;
}
.size-1 {
  margin-right: 70px;
  color: white;
}
.beneficios-class {
  margin-top: 100px;
  background-color:#B09A57;
  padding-bottom: 100px;
}
</style>

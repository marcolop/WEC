<template>
  <div class="container3">
     <img v-for="(image,index) in images" :key="index" v-bind:src="image.url">
     <div class="info-inicio">
       <h1>Es muy fácil</h1>
       <p>Inicia sesíon en nuestra plataforma, agenda tu clase y comienza tu aprendizaje con maestros en vivo
         puedes tomar tu clase de forma individual, Dual o Grupal.
         Dentro de nuestra plataforma tambien podras acceder a videos de repaso y diversos ejercicios practicos para
           apoyar tu aprendizaje</p>
     </div>
     <div class="como-registrarse">
          <h4>1.Ingresa tus datos en el formulario</h4>
          <h4>2.Te contactaremos para aclarar cualquier duda</h4>
          <h4>3.Elige tu plan y horario de trabajo</h4>
     </div>
  </div>
</template>
<script>
export default {
  name: 'Empezar',
  data () {
    return {
      images: [
        {url: require('../assets/funciona.png')},
        {url: require('../assets/iniciar.png')}
      ]
    }
  }
}
</script>
<style>
.container3 {
  display: grid;
  margin-top: 400px;
  margin-left: 280px;
  grid-template-columns: 30% 30%;
  column-gap: 100px;
}
</style>

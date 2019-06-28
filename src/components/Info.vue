<template>
  <div class="info-details">
   <h2>Maestros con amplia experiencia en la enseñanza de tu idioma</h2>
   <h3>Atención personalizada de nuestro asesores</h3>
   <h3>Clases en vivo de 60 minutos</h3>
   <h3>Plataforma de repaso y actividades 24/7</h3>
   <div class="image-background">
     <img class="image-size" src="../assets/IMG_3070EBD34439-1@2x.png">
   </div>
    <Form></Form>
  </div>
</template>
<script>
import Form from '@/components/Form'
export default {
  name: 'Info',
  components: {
    Form
  },
  data () {
    return {

    }
  }
}
</script>
<style>
.info-details {
  margin-right: 500px;
}
.image-size{
  width: 30%;
  height: 30%;
}
.info-details {
  position: relative;
  /*color: white;*/
  top: 30px;
}
</style>

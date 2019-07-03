<template>
  <div class="footer-class">
    <div class="container-email">
      <img  class="logo-footer" src="../assets/ms-icon-150x150.png">
      <h1>contáctenos</h1>
      <h3>idiomas@corporativolibra.com</h3>
      <h3>Telefono: 8112341090</h3>
      <p>estamos comprometidos con brindar un servicio de calidad a nuestros clientes donde ofrecemos
        soluciones por medio de un portafolio diversificado.</p>
    </div>
    <div class="copy-class">
         &copy;2019-World Elite Collegue S.A.de.CV Todos los Derechos Reservados
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>
<style>
.footer-class {
    color: #FFF;
    background:#972420;
    overflow: hidden;
    font-size: 12px;
    padding-bottom: 60px;
    font-family: Roboto;
    position: relative;
    z-index: 1;
    top: 100px;
}
.container-email {
  /*display: grid;*/
  margin-top: 90px;
  font-size: 10px;
  margin-right: 900px;
}
.logo-footer{
  width: 100px;
}
.copy-class {
  margin-left:60px;
  margin-top: 90px;
}
</style>

<template>
    <div class="color-division">
      <div class="estilo-email">
        <img src="../assets/envelope.svg">
      </div>
      <div class="class-libra">
         <p>Idiomas@corporativolibra.com</p>
      </div>
      <div class="estilo-letras">
        <p class="bajarh1">CONTÁCTANOS</p>
    </div>
    <div class="estilo-facebook">
       <img src="../assets/facebook-square.svg">
    </div>
    <div class="class-texto">
      <p>World Elite College</p>
    </div>
    <div class="class-instagram">
      <img src="../assets/instagram.svg">
    </div>
    <div class="class-corpolibra">
      <p>@corpolibramty</p>
    </div>
    <div class="copy">
      © 2019 Corporativo Libra S.A de C.V. Todos los Derechos Reservados
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
.bicolor-class {
     margin-left: 700px;
     position: relative;
     height: 50%;
     top: 100px;
     height: 0;
     border-left: 410px  solid #CEA860;
     border-bottom: 210px solid #8D1812;
}
.copy {
  position: relative;
  top: 95px;
}
.estilo-email {
  width: 30px;
  height: 30px;
  font-size: 12px;
  position: relative;
  top: 125px;
  margin-left: 500px;
}
 .estilo-letras {
   margin-right: 900px;
   font-size: 23px;
 }
 .class-corpolibra {
    font-size: 23px;
    position: relative;
    top: -12px;
 }
/*class logo facebook*/
 .estilo-facebook {
   width: 30px;
   height: 30px;
   margin-left: 500px;
   position: relative;
   top: 53px;
 }
 .class-instagram {
   width: 30px;
   height: 30px;
   position: relative;
   top: 34px;
   margin-left: 500px;
 }
 .class-libra {
   margin-left: 100px;
   position: relative;
   top: 80px;
   font-size: 20px;
 }
 .class-texto {
   position: relative;
   top: 12px;
   font-size: 20px;
 }
 .bajarh1{
  top: 110px;
  position: relative;
  font-size: 30px;
  color: white;
}
 .color-division{
   padding-bottom: 100px;
   background-color:#676767;
   color: white;
 }
 .class-texto-footer{
   margin-top:  90px;
 }
 /*class logo twitter*/
 .class-logo-twitter {
   width: 50px;
   height: 50px;
   background-color:;
   margin-top: -300px;
   margin-left: 490px;
 }

.container-email {
  margin-top: 200px;
  font-size: 12px;
  margin-right: 900px;
}
.logo-footer{
  width: 70px;
  margin-top: 100px;
}
.copy-class{
  margin-left:60px;
  margin-top: 200px;
  color: white;
}
</style>

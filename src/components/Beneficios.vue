<template>
  <div class="beneficios-class">
     <h1 class="bajar-h1">Nuestra metodología</h1>
     <div class="grid-container">
       <div class="hovereffect1">
         <h1>Maestros</h1>
          <div class="overlay">
            <p>Maestros con amplia experiencia en la enseñanza de tu idioma</p>
          </div>
         </div>
         <div class="hovereffect1">
           <h1>Assesores</h1>
            <div class="overlay">
              <p>Atencion personalizada de nuestros asesores</p>
           </div>
         </div>
         <div class="hovereffect1">
           <h1>Clases</h1>
           <div class="overlay">
             <p>Clases de 60 minutos en vivo</p>
           </div>
         </div>
         <div class="hovereffect1">
           <h1>Plataforma</h1>
           <div class="overlay">
             <p></p>
           </div>
         </div>
        </div>
     </div>
</template>
<script>
export default {
  name: 'Beneficios',
  data () {
    return {
    }
  }
}
</script>
<style>
/*propiedad que baja nuestra metodologia*/
/*efecto hover en el texto*/
.hovereffect1 {
  overflow: hidden;
  position: relative;
  cursor: default;
}
.hovereffect1 .overlay {
  position: absolute;
  overflow: hidden;
  width: 70%;
  height: 70%;
  left: 10%;
  margin-top: -29px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #FFF;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  -ms-transform: scale(0,1);
  transform: scale(0,1);
}
.hovereffect1:hover .overlay {
  opacity: 2;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.hovereffect1 img {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
.hovereffect1:hover img {
   filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}
.hovereffect1 h2 {
  text-transform: uppercase;
  position: relative;
  font-size: 19px;
  background-color:transparent;
  color: white;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
}
.hovereffect1:hover a, .hovereffect1:hover p, .hovereffect1:hover h2  {
  opacity: 1;
  font-size: 11px;
  color:white;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

/*end efecto hover en texto*/
.bajar-h1{
  top: 40px;
  position: relative;
  color: white;
}
/*clase que baja*/
.grid-container
{
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-gap: 50px;
  color: white;
  margin-top: 60px;
  margin-left: 40px;
}
.size-1
{
  margin-right: 70px;
  color: white;
}
.beneficios-class
{
  margin-top: 100px;
  background-color:#676767;
  padding-bottom: 100px;
}
</style>

<template>
  <div class="beneficios-class">
     <h1 class="bajar-h1">Nuestra metodología</h1>
     <div class="grid-container">
       <div class="hovereffect hovereffect12">
         <h1>Maestros</h1>
          <div class="overlay">
            <p>Maestros con amplia experiencia en la enseñanza de tu idioma</p>
          </div>
         </div>
         <div class="hovereffect">
           <h1>Assesores</h1>
            <div class="overlay">
              <p>Atencion personalizada de nuestros asesores</p>
           </div>
         </div>
         <div class="hovereffect">
           <h1>Clases</h1>
           <div class="overlay">
             <p>Clases de 60 minutos en vivo</p>
           </div>
         </div>
         <div class="hovereffect">
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
/*efecto hover*/
.hovereffect12 {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #42b078;
}

.hovereffect1 .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 50px 20px;
}

.hovereffect1 img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px,0,0);
  transform: translate3d(-10px,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hovereffect1:hover p {
  opacity: 0.4;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect1 h2 {
  text-transform: uppercase;
  color: black;
  text-align: center;
  position: relative;
  font-size: 17px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
}

.hovereffect1 h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: black;
  content: '';
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}

.hovereffect1:hover h2:after {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect1 a, .hovereffect p {
  color: #FFF;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

.hovereffect1:hover a, .hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
/*propiedad que baja nuestra metodologia*/
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
  background-color:#B09A57;
  padding-bottom: 100px;
}
</style>

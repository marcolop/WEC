<template>
  <div class="beneficios-class">
     <h1 class="bajar-h1">Nuestra metodología</h1>
          <div class="grid-container hovereffect1 overlay">
            <img v-for="(image, index) in images" :key="index" v-bind:src="image.url">
        </div>
      </div>
</template>
<script>
export default {
  name: 'Metodologia',
  data () {
    return {
      images: [
        {url: require('../assets/maestros.png')},
        {url: require('../assets/CLASES.png')},
        {url: require('../assets/ASESORES.png')}
      ]
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
  width: 100%;
  height: 100%;
  left: 5%;
  margin-top: -100px;
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
  top: 30px;
  position: relative;
  color: white;
}
/*clase que baja*/
.grid-container
{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 40px;
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
  position: relative;
  top: 40px;
  background-color:#676767;
  padding-bottom: 40px;
}
</style>

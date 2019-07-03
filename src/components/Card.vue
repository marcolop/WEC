<template>
  <div>
    <h1 class="container-idiomas">Nuestros Idiomas</h1>
    <div class="container">
      <div class="hovereffect">
      <img src="../assets/español.png">
     <!--<img v-for="(image,index) in images" :key="index" v-bind:src="image.url"/>-->
     <div class="overlay">
        <h2>Español</h2>
     </div>
    </div>
     <div class="hovereffect">
       <img src="../assets/chino.png">
       <div class="overlay">
         <h2>Chino</h2>
       </div>
     </div>
     <div class="hovereffect">
        <img  src="../assets/ingles.png">
        <div class="overlay">
          <h2>Ingles</h2>
        </div>
       </div>
       <div class="hovereffect">
       <img src="../assets/italiano.png">
       <div class="overlay">
         <h2>Italiano</h2>
       </div>
       </div>
   </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data () {
    return {
      // images: [
      //  {url: require('../assets/español@2x.png')},
      //  {url: require('../assets/FRANCES@2x.png')},
      //  {url: require('../assets/INGLES@2x.png')},
      //  {url: require('../assets/italia@2x.png')}
      //  ]
    }
  }
}
</script>
<style>
.container-idiomas {
  margin-right: 12px;
}
.hovereffect {
  overflow: hidden;
  position: relative;
  cursor: default;
}
.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #FFF;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  -ms-transform: scale(0,1);
  transform: scale(0,1);
}
.hovereffect:hover .overlay {
  opacity: 2;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.hovereffect img {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
.hovereffect:hover img {
   filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}
.hovereffect h2 {
  text-transform: uppercase;
  position: relative;
  font-size: 18px;
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
.hovereffect:hover a, .hovereffect:hover p, .hovereffect:hover h2  {
  opacity: 1;
  font-size: 13px;
  color:white;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.container{
 margin-right: 42px;
 display: grid;
 grid-template-columns: 25% 25% 25% 26%;
 column-gap: 0px;
}
.md-card-media img {
  width: 35%;
  height: 35%;
}
</style>

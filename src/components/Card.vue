<template>
  <div classs="">
    <h1 class="container-idiomas">Nuestros Idiomas</h1>
    <div class="container">
     <img v-for="(image,index) in images" :key="index" v-bind:src="image.url"/>
   </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data () {
    return {
      images: [
        {url: require('../assets/español@2x.png')},
        {url: require('../assets/FRANCES@2x.png')},
        {url: require('../assets/INGLES@2x.png')},
        {url: require('../assets/italia@2x.png')}
      ]
    }
  }
}
</script>
<style>
.container-idiomas {
  margin-right: 12px;
}
.container{
 margin-right: 42px;
 display: grid;
 grid-template-columns: 25% 25% 25% 25%;
 column-gap: 30px;
}
.md-card-media img {
  width: 35%;
  height: 35%;
}
</style>

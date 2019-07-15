<template>
  <div class="">
    <h1>Nuestros Planes</h1>
    <div class="container-class">
        <img v-for="(image,index) in images" :key="index" v-bind:src="image.url">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Planes',
  data () {
    return {
      images: [
        {url: require('../assets/individual.png')},
        {url: require('../assets/dual.png')},
        {url: require('../assets/grupal.png')}
      ]
    }
  }
}
</script>
<style>
.container-class {
  display:grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 10px;
  margin-left: 90px;
}
</style>

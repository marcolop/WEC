<template>
  <div class="container3">
     <img v-for="(image,index) in images" :key="index" v-bind:src="image.url">
  </div>
</template>
<script>
export default {
  name: 'Empezar',
  data () {
    return {
      images: [
        {url: require('../assets/5MARCO.jpg')},
        {url: require('../assets/4MARCO.jpg')},
        {url: require('../assets/1MARCO@2x.png')},
        {url: require('../assets/2MARCO.jpg')},
        {url: require('../assets/3MARCO.jpg')},
        {url: require('../assets/6MARCO.jpg')}
      ]
    }
  }
}
</script>
<style>
img:hover {
  color:
}
.container3 {
  display: grid;
  position: relative;
  top: -300px;
  margin-left: 15px;
  column-gap: 20px;
}
</style>

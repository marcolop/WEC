<template>
   <div class="carousel-landing">
     <carousel class="desing" :data="data" :controls="false">
     </carousel>
   </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      data: [
        '<div class="example-slide1"></div>',
        '<div class="example-slide2"></div>',
        '<div class="example-slide3"></div>'
      ]
    }
  }
}
</script>
<style>
.example-slide1 {
    align-items: center;
    background-color: #666;
    color: #999;
    background:url('../assets/6.jpg');
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 28rem;
  }
  .example-slide2 {
    align-items: center;
    background-color: #666;
    color: #999;
    background:url('../assets/7.jpg');
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 28rem;
  }
  .example-slide3 {
    align-items: center;
    background-color: #666;
    color: #999;
    background:url('../assets/8.jpg');
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 28rem;
  }
</style>

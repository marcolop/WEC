<template>
  <div class="info-details">
   <div class="image-background">
   </div>
   <Form/>
  </div>
</template>
<script>
import Form from '@/components/Form'
export default {
  name: 'Info',
  components: {
    Form
  },
  data () {
    return {

    }
  }
}
</script>
<style>
.info-details {
  margin-right: 500px;
}
.info-details {
  position: relative;
  /*color: white;*/
  margin-top: 30px;
}
</style>

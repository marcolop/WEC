<template>
  <div class="beneficios-class1">
     <img src="../assets/7MARCO.jpg">
   </div>
</template>
<script>
export default {
  name: 'Wec',
  data () {
    return {
    }
  }
}
</script>
<style>
/*clase gridlayout*/
.container2 {
  display: grid;
  grid-template-columns: 30% 25% 30%;
  column-gap: 100px;
  color: white;
}
.container1 {
  display: grid;
  margin-left: 200px;
  grid-template-columns: 5% 55% 10%;
  column-gap: 100px;
}
.online-class {
  color: white;
  margin-top: 20px;
}
/*class color letras*/
.color{
  color: white;
  margin-right: 200px;
}
.beneficios-class1 {
  background-color: #B09A57;
  margin-top: 100px;
}
.icons-size {
  margin-top: 70px;
}
</style>

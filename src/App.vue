<template>
  <div id="app">
    <navbar class="margin"></navbar>
    <router-view/>
    <Card></Card>
    <Beneficios/>
    <Info/>
    <Empezar/>
    <Wec/>
    <Planes/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Card from '@/components/Card'
import Beneficios from '@/components/Beneficios'
import Info from '@/components/Info'
import Empezar from '@/components/Empezar'
import Wec from '@/components/Wec'
import Planes from '@/components/Planes'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Card,
    Beneficios,
    Info,
    Empezar,
    Wec,
    Planes,
    Footer
  }
}
</script>

<style>
.margin {
  margin-top: -100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>

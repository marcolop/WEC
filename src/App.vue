<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <Card></Card>
    <Beneficios/>
     <Info></Info>
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
import Form from '@/components/Form'

export default {
  name: 'App',
  components: {
    Navbar,
    Card,
    Form,
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
html, body, #app {
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

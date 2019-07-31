<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <Card></Card>
    <Metodologia/>
     <Info></Info>
    <Empezar/>
    <Wec/>
    <Mejor/>
    <Planes/>
    <Footer/>
     <a class="lgscreenphone phonelink" href="https://www.youtube.com/channel/UCQQ9KdZl80R78hZjb8Q_3NQ"><img class="phoneicon" src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png"></a>
     <a class="mbscreenphone phonelink" href="tel:8112341090"><img class="phoneicon" src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png"></a>
    <Chat/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Card from '@/components/Card'
import Metodologia from '@/components/Metodologia'
import Info from '@/components/Info'
import Empezar from '@/components/Empezar'
import Wec from '@/components/Wec'
import Mejor from '@/components/Mejor'
import Chat from '@/components/Chat'
import Planes from '@/components/Planes'
import Footer from '@/components/Footer'
import Form from '@/components/Form'

export default {
  name: 'App',
  components: {
    Navbar,
    Card,
    Form,
    Metodologia,
    Info,
    Empezar,
    Wec,
    Planes,
    Mejor,
    Chat,
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
.phonelink {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 30px;
  margin-right: 20px;
}
.phoneicon {
  width: 20%;
  height: 10%;
}
@media screen and (max-width: 480px;){
  .lgsscreenphone {
    display: none;
  }
  .mbscreenphone {
    display: block;
  }
}
@media screen and (max-width: 481px;){
  .lgsscreenphone {
    display: none;
  }
  .mbscreenphone {
    display: block;
  }
}
</style>

<template>
  <div class="form-1">
      <h1>Contactanos</h1>
      <form @submit.prevent="submitForm" autocomplete="off">
     <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" id="name">
        <p v-if="nameIsValid" class="md-error">es obligatorio el campo Nombre</p>
      </div>
     <div class="form-group">
       <label for="edad">Edad:</label>
       <input v-model.number="form.edad" id="edad">
       <p v-if="edadIsValid" class="md-error">es obligatorio el campo edad</p>
     </div>
     <div class="form-group">
       <label for="email">Email:</label>
       <input v-model="form.email" id="email">
    </div>
    <div class="form-group">
       <label for="ciudad">Ciudad</label>
       <input v-model="form.ciudad" id="ciudad">
     </div>
     <div class="form-group">
       <label for="idioma">Idioma</label>
       <select v-model="selected">
          <option>Ingles</option>
          <option>Español</option>
          <option>Frances</option>
          <option>Italiano</option>
        </select>
     </div>
      <div>
         <button>Submit</button>
       </div>
      </form>
      </div>
</template>
<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        name: null,
        edad: null,
        email: null
      }
    }
  },
  computed: {
    nameIsValid () {
      return !!this.form.name
    },
    edadIsValid () {
      return typeof this.form.edad === 'number' && this.form.edad > 10 && this.form.edad < 120
    }
  },
  methods: {
    submitForm () {
      const formIsValid = this.nameIsValid && this.edadIsValid
      if (formIsValid) {
        console.log('Form submited', this.form)
      } else {
        console.log('Invalid form')
      }
    }
  }
}
</script>
<style>
.form-1 {
  color:white;
  margin-left: 900px;
  margin-top: -1500px;
  height: 30px;
}
</style>

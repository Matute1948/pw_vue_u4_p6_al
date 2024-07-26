<template>
    <div class="form-container">
      <h2>Buscar y Actualizar Estudiante</h2>
      <form @submit.prevent="consultar">
        <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="cedula" v-model="cedula" required />
        </div>
        <button type="submit">Buscar</button>
      </form>
  
      <div v-if="estudianteEncontrado" class="form-group">
        <form @submit.prevent="actualizar">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" v-model="apellido" required />
          </div>
          <div class="form-group">
            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input type="datetime-local" id="fechaNacimiento" v-model="fechaNacimiento" required />
          </div>
          <div class="form-group">
            <label for="genero">Género:</label>
            <select id="genero" v-model="genero" required>
              <option value="" disabled>Seleccione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
    import { actualizarFachada, actualizarParcialFachada, obtenerPorCedulaAxiosFachada } from '../clients/clienteEstudiante.js'
  export default {
    data() {
      return {
        cedula: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        genero: '',
        estudianteEncontrado: false
      };
    },
    created(){
      console.log(this.$route)
      console.log(this.$route.params.cedula);
      if(this.$route.params.cedula != 'vacio'){
        this.cedula = this.$route.params.cedula;
        this.consultar()
      }
    }
    ,
    methods: {
        async consultar(){
          console.log(this.cedula);
          const data = await obtenerPorCedulaAxiosFachada(this.cedula);
          console.log(data);
          console.log(this.cedula);
          this.estudianteEncontrado = true;

        },
        async actualizar(){
          const bodyEstudiante = {
            nombre:this.nombre,
            apellido:this.apellido,
            fechaNacimiento: this.fechaNacimiento,
            genero: this.genero
          };
          const data = await actualizarFachada(this.cedula, bodyEstudiante);
          console.log(data);
        }

    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="datetime-local"],
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
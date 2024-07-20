<template>
    <div class="form-container">
      <h2>Formulario de Estudiante</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="cedula" v-model="this.cedula" required />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="this.nombre" required />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="this.apellido" required />
        </div>
        <div class="form-group">
          <label for="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="datetime-local" id="fechaNacimiento" v-model="this.fechaNacimiento" required />
        </div>
        <div class="form-group">
          <label for="genero">Género:</label>
          <select id="genero" v-model="this.genero" required>
            <option value="" disabled>Seleccione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <button type="submit" onclick="consultar">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import {} from '../clients/clienteEstudiante.js'
    export default{
      data() {
        return {
          cedula: '',
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          genero: ''
        }
      },
      methods:{
        
      }
    };
    
  
  </script>
  
  <style>
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
  
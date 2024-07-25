<template>
    <div class="form-container">
      <h2>Borrar Estudiante</h2>
      <form @submit.prevent="borrarEstudiante">
        <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="cedula" v-model="cedula" required />
        </div>
        <button type="submit">Borrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cedula: ''
      };
    },
    methods: {
      borrarEstudiante(){
        
      }

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
  
  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #dc3545;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c82333;
  }
  </style>
  
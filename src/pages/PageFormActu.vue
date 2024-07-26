<template>
    <div>
      <h1>Actualizar Estudiantes</h1>
      <FormularioActualizarEstudiante />
    </div>
  </template>
  
  <script>
  import FormularioActualizarEstudiante from '../components/FormularioActualizarEstudiante.vue';
  
  export default {
    data(){
      return{
        mostrar: false,
      }
    },
    components: {
      FormularioActualizarEstudiante,
    },
    

  };
  </script>
  
  <style>
  </style>
  
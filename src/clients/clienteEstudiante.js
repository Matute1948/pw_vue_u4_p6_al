import axios from "axios";

//Metodos de consumo del API 

const obtenerPorCedula = async (cedula) =>{
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerPorCedulaAxios = async (cedula) => {
    //axios ya tiene de manera implicita el await por ende es vital colocar async
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data); //como atributo
    console.log(data);
    return data;
}

const guardar = async (body) => {
    //dbe colocarse el body
    //lo mas comun es que retorne objetos de respuesta
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,body).then(r => r.data);
    console.log(data);
    return data;
}

//lo mas comun es que se realize esta dependencia :V
const actualizar = async (cedula, body) =>{
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,body).then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (cedula, body) =>{
    const data = axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,body).then(r => r.data);
    console.log(data);
    return data;
}

const eliminar = async (cedula) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log(data);
    return data
}


//Metodos de fechada

export const obtenerPorCedulaFachada = async (cedula) =>{
    return await obtenerPorCedula(cedula);
}

export const obtenerPorCedulaAxiosFachada = async (cedula) => {
    return await obtenerPorCedulaAxios(cedula);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

//lo mas comun es que se realize esta dependencia :V
export const actualizarFachada = async (cedula, body) =>{
    return await actualizar(cedula, body);
}

export const actualizarParcialFachada = async (cedula, body) =>{
    return await actualizarParcial(cedula, body);
}

export const eliminarFachada = async (cedula) => {
    return await eliminar(cedula);
}

//---------------------------





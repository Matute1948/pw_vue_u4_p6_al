//archivo donde voy a configurar la libreria y 
//tambien vamos a declarar todas las rutas del projecto
import {createRouter, createWebHashHistory} from 'vue-router'

import PagesFormGuar from '../pages/PagesFormGuar.vue'
import PageFormBorrar from '../pages/PageFormBorrar.vue'
import PageFormActu from '../pages/PageFormActu.vue'
import BienvenidosPage from '../pages/BienvenidoPage.vue'
import NotFoundPage from "../pages/NotFoundPage.vue"

const routes = [
    {
        //no es necesario colocar el http porque ya viene dado por el servidor
        // decalro la ruta de la pagina que quiero que represente 
        // abajo la pagina 
        path: "/guardar",
        component: PagesFormGuar
    },
    {
        path: "/eliminar",
        component: PageFormBorrar
    },
    {
        path: "/actualizar/:cedula",
        component: PageFormActu
    },
    {
        path: "/",
        component: BienvenidosPage
    },
    {
        path : "/:pathMatch(.*)*",
        component : NotFoundPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 
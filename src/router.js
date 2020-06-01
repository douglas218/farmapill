import Vue from "vue";
import Router from "vue-router";
import Splash from './views/Splash.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Farmacias from './views/Farmacias.vue'
import Pedido from './views/Pedido.vue'
import PedidoConcluido from './views/PedidoConcluido.vue'
import Remedio from './views/Remedio.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,  /* "app",*/ /* parte (prefixo) da URL */
    routes: [
        {
            path: "/",
            component: Splash
        },
        { 
            path: "/login",
            component: Login
        },
        { 
            path: "/dashboard",
            component: Dashboard
        },
        { 
            path: "/farmacias",
            component: Farmacias
        },
        { 
            path: "/pedido",
            component: Pedido
        },
        { 
            path: "/pedido-concluido",
            component: PedidoConcluido
        },
        { 
            path: "/remedio",
            component: Remedio
        }
    ]
})
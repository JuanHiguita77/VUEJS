import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(VueLazyLoad, {
    /*
        Añadir opciones por defecto
    */
}).use(router).mount('#app')

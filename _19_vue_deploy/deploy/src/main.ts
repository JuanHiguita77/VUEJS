import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


//subimos al repo el proyecto, para netlify configuramos el netlify.toml y el _redirects: para que nos redireccione a la ruta /index.html

//Para host normal se suben los archivos dist al host

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')

//Para probar el pwa se instala un servidor http: npm install http-server -g, luego se inicia el servidor http: http-server dist/ -- carpeta de distribucion que hicimos anteriormente con npm run build

//Usando ngrok ejecutamos la app, ya que las pwa solo funcionan en https: ngrok.exe http 8080

//Luego usando el manifest que movemos del dist a la carpeta public podemos configurar lo visual, igual que en el vue.config.js
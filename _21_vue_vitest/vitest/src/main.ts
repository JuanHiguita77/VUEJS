import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

//Para añadir vitest:  yarn add -D vitest o con npm: npm i -D vitest

//Asignarle un archivo propio de config: vitest --config ./config/my-config.ts

//Debemos configurar el vitest.config.ts y el package.json con los scripts:     

//"test": "vitest",
//"coverage": "vitest run --coverage"

//instalamos jest con npm i -D jest o yarn add --dev jest
//Procedemos a hacer el test en el app.test

//corremos el test con npm run test o yarn test
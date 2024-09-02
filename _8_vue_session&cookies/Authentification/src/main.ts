import { createApp } from 'vue'
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const firebaseConfig = {
  apiKey: "AIzaSyA0oHGkWO0nc32V34y9JepY7fW5MyN2Rbo",
  authDomain: "curso-vue-d8ff9.firebaseapp.com",
  projectId: "curso-vue-d8ff9",
  storageBucket: "curso-vue-d8ff9.appspot.com",
  messagingSenderId: "911285012562",
  appId: "1:911285012562:web:8653d17970fa7c1f68f78b",
  measurementId: "G-DNZJYYEKRF"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueCookies, {
  expires: '1d'
  /*
  path: '/',
  domain: '',
  secure: '',
  samesite: ''*/
}).use(router).use(VueSession).mount('#app')

/*
//COOKIES
$cookies.set('auth', 1000)
// Establece una cookie llamada 'auth' con el valor 1000.

$cookies.get('auth')
// Obtiene el valor de la cookie llamada 'auth'. Devuelve null si no existe.

$cookies.remove('auth')
// Elimina la cookie llamada 'auth' del navegador.

$cookies.isKey('auth')
// Verifica si la cookie 'auth' existe. Devuelve true o false.

$cookies.keys()
// Devuelve un array con los nombres de todas las cookies almacenadas.


$session.start()
// Inicia una nueva sesión o reanuda una existente.

$session.set('auth', 1000)
// Guarda el valor 1000 en la sesión bajo la clave 'auth'.

$session.get('auth')
// Obtiene el valor almacenado en la sesión bajo la clave 'auth'. Devuelve null si no existe.

$session.id()
// Devuelve el ID único de la sesión actual.

$session.renew()
// Renueva la sesión actual, asignando un nuevo ID de sesión pero manteniendo los datos.

$session.destroy()
// Destruye la sesión actual, eliminando todos los datos y finalizando la sesión.
*/

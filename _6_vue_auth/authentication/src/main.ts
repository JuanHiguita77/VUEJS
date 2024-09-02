import { createApp } from 'vue'
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'

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

createApp(App).use(router).mount('#app')

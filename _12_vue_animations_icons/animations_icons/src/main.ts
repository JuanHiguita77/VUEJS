import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaVuejs, BiApple  } from 'oh-vue-icons/icons'

//Iconos exportados
addIcons(FaVuejs, BiApple )

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.mount('#app')

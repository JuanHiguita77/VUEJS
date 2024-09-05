import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//Directivas propias
app.directive('custom-fs',{
    //ciclo de la directiva
    //el: elemento donde se pone la directiva
    //binding: valor a pasarle
    beforeMount: (el, binding) =>
    {
        el.style.fontSize = binding.value + 'px';
    }
})

//Directiva con argumentos
app.directive('custom-width', {

    beforeMount: (el, binding) => 
    {
        let width = 100;
        switch(binding.arg)
        {
            case 'sm':
                width = 30;
                break;
            case 'md':
                width = 50;
                break;
            case 'lg':
                width = 80;
                break;       
        }
        el.style.width = width + '%';
    }
})

//Directiva con modificaciones
app.directive('modify-font', {
    beforeMount: (el, binding) =>
    {
        let font = 18;

        if(binding.modifiers.sm) font = 30
        else if( binding.modifiers.md) font = 50
        else if( binding.modifiers.lg) font = 80

        el.style.fontSize = font + 'px';

        if(binding.modifiers.red) el.style.color = "#ff0000"
        else if(binding.modifiers.green) el.style.color = "#00ff00"
        else if(binding.modifiers.blue) el.style.color = "#0000ff"
    }
})

app.mount('#app')

<template>
    <!-- No superar 500kb 
    loading: imagen mientras carga el recurso
    delay: tiempo de espera antes de mostrar la imagen
    
    Estas propiedades pueden usarse en el main para que sea default  

    <img v-lazy="{
        src: 'https://picsum.photos/200',
        loading: '@/assets/logo.png',
        error: 'error.png',
        delay: 500
    }"/>--> 

    <img v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle }"/>
</template>

<script lang="ts" setup>
    import { ref, VNode } from 'vue';

    //Anula las opciones por defecto que se usen aqui, manejamos el ciclo de vida nosotros
    const lazyOptions = ref({
        src: 'https://picsum.photos/300',
        lifecycle: {
            loading: (elm: VNode) =>{
                console.log('cargando imagen', elm);
                
            },
            error: (elm: VNode) =>{
                console.log('error', elm);
                
            },
            loaded: (elm: VNode) =>{
                console.log('imagen cargada', elm);
            }
        }    
    })
</script>

<style scoped>

    img[lazy="loading"] {
        background-color: aquamarine;
        width: 500px;
    }

    img[lazy="error"] { 
        background-color: rgba(183, 120, 120, 0.282);
    }

    img[lazy="loaded"] {
        background-color: aquamarine;
    }
</style>
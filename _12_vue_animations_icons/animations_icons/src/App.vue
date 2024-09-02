<template>
   
  <button @click="show = !show">transition</button>
  <transition>
    <h1 v-if="show">Hello World</h1>
  </transition>

  <BlockAnimations />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import BlockAnimations from './components/BlockAnimations.vue'
  
  const show = ref(false)
</script>

<style lang="scss">
  //enter-from: inicio de animacion
  //enter-active: Lo que hace la animacion
  //enter-to: Punto final al que se quiere llegar de la animacion

  //leave-from: Se refiere a la clase CSS que se aplica justo antes de que la transición de salida comience. Generalmente, esta clase define el estado inicial del elemento antes de que comience la animación de salida.

  //leave-active: Es la clase que se aplica durante toda la duración de la transición de salida. Aquí puedes definir la duración de la transición, las animaciones, o cualquier otro estilo que deba aplicarse mientras el elemento está saliendo.

  //leave-to: Esta clase se aplica cuando la transición de salida está a punto de completarse. Representa el estado final del elemento antes de ser removido del DOM.

  .v-enter-active,
  .v-leave-active{
    transition: opacity 0.5s ease;
  }

  .v-enter-from, 
  .v-leave-from{
    opacity: 0;
  }

</style>

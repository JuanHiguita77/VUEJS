<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2>{{ count.value }}</h2>
  <button @click="count.value++">+ + +</button>
</template>

<script lang="ts" setup>
//Reactividad en los objetos, no solo en variables primitivas
  import { reactive } from 'vue';

  //Para darle el tipo se le da directamente
  const count/*:ICount*/ = reactive({
    value: 0
  })

</script>

<style>

</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2>{{ count.value }}</h2>
  <button @click="count.value++">+ + +</button>
</template>

<script lang="ts" setup>
//Reactividad en los objetos, no solo en variables primitivas
  import { reactive } from 'vue';

  const count = reactive({
    value: 0
  })
</script>

<style>

</style>

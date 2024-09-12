<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>SOLID REACTIVITY</h1>
  <h2>{{ count }}</h2>

  <button @click="setCount((v) => v + 1)">+ + +</button>
</template>

<script lang="ts" setup>
//Existen señales solid y angular
  import { createSignal } from 'vue-signals/solid'

  //valor ,variable para modificar este valor
  const [ count, setCount ] = createSignal(0)

</script>

<style>

</style>

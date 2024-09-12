<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--  
  <h1>SOLID REACTIVITY</h1>
  <h2>{{ count() }}</h2>

  <button @click="setCount((v) => v + 1)">+ + +</button>-->

  <h1>Angular REACTIVITY</h1>
  <h2>{{ count() }}</h2>

  <button @click="count.update((v) => v + 1)">+ + +</button>
  <button @click="count.set(0)">Reset</button>
</template>

<script lang="ts" setup>
//Existen señales solid y angular
  import { createSignal } from 'vue-signals/solid'
  import { createSignalAngular } from 'vue-signals/angular' 
  import { signal } from 'vue-signals';

  //valor ,variable para modificar este valor --- solid
  //const [ count, setCount ] = createSignal(0)

  //Angular
  const count = signal(0)

</script>

<style>

</style>

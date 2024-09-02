<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <h2>COUNTER</h2>
    <h3>{{store.count}} * 2 = {{store.times2}}</h3>
    <button @click="store.increment()">Push!!</button>

  </div>
</template>

<script lang="ts" setup>
  import { userCounterStore } from '@/store/counter';

  //si fueran varios store es ideal hacer alucion a que store se refiere (counterStore)
  const store = userCounterStore()

</script>

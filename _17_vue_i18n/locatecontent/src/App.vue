<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- Inyectamos el contenido segun sea el idioma -->
  <h1>{{ $t('message.hello', { name: name }) }}</h1>
  <p>{{ $t('message.content') }}</p>

  <h1>{{ $t('message.quantity', { count: 1 }) }}</h1>

  //Menu for change the language
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">{{ locale }}</option>  
  </select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const name = ref('Juan')
</script>

<style>

</style>

<template>
    <h1 v-if="age < 18">Under age</h1>
    <h1 v-else-if= "age >= 18">Upper age</h1>
    <h1 v-else>Upper age</h1>
    <h1 v-show="age < 18">Invisible</h1>
</template>

<script lang="ts" setup>
    let age = 18;
</script>

<style>

</style>


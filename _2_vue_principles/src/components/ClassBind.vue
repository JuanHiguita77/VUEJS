<template>
    <h2 :class="{'danger' : hasError}">BIND CLASS</h2>

    <h2 :style="
    {
        'backgroundColor' : '#000',
        'color': color

    }">BIND STYLE</h2>
    
    <!-- v-on: = @ -->
    <button @click="colorChanger()">Change color</button>
</template>

<script lang="ts" setup>
    import { ref, Ref } from 'vue';

    let hasError = true;

    let color:Ref = ref("#fff");

    const colorChanger = () =>
    {
        color.value = '#fefe';
    }
</script>

<style scoped> 
    .danger
    {
        color: red;    
    }

    .succesfully
    {
        color: green;
    }
</style>
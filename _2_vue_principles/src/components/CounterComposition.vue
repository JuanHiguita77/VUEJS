<template>
    <h3>{{ counter }}</h3>  
    <button @click="sumCounter">Incrementar</button>
</template>

<script lang="ts" setup>
    import { ref, Ref } from 'vue';

    let counter:Ref = ref(0);
    const sumCounter = ():void =>
    {
        counter.value++;
    }

</script>

<style >

</style>
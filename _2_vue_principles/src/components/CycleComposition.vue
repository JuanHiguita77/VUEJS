<template>
    <div></div> 
</template>

<script lang="ts" setup>
    import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

    onMounted(() =>
    {
        console.log('Mounted composition');
    });

    onUpdated(() =>
    {
        console.log('Updated composition');
        
    });

</script>

<style scoped>

</style>
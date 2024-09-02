<template>
    <div class="list">
        <h3>{{props.content.name}}</h3>
        <h3>{{props.content.age}}</h3>
        <h3>{{props.content.position}}</h3>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';

    const props = defineProps(['content'])
</script>

<style scoped>
    .list{
        background-color: aquamarine;
        border-radius: 15px;
        padding: 10px;
        display: flex;
        width: 100%;
        margin: 10px;
        justify-content: space-around;
    }
</style>
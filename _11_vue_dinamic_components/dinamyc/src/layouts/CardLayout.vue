<template>
    <h1>Layout card</h1>

    <div class="container">
        <UserCard v-for="user in props.content" :key="user.name" :content="user" />  
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';//En las ultimas versiones no se necesita el defineprops
    import UserCard from '@/components/UserCard.vue';

    const props = defineProps(['content'])


</script>

<style scoped>
    .container{
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
</style>
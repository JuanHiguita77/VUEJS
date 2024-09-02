<template>
    <h1>List layout</h1>
    <div class="list-element">
        <UserList v-for="user in props.content" :key="user.name" :content="user" />
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    import UserList from '@/components/UserList.vue';

    const props = defineProps(['content'])
</script>

<style scoped>
    .list-element{
        width: 100%;
    }
</style>    
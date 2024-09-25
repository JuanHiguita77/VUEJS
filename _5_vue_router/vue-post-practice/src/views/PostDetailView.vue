<template>
    <h1>Post Detail</h1>

    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>   
        </div>
        <router-link :to="{ name: 'PostList' }" class="back-btn">GO BACK</router-link>
    </div>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const service = new PostService;

    const post = service.getPost();

    onMounted(async () => {
        const route = useRoute();
        let elm = route.params.id;

        await service.fetchById(elm);
    })

</script>

<style lang="scss" scoped>

    h1
    {
        text-align: center;
    }
    .post-container
    {
        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;

        .back-btn
        {
            margin-top: 25px;
            color: $accent-green;
            text-decoration: none;
            font-size: 40px;
        }

        .back-btn:hover
        {
            color: $accent-red;
            transition: 1s ease-in-out;
            border-radius: 15px;
        }
    }

    .post-card
    {
        padding: 25px;
        display: flex;
        border-radius: 15px;
        border: 2px solid $accent-red;
        flex-wrap: wrap;
    }

    
</style>
<template>
    <h1>
        Post list
        <button class="btn btn-primary"> LEARN MORE </button>
    </h1>

    <ul class="post-list-container">
        <li v-for="post in posts" :key="post.id"> {{ post.title }} </li>
    </ul>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';

    import { onMounted, ref, Ref } from 'vue';

    const service = new PostService();
    const posts = service.getPosts();

    onMounted(async () => {
        await service.fetchAll();
    });

    /* OPTION API
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PostList',
        data()
        {
            const service = new PostService();
            const posts = service.getPosts();

            return { posts, service };
        },
        async mounted(){
            await this.service.fetchAll();
        }
    })*/

    /* COMPOSITION API
    import { defineComponent, onMounted } from 'vue';

    export default defineComponent({
        name: 'PostList',
        setup()
        {
            const service = new PostService();
            const posts = service.getPosts();

            onMounted(async () =>{
                await service.fetchAll();
            });
            return { posts };
        }
    })*/
</script>

<style scoped lang="scss">
    h1
    {
        text-align: center;
    }
    .post-list-container
    {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
        text-align: center;

        li
        {
            padding: 10px;
            width: 100%;
            border: 1px solid $accent-red;
        }

        li:hover
        {
            background-color: darken( $primary-light, 8%);
        }
    }
</style>
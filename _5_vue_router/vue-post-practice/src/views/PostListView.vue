<template>
    <h1>Post list</h1>

    <ul class="post-list-container">
        <li v-for="post in posts" :key="post.id"> 
            <router-link :to="{ name: 'PostDetail', params: { id: post.id } }"> {{ post.title }} </router-link>  
        </li>
    </ul>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';

    import { onMounted } from 'vue';

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
            border: 1px solid $primary-light;
            cursor: pointer;

            a
            {
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-weight: bolder;
                text-decoration: none;
                color: $accent-red;
                cursor: pointer;
            }

            a:hover
            {
                color: $neutral-light;
            }
        }

        li:hover
        {
            background-color: darken( $primary-light, 8%);
        }
    }
</style>
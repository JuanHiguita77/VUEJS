<template>
    <div class="container">
        <PostListDetail v-for="post in postList" :key="post.title" :title="post.title" :content="post.content" @alert="showAlert"/>
    </div>
</template>

<script lang="ts" setup>
    import PostListDetail from './PostListDetail.vue';

    interface Post
    {
        title: string,
        content: string
    }

    let postList:Array<Post> =
    [
        {
            title: "Post #1",
            content: "Contenido del post 1"
        },
        {
            title: "Post #2",
            content: "Contenido del post 2"
        },
        {
            title: "Post #3",
            content: "Contenido del post 3"
        },
        {
            title: "Post #4",
            content: "Contenido del post 4"
        }
    ]

    //Funcion para probar emmits: mandar info al hijo
    function showAlert(msg:string)
    {
        alert(msg);
    }
</script>

<style scoped>
    .container
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
    }
</style>
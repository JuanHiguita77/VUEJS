<template>
    <div class="post-card">
        <h3>TITULO</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil alias similique aliquid quis mollitia cum id fuga reiciendis exercitationem culpa in, eveniet minus possimus repellendus ipsa eligendi iure provident.</p>
        <PostBtn />
    </div>
</template>

<script lang="ts" setup>
    import PostBtn from './PostBtn.vue';
</script>

<style>
    .post-card
    {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid red;
    }
</style>
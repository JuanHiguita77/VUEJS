<template>
    <h3>{{ counter }}</h3>  
    <button @click="sumCounter">Incrementar</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data()
        {
            let counter = 0;
            return { counter }
        },
        methods: 
        {
            sumCounter()
            {
                this.counter++;
            }
        }
    });
</script>

<style >

</style>
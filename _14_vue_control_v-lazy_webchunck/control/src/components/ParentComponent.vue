<template>
    <h1>Parent Component</h1>

    <ChildComponent ref="percentageComponent"/>

    <button @click="create">Add Bank account</button>
</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import ChildComponent from './ChildComponent.vue';

    //referencia al hijo
    const percentageComponent = ref(null)

    //metodo para agregar info al banco
    const create = () => {
        alert('create');

        percentageComponent.value.recalculate();
    }

    /*Options API
    export default {
        components: {
            ChildComponent
        },
        methods: {
            create() {
                this.$refs.percentageComponent.recalculate();
            }
        }
    }*/

</script>

<style scoped>

</style>
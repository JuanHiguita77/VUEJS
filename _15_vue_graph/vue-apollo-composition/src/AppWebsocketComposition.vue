<template>
    <!-- Para configurar los websockets se hace en el main -->
    <h1>Hello websocket</h1>

    <ul>
        <li v-for="(sub, index) in subs" :key="index"><strong>{{ sub.name }}:</strong> {{sub.text}}</li>
    </ul>  
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import IComment from '@/interfaces/IComment';

export default defineComponent({
    setup(){
        const subs = ref<Array<IComment>>([])

        const { result } = useSubscription(gql`
        subscription {
            commentCreated {
                name
                text
            }
        }
        `)

    watch(
        result,
        data => {
            subs.value.push(data.commentCreated)
        })

        return {
            subs
        }
    }
})
</script>

<style scoped>

</style>
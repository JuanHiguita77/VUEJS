<template>
    <div class="post">
        <h2>{{ props.title }}</h2>

        <p>{{ props.content }}</p>

        <button @click="clickAlert()">Alert click</button>
    </div>
</template>


<script lang="ts" setup>
    import { defineProps, defineEmits, ref, Ref } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required:false,
            default: 'Not Content Yet'
        }
    });

    const emit = defineEmits(['alert']);

    const clickAlert = () =>
    {
        emit('alert', 'ALEEEERRRTTT!!');
    }

    
//props en composition: Envio de informacion del componente padre al hijo
    /*import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: "PostListDetail",
        props:
        {
            title:
            {
                type: String,
                required: true
            },
            content:
            {
                type: String,
                required: false,
                default: 'Not Content Already'
            }
        },
        emits:['alert'],
        setup(props, {emit})
        {
            //Emit al padre

            const clickAlert = () =>
            {
                emit('alert', 'ALEEEERRRTTT!!');
            }

            return {props, clickAlert};    
        }
    })*/
    
</script>

<style scoped>
    .post
    {
        width: 300px;
        height: 100px;
        background-color: antiquewhite;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>
<template>
    <h1>Child component</h1>

    <h3>Percent completed: {{ percent }}%</h3>
</template>

<script lang="ts" setup>
    import { onMounted, ref, defineExpose, defineComponent } from 'vue';

    const percent = ref(0);

    onMounted(() => {
        percent.value = 26;        
    })

    //Tenemos la funcion aqui para no llenar el padre de logica que no le corresponde, se le va a delegar la ejecucion al padre
    const recalculate = () => {
        //actualiza valor cuando el padre hace la accion que le especificamos
        percent.value = Math.random() * 100;
    }

    //Se le pasan todos los elementos a exponer
    defineExpose({ recalculate })



    /*Composition API
    export default defineComponent({
        setup(){
            const percent = ref(0);

            const recalculate = () => {
                percent.value = Math.random() * 100;
            };

            onMounted(() => {
                percent.value = 26;        
            })

            defineExpose({ recalculate })

            return {
                percent, recalculate
            }
        }
    })*/

    /*Options API
    export default {
        data(){
            return {
                percent: 0
            }
        },
        methods: {
            recalculate(){
                this.percent = Math.random() * 100;
            }
        },
        mounted(){
            this.percent = 26;
        }
    }*/


</script>

<style scoped>

</style>
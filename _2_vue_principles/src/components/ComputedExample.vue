<template>
    <div>
        <input type="text" v-model="message"/>
        <h2>{{ message }}</h2>
        <h2>{{ reverse }}</h2>

    </div>
</template>

<script lang="ts" setup>
    import { ref, Ref, computed } from 'vue';

    let message:Ref<string> = ref('');

    const reverse = computed(() => message.value.split('').reverse().join(''));

/*COMPOSITION API
    import { defineComponent, ref, Ref, computed } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        setup(){
            let message:Ref<string> = ref('');

            const reverse = computed(() => message.value.split('').reverse().join(''));

            return {reverse, message};
        }
    })*/

/* OPTION API
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        data(){
            return{
                message: ''
            }
        },
        computed: {
            reverse():string {
                return this.message.split('').reverse().join('');
            }
        }
    });
*/
</script>

<style scoped>

</style>
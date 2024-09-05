<template>
    <h1>MODEL FORM</h1>  
    <form action="">
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="check"/> checkbox
        <select v-model="numberOption">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>   
        </select>
    </form>

    <h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
    import {ref, Ref} from 'vue';
    
    let inputText:Ref<string> = ref('');
    let check:Ref<boolean> = ref(true);
    let numberOption:Ref<string> = ref('1');    
</script>


<style scoped>

</style>
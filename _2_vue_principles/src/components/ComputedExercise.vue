<template>
    <div :style="{ backgroundColor: 'cyan' }" v-custom-width>
        <h2 v-custom-fs="30">Subtotal</h2>
        <input type="number"  v-model="subtotal" v-modify-font.md />
        <h3 v-modify-font.lg.red>Total to pay: {{ totalVat }} ({{ vat }})%</h3>
    </div>
</template>

<script lang="ts" setup>
import { Ref, computed, ref } from 'vue';

    const vat = 21;
    let subtotal:Ref<number> = ref(0);
    const totalVat = computed(() => (vat * subtotal.value) / 100);


</script>

<style scoped>

</style>
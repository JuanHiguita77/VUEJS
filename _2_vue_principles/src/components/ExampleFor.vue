<template>
    <ul>
        <li v-for="country in countries" :key="country">{{ country }}</li>
        <h3>Json List</h3>
        <li v-for="country in jsonCountries" :key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script lang="ts" setup>
    import { Ref, ref } from 'vue';

    let countries:Ref<Array<string>> = ref(
        [
            'spain', 'France', 'UK', 'Italy', 'Portugal'
        ]
    );

    interface ICountry
    {
        code: string,
        name: string
    }

    let jsonCountries:Ref<Array<ICountry>> = ref([
        {
            code: 'es',
            name: 'Spain'
        },
        {
            code: 'fr',
            name: 'France'
        },        
        {
            code: 'en',
            name: 'UK'
        },        
        {
            code: 'it',
            name: 'Italy'
        }
    ])
</script>

<style>
</style>
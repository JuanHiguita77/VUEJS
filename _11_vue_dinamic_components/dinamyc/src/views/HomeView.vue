<template>
  <h1>Home</h1>  
  <input type="text" placeholder="Search user" v-model="search" @keyup="handleSearch(search)">
  <div>
    <h2>Tipos de vista</h2>  

    <button @click="handleLayout(ListLayout)">Modo Lista</button>
    <button @click="handleLayout(CardLayout)">Modo tarjeta</button>
    <button @click="handleLayout(TableLayout)">Modo Tabla</button>
  </div>

  <component :is="layout" :content="filteredUsers" />
</template>

<script lang="ts" setup>
  import { ref, defineAsyncComponent } from 'vue';

  const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'));
  const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'));
  const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'));

  const layout = ref(ListLayout)

  const handleLayout = (cmp: any) => layout.value = cmp

  const search = ref('')

  const handleSearch = () => {
    filteredUsers.value = users.value.filter((user: any) => user.name.toLowerCase().includes(search.value))
  } 

  const users = ref([
    {
      name: 'Dylan',
      age: 25,
      position: 'Developer'
    },
    {
      name: 'carlos',
      age: 25,
      position: 'Developer'
    },  
    {
      name: 'pedro',
      age: 25,
      position: 'Developer'
    },
    {
      name: 'jose',
      age: 25,
      position: 'Developer'
    } 
  ])

  let filteredUsers = ref([])
  
  filteredUsers.value = users.value
</script>

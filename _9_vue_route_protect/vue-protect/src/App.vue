<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/login">Login</router-link>
  </nav>

  <input type="text" v-model="note">
  <button @click="sender">Send note</button>

  <router-view/>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  let note = ref('')

  const sender = async () =>{
    const resp = await  fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer + token'
      },
      body: JSON.stringify({
        note: note.value
      })
    })

    const response = await resp.json()
    
  }

</script>

<style lang="scss">


</style>

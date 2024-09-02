<template>
  <!--  
  <h3>{{ store.count }}</h3>
  <button @click="store.increment">Update</button>
  <router-view/>-->

  <h1>Notes</h1>
  <input type="text" v-model="note">
</template>

<script lang="ts" setup>

  import { ref, watchEffect, watch } from 'vue'

  const note = ref('')

  //Watch
  watch(note, (newVal, oldVal) => {
    localStorage.setItem('note', newVal)
  })

  /* WatchEffect para todo
  watchEffect(() => localStorage.setItem('note', note.value))*/


  /*import { useExample } from '@/store/useExample'
  LocalStorage de manera incorrecta, mejor usar watchers
  const store = useExample()
  store.init()*/

  /*Option API
  import { defineComponent } from 'vue';

  export default defineComponent({
    data(){
      return {
        note: ''
      }
    },
    watch: {
      //Se ejecuta cada vez que cambia el valor en el input
      note(newVal, oldVal){
        localStorage.setItem('note', newVal)
      }
    }
  })*/

  /*Composition API
  import { ref, defineComponent, watchEffect } from 'vue'

  export default defineComponent({
    setup(){
      const note = ref('')

      watchEffect(() => {
        localStorage.setItem('note', note.value)
      })

      return { note }
    }
  })*/


</script>
<style>

</style>

<template>
  <h1>Animation blocks</h1>

  <TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note"> <v-icon name="fa-vuejs" scale="2" animation="ring" hover="true"/>{{ note }} </li>
  </TransitionGroup>

  <input type="text" v-model="note"/>
  <button @click="handleNote">Save note</button>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const notes = ref([])
    const note = ref('')

    const handleNote = () => {
      notes.value.push(note.value)
      note.value = ''
    }
</script>

<style scoped lang="scss">

    //Name del transition group
  .list-enter-active, .list-leave-active {
    transition: all 0.5s ease;
  } 

  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  } 
</style>

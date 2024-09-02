<template>
  <MainLayout>
    <!-- v-slot: == # -->
    <template #main>
     <h3>Main Content</h3>
    </template>

    <!-- v-slot: == # -->
    <template #aux>
      <h3>Aux Content</h3>
      <h4>Mouse position: x: {{x}}---- y: {{y}}</h4>
    </template>
    <h1>Home</h1>
  </MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import {useMouse} from '@/composables/useMouse';

  const {x, y} = useMouse();
</script>

<style scoped>

</style>
<template>
    <div class="container">
        <div class="auxbar">
          <AuxBar />
        </div>
    
        <div class="main-content">
          <div class="menu">
            <SidebarMenu />
          </div>
          <div class="main-content">
            <slot name="main"></slot>    
          </div>
        </div>

        <div class="aux-content"> 
          <slot name="aux"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import AuxBar from '@/components/AuxBar.vue';
    import SidebarMenu from '@/components/SidebarMenu.vue';
    
</script>

<style scoped>

</style>
<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppMain from '@/components/AppMain.vue'
import AppStorage from '@/AppStorage.vue'
</script>

<template>
  <div class="bg-indigo-100 min-h-dvh">
    <app-storage>
      <app-header></app-header>
      <app-main></app-main>
    </app-storage>
  </div>
</template>

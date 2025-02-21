<script setup>
import PlayerCard from '@/components/PlayerCard.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <player-card :lock="false" v-for="item in 4" :key="item"></player-card>
  </div>
</template>
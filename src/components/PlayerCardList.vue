<script setup>
import PlayerCard from '@/components/PlayerCard.vue'
import { ref } from 'vue'

const testData = [
  { id: 1, name: 'Игрок 1', score: 24, lock: false },
  { id: 2, name: 'Игрок 2', score: 224, lock: false },
  { id: 3, name: 'Игрок 3', score: null, lock: false },
]
const data = ref(testData)
const lockScore = (id) => {
  data.value.map((itm) => itm.id === id ? itm.lock = true : itm)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <player-card
      @lock-score="lockScore"
      v-for="player in data"
      :player="player"
      :key="player.id"
    ></player-card>
  </div>
</template>
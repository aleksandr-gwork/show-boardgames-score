<script setup>
import { inject, ref } from 'vue'
import PlayerCard from '@/components/PlayerCard.vue'
import AppModal from '@/components/AppModal.vue'

const users = inject('users')

const isModalOpen = ref(false)
const cardId = ref(null)

const openModal = (id) => {
  isModalOpen.value = true
  cardId.value = id
}
const lockScore = (id) => {
  users.value.map((itm) => (itm.id === id ? (itm.lock = true) : itm))
  isModalOpen.value = false
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <player-card
      @open-modal="openModal"
      v-for="player in users"
      :player="player"
      :key="player.id"
    ></player-card>
  </div>
  <app-modal
    v-if="isModalOpen"
    @lockScore="lockScore(cardId)"
    @notLockScore="isModalOpen = false"
  ></app-modal>
</template>
<script setup>
import { inject, ref } from 'vue'
import PlayerCard from '@/components/PlayerCard.vue'
import AppModal from '@/components/AppModal.vue'

const users = inject('users')

const isModalOpen = ref(false)
const cardId = ref(null)
const currentScore = ref(null)

const openModal = (id, score) => {
  isModalOpen.value = true
  cardId.value = id
  currentScore.value = score
}

const lockScore = (id, score) => {
  users.value.map((itm) => {
    if (itm.id === id) {
      itm.lock = true
      itm.score = score
    }
  })
  isModalOpen.value = false
}

function addCard() {
  users.value.push({
    id: new Date().getTime(),
    name: null,
    score: null,
    lock: false,
    place: 0,
  })
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
    <button
      type="button"
      class="py-3 px-5 shadow-sm rounded-2xl border border-transparent transition cursor-pointer hover:bg-indigo-200"
      @click.prevent="addCard()"
    >
      Добавить игрока
    </button>
  </div>
  <app-modal
    v-if="isModalOpen"
    @lockScore="lockScore(cardId, currentScore)"
    @notLockScore="isModalOpen = false"
  ></app-modal>
</template>
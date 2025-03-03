<script setup>
import { computed, inject } from 'vue'
import AppButton from './AppButton.vue'

const users = inject('users')

function openScores() {
  users.value.sort((currentUser, nextUser) => nextUser.score - currentUser.score)
  users.value.forEach((currentUser, index) => {
    currentUser.place = index + 1
    currentUser.lock = false
  })
  localStorage.setItem('users', JSON.stringify(users.value))
}

const isEveryLocked = computed(() => {
  return users.value.every((player) => player.lock)
})

</script>

<template>
  <header class="px-5 py-4 bg-indigo-200 z-10 relative shadow">
    <div class="container mx-auto flex justify-between gap-4">
      <div
        class="font-bold text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white"
      >
        <input class="outline-0 w-full h-full p-3" type="text" placeholder="Название игры" />
      </div>
      <app-button
        :disabled="!isEveryLocked"
        @click="openScores()"
        title="Результат"
        color="green"
      ></app-button>
    </div>
  </header>
</template>

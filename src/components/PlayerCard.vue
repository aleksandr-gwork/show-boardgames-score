<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'

defineProps({
  player: Object,
})

defineEmits(['openModal'])

const valueScore = ref(null)
const valueName = ref(null)
</script>

<template>
  <div
    :class="{
      'bg-indigo-200 shadow-md hover:shadow-indigo-300': player.place === 0,
      'bg-green-500': player.place === 1,
      'bg-amber-500': player.place === 2,
      'bg-gray-500': player.place > 2,
    }"
    class="flex gap-4 p-4 justify-between rounded-xl transition"
  >
    <!-- Input -->
    <div class="text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white">
      <input
        v-model="valueName"
        :disabled="player.lock"
        class="outline-0 w-full h-full p-3"
        type="text"
        placeholder="Имя игрока"
      />
    </div>
    <!-- /Input -->

    <div class="flex gap-3">
      <!-- Lock button -->
      <app-button
        @click.prevent="$emit('openModal', player.id, valueScore, valueName)"
        :disabled="player.lock"
        color="orange"
        title="LOCK"
      ></app-button>
      <!-- /Lock button -->

      <!-- Score input -->
      <div
        class="text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white max-w-15 md:max-w-20"
      >
        <input
          v-model="valueScore"
          :disabled="player.lock"
          :class="player.lock ? 'blur-sm disabled:pointer-events-none' : 'blur-none'"
          class="text-center outline-0 w-full h-full p-3 min-w-[50px]"
          type="text"
          placeholder="Очки"
        />
      </div>
      <!-- /Score input -->
    </div>
  </div>
</template>

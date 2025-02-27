<script setup>
import AppButton from './AppButton.vue'

defineEmits(['lockScore', 'notLockScore'])
</script>

<template>
  <div
    class="absolute z-50 top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center"
  >
    <div
      class="min-h-[250px] w-[400px] py-5 px-7 mx-5 bg-white flex flex-col gap-4 items-center justify-center rounded-2xl"
    >
      <h2 class="text-3xl font-bold text-center">Зафиксировать результат?</h2>
      <p class="text-red-600 text-center">
        После подтверждения результата изменить значение очков нельзя!
      </p>
      <div class="flex justify-between w-full gap-3">
        <app-button title="Ну да!" color="green" full @click="$emit('lockScore')"></app-button>
        <app-button
          title="Пока нет!"
          color="orange"
          full
          @click="$emit('notLockScore')"
        ></app-button>
      </div>
    </div>
  </div>
</template>
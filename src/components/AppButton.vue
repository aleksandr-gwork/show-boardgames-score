<template>
  <button
    :class="[
      full ? 'w-full' : '',
      color
        ? `bg-${color}-300 hover:bg-${color}-400 active:bg-${color}-500`
        : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-500',
    ]"
    class="flex indig items-center justify-center py-3 px-5 shadow-sm rounded-2xl active:scale-95 transition cursor-pointer"
  >
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
  color: String,
  full: Boolean,
})
</script>

<style>
</style>
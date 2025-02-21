<script setup>
defineProps({
  player: Object,
})

defineEmits(['lockScore'])

</script>

<template>
  <div
    class="flex gap-4 p-4 justify-between rounded-xl bg-indigo-200 shadow-md hover:shadow-indigo-300 transition"
  >
    <!-- Input -->
    <div class="text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white">
      <input
        :value="player.name"
        class="outline-0 w-full h-full p-3"
        type="text"
        placeholder="Имя игрока"
      />
    </div>
    <!-- /Input -->

    <div class="flex gap-3">
      <!-- LockBtn -->
      <button
        @click.prevent="$emit('lockScore', player.id)"
        class="text-fuchsia-950 bg-indigo-400 shadow-2xs active:scale-95 rounded-2xl px-4 cursor-pointer transition"
        type="button"
      >
        LOCK
      </button>
      <!-- /LockBtn -->

      <!-- Score input -->
      <div
        class="text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white max-w-15 md:max-w-20"
      >
        <input
          :value="player.score"
          :disabled="player.lock"
          :class="player.lock ? 'blur-sm disabled:pointer-events-none' : 'blur-none'"
          class="text-center outline-0 w-full h-full p-3"
          type="text"
          placeholder="Очки"
        />
      </div>
      <!-- /Score input -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div
    class="absolute z-50 top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center"
  >
    <div
      class="min-h-1/4 mx-5 md:w-1/2 bg-white flex flex-col gap-4 items-center justify-center p-5 rounded-2xl"
    >
      <h2 class="text-5xl">{{ title }}</h2>
      <p class="text-red-600 text-center">Изменить значение очков будет невозможно!</p>
      <div class="flex justify-between w-full lg:w-1/2">
        <button
          class="text-sm md:text-xl p-3 max-w-[150px] min-w-[100px] shadow-sm rounded-2xl bg-green-300 cursor-pointer hover:bg-green-400 active:bg-green-500 active:scale-95 transition"
        >
          Да!
        </button>
        <button
          class="text-sm md:text-xl p-3 max-w-[150px] min-w-[100px] shadow-sm rounded-2xl bg-red-300 cursor-pointer hover:bg-red-400 active:bg-red-500 active:scale-95 transition"
        >
          Нет!
        </button>
      </div>
    </div>
  </div>
</template>
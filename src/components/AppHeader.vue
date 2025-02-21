<template>
  <header class="px-5 py-4 bg-indigo-200 z-10 relative shadow">
    <div class="container mx-auto flex justify-between gap-4">
      <div
        class="font-bold text-sm md:text-xl inset-shadow-sm inset-shadow-indigo-500 rounded-2xl bg-white"
      >
        <input class="outline-0 w-full h-full p-3" type="text" placeholder="Название игры" />
      </div>
      <button
        class="text-sm md:text-xl p-3 min-w-[150px] shadow-sm rounded-2xl bg-green-300 cursor-pointer hover:bg-green-400 active:bg-green-500 active:scale-95 transition"
      >
        Результат
      </button>
    </div>
  </header>
</template>

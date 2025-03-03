<script setup>
defineProps({
  title: String,
  color: {
    type: String,
    validator: (value) => ['indigo', 'orange', 'green'].includes(value),
  },
  full: Boolean,
  disabled: Boolean,
})
defineEmits(['action'])
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="{
      'w-full': full,
      [color]: true,
    }"
    class="flex items-center justify-center py-3 px-5 shadow-sm rounded-2xl border border-transparent transition cursor-pointer"
  >
    {{ title }}
  </button>
</template>

<style scoped>
/* ORANGE */
.orange {
  background-color: orange;
  color: white;
}

.orange:not(:disabled):hover {
  background-color: darkorange;
}

.orange:not(:disabled):active {
  background-color: darkorange;
  border: 1px solid black;
}

/* VIOLET */

.indigo {
  background-color: darkviolet;
  color: white;
}

.indigo {
  background-color: indigo;
}

.indigo:active {
  background-color: indigo;
  border: 1px solid black;
}

/* GREEN */

.green {
  background-color: green;
  color: white;
}

.green {
  background-color: darkgreen;
}

.green:not(:disabled):active {
  background-color: darkgreen;
  border: 1px solid black;
  transform: scale(0.95);
}

button:disabled {
  background-color: gray;
}
</style>

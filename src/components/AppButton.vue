<script setup>
defineProps({
  title: String,
  color: {
    type: String,
    validator: (value) => ['indigo', 'orange', 'green'].includes(value),
  },
  full: Boolean,
})
</script>

<template>
  <button
    :class="color"
    class="flex items-center justify-center py-3 px-5 shadow-sm rounded-2xl border border-transparent active:scale-95 transition cursor-pointer"
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

.orange:hover {
  background-color: darkorange;
}

.orange:active {
  background-color: darkorange;
  border: 1px solid black;
}

/* VIOLET */

.indigo {
  background-color: darkviolet;
  color: white;
}

.indigo:hover {
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

.green:hover {
  background-color: darkgreen;
}

.green:active {
  background-color: darkgreen;
  border: 1px solid black;
}
</style>

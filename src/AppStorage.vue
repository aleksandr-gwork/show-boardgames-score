<script setup>
import { provide, onMounted, ref } from 'vue'

const testData = [
  { id: 1, name: 'Пепега 1', score: null, lock: false, place: 0 },
  { id: 2, name: 'Пепега 2', score: null, lock: false, place: 0 },
  { id: 3, name: 'Пепега 3', score: null, lock: false, place: 0 },
  { id: 4, name: 'Пепега 4', score: null, lock: false, place: 0 },
]

const users = ref(testData)

provide('users', users)

onMounted(() => {
  //   users.value = JSON.parse(localStorage.getItem('users'))
})
</script>

<template>
  <slot></slot>
</template>
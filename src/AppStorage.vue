<script setup>
import { provide, onMounted, ref } from 'vue'

const testData = [
  { id: 1, name: 'Игрок 1', score: 24, lock: false },
  { id: 2, name: 'Игрок 2', score: 224, lock: false },
  { id: 3, name: 'Игрок 3', score: null, lock: false },
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
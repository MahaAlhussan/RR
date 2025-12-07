<template>
  <button class="switch-btn" @click="switchTheme">
 <span class="emoji">{{ theme === 'dark' ? '☀️' : '🌙' }}</span>
    {{ theme === 'dark' ? 'Light' : 'Dark' }}
  </button>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

onMounted(() => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

function switchTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
}
</script>

<style scoped>

.switch-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 30px;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.switch-btn:hover {
  border-color: #9ca3af;
  background: #f9fafb;
}

.dark .switch-btn {
  background: #374151;
  color: white;
  border-color: #4b5563;
}

.dark .switch-btn:hover {
  background: #4b5563;
}
</style>
<template>
  <div class="fixed top-0 left-0 h-1 bg-accent" :style="{ width: progress + '%' }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function update() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
})
</script>

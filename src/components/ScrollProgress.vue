<template>
  <div class="fixed top-0 left-0 h-1 bg-accent" :style="{ width: progress + '%' }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onSlide(e: Event) {
  const d = (e as CustomEvent).detail as { index: number, total: number }
  if (!d) return
  progress.value = Math.round(((d.index + 1) / d.total) * 100)
}

onMounted(() => {
  window.addEventListener('slide-change', onSlide as any)
})

onUnmounted(() => {
  window.removeEventListener('slide-change', onSlide as any)
})
</script>

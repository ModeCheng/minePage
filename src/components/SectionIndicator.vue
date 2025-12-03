<template>
  <div class="fixed left-4 bottom-4 z-50 text-sm tracking-widest">
    <span class="text-slate-400">SCROLL</span>
    <span class="mx-2">{{ currentPad }}</span>
    <span class="text-slate-500">//</span>
    <span class="mx-2">{{ current }}/{{ total }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const total = ref(0)
const current = ref(1)
const currentPad = ref('00')

function updatePad() {
  currentPad.value = String(current.value).padStart(2, '0')
}

function onSlide(e: Event) {
  const d = (e as CustomEvent).detail as { index: number, total: number }
  if (!d) return
  total.value = d.total
  current.value = d.index + 1
  updatePad()
}

onMounted(() => {
  window.addEventListener('slide-change', onSlide as any)
})

onUnmounted(() => {
  window.removeEventListener('slide-change', onSlide as any)
})
</script>

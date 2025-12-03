<template>
  <div class="fixed left-4 bottom-4 z-50 text-sm tracking-widest">
    <span class="text-slate-400">SCROLL</span>
    <span class="mx-2">{{ currentPad }}</span>
    <span class="text-slate-500">//</span>
    <span class="mx-2">{{ current }}/{{ total }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const total = ref(0)
const current = ref(1)
const currentPad = ref('00')

function updatePad() {
  currentPad.value = String(current.value).padStart(2, '0')
}

onMounted(() => {
  const sections = Array.from(document.querySelectorAll('section'))
  total.value = sections.length
  sections.forEach((s, i) => {
    ScrollTrigger.create({
      trigger: s,
      start: 'top center',
      onEnter: () => { current.value = i + 1; updatePad() }
    })
  })
  updatePad()
})
</script>

<template>
  <section id="experience" class="min-h-screen py-20" ref="root">
    <h2 class="text-3xl font-bold mb-8">经历</h2>
    <div class="relative">
      <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-700"></div>
      <div v-for="i in 5" :key="i" class="relative mb-10">
        <div class="w-4 h-4 rounded-full bg-accent absolute left-1/2 -translate-x-1/2"></div>
        <div class="mt-6 p-6 rounded-xl bg-slate-800/60 max-w-md" :class="i % 2 ? 'ml-auto' : ''">节点 {{ i }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const root = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!root.value) return
  gsap.from(root.value.querySelectorAll('.rounded-xl'), {
    scrollTrigger: { trigger: root.value, start: 'top 80%' },
    opacity: 0,
    y: 20,
    stagger: 0.12,
    duration: 0.5
  })
})
</script>

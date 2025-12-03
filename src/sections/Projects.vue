<template>
  <section id="projects" class="min-h-screen py-20" ref="root">
    <h2 class="text-3xl font-bold mb-8">项目</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="p-6 rounded-xl bg-slate-800/60 overflow-hidden relative">
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition"></div>
        <div class="text-xl font-semibold">项目 {{ i }}</div>
        <p class="text-slate-300 mt-2">交互与动画展示</p>
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
  gsap.from(root.value.querySelectorAll('.p-6'), {
    scrollTrigger: { trigger: root.value, start: 'top 80%' },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section id="about" class="min-h-screen flex items-center" ref="root">
    <div class="grid md:grid-cols-2 gap-8 w-full">
      <div>
        <h2 class="text-3xl font-bold mb-4">关于我</h2>
        <p class="text-slate-300">专注前端与动效，追求体验与性能的平衡。</p>
      </div>
      <ul class="space-y-4">
        <li class="p-4 rounded bg-slate-800/60">本科 2017-2021</li>
        <li class="p-4 rounded bg-slate-800/60">前端工程师 2021-至今</li>
        <li class="p-4 rounded bg-slate-800/60">开源贡献与技术分享</li>
      </ul>
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
  const cards = root.value.querySelectorAll('li')
  gsap.from(cards, {
    scrollTrigger: {
      trigger: root.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power3.out'
  })
})
</script>

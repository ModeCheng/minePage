<template>
  <section id="showcase" ref="root" class="min-h-screen py-20">
    <div class="sticky top-20">
      <div class="text-3xl font-bold mb-6">展示</div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="p-6 rounded-xl bg-slate-800/60">
          <div class="h-32 rounded bg-slate-700"></div>
          <div class="mt-3 font-semibold">分镜 {{ i }}</div>
          <p class="text-slate-300">滚动驱动分镜动画</p>
        </div>
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
  const cards = root.value.querySelectorAll('.p-6')
  gsap.from(cards, {
    scrollTrigger: {
      trigger: root.value,
      start: 'top top',
      end: '+=1000',
      scrub: true,
      pin: true
    },
    y: (i: number) => i * 10,
    opacity: 0.3,
    stagger: 0.05
  })
})
</script>

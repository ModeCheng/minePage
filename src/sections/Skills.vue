<template>
  <section id="skills" class="min-h-screen py-20" ref="root">
    <h2 class="text-3xl font-bold mb-8">技能</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="s in skills" :key="s" class="group p-6 rounded-xl bg-slate-800/60 transform transition hover:-translate-y-1 hover:shadow-xl">
        <div class="text-xl font-semibold">{{ s }}</div>
        <div class="mt-2 h-1 bg-slate-700">
          <div class="h-1 bg-accent" :style="{ width: level(s) + '%' }"></div>
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
const skills = ['Vue', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind', 'Vite', 'Node.js', 'SEO']
function level(s: string) {
  const map: Record<string, number> = { Vue: 90, TypeScript: 85, GSAP: 80, 'Three.js': 70, Tailwind: 85, Vite: 80, 'Node.js': 65, SEO: 70 }
  return map[s] || 60
}

onMounted(() => {
  if (!root.value) return
  gsap.from(root.value.querySelectorAll('.group'), {
    scrollTrigger: { trigger: root.value, start: 'top 80%' },
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    ease: 'power3.out'
  })
})
</script>

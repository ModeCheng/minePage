<template>
  <section id="contact" class="min-h-screen py-20" ref="root">
    <h2 class="text-3xl font-bold mb-8">联系</h2>
    <form class="grid md:grid-cols-2 gap-6">
      <input class="p-3 rounded bg-slate-800/60" placeholder="姓名" />
      <input class="p-3 rounded bg-slate-800/60" placeholder="邮箱" />
      <textarea class="p-3 rounded bg-slate-800/60 md:col-span-2" rows="5" placeholder="留言"></textarea>
      <button type="button" class="px-6 py-3 rounded bg-primary hover:bg-accent transition md:col-span-2">发送</button>
    </form>
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
  gsap.from(root.value.querySelectorAll('input, textarea, button'), {
    scrollTrigger: { trigger: root.value, start: 'top 80%' },
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.5
  })
})
</script>

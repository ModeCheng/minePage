<template>
  <h1 ref="el" class="inline-block">
    <span v-for="(c,i) in chars" :key="i" class="inline-block opacity-0 translate-y-4">{{ c }}</span>
  </h1>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'

const props = defineProps<{ text: string, size?: string }>()
const el = ref<HTMLElement | null>(null)
const chars = computed(() => props.text.split(''))

onMounted(() => {
  if (!el.value) return
  const spans = el.value.querySelectorAll('span')
  gsap.to(spans, { opacity: 1, y: 0, stagger: 0.02, duration: 0.6, ease: 'power3.out' })
})
</script>

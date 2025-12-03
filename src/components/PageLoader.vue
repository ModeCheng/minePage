<template>
  <div v-if="visible" class="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl font-extrabold tracking-widest">{{ percent }}%</div>
      <div class="mt-4 h-1 w-64 bg-slate-800 mx-auto">
        <div class="h-1 bg-accent" :style="{ width: percent + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const visible = ref(true)
const percent = ref(0)
const emit = defineEmits(['done'])

onMounted(() => {
  gsap.to(percent, { value: 100, duration: 1.2, ease: 'power2.out', onUpdate: () => { percent.value = Math.round((percent as any).value) }, onComplete: () => {
    gsap.to('.fixed.inset-0', { opacity: 0, duration: 0.4, onComplete: () => { visible.value = false; emit('done') } })
  } })
})
</script>

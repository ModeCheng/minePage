<template>
  <section id="hero" ref="root" class="min-h-screen flex items-center justify-center text-center">
    <div class="space-y-6">
      <AnimatedHeading :text="'你好，这是我的个人网站'" />
      <p class="text-lg md:text-2xl text-slate-300">前端工程师，热爱动画与交互设计</p>
      <div class="flex gap-4 justify-center">
        <a v-magnetic class="px-6 py-3 rounded-full bg-primary hover:bg-accent transition">联系我</a>
        <a v-magnetic class="px-6 py-3 rounded-full border border-slate-600 hover:border-accent transition">查看项目</a>
      </div>
    </div>
    <canvas ref="canvas" class="absolute inset-0 -z-10"></canvas>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import AnimatedHeading from '../components/AnimatedHeading.vue'
import magnetic from '../directives/magnetic'

defineOptions({ directives: { magnetic } })

gsap.registerPlugin(ScrollTrigger)

const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let particles: THREE.Points | null = null

function init3D() {
  if (!canvas.value) return
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5
  const geometry = new THREE.BufferGeometry()
  const count = 800
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 8
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const material = new THREE.PointsMaterial({ color: 0x22d3ee, size: 0.02 })
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
  const animate = () => {
    requestAnimationFrame(animate)
    if (particles) particles.rotation.y += 0.001
    if (renderer && scene && camera) renderer.render(scene, camera)
  }
  animate()
}

function onResize() {
  if (!renderer || !camera) return
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

onMounted(() => {
  init3D()
  window.addEventListener('resize', onResize)
  if (root.value) {
    gsap.from(root.value.querySelectorAll('h1, p, a'), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
  renderer = null
  scene = null
  camera = null
  particles = null
})
</script>

<style scoped>
section {
  position: relative;
}
</style>

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export function useGsapScroll(elRef: () => HTMLElement | null, setup: (gsap: typeof import('gsap'), ScrollTrigger: typeof ScrollTrigger) => void) {
  onMounted(() => {
    setup(gsap, ScrollTrigger)
    ScrollTrigger.refresh()
  })
  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
}

import type { Directive } from 'vue'

const magnetic: Directive = {
  mounted(el) {
    const strength = 0.3
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const onLeave = () => {
      el.style.transform = 'translate(0,0)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  }
}

export default magnetic

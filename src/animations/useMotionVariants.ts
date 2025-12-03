import { useMotionTransitions, useMotionAnimate } from '@vueuse/motion'

export function useFadeIn(delay = 0) {
  const transitions = useMotionTransitions({
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { delay } },
    leave: { opacity: 0, y: -20 }
  })
  return transitions
}

export function useStagger(count: number, baseDelay = 0.06) {
  return Array.from({ length: count }, (_, i) => useFadeIn(baseDelay + i * baseDelay))
}

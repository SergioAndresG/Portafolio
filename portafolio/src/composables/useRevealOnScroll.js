import { ref, onMounted, onUnmounted } from 'vue'

// Revela una sección cuando realmente entra en el viewport (IntersectionObserver),
// en vez de comparar su posición contra fracciones de window.innerHeight, cálculo
// que fallaba en pantallas altas/grandes donde una sección podía "activarse" sin
// que el usuario hubiera hecho scroll hasta ella.
export function useRevealOnScroll(targetRef, { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const isVisible = ref(false)
  let observer

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
    }, { threshold, rootMargin })

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible }
}

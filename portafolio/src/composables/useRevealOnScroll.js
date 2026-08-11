import { ref, onMounted, onUnmounted } from 'vue'

// Revela una sección cuando realmente entra en el viewport (IntersectionObserver),
// en vez de comparar su posición contra fracciones de window.innerHeight, cálculo
// que fallaba en pantallas altas/grandes donde una sección podía "activarse" sin
// que el usuario hubiera hecho scroll hasta ella.
//
// threshold:0 + rootMargin negativo -> se revela con muy poco scroll (efecto dinámico),
// pero el margen sigue siendo mayor que el "peek" que dejan las secciones ancla
// (ver min-height de .hero-container en Home.vue) para que nada se muestre ya revelado
// en el primer render sin scroll.
export function useRevealOnScroll(targetRef, { threshold = 0, rootMargin = '0px 0px -12% 0px' } = {}) {
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

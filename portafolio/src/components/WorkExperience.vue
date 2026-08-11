<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const sectionRef = ref(null)
const { isVisible: ExperienceVisible } = useRevealOnScroll(sectionRef)

const circleProgress = ref(0)
const timelineHeight = ref(0)

// Posición calculada del círculo
// Posición calculada del círculo
const circleTop = computed(() => {
  const startOffset = 60 // Offset inicial del primer punto estático
  const availableHeight = timelineHeight.value // Altura disponible después del offset
  return startOffset + (circleProgress.value * availableHeight)
})

const experiences = ref([
  {
    position: 'Desarrollador de Sofware',
    company: 'SENA - Centro de Biotecnología Agropecuaria',
    location: '📍 Mosquera, Cundinamarca, Colombia',
    period: '04/2025 - 10/2025',
    type: 'project',
    typeLabel: 'Presencial',
    logo: 'https://senaterritorium.com/wp-content/uploads/logo-sena-verde-complementario.webp', 
    description: 'Desarrollé 2 sistemas de automatización para procesos administrativos del SENA, y una solución web reduciendo tiempos operativos.',
    achievements: [
      'Sistema F-165: Plataforma full-stack con autenticación JWT, firma digital con Canvas y generación de documentos (.xlsx).',
      'Arquitectura escalable con FastAPI, Vue.js 3 y MySQL',
      'RPA Inscripciones: Bot de Selenium que reduce tiempo en registro de aprendices dentro de la plataforma APE.',
      'Extractor de Empresas: Web scraping con validación de datos y generación automática de reportes Excel.',
    ],
    technologies: ['Vue.js', 'FastAPI', 'Python', 'Selenium', 'MySQL', 'JWT']
  },
])

const handleScroll = () => {
  const windowHeight = window.innerHeight

  const timeline = document.querySelector('.timeline')

  // Calcular posición del círculo
  if (timeline) {
    const timelineRect = timeline.getBoundingClientRect()
    const firstDot = document.querySelector('.timeline-dot-static')
    
    // Obtener offset real del primer punto
    const dotOffset = firstDot 
      ? (firstDot as HTMLElement).offsetTop 
      : 30
    
    // CAMBIO AQUÍ: Restar el offset inicial para calcular altura disponible
    timelineHeight.value = (timelineRect.height - dotOffset - 60) * 0.85 // Ajusta el -60 según necesites

    // Puntos de trigger
    const startTrigger = windowHeight * 0.7
    const endTrigger = windowHeight * 0.3
    
    if (timelineRect.top > startTrigger) {
      circleProgress.value = 0
    } else if (timelineRect.bottom < endTrigger) {
      circleProgress.value = 1
    } else {
      const totalScrollDistance = (timelineRect.height + startTrigger - endTrigger)
      const currentPosition = startTrigger - timelineRect.top
      
      circleProgress.value = Math.max(0, Math.min(1, currentPosition / totalScrollDistance))
    }
  }
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Llamar una vez al montar
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="experience-section" id="experience" ref="sectionRef">
    <!-- Línea divisora -->
    <div class="linea-container">
      <hr class="linea-scroll" :class="{ visible: ExperienceVisible }">
    </div>

    <!-- Header -->
    <div class="header" :class="{ 'visible': ExperienceVisible }">
      <h2 class="title">Experiencia Laboral</h2>
      <p class="subtitle">Mi trayectoria profesional</p>
    </div>

    <!-- Efectos de fondo -->
    <div class="background-effects">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <div class="container">
      <!-- Timeline -->
      <div class="timeline">
        
        <!-- Círculo que se mueve  -->
        <div 
          class="timeline-moving-dot"
          :style="{ top: circleTop + 'px' }"
        >
          <div class="dot-inner"></div>
          <div class="dot-glow"></div>
        </div>

        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="timeline-item"
          :class="{ 'right': index % 2 === 0, 'left': index % 2 !== 0 }"
        >
          <!-- Punto estático (opcional, puedes quitarlo) -->
          <div class="timeline-dot-static"></div>

          <!-- Contenido -->
          <div class="timeline-content">
            <span class="timeline-date">{{ exp.period }}</span>

            <div class="experience-card">
              <div class="company-logo" v-if="exp.logo">
                <img :src="exp.logo" :alt="exp.company" />
              </div>

              <h3 class="job-title">{{ exp.position }}</h3>

              <div class="company-info">
                <span class="company-name">{{ exp.company }}</span>
                <span class="location" v-if="exp.location">{{ exp.location }}</span>
              </div>

              <span class="job-type" :class="exp.type">{{ exp.typeLabel }}</span>

              <p class="job-description">{{ exp.description }}</p>

              <ul class="achievements" v-if="exp.achievements">
                <li v-for="achievement in exp.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>

              <div class="tech-stack">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* === RESET Y CONFIG GLOBAL === */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* === LÍNEAS === */
.linea-superior {
  width: 200px;
  height: 2px;
  background-color: rgba(240, 248, 255, 0.3);
  border: none;
  margin: 17px auto 0 2rem;
  transition: width 0.3s ease;
}
.linea-container {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}
.linea-scroll {
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg,
    rgba(154, 154, 154, 0.2) 0%,
    rgba(240, 248, 255, 0.6) 50%,
    rgba(154, 154, 154, 0.2) 100%
  );
  border: none;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 880px;
}

.linea-scroll.visible {
  width: 880px;
}

/* === EFECTOS DE FONDO === */
.experience-section {
  position: relative;
  padding: 5rem 0;
  min-height: 100vh;
  overflow: hidden; /* Prevenir overflow de blobs */
}

.background-effects {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.blob-1 {
  top: 10rem;
  left: -5rem; /* Ajustado para no desbordar */
  width: min(18rem, 50vw); /* Responsive */
  height: min(18rem, 50vw);
  background: #a855f7;
  animation: float 8s ease-in-out infinite;
}
.blob-2 {
  bottom: 5rem;
  right: -5rem; /* Ajustado para no desbordar */
  width: min(24rem, 60vw); /* Responsive */
  height: min(24rem, 60vw);
  background: #3b82f6;
  animation: float 10s ease-in-out infinite reverse;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
/* === CONTAINER === */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  margin-left: 6px;
}
/* === HEADER === */
.header {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(-40px);
  transition: all 0.7s ease;
}

.header.visible {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #cbd5e1;
}
/* === TIMELINE === */
.timeline {
  position: relative;
  padding: 2rem 0;
  /* ELIMINAR transform: translateX(22%); que causa overflow */
}
/* Línea vertical central */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%; /* Centrado */
  width: 1.5px;
  background: linear-gradient(
    180deg,
    transparent,
    #44a2ff 10%,
    #44a2ff 70%,
    transparent
  );
  transform: translateX(-50%);
}
/* === TIMELINE ITEMS === */
.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
/* Punto en la línea */
.timeline-dot {
  position: absolute;
  top: 30px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #44a2ff, #7d4af5);
  border: 4px solid #1e293b;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(68, 162, 255, 0.2);
  animation: pulse 2s infinite;
}

.timeline-moving-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
}

.dot-inner {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #44a2ff, #44a2ff);
  border: 3px solid #0f172a;
  border-radius: 50%;
  box-shadow: 
    0 0 15px rgba(68, 162, 255, 0.6),
    0 0 30px rgba(125, 74, 245, 0.4);
  position: relative;
  z-index: 2;
}

.dot-glow {
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    rgba(68, 162, 255, 0.5) 0%,
    rgba(125, 74, 245, 0.2) 40%,
    transparent 70%
  );
  border-radius: 50%;
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 4px rgba(68, 162, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(68, 162, 255, 0.1);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.4;
  }
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .timeline-moving-dot {
    left: 10px;
    transform: translateX(0);
  }
  
  .timeline-dot-static {
    left: 10px;
    transform: translateX(0);
  }
}

/* === CONTENIDO DEL TIMELINE === */
.timeline-content {
  width: 45%; /* Reducido para evitar overflow */
  position: relative;
}

/* Items a la izquierda */
.timeline-item.left .timeline-content {
  margin-right: 55%;
  text-align: right;
}

/* Items a la derecha */
.timeline-item.right .timeline-content {
  margin-left: 55%;
  text-align: left;
}

/* === FECHA === */
.timeline-date {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(68, 162, 255, 0.1);
  border: 1px solid rgba(68, 162, 255, 0.3);
  border-radius: 9999px;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* === CARD DE EXPERIENCIA === */
.experience-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid #475569;
  border-radius: 1rem;
  padding: 1.75rem;
  margin-top: 0.75rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}
.experience-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(68, 162, 255, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.experience-card:hover {
  border-color: #64748b;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}
.experience-card:hover::before {
  opacity: 1;
}

/* === LOGO DE EMPRESA === */
.company-logo {
  width: 60px;
  height: 60px;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* === TEXTOS === */
.job-title {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #44a2ff;
  margin-bottom: 1rem;
}

.company-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #cbd5e1;
  font-size: 0.9375rem;
}

.company-name,
.location {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

/* === JOB TYPE === */
.job-type {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.job-type.project {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
}

/* === DESCRIPCIÓN Y LOGROS === */
.job-description {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.achievements {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0;
}

.achievements li {
  color: #cbd5e1;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: bold;
}

/* === TECH STACK === */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.5);
}

.tech-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: rgba(68, 162, 255, 0.1);
  border: 1px solid rgba(68, 162, 255, 0.3);
  border-radius: 0.375rem;
  color: #60a5fa;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  will-change: transform;

}

.tech-badge:hover {
  background: rgba(68, 162, 255, 0.2);
  border-color: rgba(68, 162, 255, 0.5);
  transform: translateY(-5px);
  cursor: pointer;
}
/* === RESPONSIVE === */
@media (max-width: 768px) {
  .timeline::before {
    left: 10px;
  }

  .timeline-dot {
    left: 10px;
  }

  .timeline-item {
    justify-content: flex-start;
  }

  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    width: calc(100% - 60px);
    margin-left: 40px;
    margin-right: 0;
    text-align: left;
  }

  .company-info {
    justify-content: flex-start;
  }

  .blob-1, .blob-2 {
    width: 10rem;
    height: 10rem;
  }
}

@media (max-width: 576px) {
  .experience-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .header {
    margin-bottom: 3rem;
  }

  .timeline-date {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }

  .experience-card {
    padding: 1.25rem;
  }

  .job-title {
    font-size: 1.25rem;
  }

  .tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
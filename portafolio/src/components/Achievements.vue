<script setup lang="ts">
import { ref } from 'vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const sectionRef = ref(null)
const { isVisible: achievementVisible } = useRevealOnScroll(sectionRef)
</script>

<template>
    <section class="achievements-section" ref="sectionRef">

        <!--Linea divisora-->
        <div class="linea-container" id="achievements">
            <hr class="linea-scroll" :class="{ visible: achievementVisible }">
        </div>

        <div class="header" :class="{ 'visible': achievementVisible }">
            <h2 class="title">Logros</h2>
            <p class="subtitle">
                 Logros en mi carrera como Dev
            </p>
        </div>

            <div class="header">
            <h2 class="title">Logros</h2>
            <p class="subtitle">Logros en mi carrera como Dev</p>
            </div>
            <div class="achievement-card">
                <!-- Header con icono e info -->
                <div class="achievement-header">
                    <div class="icon-wrapper">
                    </div>
                    <div class="container-trophy">
                        <svg class="svg-icon" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                            <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z">
                            </path>
                        </svg>  
                        <div class="container__star">
                            
                            <div class="star-eight"></div>
                        </div>
                    
                    <div></div></div>
                    <div class="header-content">
                    <h3 class="achievement-title">SENA Soft 2024</h3>
                    <div class="achievement-meta">
                        <span class="meta-tag category">Desarrollo Integral</span>
                    </div>
                </div>
            </div>

            <!-- Descripción -->
            <p class="achievement-description">
                Junto a un equipo de dos desarrolladores, diseñamos e implementamos una 
                solución integral en 7 días para la categoría de Desarrollo Integral. 
                Presentamos el proyecto ante el jurado de Globant en Cali, obteniendo 
                el primer lugar por innovación y ejecución de nuestra propuesta.
            </p>

            <!-- Stats destacadas -->
            <div class="achievement-stats">
                <div class="stat-item">
                <div class="stat-number">7</div>
                <div class="stat-label">Días intensivos</div>
                </div>
                <div class="stat-item">
                <div class="stat-number">3</div>
                <div class="stat-label">Desarrolladores</div>
                </div>
                <div class="stat-item">
                <div class="stat-number">1°</div>
                <div class="stat-label">Puesto</div>
                </div>
            </div>

            <!-- Lo que aprendí -->
            <div class="learnings">
                <h4 class="learnings-title">Lo que aprendí:</h4>
                <ul class="learnings-list">
                <li>
                    <span class="check-icon">✓</span>
                    Desarrollo efectivo bajo presión y plazos ajustados
                </li>
                <li>
                    <span class="check-icon">✓</span>
                    Importancia de la comunicación clara en equipos
                </li>
                <li>
                    <span class="check-icon">✓</span>
                    Cómo presentar soluciones técnicas a stakeholders
                </li>
                </ul>
            </div>

            <!-- Tecnologías usadas -->
            <div class="tech-stack">
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">Git</span>
                <span class="tech-badge">Trabajo en equipo</span>
                <span class="tech-badge">Gestión de Tiempo</span>
            </div>

            <!-- Footer con ubicación -->
            <div class="achievement-footer">
                <span class="location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Cali - Valle del Cauca
                </span>
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

/* === SECCIÓN PRINCIPAL === */
.achievements-section {
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  overflow: hidden;
}

/* === LÍNEA DIVISORA === */
.linea-container {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 100%;
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

/* Header */
.header {
  text-align: center;
  margin-bottom: -2.8rem;
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
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #cbd5e1;
}

/* === TROPHY CONTAINER === */
.container-trophy {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: 900;
  color: #e10600;
  position: relative;
  transition: all 1s ease;
  text-align: center;
  top: 0.5rem;
}

.container__star {
  transition: all .7s ease-in-out;
}

.first {
  position: absolute;
  top: 20px;
  left: 0; /* Ajustado para no desbordar */
  right: 0;
  margin: 0 auto;
  width: fit-content;
  transition: all .7s ease-in-out;
}

.svg-icon {
  position: absolute;
  fill: #e94822;
  z-index: 1;
}

.star-eight {
  background: #efd510;
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
  animation: rot 3s infinite;
}

.star-eight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  background: #efd510;
  transform: rotate(135deg);
}

.container-trophy:hover .container__star {
  transform: rotateX(70deg) translateY(50px);
  box-shadow: 0px 0px 120px -100px #e4e727;
}

.container-trophy:hover .svg-icon {
  animation: grow 1s linear infinite;
}

/* === CARD PRINCIPAL === */
.achievement-card {
  position: relative;
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid #475569;
  border-radius: 1.5rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  overflow: hidden;
  transition: all 0.4s ease;
}

.achievement-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(68, 162, 255, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.achievement-card:hover {
  border-color: #64748b;
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(68, 162, 255, 0.3);
}

.achievement-card:hover::before {
  opacity: 1;
}

/* === HEADER DE LA CARD === */
.achievement-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.header-content {
  flex: 1;
  min-width: 0; /* Importante para text overflow */
}

.achievement-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-wrap: break-word;
}

.achievement-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.meta-tag {
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;
  font-size: clamp(0.75rem, 1.5vw, 0.8125rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.meta-tag.category {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: #a855f7;
}

/* === DESCRIPCIÓN === */
.achievement-description {
  color: #cbd5e1;
  line-height: 1.7;
  font-size: clamp(0.875rem, 2vw, 1rem);
  margin-bottom: 2rem;
}

/* === STATS === */
.achievement-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  background: linear-gradient(135deg, #44a2ff, #7d4af5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  color: #94a3b8;
}

/* === LEARNINGS === */
.learnings {
  margin-bottom: 1.5rem;
}

.learnings-title {
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1rem;
}

.learnings-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.learnings-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: #cbd5e1;
  line-height: 1.6;
}

.check-icon {
  color: #4ade80;
  font-weight: bold;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

/* === TECH STACK === */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(71, 85, 105, 0.3);
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
  background: rgba(68, 162, 255, 0.1);
  border: 1px solid rgba(68, 162, 255, 0.3);
  border-radius: 0.5rem;
  color: #60a5fa;
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(68, 162, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(68, 162, 255, 0.3);
}

/* === FOOTER === */
.achievement-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(71, 85, 105, 0.3);
  flex-wrap: wrap;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: clamp(0.875rem, 1.5vw, 0.9375rem);
}

/* === ANIMACIONES === */
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(340deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes grow {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .achievements-section {
    width: 100%;
    padding: 0 1rem;
  }

  .achievement-card {
    padding: 1.5rem;
  }

  .achievement-header {
    flex-direction: column;
    text-align: center;
  }

  .achievement-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .floating-badge {
    position: static;
    margin: 0 auto 1.5rem;
    width: fit-content;
  }
}

@media (max-width: 480px) {
  .achievements-section {
    padding: 0 0.75rem;
  }

  .achievement-card {
    padding: 1rem;
    border-radius: 1rem;
  }

  .tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .learnings-list li {
    font-size: 0.875rem;
  }
}
</style>
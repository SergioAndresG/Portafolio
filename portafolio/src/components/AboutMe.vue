<script setup lang="ts">
    import { ref } from 'vue'
    import { useRevealOnScroll } from '../composables/useRevealOnScroll'

    const sectionRef = ref(null)
    const { isVisible: aboutMeVisible } = useRevealOnScroll(sectionRef)
</script>
<template>
  <section class="about-me-container" ref="sectionRef">
      <!-- Línea animada con scroll -->
      <div class="linea-container"  id="about-me">
          <hr class="linea-scroll" :class="{ visible: aboutMeVisible }">
      </div>
      <!-- Header -->
      <div class="header" :class="{ 'visible': aboutMeVisible }">
        <h2 class="title enfasis-azul">Sobre Mi</h2>
      </div>

      <div class="about-content"  >
          <p>
              ¡Hola!, soy Sergio Andrés, Tecnólogo en Análisis y Desarrollo de Software.
          </p>
          <p>
              Para mí, el desarrollo es mucho más que escribir código, es dar vida a <span class="enfasis">soluciones que mejoran la vida de las personas.</span> 
          </p>
          <p> 
              Tengo experiencia en desarrollo web, <span class="enfasis">Full-Stack</span> creando proyectos donde la lógica y el diseño se 
              unen para lograr experiencias funcionales y atractivas.
              Fuera del código, soy una persona <span class="enfasis">colaborativa</span>, <span class="enfasis">empática</span> y 
              <span class="enfasis">aprendo rápido</span>.
          </p>
          <p>
              Me gusta trabajar en equipo, conocer a las 
              personas detrás de cada proyecto y aprender de ellas,
              creo que las mejores soluciones nacen del entendimiento y las ideas compartidas.
          </p>
      </div>
  </section>
</template>

<style scoped>
/* === LÍNEAS DIVISORAS === */
.linea-container {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
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
/* === SECCIÓN SOBRE MÍ === */
.about-me-container {
  text-align: left;
  transition: opacity 1s ease, transform 1s ease;
}

.about-me-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-me {
  color: #ffffff;
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 900;
  letter-spacing: 1px;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.about-content {
  color: #D0D0D0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
}

.enfasis-azul {
  color: #59acff;
}

.enfasis {
  color: #e8e8e8;
  font-weight: bolder;
}

.about-content p {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .about-me-container{
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
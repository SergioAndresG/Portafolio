<script setup lang="ts">
import { ref } from 'vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const sectionRef = ref(null)
const { isVisible: contactVisible } = useRevealOnScroll(sectionRef)
const cvPath = new URL('../assets/cv/SergioCV.pdf', import.meta.url).href
</script>

<template>
    <section class="contact-section" id="contact-me" ref="sectionRef">
        <!--Linea divisora-->
        <div class="linea-container">
            <hr class="linea-scroll" :class="{ visible: contactVisible }">
        </div>
        <div class="header" :class="{ 'visible': contactVisible }">
            <h2 class="title">Contacto</h2>
            <p class="subtitle">
                ¿Tienes un proyecto en mente? Hablemos
            </p>
        </div>
        <!-- FILA 1: EMAIL PRINCIPAL -->
        <div class="contact-grid">
            <a href="mailto:sergiogarcia3421@gmail.com" class="contact-card primary">
                <div class="icon">📧</div>
                <div class="label">Email</div>
                <div class="value">sergiogarcia3421@gmail.com</div>
            </a>
        </div>
        <!-- FILA 2: CV + WHATSAPP -->
        <div class="contact-grid secondary">
            <a :href="cvPath" target="_blank" class="contact-card">
                <div class="icon">📄</div>
                <div class="label">Curriculum</div>
                <div class="value">Descargar PDF</div>
            </a>
            <a href="https://wa.me/573046145101" target="_blank" class="contact-card">
                <div class="icon">💬</div>
                <div class="label">WhatsApp</div>
                <div class="value">+57 304 614 5101</div>
            </a>
        </div>
        <!-- FOOTER -->
        <div class="footer-note">
            <p>📍 Colombia • Disponible remoto o híbrido</p>
        </div>
    </section>
</template>

<style scoped>
.linea-container{
    display: flex;
    justify-content: center;
    padding: 0 2rem;
}
.linea-scroll{
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
.contact-section {
  padding: 5rem 2rem;
  text-align: center;
}
.contact-section h2 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
}
.subtitle {
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
.contact-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.contact-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1.5px solid #334155;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 310px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}
.contact-card.primary {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}
.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(96, 165, 250, 0.3);
  border-color: #60a5fa;
}
.contact-card .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.contact-card .label {
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.contact-card .value {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}
.footer-note {
  color: #64748b;
  font-size: 1rem;
}
</style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

// Estado para controlar si el menú está abierto o cerrado
const isMenuOpen = ref(false);

// Evita que el scroll del menú móvil se propague a la página de fondo
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Estado para detectar el scroll
const scroll = ref(false)

// Estado para detectar si estamos cerca del top
const isNearTop = ref(true)

const handleScroll = () => {
  const isMobile = window.innerWidth <= 768
  
  // Solo aplicar efecto scroll en desktop
  scroll.value = !isMobile && window.scrollY > 50

  scroll.value = window.scrollY > 50 // Cuando el usuario baja mas de 50px

  // Si el scroll es mayor a 100px, no estamos en el top
  isNearTop.value = window.scrollY < 50
}


const scrollTo = (id: string) => {
  if (id === 'home') {
    window.scrollTo({top: 0, behavior: 'smooth'})
    isMenuOpen.value = false
    return
  }

    const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false // se cierra el Menú
  }
}

// Función para toggle (abrir/cerrar) el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Función para cerrar el menú cuando se hace click en un link
const closeMenu = () => {
  isMenuOpen.value = false
}

const firstLinkText = computed(() => {
  return isNearTop.value? 'Sobre mi' : 'Inicio'
})

const handleFirstLink = () => {
  if (isNearTop.value) {
    // Si estamos arriba, ir a About-Me
    scrollTo('about-me')
  } else {
    // Si hemos dado scroll ir a Home
    scrollTo('home')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // Aquí estaba mal, debería ser removeEventListener
})
</script>

<template>
  <header :class="{scroll: scroll}">
    <!-- Botón hamburguesa -->
    <button 
      class="hamburger-button"
      :class="{ 'active': isMenuOpen, 'scroll': scroll }"
      @click="toggleMenu"
      aria-label="Menu"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <nav class="nav-container" :class="{scroll:scroll}">
      <!-- Menú (se muestra/oculta con la clase 'open') -->
      <ul 
        class="ul-container"
        :class="{ 'open': isMenuOpen }"
      >
        <li class="li-container">
          <a @click="handleFirstLink" :class="{'is-home': !isNearTop}">{{ firstLinkText }}</a>
        </li>
        <li class="li-container">
          <a @click="scrollTo('stack')">Stack</a>
        </li>
        <li class="li-container">
          <a @click="scrollTo('projects')">Proyectos</a>
        </li>
        <li class="li-container">
          <a @click="scrollTo('experience')">Experiencia</a>
        </li>
        <li class="li-container">
          <a @click="scrollTo('achievements')">Logros</a>
        </li>
        <li class="li-container">
          <a @click="scrollTo('contact-me')">Contacto</a>
        </li>
      </ul>

      <!-- Overlay oscuro cuando el menú está abierto -->
      <div 
        class="overlay"
        :class="{ 'show': isMenuOpen }"
        @click="closeMenu"
      ></div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease-in-out;
}

header.scroll {
  width: min(900px, 90%);
  height: 3rem;
  border: solid 1px #efefef;
  border-radius: 50px;
  margin: 0.5rem auto;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.693);
}

header.scroll a {
  font-size: 0.9rem;
}

a.is-home {
  color: #1E90FF !important;
  font-weight: 600;
}

a.is-home::before {
  content: '↑ ';
  font-size: 0.9em;
  margin-right: 3px;
  display: inline-block;
  animation: bounceArrow 1.5s ease infinite;
}

.nav-container {
  justify-content: center;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 0.5rem;
}

.nav-container.scroll {
  margin-top: -8px;
  transition: all 0.4s ease-in-out;
}

/* ========== BOTÓN HAMBURGUESA ========== */
.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 55px;
  height: 47px;
  background: rgba(15, 15, 25, 0.8);
  border: 1px solid rgba(30, 144, 255, 0.6);
  border-radius: 45%;
  cursor: pointer;
  padding: 13px;
  z-index: 10000;
  position: fixed;
  top: 15px;
  right: 20px;
  transition: all 0.3s ease;
  animation: floatGlow 4s ease-in-out infinite;
}

/* Las 3 líneas del hamburguesa */
.line {
  width: 100%;
  height: 3px;
  background: rgb(255, 255, 255) !important;
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Animación cuando está activo (X) */
.hamburger-button.active .line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
  background: #1E90FF !important;
}

.hamburger-button.active .line:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger-button.active .line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
  background: #1E90FF !important;
}

/* Hover del botón */
.hamburger-button:hover .line {
  background: #1E90FF !important;
}

.hamburger-button::before,
.hamburger-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #1E90FF;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: none;
}

.hamburger-button.active::before {
  animation: ripple 0.6s ease-out forwards;
}

.hamburger-button.active::after {
  animation: ripple 0.6s ease-out 0.15s forwards;
}

/* Hover más intenso */
.hamburger-button:hover {
  border-color: #1E90FF;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(30, 144, 255, 0.5);
}

.hamburger-button.active {
  animation: none;
  transform: translateY(0);
  background: rgba(30, 144, 255, 0.15);
  border-color: #1E90FF;
  box-shadow: 
    0 0 20px rgba(30, 144, 255, 0.6),
    inset 0 0 10px rgba(30, 144, 255, 0.1);
}

@keyframes ripple {
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
  }
}

@keyframes floatGlow {
  0%, 100% {
    transform: translateY(0);
    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.3),
      0 0 10px rgba(30, 144, 255, 0.2);
    border-color: rgba(30, 144, 255, 0.5);
  }
  50% {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 25px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(30, 144, 255, 0.4);
    border-color: rgba(30, 144, 255, 0.8);
  }
}

/* ========== MENÚ ========== */
.ul-container {
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  transition: all 0.3s ease;
}

.li-container {
  list-style: none;
  display: inline-block;
  margin: 0 15px;
}

.li-container::after {
  content: "/";
  color: rgb(255, 255, 255);
  position: relative;
  left: 15px;
}

.li-container:last-child::after {
  content: "";
}

a {
  text-decoration: none;
  color: rgb(129, 129, 129) !important;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  padding: 20px;
  cursor: pointer;
}

a:hover {
  color: #1E90FF !important;
  transform: translateY(-5px);
}

/* Overlay oscuro */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 9997;
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}

/*Animación de la flecha */
@keyframes bounceArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) { 
  /* Header en móviles */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transform: none;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    height: 60px;
    border-radius: 0;
  }

  header.scroll {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.95);
  }
  
  header.scroll {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.95);
  }

  header.scroll a {
    font-size: 0.95em;
  }

  /* Mostrar el botón hamburguesa en móviles */
  .hamburger-button {
    display: flex;
    right: 20px;
  }

  /* Ajustar nav container en móvil */
  .nav-container {
    margin-top: 0;
    height: 100%;
    align-items: center;
  }

  .nav-container.scroll {
    margin-top: 0;
  }

  /* El menú se convierte en un panel lateral */
  .ul-container {
    position: fixed;
    top: 0;
    right: -100%; /* Empieza fuera de la pantalla */
    width: 70%;
    max-width: 150px;
    height: 100vh;
    background: rgba(15, 15, 25, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 30px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 9999;
  }

  /* Cuando está abierto */
  .ul-container.open {
    right: 0;
  }

  /* Items del menú en móvil */
  .li-container {
    margin: 20px 0;
    width: 100%;
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.3s ease;
  }

  /* Animación de entrada de los items */
  .ul-container.open .li-container {
    opacity: 1;
    transform: translateX(0);
  }

  /* Delay escalonado para cada item */
  .ul-container.open .li-container:nth-child(1) {
    transition-delay: 0.1s;
  }
  .ul-container.open .li-container:nth-child(2) {
    transition-delay: 0.2s;
  }
  .ul-container.open .li-container:nth-child(3) {
    transition-delay: 0.3s;
  }
  .ul-container.open .li-container:nth-child(4) {
    transition-delay: 0.4s;
  }
  .ul-container.open .li-container:nth-child(5) {
    transition-delay: 0.5s;
  }
  .ul-container.open .li-container:nth-child(6) {
    transition-delay: 0.6s;
  }

  /* Quitamos el "/" en móvil */
  .li-container::after {
    content: "";
  }

}

/* Para pantallas muy pequeñas */
@media (max-width: 480px) {
  .hamburger-button {
    top: 18px;
    right: 15px;
  }
  
  .ul-container {
    width: 80%;
  }
}
</style>
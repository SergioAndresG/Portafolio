<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const sectionRef = ref(null)
const { isVisible: ProjectVisible } = useRevealOnScroll(sectionRef)

onMounted(() => {
    setTimeout(() => {
        visible.value = true
    }, 100)
})

const visible = ref(false)

const projectsIcons = ref({
    iconPython: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    iconFatApi: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    iconJavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    iconVueJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    iconReact: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    iconMySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    iconGit: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    iconGithub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    iconDocker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    iconVite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    iconSelenium: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
    iconTypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    iconTailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    iconNuxt: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg'
});

const projects = ref([
    {
        id: 1,
        title: 'Automatización Masiva de \nInscripciones',
        description: 'Bot de automatización de ingreso repetitivo de usuarios a la APE (Agencia Publica de Empleo), con interfaz de escritorio.',
        icon: "https://i.postimg.cc/8Cv9fJXG/atomatizacion.png",
        techs: ['iconPython', 'iconSelenium'],
        color: '#68a063',
        category: 'Backend',
        githubRepositorie: "https://github.com/SergioAndresG/Inscritos-AgenciaPublicadeEmpleo-SENA"
    },
    {
        id: 2,
        title: 'Gestor de Formatos\nF-165',
        description: 'Aplicativo web encargado de generar y gestionar reportes f-165 (Etapa Productiva).',
        icon: "https://i.postimg.cc/26mgHG97/Captura-de-pantalla-2025-10-29-111936.png",
        techs: ['iconPython', 'iconFatApi', 'iconVueJs', 'iconMySQL', 'iconTypeScript'],
        color: '#68a063',
        category: 'Full Stack',
        githubRepositorie: "https://github.com/SergioAndresG/ObtenerEmpresas-AgenciaPublicaDeEmpleo-SENA"

    },
    {
      id: 3,
      title: 'Coffe - Bike \n Sistema POS para Cafetería',
      description: 'Aplicación full-stack para gestión de inventario, pedidos de los clientes y ventas.',
      icon: 'https://i.postimg.cc/zvjWwxsB/Captura-de-pantalla-2025-10-30-171308.png',
      techs: ['iconPython', 'iconFatApi', 'iconVueJs', 'iconMySQL', 'iconDocker', 'iconTypeScript'],
      color: '#68a063',
      category: 'Full Stack',
      githubRepositorie: "https://github.com/SergioAndresG/GestorF-165"

    },
    {
      id: 4,
      title: 'Automatización \nConsultas de empresas',
      description: 'Automatización que obtiene información basica de las empresas registradas en la APE.',
      icon: 'https://i.postimg.cc/NF29zFCJ/Captura-de-pantalla-2025-11-29-233701.png',
      techs: ['iconPython', 'iconSelenium'],
      color: '#68a063',
      category: 'Backend',
      githubRepositorie: "https://github.com/SergioAndresG/CoffeBike"

    },
    {
      id: 5,
      title: 'Mi Ser\nTienda de Vinos Artesanales',
      description: 'Catálogo web para "Mi Ser", marca de vinos artesanales elaborados con frutas colombianas en distintos sabores, con pedidos gestionados por WhatsApp.',
      icon: 'https://i.ibb.co/S4KFvy2K/Captura-de-pantalla-2026-08-11-163614.png"',
      techs: ['iconVueJs', 'iconNuxt', 'iconTailwind'],
      color: '#68a063',
      category: 'Full Stack',
      githubRepositorie: "",
      status: 'in-progress'
    }
]);
</script>

<template>


    <section class="project-section" ref="sectionRef" :class="{'visible': ProjectVisible}" id="projects">
        <!-- Línea animada con scroll -->
        <div class="linea-container" >
            <hr class="linea-scroll" :class="{ visible: ProjectVisible }">
        </div>
        <!-- Header principal -->
        <div class="header" :class="{ visible }">
            <h2 class="title">Proyectos</h2>
            <p class="subtitle">
                Algunos proyectos en los que he trabajado
            </p>
        </div>

        <div class="container">
            <div class="project-grid">
              <div v-for="project in projects" 
              :key="project.id" 
              class="project-wrapper">
                <div  class="project-card" :class="{ 'in-progress': project.status === 'in-progress' }">
                    <h3 class="project-title" :style="{ 'white-space': 'pre-wrap' }">{{ project.title }}</h3>
                    <div class="project-icon">
                        <span v-if="project.status === 'in-progress'" class="status-badge">En progreso</span>
                        <img :src="project.icon" :alt="project.title" />
                    </div>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="container-techs">
                        <img
                          v-for="tech in project.techs"
                          :key="tech"
                          :src="projectsIcons[tech]"
                          :alt="tech"
                          :title="tech.replace('icon', '')"
                          class="tech-icon">
                    </div>
               </div> 
                <div class="button-wrapper">
                  <a
                    v-if="project.githubRepositorie"
                    :href="project.githubRepositorie"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="buttom-modal"
                  >
                    Ver en GitHub
                  </a>

                  <button
                    v-else-if="project.status === 'in-progress'"
                    class="buttom-modal disabled"
                    disabled
                  >
                    Repositorio pronto
                  </button>

                  <button
                    v-else
                    class="buttom-modal disabled"
                    disabled
                  >
                    Código privado
                  </button>
                </div>   
              </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.linea-container {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
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
/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(-40px);
  transition: all 0.7s ease;
}
.header.visible {
  opacity: 1;
  transform: translateY(0);
}
.title {
  font-size: clamp(2rem, 5vw, 3em);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #cbd5e1;
  transition-delay: 150ms;
}
.project-section{
  overflow: hidden;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.3rem;
  padding: 1.5rem;
  margin-bottom: 0;
  transition: border-color 0.3s ease;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 1.4rem;
  position: relative;
  z-index: 10;
  text-align: center;
}
.project-icon {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
}
.project-icon img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(1);
  filter: brightness(0.85) contrast(1.05);
}
.status-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(217, 119, 6, 0.9);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0.35rem 0.75rem;
  border-radius: 10rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.status-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  animation: pulse-dot 1.6s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.project-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 36px;
}
/* Brillo diagonal animado */
.project-icon::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -100%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
/* Opcional: Borde brillante */
.project-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 1rem 1rem 0 0;
  background: linear-gradient(135deg, #44a2ff, #7d4af5) border-box;
  -webkit-mask: 
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-icon::before {
  opacity: 1;
}
.project-card.in-progress .project-icon::before {
  background: linear-gradient(135deg, #f59e0b, #f97316) border-box;
}
.project-card {
  position: relative;
  border: 2px solid #475569;
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.25rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}
.project-card:hover {
  transform: translateY(-8px);
}
.project-card:hover .project-icon img {
  transform: scale(1.1) ;
  filter: brightness(1.05) contrast(1.1);
}
.project-card:hover .card-overlay {
  opacity: 1;
  pointer-events: auto;
}
.project-card:hover .project-icon::after {
  left: 150%; /* ← El brillo cruza de izquierda a derecha */
}
.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #44a2ff;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.project-card:hover .project-title {
  color: #60b5ff;             
}

.project-description{
  margin: 0.75rem 0 1rem;
  font-size: 1rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  border-bottom: solid #475569 1px;
  padding-bottom: 0.75rem;
  min-height: 3.5rem;
}

.container-techs{
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  margin-bottom: 0.75rem;
}
.tech-icon {
  width: 1.6rem;
  height: 1.6rem;
  padding: 0.5rem;                              
  background: rgba(1, 13, 24, 0.1);         
  border: 1px solid rgba(68, 162, 255, 0.3);  
  border-radius: 20%;                          
  transition: all 0.3s ease;
  cursor: pointer;
}
.tech-icon:hover {
  background: rgba(68, 162, 255, 0.2);
  border-color: rgba(68, 162, 255, 0.6);
  transform: scale(1.1) translateY(-4px);
  box-shadow: 0 8px 16px rgba(68, 162, 255, 0.3);
}
.buttom-modal{
  bottom: 0;
  left: 50%;
  position: absolute;
  width: max-content;
  min-width: 115px;
  white-space: nowrap;
  padding:  0.875rem 1.5rem;
  border: none;
  border-radius: 10rem;
  font-weight: bold;
  font-size: clamp(0.5rem, 0.9rem, 3rem);
  text-decoration: none;
  border: none;
  background-color: #44a2ff;
  color: white;
  box-shadow: 0px 10px 10px rgb(60, 158, 255) inset,
  0px 5px 10px rgba(5, 5, 5, 0.212),
  0px -10px 10px rgb(58, 124, 255) inset;
  cursor: pointer;
  transition: all 0.3s ease 0.1s;

  opacity: 0;
  transform: translate(-50%, 0);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.256, 1.55);
  box-shadow:  0 0 0 rgba(68, 162, 255, 0);
  pointer-events: none;
  z-index: 3;
}
.project-wrapper:hover .buttom-modal {
  opacity: 1;
  transform: translate(-50%, -20px);
  box-shadow: 0 8px 20px rgba(68, 162, 255, 0.4);
  pointer-events: auto; 
} 

.project-wrapper:hover .project-card {
  transform: translateY(-10px);
  border-color: #64748b;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.buttom-modal:hover{
  background-color: #4892f3;
  animation: jello-horizontal 0.9s both;
}
.buttom-modal::before {
  width: 63%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}
.buttom-modal::after {
  width: 70%;
  height: 2px;
  position: absolute;
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}
@keyframes jello-horizontal {
  0% {
    transform: translate(-50%, -22px) scale3d(1, 1, 1);
  }
  30% {
    transform: translate(-50%, -22px) scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: translate(-50%, -22px) scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: translate(-50%, -22px) scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: translate(-50%, -22px) scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: translate(-50%, -22px) scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: translate(-50%, -22px) scale3d(1.05, 1.05, 1);
  }
}
@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: 1fr; /* ← 1 columna en tablet */
    gap: 1.5rem;
  }

  .buttom-modal{
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .buttom-modal{
    opacity: 1;
  }

  .project-icon {
    height: 200px;              /* ← Imagen más pequeña en móvil */
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .container-techs {
    justify-content: center;    /* ← Centrar en móvil */
  }
}

</style>
<script setup lang="ts">


import { icon } from '@fortawesome/fontawesome-svg-core'
import { ref, onMounted } from 'vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const sectionRef = ref(null)
const { isVisible: StackVisible } = useRevealOnScroll(sectionRef)

const techs = ref([
  {
    name: 'Python',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: 'Backend',
    color: '#68a063'
  },
  {
    name: 'Fast Api',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    category: 'Backend',
    color: '#68a063'
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    category: 'Backend',
    color: '#f05032'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    category: 'Frontend',
    color: '#f05032'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    category: 'Frontend',
    color: '#264de4'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    category: 'Frontend',
    color: '#61dafb'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    category: 'Frontend',
    color: '#dbe45d4d'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    category: 'Frontend',
    color: '#42b883'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    category: 'Frontend',
    color: '#61dafb'
  },
  {
    name: 'Nuxt',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
    category: 'Frontend',
    color: '#00dc82'
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    category: 'Frontend',
    color: '#38bdf8'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    category: 'Database',
    color: '#2496ed'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    category: 'Database',
    color: '#336791'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    category: 'Tools',
    color: '#f05032'
  },
  {
    name: 'GitLab',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
    category: 'Tools',
    color: '#fc6d26'
  },
  {
    name: 'GitLab CI/CD',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
    category: 'Tools',
    color: '#fc6d26'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    category: 'Tools',
    color: '#f0f8ff4d'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    category: 'Tools',
    color: '#2496ed'
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    category: 'Tools',
    color: '#ab4bfe'
  },
])

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 100)
})
</script>

<template>


  <section class="tech-stack-section" id="stack" ref="sectionRef" :class="{'visible': StackVisible}">
    <!-- Línea animada con scroll -->
    <div class="linea-container" >
      <hr class="linea-scroll" :class="{ visible: StackVisible }">
    </div>
    <!-- Efectos de fondo -->
    <div class="background-effects">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <div class="container">
      <!-- Header principal -->
      <div class="header" :class="{ visible }">
        <h2 class="title">Tech Stack</h2>
        <p class="subtitle">
          Tecnologías que domino y utilizo en mis proyectos
        </p>
      </div>

      <!-- BACKEND -->
      <div class="tech-category">
        <h3 class="tech-title">Backend</h3>
        <div class="tech-grid tech-grid-small">
          <div
            v-for="(tech, index) in techs.filter(t => t.category === 'Backend')"
            :key="tech.name"
            class="tech-card"
            :class="{ visible }"
            :style="{ 
              transitionDelay: `${index * 100}ms`,
              '--tech-color': tech.color
            }"
          >
            <div class="card-glow"></div>
            <div class="card-content">
              <img class="tech-icon" :src="tech.icon" :alt="tech.name" />
              <h3 class="tech-name">{{ tech.name }}</h3>
            </div>
            <div class="hover-indicator"></div>
          </div>
        </div>
      </div>

      <!-- FRONTEND -->
      <div class="tech-category">
        <h3 class="tech-title">Frontend</h3>
        <div class="tech-grid tech-grid-horizontal">
          <div
            v-for="(tech, index) in techs.filter(t => t.category === 'Frontend')"
            :key="tech.name"
            class="tech-card"
            :class="{ visible }"
            :style="{
              transitionDelay: `${index * 100}ms`,
              '--tech-color': tech.color
            }"
          >
            <div class="card-glow"></div>
            <div class="card-content">
              <img class="tech-icon" :src="tech.icon" :alt="tech.name" />
              <h3 class="tech-name">{{ tech.name }}</h3>
            </div>
            <div class="hover-indicator"></div>
          </div>
        </div>
      </div>

      <!-- TOOLS -->
      <div class="tech-category">
        <h3 class="tech-title">Herramientas</h3>
        <div class="tech-grid tech-grid-horizontal">
          <div
            v-for="(tech, index) in techs.filter(t => t.category === 'Tools')"
            :key="tech.name"
            class="tech-card"
            :class="{ visible }"
            :style="{ 
              transitionDelay: `${index * 100}ms`,
              '--tech-color': tech.color
            }"
          >
            <div class="card-glow"></div>
            <div class="card-content">
              <img 
                class="tech-icon" 
                :src="tech.icon" 
                :alt="tech.name"
                :style="{
                  filter: ['GitHub', 'Make'].includes(tech.name) ? 'invert(1) brightness(2)' : 'none'
                }"
              />
              <h3 class="tech-name">{{ tech.name }}</h3>
            </div>
            <div class="hover-indicator"></div>
          </div>
        </div>
      </div>

      <!-- DATABASE -->
      <div class="tech-category tech-category-database" v-if="techs.filter(t => t.category === 'Database').length > 0">
        <h3 class="tech-title">Base de datos</h3>
        <div class="tech-grid tech-grid-small">
          <div
            v-for="(tech, index) in techs.filter(t => t.category === 'Database')"
            :key="tech.name"
            class="tech-card"
            :class="{ visible }"
            :style="{ 
              transitionDelay: `${index * 100}ms`,
              '--tech-color': tech.color
            }"
          >
            <div class="card-glow"></div>
            <div class="card-content">
              <img class="tech-icon" :src="tech.icon" :alt="tech.name" />
              <h3 class="tech-name">{{ tech.name }}</h3>
            </div>
            <div class="hover-indicator"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* === LÍNEAS DIVISORAS === */
.linea-superior {
  width: 200px;
  height: 2px;
  background-color: #fefff04d;
  border: none;
  margin: 17px auto 0 2rem;
  transition: width 0.3s ease;
}

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
.tech-stack-section {
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
  min-height: 100vh;
}

/* Efectos de fondo */
.background-effects {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.blob-1 {
  top: 10rem;
  left: 2.5rem;
  width: 18rem;
  height: 18rem;
  background: #a855f7;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  bottom: 5rem;
  right: 2.5rem;
  width: 24rem;
  height: 24rem;
  background: #3b82f6;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.4rem;
  position: relative;
  z-index: 10;
  text-align: center;
  
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
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  transition-delay: 150ms;
}

/* Grid de tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid #475569;
  border-radius: 1rem; 
  margin-bottom: 0;
  transition: border-color 0.3s ease;
}
.tech-grid:hover {
  border-color: #64748b; 
}
.tech-grid-horizontal {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid #475569;
  border-radius: 1rem;
}

/* Tarjetas de tecnología */
.tech-card {
  position: relative;
  backdrop-filter: none; 
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.5s ease;
  border-radius: 0.5rem; 
}

.tech-title {
  font-size: 1.65rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.9rem;
  text-align: center;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s ease;
}

.visible .tech-title {
  opacity: 1;
  transform: translateY(0);
}

.tech-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.tech-card:hover {
  transform: translateY(-8px) scale(1);
  border-color: #64748b;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Efecto de brillo */
.card-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--tech-color), transparent);
  opacity: 0;
  border-radius: 1rem;
  transition: opacity 0.5s ease;
}

.tech-card:hover .card-glow {
  opacity: 0.15;
}

/* Contenido de la tarjeta */
.card-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.tech-icon {
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-card:hover .tech-icon {
  transform: scale(1.1);
}

.tech-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-top: 0.5rem;
}

.tech-category {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: var(--tech-color);
}

/* Indicador de hover */
.hover-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--tech-color);
  border-radius: 0 0 1rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card:hover .hover-indicator {
  opacity: 1;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s ease;
}

.stat-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-item:nth-child(1) { transition-delay: 500ms; }
.stat-item:nth-child(2) { transition-delay: 600ms; }
.stat-item:nth-child(3) { transition-delay: 700ms; }

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-purple {
  background: linear-gradient(135deg, #a78bfa, #ec4899);
}

.stat-blue {
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
}

.stat-green {
  background: linear-gradient(135deg, #4ade80, #10b981);
}

.stat-label {
  color: #94a3b8;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .tech-card {
    padding: 1.5rem 1rem;
  }
  
  .tech-icon {
    font-size: 2.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
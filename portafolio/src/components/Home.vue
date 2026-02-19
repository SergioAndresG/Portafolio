  <template>



  <!-- Hero Section -->
  <section class="hero-container" id="home">
    <!-- Contenedor para el texto -->
    <div class="texto-container">
      <svg class="nombre-outline-svg" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" text-anchor="middle" class="corben" dominant-baseline="middle">
          SERGIO
        </text>
      </svg>
      
      <h2 class="nombre-solido corben" >GARCIA</h2>
      <p class="dev">Desarrollador de Software</p>
      <div class="redes-container">
        <a href="https://www.linkedin.com/in/sergio-garcia-232b86335/">
          <font-awesome-icon :icon="['fab', 'linkedin']" />      
        </a>

        <a href="https://github.com/SergioAndresG/" class="social-link github">
          <font-awesome-icon :icon="['fab', 'github']" />      
        </a> 
      </div>
    </div>

    <!-- Contenedor para la imagen -->
    <div class="imagen-container">
      <img src="../assets/images/ImagenPor.png" alt="Sergio Garcia" class="imagen">
    </div>
  </section>
</template>


<style scoped>
/* === RESET Y CONFIGURACIÓN GLOBAL === */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* === HERO SECTION === */
.hero-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden; /* Previene overflow */
}

.texto-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  position: relative;
  margin-top: 3.5%;
}

/* === NOMBRE OUTLINE === */
.nombre-outline-svg {
  width: 100%;
  max-width: 700px;
  height: auto;
  overflow: visible;
  display: block;
}

.nombre-outline-svg text {
  font-size: 174px;
  font-weight: 900;
  fill: none;
  stroke: rgba(154, 154, 154, 0.6);
  stroke-width: 3;
  letter-spacing: -7px;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dibujar-trazo 4s ease-in-out forwards;
}

/* === NOMBRE SÓLIDO === */
.nombre-solido {
  font-size: clamp(4rem, 10vw, 10rem);
  background: linear-gradient(10deg, #616161, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  margin-top: -8.5rem;
  margin-left: 3rem;
  user-select: none;
  opacity: 0;
  transform: translateX(100px);
  font-weight: bolder;
  animation: aparecer-solido 1.8s 1.8s ease-out forwards;
}

/* === DESARROLLADOR === */
.dev {
  font-size: clamp(1.1rem, 1.5vw, 1.8rem);
  color: #44a2ff;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -7rem;
  margin-left: 8.5rem;
  user-select: none;
  opacity: 0;
  transform: translateY(-20px);
  font-weight: 300;
  animation: 
        aparecer-dev 1.2s 3s ease-out forwards,
        flotar 2.3s ease-in-out infinite alternate;
  transition: all 0.3s ease-in-out;
}

.dev:hover{
  text-shadow: 0 0 5px #616161;
  color: #d0d0d0;
  scale: 1.03;
}

/* === REDES SOCIALES === */
.redes-container {
  display: flex;
  gap: 1.5rem;
  margin-left: 18rem;
  padding: 1rem;
  margin-top: 1rem;
}

.redes-container a {
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 5px;
}

.redes-container a svg {
  color: #d0d0d0;
  width: 30px;
  height: 30px;
  opacity: 0;
  transform: translateY(20px);
  animation: aparecer-redes 1.2s 3s ease-out forwards;
  transition: all 0.3s ease-in-out;
}

.redes-container a svg:hover {
  scale: 1.1;
  text-shadow: rgba(255, 255, 255, 0.25) 0px 25px 50px -12px;
}

.redes-container a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.redes-container a:hover::after {
  transform: scaleX(0.5);
}

/* === IMAGEN === */
.imagen-container {
  flex-shrink: 0;
  position: relative;
  opacity: 0;
  animation: aparecer-imagen 1.5s 2.5s ease-out forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  /* ELIMINAR márgenes problemáticos */
  /* margin-right: 55px; */
  /* margin-top: -1rem; */
}

.imagen {
  height: 400px;
  width: 400px;
  max-width: 100%; /* IMPORTANTE: limitar ancho */
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #616161;
  padding: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imagen:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(154, 154, 154, 0.4);
}

/* === ANIMACIONES === */
@keyframes dibujar-trazo {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes aparecer-solido {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes aparecer-dev {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aparecer-redes {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes flotar {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes aparecer-imagen {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === RESPONSIVE - PANTALLAS GRANDES === */
@media (max-width: 1400px) {
  .nombre-outline-svg text {
    font-size: 150px;
  }
  
  .nombre-solido {
    font-size: clamp(3.5rem, 9vw, 9rem);
    margin-left: 2.5rem;
  }
  
  .dev {
    margin-left: 7rem;
  }
  
  .redes-container {
    margin-left: 12rem;
  }
}

/* === RESPONSIVE - TABLETS LANDSCAPE === */
@media (max-width: 1200px) {
  .hero-container {
    gap: 3rem;
    margin-top: 6rem;
  }
  
  .nombre-outline-svg text {
    font-size: 130px;
  }
  
  .nombre-solido {
    font-size: clamp(3rem, 8vw, 8rem);
    margin-top: -5rem;
    margin-left: 2rem;
  }
  
  .dev {
    margin-top: -5rem;
    margin-left: 5rem;
  }
  
  .redes-container {
    margin-left: 8rem;
  }
  
  .imagen {
    height: 350px;
    width: 350px;
  }
}

/* === RESPONSIVE - TABLETS PORTRAIT === */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 3rem;
    }
  
  .texto-container {
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .nombre-outline-svg {
    margin: 0 auto;
  }
  
  .nombre-outline-svg text {
    font-size: 110px;
    letter-spacing: -5px;
  }
  
  .nombre-solido {
    font-size: clamp(3rem, 12vw, 7rem);
    margin-top: -4rem;
    margin-left: 0;
  }
  
  .dev {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-top: -3rem;
    margin-left: 0;
  }
  
  .redes-container {
    margin-left: 0;
    margin-top: 2rem;
    justify-content: center;
  }
  
  .imagen-container {
    margin-right: 0; /* Eliminar margen en móviles */
  }
  
  .imagen {
    height: 320px;
    width: 320px;
  }
}

/* === RESPONSIVE - MÓVILES GRANDES === */
@media (max-width: 768px) {
  .hero-container {
    padding: 0 1.5rem;
  }
  
  .nombre-outline-svg text {
    font-size: 80px;
    stroke-width: 2;
  }
  
  .nombre-solido {
    font-size: clamp(2.5rem, 11vw, 5.5rem);
    margin-top: -3rem;
  }
  
  .dev {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    margin-top: -2.5rem;
    letter-spacing: 1px;
  }
  
  .imagen {
    height: 280px;
    width: 280px;
  }
}

/* === RESPONSIVE - MÓVILES MEDIANOS === */
@media (max-width: 576px) {
  .hero-container {
    margin-top: 3rem;
    padding: 0 1rem;
  }
  
  .nombre-outline-svg {
    max-width: 100%;
  }
  
  .nombre-outline-svg text {
    font-size: 70px;
    letter-spacing: -3px;
  }
  
  .nombre-solido {
    font-size: clamp(2rem, 10vw, 4rem);
    margin-top: -2.5rem;
  }
  
  .dev {
    font-size: 0.9rem;
    margin-top: -2rem;
  }
  
  .redes-container {
    margin-top: 1.5rem;
    gap: 1rem;
  }
  
  .redes-container a svg {
    width: 25px;
    height: 25px;
  }
  
  .imagen {
    height: 250px;
    width: 250px;
    margin-top: 1rem;
  }
}

/* === RESPONSIVE - MÓVILES PEQUEÑOS === */
@media (max-width: 400px) {
  .nombre-outline-svg text {
    font-size: 60px;
  }
  
  .nombre-solido {
    font-size: 2.5rem;
    margin-top: -2rem;
  }
  
  .dev {
    font-size: 0.8rem;
    margin-top: -1.5rem;
  }
  
  .imagen {
    height: 220px;
    width: 220px;
  }
}
</style>
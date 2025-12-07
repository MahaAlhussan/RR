<template>
  <div class="home">
    <NavBar />
    
    <section class="hero-section">

      <div class="bg-blobs"></div>
      <div class="bg-effects">
        <div class="bg-effect-1"></div>
        <div class="bg-effect-2"></div>
        <div class="bg-effect-3"></div>
        <div class="bg-effect-4"></div>


      </div>
      
      <div class="content text-center">
        <div class="planet-container">
          <div class="hero-img">
            <img src="/hero1.png" alt="RR Technologies Hero">
          </div>

          <div class="planet-ring ring-1"></div>
          <div class="planet-ring ring-2"></div>
          <div class="planet-ring ring-3"></div>
          <div class="planet-dot dot-1"></div>
          <div class="planet-dot dot-2"></div>
          <div class="planet-dot dot-3"></div>
        </div>

        <h1 class="title">{{ t('Welcome To') }} <span class="rr">RR</span>
         <br />
          {{ t('Technologies') }}
        </h1>

        <p class="subtitle">{{ t('Are You Facing Difficulties With Your Website?') }}
          &nbsp; {{ t('Do You Have A Website But Lack Traffic?') }}
         &nbsp; {{ t('No Need To Worry.') }}
        </p>

        <div class="hero-buttons">
          <button class="btn btn-primary get-started-btn">{{ t('Get Started') }}</button>
        </div>

        

      </div>
    </section>
  </div>
  <AboutView/>
  <Services/>
  <WhyUs/>
  <Portfolio/>
  <Testimonial/>
  <Register/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AboutView from '@/views/AboutView.vue'
import Services from '@/views/Services.vue'
import WhyUs from '@/components/WhyUs.vue'
import Portfolio from '@/components/Portfolio.vue'
import Testimonial from '@/components/Testimonial.vue'
import Register from '@/components/Register.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutView,
    Services,
    WhyUs,
    Portfolio,
    Testimonial,
    Register
  },
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
        const translations = {
      en: {
        'Welcome To': 'Welcome To',
        'Technologies': 'Technologies',
        'Are You Facing Difficulties With Your Website?': 'Are You Facing Difficulties With Your Website?',
        'Do You Have A Website But Lack Traffic?': 'Do You Have A Website But Lack Traffic?',
        'No Need To Worry.': 'No Need To Worry.',
        'Get Started': 'Get Started'
      },
      ar: {
        'Welcome To': 'مرحباً بك في',
        'Technologies': 'التقنيات',
        'Are You Facing Difficulties With Your Website?': 'هل تواجه صعوبات مع موقعك الإلكتروني؟',
        'Do You Have A Website But Lack Traffic?': 'هل لديك موقع إلكتروني ولكن تفتقر إلى الزوار؟',
        'No Need To Worry.': 'لا داعي للقلق.',
        'Get Started': 'ابدأ الآن'
      }
    }
    
    const t = (key) => {
      const lang = isArabic.value ? 'ar' : 'en'
      return translations[lang][key] || key
    }
    
    const handleLanguageChange = (event) => {
      isArabic.value = event.detail.language === 'ar'
    }
    
    onMounted(() => {
      window.addEventListener('language-changed', handleLanguageChange)
    })
    
    onUnmounted(() => {
      window.removeEventListener('language-changed', handleLanguageChange)
    })
    
    return {
      t
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Coiny&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+Arabic:wght@100..900&family=Oswald:wght@200..700&family=Science+Gothic:wght@100..900&family=Share+Tech&family=Sixtyfour&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

[dir="rtl"] .title {
  font-family: "Coiny", "Noto Sans Arabic", system-ui;
  font-weight: 900;
}

[dir="rtl"] .subtitle {
  font-family: "Lato", "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .get-started-btn {
  font-family: "Lato", "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .bg-blobs::before {
  left: auto;
  right: 150px;
}

[dir="rtl"] .bg-blobs::after {
  right: auto;
  left: 150px;
}

[dir="rtl"] .bg-effect-2 {
  left: auto;
  right: 120px;
}

[dir="rtl"] .bg-effect-3 {
  right: auto;
  left: 100px;
}

[dir="rtl"] .bg-effect-4 {
  left: auto;
  right: 0;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 140px;
  overflow: hidden;
  background: radial-gradient(circle at 20% 40%, #ebf2fb, transparent),
              radial-gradient(circle at 80% 70%, #f0f6ff, transparent),
              radial-gradient(circle at 10% 80%, #f7f9fb, transparent);
}

.bg-blobs::before,
.bg-blobs::after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.bg-blobs::before {
  width: 15px;
  height: 15px;
  background: #ffb31a;
  top: 90px;
  left: 150px;
}

.bg-blobs::after {
  width: 14px;
  height: 14px;
  background: #3ebd4b;
  top: 200px;
  right: 150px;
}

.content {
  position: relative;
  z-index: 5;
}

.planet-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 800px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img {
  position: relative;
  z-index: 10;
  opacity: 0.9;
}

.hero-img img {
  max-width: 400px;
  width: 100%;
  height: auto;
  filter: brightness(80%);
  rotate: -20deg;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(-20deg);
  }
  50% {
    transform: translateY(-20px) rotate(-20deg);
  }
}

.planet-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  opacity: 0.3;
  animation: rotate-ring linear infinite;
}

.planet-1 {
  width: 500px;
  height: 500px;
  border-color: #5475e3;
  animation-duration: 20s;
}

.ring-2 {
  width: 600px;
  height: 600px;
  border-color: #ff6b6b;
  animation-duration: 25s;
  animation-direction: reverse;
}

.ring-3 {
  width: 700px;
  height: 700px;
  border-color: #4ecdc4;
  animation-duration: 30s;
  opacity: 0.2;
}

@keyframes rotate-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.planet-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: orbit linear infinite;
}

.dot-1 {
  background: #5475e3;
  animation-duration: 15s;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.dot-2 {
  background: #ff6b6b;
  animation-duration: 12s;
  animation-direction: reverse;
  top: 50%;
  right: -4px;
  transform: translateY(-50%);
}

.dot-3 {
  background: #4ecdc4;
  animation-duration: 18s;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(250px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(250px) rotate(-360deg);
  }
}

.dot-2 {
  transform-origin: 50% 50%;
}

.dot-3 {
  transform-origin: 50% 50%;
}

.title {
  font-size: 56px;
  font-weight: 200;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  color: #000000;
  font-family: "Coiny", system-ui;
  margin-top: 30px;
}

.rr {
  color: #5475e3;
  position: relative;
  display: inline-block;
  font-family: "Coiny", system-ui;
}

.rr::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 10px; 
  background: #5475e3; 
  border-radius: 20px;
}

[dir="rtl"] .rr::after {
  left: auto;
  right: 0;
}

.subtitle {
  margin-top: 50px;
  font-size: 16px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  position: relative;
  z-index: 3;
  color: #333333;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  z-index: 3;
  flex-wrap: wrap;
}

.get-started-btn {
  background-color: #000000;
  border: 2px solid #000000;
  color: #ffffff;
  padding: 12px 35px;
  border-radius: 20px;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.get-started-btn:hover {
  background-color: #333333;
  border-color: #333333;
  transform: translateY(-2px);
}


.bg-effects {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

.bg-effect-1 {
  position: absolute;
  width: 280px;
  height: 280px;
  top: -140px;
  left: 50%;
  transform: translateX(-50%);
  background: #B9CEEA;
  filter: blur(110px);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.bg-effect-2 {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 60px;
  left: 120px;
  background: #ffde7c;
  filter: blur(120px);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.bg-effect-3 {
  position: absolute;
  width: 230px;
  height: 230px;
  right: 100px;
  top: 250px;
  background: #f1498498;
  filter: blur(200px);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.bg-effect-4 {
  position: absolute;
  width: 500px;
  height: 500px;
  left: 0;
  bottom: -100px;
  background: rgba(180, 160, 255, 0.45);
  filter: blur(200px);
  border-radius: 50%;
  transition: all 0.3s ease;
}

:root.dark .hero-section {
  background: #000031;
}

:root.dark .title {
  color: #ffffff;
}

:root.dark .subtitle {
  color: #e0e0e0;
}

:root.dark .get-started-btn {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #000000;
}

:root.dark .get-started-btn:hover {
  background-color: #e0e0e0;
  border-color: #e0e0e0;
}

:root.dark .planet-ring {
  opacity: 0.4;
}

:root.dark .ring-1 {
  border-color: #64b5f6;
}

:root.dark .ring-2 {
  border-color: #ff8a65;
}

:root.dark .ring-3 {
  border-color: #81c784;
}

:root.dark .planet-dot {
  box-shadow: 0 0 10px currentColor;
}

:root.dark .hero-img img {
  filter: brightness(0.8) contrast(1.2);
}
@media (max-width: 768px) {
  .hero-section {
    padding-top: 120px;
    height: 90vh;
  }
  
  .planet-container {
    width: 400px;
    height: 400px;
  }
  
  .hero-img img {
    max-width: 200px;
  }
  
  .ring-1 {
    width: 250px;
    height: 250px;
  }
  
  .ring-2 {
    width: 300px;
    height: 300px;
  }
  
  .ring-3 {
    width: 350px;
    height: 350px;
  }
  
  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(125px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(125px) rotate(-360deg);
    }
  }
  
  .title {
    font-size: 42px;
  }
  
  .subtitle {
    font-size: 14px;
    max-width: 90%;
  }
  
  .hero-buttons {
    gap: 15px;
  }
  
  .get-started-btn {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .planet-container {
    width: 300px;
    height: 300px;
  }
  
  .hero-img img {
    max-width: 150px;
  }
  
  .ring-1 {
    width: 200px;
    height: 200px;
  }
  
  .ring-2 {
    width: 250px;
    height: 250px;
  }
  
  .ring-3 {
    width: 300px;
    height: 300px;
  }
  
  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(100px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(100px) rotate(-360deg);
    }
  }
  
  .title {
    font-size: 32px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .get-started-btn {
    width: 200px;
  }
}
</style>
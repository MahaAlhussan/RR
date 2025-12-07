<template>
  <div class="services-section">
    <div class="decoration-dot dot-red"></div>
    <div class="decoration-dot dot-blue"></div>
    <div class="decoration-dot dot-green"></div>

    <div class="services-container">
      <div class="services-content">
        <p class="services-subtitle">{{ t('Services We Offer') }}</p>
        <h2 class="services-title">
          {{ t('We Believe In True Partnership And Thus Get Our') }} <span class="highlight">{{ t('Customers') }}</span> {{ t('A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:') }}
        </h2>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" :class="['service-card', { 'dark': service.dark }]">
          <div class="service-card-header">
            <div class="service-icon" v-html="service.icon"></div>
            <div class="service-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </div>
          </div>
          <h3 class="service-title">{{ t(service.title) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Services',
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
    
    const translations = {
      en: {
        'Services We Offer': 'Services We Offer',
        'We Believe In True Partnership And Thus Get Our': 'We Believe In True Partnership And Thus Get Our',
        'Customers': 'Customers',
        'A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:': 'A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:',
        'Web Design & Web Development': 'Web Design & Web Development',
        'E-Commerce Solutions': 'E-Commerce Solutions',
        'Customized Application Development': 'Customized Application Development',
        'Search Engine Optimization & Digital Marketing': 'Search Engine Optimization & Digital Marketing'
      },
      ar: {
        'Services We Offer': 'الخدمات التي نقدمها',
        'We Believe In True Partnership And Thus Get Our': 'نؤمن بالشراكة الحقيقية وبالتالي نحقق لعملائنا',
        'Customers': 'العملاء',
        'A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:': 'أقصى استفادة من أموالهم. هناك مجالات مختلفة نعمل فيها، إليك بعض منها:',
        'Web Design & Web Development': 'تصميم وتطوير الويب',
        'E-Commerce Solutions': 'حلول التجارة الإلكترونية',
        'Customized Application Development': 'تطوير التطبيقات المخصصة',
        'Search Engine Optimization & Digital Marketing': 'تحسين محركات البحث والتسويق الرقمي'
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
    
    const services = ref([
      {
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>',
        title: 'Web Design & Web Development',
        dark: true
      },
      {
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
        title: 'E-Commerce Solutions',
        dark: false
      },
      {
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
        title: 'Customized Application Development',
        dark: false
      },
      {
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
        title: 'Search Engine Optimization & Digital Marketing',
        dark: false
      }
    ])
    
    return {
      services,
      t
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Coiny&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Science+Gothic:wght@100..900&family=Share+Tech&family=Sixtyfour&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

.services-section {
  background-color: #e8eaf6;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.services-content {
  flex: 1;
  text-align: left;
  padding: 40px;
}

.services-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

[dir="rtl"] .services-container {
  flex-direction: row-reverse; 
}

[dir="rtl"] .services-content {
  text-align: right;
  padding: 40px;
}

[dir="rtl"] .services-title {
  font-family: "Noto Sans Arabic", "Nunito", sans-serif;
  text-align: right;
  line-height: 1.5;
  direction: rtl;
}

[dir="rtl"] .services-subtitle {
  font-family: "Noto Sans Arabic", "Roboto", sans-serif;
  text-align: right;
}

[dir="rtl"] .services-grid {
  direction: rtl;
}

[dir="rtl"] .service-card {
  text-align: right;
}

[dir="rtl"] .service-card-header {
  flex-direction: row-reverse;
}

[dir="rtl"] .service-title {
  font-family: "Noto Sans Arabic", sans-serif;
  text-align: right;
  direction: rtl;
}

[dir="rtl"] .service-arrow {
  transform: rotate(180deg); 
}

.services-subtitle {
  font-family: "Roboto", sans-serif;
  color: #4285f4;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.services-title {
  font-family: "Nunito", sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.4;
  color: #1a1f2e;
  margin: 0;
}

.services-title .highlight {
  color: #ff5722;
}

.service-card {
  background: white;
  border-radius: 8px;
  padding: 30px 25px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.service-card.dark {
  background: #1a1f2e;
  color: white;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.service-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 15px;
}

.service-icon {
  color: #4285f4;
}

.service-card.dark .service-icon {
  color: white;
}

.service-arrow {
  background: #4285f4;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.service-arrow:hover {
  background: #3367d6;
}

.service-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
  color: #1a1f2e;
  text-align: left;
}

.service-card.dark .service-title {
  color: white;
}

.decoration-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5722;
  top: 50%;
  left: 40px;
}

[dir="rtl"] .dot-red {
  left: auto;
  right: 40px;
}

.dot-blue {
  background: #4285f4;
  top: 15%;
  right: 15%;
}

[dir="rtl"] .dot-blue {
  right: auto;
  left: 15%;
}

.dot-green {
  background: #4caf50;
  bottom: 25%;
  right: 80px;
}

[dir="rtl"] .dot-green {
  right: auto;
  left: 80px;
}

@media (max-width: 992px) {
  .services-container {
    flex-direction: column;
    gap: 50px;
  }
  
  [dir="rtl"] .services-container {
    flex-direction: column;
  }

  .services-content,
  [dir="rtl"] .services-content {
    text-align: center;
    padding: 20px;
  }

  .services-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .services-section {
    padding: 50px 15px;
  }

  .services-title {
    font-size: 1.5rem;
  }
}

.dark .services-section{
  background-color: #121212;
}

.dark .services-title{
  color: white;
}
</style>
<template>
  <div class="testimonial-section">
    <div class="testimonial-container">
      <div class="testimonial-header">
        <h2 class="testimonial-title">
          <span class="quote-left">"</span>
          {{ t('Testimonial') }}
          <span class="quote-right">"</span>
        </h2>
      </div>
      <div class="testimonial-carousel">
        <div v-for="(testimonial, index) in testimonials" :key="testimonial.id"
          :class="['testimonial-card', { active: activeIndex === index }]" @click="activeIndex = index" >

          <div class="testimonial-header-content">
            <div class="testimonial-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar-image" />
            </div>
            <h3 class="testimonial-name">{{ testimonial.name }}</h3>

          </div>
          <p class="testimonial-text">{{ t(testimonial.textKey) }}</p>
        </div>
      </div>

      <div class="testimonial-dots">
        <div  v-for="(testimonial, index) in testimonials" :key="index" :class="['testimonial-dot', { active: activeIndex === index }]"  @click="activeIndex = index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Testimonial',
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
    const activeIndex = ref(0)
    
    const translations = {
      en: {
        'Testimonial': 'Testimonial',
        'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service.': 'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service.',
        'Working with RR Technologies has been transformative for our business. Their innovative solutions and professional team delivered exceptional results beyond our expectations.': 'Working with RR Technologies has been transformative for our business. Their innovative solutions and professional team delivered exceptional results beyond our expectations.'
      },
      ar: {
        'Testimonial': 'الشهادات',
        'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service.': 'RR Technologies هي مفتاح نجاح علاماتنا التجارية. فريق قوي من المخططين الاستراتيجيين والإبداعات الرائعة يمكنهم من تقديم خدمة عالمية المستوى.',
        'Working with RR Technologies has been transformative for our business. Their innovative solutions and professional team delivered exceptional results beyond our expectations.': 'كان العمل مع RR Technologies تحويليًا لأعمالنا. قدمت حلولهم المبتكرة وفريقهم المحترف نتائج استثنائية تفوق توقعاتنا.'
      }
    }
    
    const testimonials = ref([
      {
        id: 1,
        name: 'السيد سميث', 
        avatar: '/images/avatar1.png',
        textKey: 'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service.'
      },
      {
        id: 2,
        name: 'جون دو', 
        avatar: '/images/avatar2.jpg',
        textKey: 'Working with RR Technologies has been transformative for our business. Their innovative solutions and professional team delivered exceptional results beyond our expectations.'
      }
    ])
    
    const updateNames = () => {
      if (isArabic.value) {
        testimonials.value[0].name = 'السيد سميث'
        testimonials.value[1].name = 'جون دو'
      } else {
        testimonials.value[0].name = 'Mr Smith'
        testimonials.value[1].name = 'John Doe'
      }
    }
        const t = (key) => {
      const lang = isArabic.value ? 'ar' : 'en'
      return translations[lang][key] || key
    }
    
    const handleLanguageChange = (event) => {
      isArabic.value = event.detail.language === 'ar'
      updateNames()
    }
    
    onMounted(() => {
            updateNames()
      window.addEventListener('language-changed', handleLanguageChange)
    })
    
    onUnmounted(() => {
      window.removeEventListener('language-changed', handleLanguageChange)
    })
    
    return {
      activeIndex,
      testimonials,
      t
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');

.testimonial-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #fce4ec 0%, #e3f2fd 100%);
  position: relative;
  overflow: hidden;
}

.testimonial-container {
  max-width: 1400px;
  margin: 0 auto;
}

.testimonial-header {
  text-align: center;
  margin-bottom: 80px;
}

.testimonial-title {
  font-size: 40px;
  font-weight: bold;
  color: #1a1f2e;
  margin: 0;
  position: relative;
  display: inline-block;
}

.quote-left {
  position: absolute;
  left: -60px;
  top: -20px;
  font-size: 4rem;
  color: #4285f4;
  font-family: Georgia, serif;
}

.quote-right {
  position: absolute;
  right: -60px;
  bottom: -20px;
  font-size: 4rem;
  color: #4285f4;
  font-family: Georgia, serif;
}
[dir="rtl"] .testimonial-title {
  font-family: "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .quote-left {
  left: auto;
  right: -60px;
}

[dir="rtl"] .quote-right {
  right: auto;
  left: -60px;
}

[dir="rtl"] .testimonial-text {
  direction: rtl;
  text-align: right;
  font-family: "Noto Sans Arabic", sans-serif;
  font-style: normal;
}

[dir="rtl"] .testimonial-name {
  font-family: "Noto Sans Arabic", sans-serif;
  text-align: right;
}

[dir="rtl"] .testimonial-header-content {
  flex-direction: row-reverse;
}

.testimonial-carousel {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.208);
  backdrop-filter: blur(180px);
  border: 1.5px rgba(253, 253, 253, 0.876) solid;
  border-radius: 5px;
  padding: 40px 35px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  transform: scale(0.95);
  cursor: pointer;
}

.testimonial-card.active {
  transform: scale(1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border-color: #4285f4;
}

.testimonial-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.testimonial-card.active:hover {
  transform: scale(1.05);
}

.testimonial-header-content {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.testimonial-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.testimonial-card:hover .avatar-image {
  transform: scale(1.1);
}

.testimonial-name {
  font-size: 18px;
  font-weight: bold;
  color: #1a1f2e;
  margin: 0;
}

.testimonial-text {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.testimonial-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-dot.active {
  background: #4285f4;
  transform: scale(1.2);
}

.testimonial-dot:hover {
  background: #4285f4;
  transform: scale(1.1);
}

:root.dark .testimonial-section {
  background: linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%);
}

:root.dark .testimonial-card {
  background: #2d3748;
  color: white;
}

:root.dark .testimonial-name {
  color: white;
}

:root.dark .testimonial-text {
  color: #e2e8f0;
}

:root.dark .testimonial-title {
  color: white;
}

:root.dark .testimonial-dot {
  background: #4a5568;
}

:root.dark .testimonial-dot.active {
  background: #64b5f6;
}

@media (max-width: 1200px) {
  .testimonial-carousel {
    flex-direction: column;
  }

  .testimonial-card {
    max-width: 600px;
  }

  .testimonial-card.active {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 15px;
  }

  .testimonial-title {
    font-size: 2rem;
  }

  .quote-left,
  .quote-right {
    font-size: 3rem;
  }

  .quote-left {
    left: -40px;
  }

  .quote-right {
    right: -40px;
  }

  [dir="rtl"] .quote-left {
    right: -40px;
  }

  [dir="rtl"] .quote-right {
    left: -40px;
  }

  .testimonial-card {
    padding: 30px 25px;
  }

  .testimonial-avatar {
    width: 60px;
    height: 60px;
  }

  .testimonial-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .testimonial-title {
    font-size: 1.5rem;
  }

  .quote-left {
    left: -25px;
    top: -10px;
    font-size: 2rem;
  }

  .quote-right {
    right: -25px;
    bottom: -10px;
    font-size: 2rem;
  }

  [dir="rtl"] .quote-left {
    right: -25px;
    left: auto;
  }

  [dir="rtl"] .quote-right {
    left: -25px;
    right: auto;
  }

  .testimonial-header-content {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .testimonial-avatar {
    width: 50px;
    height: 50px;
  }

  .testimonial-name {
    font-size: 1rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
    text-align: center;
  }

  [dir="rtl"] .testimonial-header-content {
    flex-direction: column;
  }
}
</style>
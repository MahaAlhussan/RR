<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="[themeClass, { 'scrolled': isScrolled }]">
    <div class="container-fluid d-flex align-items-center">
      <a class="navbar-brand logo" href="#">RR</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto align-items-center gap-4">
          <li class="nav-item"><a class="nav-link" href="#">{{ t('Services') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#">{{ t('Portfolio') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#">{{ t('About Us') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#">{{ t('Testimonials') }}</a></li>
        </ul>

        <ul class="navbar-nav align-items-center gap-3">
          <li class="nav-item">
            <button 
              @click="toggleLanguage" 
              class="btn lang-btn"
              :title="isArabic ? 'Switch to English' : 'التبديل إلى العربية'"
            >
              {{ isArabic ? 'EN' : 'AR' }}
            </button>
          </li>
          <li class="nav-item">
            <ModeSwitch />
          </li>
          <li class="nav-item">
            <button class="btn btn-primary px-4 contact-btn">{{ t('Contact Us') }}</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue"
import ModeSwitch from "@/components/ModeSwitch.vue"

const themeClass = ref("navbar-light")
const isScrolled = ref(false)
const isArabic = ref(localStorage.getItem('language') === 'ar')

const translations = {
  en: {
    'Services': 'Services',
    'Portfolio': 'Portfolio',
    'About Us': 'About Us',
    'Testimonials': 'Testimonials',
    'Contact Us': 'Contact Us'
  },
  ar: {
    'Services': 'خدمات',
    'Portfolio': 'الأعمال',
    'About Us': 'معلومات عنا',
    'Testimonials': 'شهادات',
    'Contact Us': 'اتصل بنا'
  }
}

const t = (key) => {
  const lang = isArabic.value ? 'ar' : 'en'
  return translations[lang][key] || key
}

const toggleLanguage = () => {
  isArabic.value = !isArabic.value
  localStorage.setItem('language', isArabic.value ? 'ar' : 'en')
  document.documentElement.dir = isArabic.value ? 'rtl' : 'ltr'
  
  window.dispatchEvent(new CustomEvent('language-changed', {
    detail: { language: isArabic.value ? 'ar' : 'en' }
  }))
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  document.documentElement.dir = isArabic.value ? 'rtl' : 'ltr'
  
  const update = () => {
    const isDark = document.documentElement.classList.contains("dark")
    themeClass.value = isDark ? "navbar-dark" : "navbar-light"
  }

  update()

  const observer = new MutationObserver(update)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  })

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
nav {
  background: transparent !important;
  padding: 25px 40px;
  transition: all 0.3s ease;
  z-index: 10;
}

nav.scrolled {
  background: rgba(255, 255, 255, 0.222) !important;
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
}

:root.dark nav.scrolled {
  background: rgba(15, 23, 42, 0.488) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.logo {
  border: 3px solid;
  padding: 10px 14px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

:root:not(.dark) .logo {
  color: #000;
  border-color: #000;
}
:root:not(.dark) .nav-link {
  color: #000 !important;
}

:root.dark .logo {
  color: #fff;
  border-color: #fff;
}
:root.dark .nav-link {
  color: #fff !important;
}

.nav-link {
  font-weight: 500;
  font-size: 15px;
  transition: 0.2s ease;
}
.nav-link:hover {
  opacity: 0.7;
}
.lang-btn {
  background: transparent;
  border: 2px solid #4285f4;
  color: #4285f4;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.lang-btn:hover {
  background: #4285f4;
  color: white;
  transform: scale(1.1);
}

:root.dark .lang-btn {
  border-color: #64b5f6;
  color: #64b5f6;
}

:root.dark .lang-btn:hover {
  background: #64b5f6;
  color: #000;
}

.contact-btn {
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

[dir="rtl"] .logo {
  font-family: "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .nav-link {
  font-family: "Noto Sans Arabic", sans-serif;
}

@media (max-width: 768px) {
  nav {
    padding: 20px 15px;
  }
  
  nav.scrolled {
    padding: 12px 15px;
  }

  .navbar-collapse {
    text-align: center;
  }

  .navbar-nav.mx-auto {
    margin: 15px 0 !important;
  }

  .navbar-nav:last-child {
    margin-top: 10px;
  }
  
  .lang-btn {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .lang-btn {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
}
</style>
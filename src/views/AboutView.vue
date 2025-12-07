<template>
  <div class="about-section">
    <div class="content-wrapper">
      <div class="container py-5">
        <div class="text-center mb-4">
          <h5 class="thank-you-text">
            {{ t('Thank You For Your Interest In Us!') }}
          </h5>
        </div>

        <div class="text-center mb-4">
          <h1 class="main-heading">
            {{ t('Founded Over 7 Years Ago, RR Technologies') }}<br />
            {{ t('Is Now The Main') }} <span class="highlight-text">{{ t('Web Design') }}</span> {{ t('And') }} <span class="highlight-text">{{ t('Web Development') }}</span><br />{{ t('Agency In Bangladesh.') }}
          </h1>
          <p class="intro-text">{{ t('Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.') }}</p>
        </div>

        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <div class="text-container" :class="{ 'expanded': showMore }">
              <p class="description-text">
                {{ t('Are You Facing Difficulties With Your Website? Do You Have A Website But Lack Traffic? No Need To Worry. We At RR Technologies Use Our Technological Expertise Amalgamated With Our Experience To Scoop Out The Right Potion Of Success For Your Firm. We Are Highly Passionate About Our Work And Leave No Stones Unturned To Delight Our Customers With High-Quality Work And Efficient Project Management That Comes As A Surprise Bearing Bounteous Outcomes.') }}
              </p>
              
              <p class="description-text second-paragraph">
                {{ t('Owing To The Years Of Expertise In Web Development And Web Designing, Our In-House Professionals Have Been Highly Successful In Catering Projects. May It Be Your Small Size Or Large Scale Business, We Deliver You With The Best Interactive Surfaces.') }}
              </p>
            </div>

            <div class="text-center mt-3">
              <button @click="showMore = !showMore" class="show-more-btn">
                {{ showMore ? t('Show Less..') : t('Show More..') }}
              </button>
            </div>
          </div>

          <div class="col-md-6 text-center">
            <img src="img1.png" alt="Web Development Illustration" class="about-image" />
          </div>
        </div>

        <div class="row text-center mt-5 pt-5">
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
              </svg>
            </div>
            <h4 class="stat-title">{{ t('Projects') }}</h4>
            <p class="stat-number">65+</p>
          </div>

          <div class="col-md-3 col-6 mb-4">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
              </svg>
            </div>
            <h4 class="stat-title">{{ t('Clients') }}</h4>
            <p class="stat-number">30+</p>
          </div>

          <div class="col-md-3 col-6 mb-4">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
              </svg>
            </div>
            <h4 class="stat-title">{{ t('Experience') }}</h4>
            <p class="stat-number">7+ Years</p>
          </div>

          <div class="col-md-3 col-6 mb-4">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
              </svg>
            </div>
            <h4 class="stat-title">{{ t('Company') }}</h4>
            <p class="stat-number">15+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhyUs from '@/components/WhyUs.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AboutView',
  components: {
    WhyUs
  },
  setup() {
    const showMore = ref(false)
    const isArabic = ref(localStorage.getItem('language') === 'ar')
        const translations = {
      en: {
        'Thank You For Your Interest In Us!': 'Thank You For Your Interest In Us!',
        'Founded Over 7 Years Ago, RR Technologies': 'Founded Over 7 Years Ago, RR Technologies',
        'Is Now The Main': 'Is Now The Main',
        'Web Design': 'Web Design',
        'And': 'And',
        'Web Development': 'Web Development',
        'Agency In Bangladesh.': 'Agency In Bangladesh.',
        'Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.': 'Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.',
        'Are You Facing Difficulties With Your Website? Do You Have A Website But Lack Traffic? No Need To Worry. We At RR Technologies Use Our Technological Expertise Amalgamated With Our Experience To Scoop Out The Right Potion Of Success For Your Firm. We Are Highly Passionate About Our Work And Leave No Stones Unturned To Delight Our Customers With High-Quality Work And Efficient Project Management That Comes As A Surprise Bearing Bounteous Outcomes.': 'Are You Facing Difficulties With Your Website? Do You Have A Website But Lack Traffic? No Need To Worry. We At RR Technologies Use Our Technological Expertise Amalgamated With Our Experience To Scoop Out The Right Potion Of Success For Your Firm. We Are Highly Passionate About Our Work And Leave No Stones Unturned To Delight Our Customers With High-Quality Work And Efficient Project Management That Comes As A Surprise Bearing Bounteous Outcomes.',
        'Owing To The Years Of Expertise In Web Development And Web Designing, Our In-House Professionals Have Been Highly Successful In Catering Projects. May It Be Your Small Size Or Large Scale Business, We Deliver You With The Best Interactive Surfaces.': 'Owing To The Years Of Expertise In Web Development And Web Designing, Our In-House Professionals Have Been Highly Successful In Catering Projects. May It Be Your Small Size Or Large Scale Business, We Deliver You With The Best Interactive Surfaces.',
        'Show More..': 'Show More..',
        'Show Less..': 'Show Less..',
        'Projects': 'Projects',
        'Clients': 'Clients',
        'Experience': 'Experience',
        'Company': 'Company'
      },
      ar: {
        'Thank You For Your Interest In Us!': 'شكراً لاهتمامكم بنا!',
        'Founded Over 7 Years Ago, RR Technologies': 'تأسست RR Technologies منذ أكثر من 7 سنوات،',
        'Is Now The Main': 'وهي الآن',
        'Web Design': 'تصميم الويب',
        'And': 'و',
        'Web Development': 'تطوير الويب',
        'Agency In Bangladesh.': 'الوكالة الرئيسية في بنغلاديش.',
        'Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.': 'يمكن أن يؤدي دمج التكنولوجيا والأعمال معًا إلى تحقيق نتائج مثمرة من حيث ازدهار الأعمال ونجاحها. وهذا بالضبط ما نهدف إلى تقديمه لعملائنا الكرام، حيث نقدم مزيجًا من الموثوقية والقدرة والدوام لجعل موقعك الإلكتروني يزدهر. نحن في RR Technologies نتميز في مجال التسويق الرقمي وبرامج الويب وتطوير الويب وتصميم الويب وحلول الويب الأخرى التي قد تفكر في الحصول عليها لنمو موقعك الإلكتروني.',
        'Are You Facing Difficulties With Your Website? Do You Have A Website But Lack Traffic? No Need To Worry. We At RR Technologies Use Our Technological Expertise Amalgamated With Our Experience To Scoop Out The Right Potion Of Success For Your Firm. We Are Highly Passionate About Our Work And Leave No Stones Unturned To Delight Our Customers With High-Quality Work And Efficient Project Management That Comes As A Surprise Bearing Bounteous Outcomes.': 'هل تواجه صعوبات مع موقعك الإلكتروني؟ هل لديك موقع إلكتروني ولكن تفتقر إلى الزوار؟ لا داعي للقلق. نحن في RR Technologies نستخدم خبرتنا التكنولوجية الممزوجة بتجربتنا لاستخراج الوصفة الصحيحة للنجاح لشركتك. نحن شغوفون للغاية بعملنا ولا ندخر جهدًا لإسعاد عملائنا بعمل عالي الجودة وإدارة فعالة للمشاريع تأتي كمفاجأة تحمل نتائج وفيرة.',
        'Owing To The Years Of Expertise In Web Development And Web Designing, Our In-House Professionals Have Been Highly Successful In Catering Projects. May It Be Your Small Size Or Large Scale Business, We Deliver You With The Best Interactive Surfaces.': 'نظرًا لسنوات الخبرة في تطوير الويب وتصميمه، كان محترفونا الداخليون ناجحين للغاية في تلبية المشاريع. سواء كان عملك صغيرًا أو واسع النطاق، نقدم لك أفضل الواجهات التفاعلية.',
        'Show More..': 'عرض المزيد',
        'Show Less..': 'عرض أقل',
        'Projects': 'المشاريع',
        'Clients': 'العملاء',
        'Experience': 'الخبرة',
        'Company': 'الشركة'
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
      showMore,
      t
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Coiny&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Science+Gothic:wght@100..900&family=Share+Tech&family=Sixtyfour&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

.about-section {
  font-family: Arial, sans-serif;
}

.content-wrapper {
  font-family: Arial, sans-serif;
}

.thank-you-text {
  color: #2196F3;
  font-weight: 500;
  margin-bottom: 0;
}

.main-heading {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  margin-bottom: 1rem;
}

.highlight-text {
  color: #FF5722;
}

.intro-text {
  padding: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0;
}

.text-container {
  position: relative;
  max-height: 200px;
  overflow: hidden;
  transition: all 0.5s ease;
  margin-left: 70px;
}

.text-container.expanded {
  max-height: 1000px;
}

.text-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9));
  pointer-events: none;
  transition: all 0.5s ease;
}

.dark .text-container::after {
  background: linear-gradient(to bottom, transparent, #0F172A);
}

.text-container.expanded::after {
  opacity: 0;
  visibility: hidden;
}

.description-text {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.8;
  text-align: justify;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  transition: all 0.5s ease;
}

.second-paragraph {
  margin-top: 1rem;
}

.show-more-btn {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease;
  margin-left: 70px;
  z-index: 10;
  position: relative;
}

.show-more-btn:hover {
  background-color: #333;
}

.about-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
}

.stat-icon {
  color: #5380EA;
  margin-bottom: 1rem;
}

.stat-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

.stat-number {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}

.dark .about-section {
  background-color: #0F172A;
}

.dark h4,
.dark p,
.dark h1,
.dark h2,
.dark .stat-title,
.dark .stat-number,
.dark .intro-text,
.dark .description-text {
  color: white;
}

.dark .thank-you-text {
  color: #5380EA;
}

.dark .highlight-text {
  color: #FFA700;
}

.dark .show-more-btn {
  background-color: #fff;
  color: #000;
}

.dark .show-more-btn:hover {
  background-color: #e0e0e0;
}

[dir="rtl"] .main-heading,
[dir="rtl"] .intro-text,
[dir="rtl"] .description-text,
[dir="rtl"] .stat-title {
  font-family: "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .text-container {
  margin-left: 0;
  margin-right: 70px;
  text-align: right;
}

[dir="rtl"] .show-more-btn {
  margin-left: 0;
  margin-right: 70px;
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 1.5rem;
  }
  
  .intro-text {
    padding: 20px;
  }
  
  .text-container {
    margin-left: 20px;
    max-height: 150px;
  }
  
  [dir="rtl"] .text-container {
    margin-right: 20px;
    margin-left: 0;
  }
  
  .show-more-btn {
    margin-left: 20px;
  }
  
  [dir="rtl"] .show-more-btn {
    margin-right: 20px;
    margin-left: 0;
  }
  
  .description-text {
    font-size: 0.85rem;
  }
  
  .stat-icon svg {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 576px) {
  .main-heading {
    font-size: 1.3rem;
  }
  
  .thank-you-text {
    font-size: 1rem;
  }
  
  .text-container {
    max-height: 120px;
  }
}
</style>
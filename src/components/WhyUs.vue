<template>
  <div class="us-container container-fluid py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h3 class="subtitle mb-3">
          {{ t('Why Choose Us') }}
        </h3>
        <h1 class="title mb-4">{{ t('For Your Web Development Needs?') }}</h1>
        <p class="lead mx-auto" style="max-width: 800px;">
          {{ t('We have passion and love for what we do & we don\'t believe in cutting corners and setting wrong expectations.') }}
          {{ t('We aim at improving with each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances.') }}
          {{ t('There are multiple reasons that will make you fall for us for availing top-notch web development services.') }}
          {{ t('Here are a few of them.') }}
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-lg-5 col-xl-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <div class="card-icon mb-3">
                <font-awesome-icon icon="brain" />
              </div>
              <h3 class="card-title">{{ t('Experience') }}</h3>
              <p class="card-desc">
                {{ t('Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place.') }}
                {{ t('Also, we have a streamlined project management system to cater to your project requisites.') }}
                {{ t('Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines.') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-xl-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <div class="card-icon mb-3">
                <font-awesome-icon icon="fa-solid fa-people-group" />
              </div>
              <h3 class="card-title">{{ t('Dedicated Team') }}</h3>
              <p class="card-desc">
                {{ t('Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality.') }}
                {{ t('We have dedicated teams for designing and graphics.') }}
                {{ t('While our web developers get the designing part done, we have our own graphic designing team that handles all the quality imagery part for a successful website.') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-xl-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <div class="card-icon mb-3">
                <font-awesome-icon icon="fa-solid fa-hourglass-start" />
              </div>
              <h3 class="card-title">{{ t('Rapid Turnaround Time') }}</h3>
              <p class="card-desc">
                {{ t('We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame.') }}
                {{ t('We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire.') }}
                {{ t('We give ears to your vision.') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-xl-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <div class="card-icon mb-3">
                <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
              </div>
              <h3 class="card-title">{{ t('Competitive Pricing') }}</h3>
              <p class="card-desc">
                {{ t('Pricing is one crucial factor that every business owner considers while hiring a web development company.') }}
                {{ t('We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency.') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'WhyUs',
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
    
    const translations = {
      en: {

        'Why Choose Us': 'Why Choose Us',
        'For Your Web Development Needs?': 'For Your Web Development Needs?',
        'We have passion and love for what we do & we don\'t believe in cutting corners and setting wrong expectations.': 'We have passion and love for what we do & we don\'t believe in cutting corners and setting wrong expectations.',
        'We aim at improving with each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances.': 'We aim at improving with each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances.',
        'There are multiple reasons that will make you fall for us for availing top-notch web development services.': 'There are multiple reasons that will make you fall for us for availing top-notch web development services.',
        'Here are a few of them.': 'Here are a few of them.',
        'Experience': 'Experience',
        'Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place.': 'Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place.',
        'Also, we have a streamlined project management system to cater to your project requisites.': 'Also, we have a streamlined project management system to cater to your project requisites.',
        'Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines.': 'Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines.',
        'Dedicated Team': 'Dedicated Team',
        'Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality.': 'Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality.',
        'We have dedicated teams for designing and graphics.': 'We have dedicated teams for designing and graphics.',
        'While our web developers get the designing part done, we have our own graphic designing team that handles all the quality imagery part for a successful website.': 'While our web developers get the designing part done, we have our own graphic designing team that handles all the quality imagery part for a successful website.',
        'Rapid Turnaround Time': 'Rapid Turnaround Time',
        'We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame.': 'We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame.',
        'We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire.': 'We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire.',
        'We give ears to your vision.': 'We give ears to your vision.',
        'Competitive Pricing': 'Competitive Pricing',
        'Pricing is one crucial factor that every business owner considers while hiring a web development company.': 'Pricing is one crucial factor that every business owner considers while hiring a web development company.',
        'We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency.': 'We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency.'
      },
      ar: {
        'Why Choose Us': 'لماذا تختارنا',
        'For Your Web Development Needs?': 'لاحتياجاتك في تطوير الويب؟',
        'We have passion and love for what we do & we don\'t believe in cutting corners and setting wrong expectations.': 'نحن لدينا شغف وحب لما نفعله ولا نؤمن بتقصير الجودة أو وضع توقعات خاطئة.',
        'We aim at improving with each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances.': 'نهدف إلى التحسن مع كل يوم يمر ونعرض ما نحن عليه في الواقع، ولا نتظاهر في أي ظرف من الظروف.',
        'There are multiple reasons that will make you fall for us for availing top-notch web development services.': 'هناك أسباب عديدة تجعلك تفضلنا للحصول على خدمات تطوير ويب متميزة.',
        'Here are a few of them.': 'إليك بعض منها.',
        'Experience': 'الخبرة',
        'Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place.': 'الخبرة مهمة كما يقول المثل، وتوظيفنا يعني توظيف محترفين لديهم سنوات من الخبرة لإنجاز مشاريعك في المكان الصحيح.',
        'Also, we have a streamlined project management system to cater to your project requisites.': 'أيضاً، لدينا نظام إدارة مشاريع منظم لتلبية متطلبات مشروعك.',
        'Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines.': 'الاتصال بنا يتيح لك تصفح مجموعة كبيرة من المواهب الذين يمكنهم إنجاز مهمتك ضمن المواعيد النهائية المحددة.',
        'Dedicated Team': 'فريق مخصص',
        'Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality.': 'كل شخص لديه مجال تخصصه الخاص، وبالتالي لا نخلط بين المجالات الوظيفية المختلفة.',
        'We have dedicated teams for designing and graphics.': 'لدينا فرق مخصصة للتصميم والجرافيكس.',
        'While our web developers get the designing part done, we have our own graphic designing team that handles all the quality imagery part for a successful website.': 'بينما يقوم مطورو الويب لدينا بإنجاز جزء التصميم، لدينا فريق التصميم الجرافيكي الخاص بنا الذي يتعامل مع جميع جوانب الصور عالية الجودة لموقع ناجح.',
        'Rapid Turnaround Time': 'وقت تسليم سريع',
        'We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame.': 'نهدف إلى تقديم عمل عالي الجودة ضمن المواعيد النهائية المحددة، وبالتالي نلتزم بتقديم الحلول عندما يحتاجها عملاؤنا دون جعلهم ينتظرون ويتجاوزون الإطار الزمني المحدد.',
        'We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire.': 'نخطط وفقاً لذلك ونقوم أيضاً بتحديث عملائنا بانتظام بشأن التقدم لتحقيق ما ترغب فيه.',
        'We give ears to your vision.': 'نصغي لرؤيتك.',
        'Competitive Pricing': 'أسعار تنافسية',
        'Pricing is one crucial factor that every business owner considers while hiring a web development company.': 'التسعير هو عامل حاسم يفكر فيه كل صاحب عمل عند توظيف شركة تطوير ويب.',
        'We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency.': 'نحن الأفضل في السوق ونقدم أسعاراً تنافسية لعملائنا لتلبية جميع متطلبات العملاء بمستويات عالية من الكفاءة.'
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');

.us-container {
  background-color: #ffffff;
  transition: all 0.3s ease;
  min-height: 100vh;
  width: 100%;
}

/* RTL Text Direction and Fonts */
[dir="rtl"] .title,
[dir="rtl"] .subtitle,
[dir="rtl"] .lead,
[dir="rtl"] .card-title,
[dir="rtl"] .card-desc {
  font-family: "Nunito", "Noto Sans Arabic", sans-serif;
  text-align: right;
}

[dir="rtl"] .lead {
  direction: rtl;
  text-align: justify;
}

[dir="rtl"] .card-desc {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .text-center {
  text-align: center !important;
}

:root.dark .us-container {
  background-color: #0F172A;
}
:root.dark body {
  background-color: #0F172A !important;
}

:root.dark html {
  background-color: #0F172A !important;
}

.subtitle {
  color: #5380EA;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #000000;
  transition: color 0.3s ease;
}

.lead {
  font-family: Arial, sans-serif;
  color: #666666;
  font-size: 1.1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease;
  max-width: 380px;
  margin: 0 auto;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.card-icon {
  color: #5380EA;
  font-size: 2.5rem;
  text-align: center;
}

.card-title {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.card-desc {
  font-family: Arial, sans-serif;
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0;
  transition: color 0.3s ease;
}
:root.dark .title,
:root.dark .card-title {
  color: #ffffff;
}

:root.dark .lead,
:root.dark .card-desc {
  color: #b0b0b0;
}

:root.dark .card {
  background: #1e293b;
  border: 1px solid #334155;
}

:root.dark .card:hover {
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1) !important;
}
@media (max-width: 1200px) {
  .row .col-xl-4 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (max-width: 992px) {
  .row .col-lg-5 {
    flex: 0 0 auto;
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .card-desc {
    font-size: 0.9rem;
  }
  
  .card-icon {
    font-size: 2rem;
  }
  
  .card {
    max-width: 100%;
  }
  
  [dir="rtl"] .title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .card-body {
    padding: 1.5rem !important;
  }
  
  .us-container {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  [dir="rtl"] .title {
    font-size: 1.6rem;
  }
  
  [dir="rtl"] .subtitle {
    font-size: 0.9rem;
  }
}
</style>
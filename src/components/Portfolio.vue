<template>
  <div class="portfolio-section">

    <div class="portfolio-container">
      <div class="portfolio-header">
        
        <h2 class="portfolio-title"> {{ t('Our Portfolio') }}
         <span class="portfolio-title-icon"></span>
        </h2>
      </div>

      <div class="portfolio-content">
        <div class="portfolio-sidebar">
          <div v-for="(category, index) in translatedCategories" :key="index" :class="['portfolio-category', { active: activeCategory === categoryKeys[index] }]" 
           @click="activeCategory = categoryKeys[index]">{{ category }}
            </div>

        </div>

        <div class="portfolio-grid">
          <div v-for="item in portfolioData[activeCategory]" :key="item.id" class="portfolio-item">

            <div class="portfolio-item-image">
              <img :src="item.image" :alt="item.title" class="portfolio-img" />
              <div class="portfolio-overlay"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'Portfolio',
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
    const activeCategory = ref('Ecommerce Websites')
      const translations = {
      en: {
        'Our Portfolio': 'Our Portfolio',
        'Ecommerce Websites': 'Ecommerce Websites',
        'Wordpress Websites': 'Wordpress Websites',
        'Logos Design': 'Logos Design',
        'Graphics Design': 'Graphics Design'
      },

      ar: {
        'Our Portfolio': ' أعمالنا',
        'Ecommerce Websites': 'مواقع التجارة الإلكترونية',
        'Wordpress Websites': 'مواقع ووردبريس',
        'Logos Design': 'تصميم الشعارات',
        'Graphics Design': 'التصميم الجرافيكي'
      }
    }

        const categoryKeys = ref([
      'Ecommerce Websites',
      'Wordpress Websites',
      'Logos Design',
      'Graphics Design'
    ])
    
        const portfolioData = ref({
      'Ecommerce Websites': [
        { id: 1, image: '/images/portfolio/portfolio1.png'},
        { id: 2, image: '/images/portfolio/portfolio2.png' },
        { id: 3, image: '/images/portfolio/portfolio3.png'},
        { id: 4, image: '/images/portfolio/portfolio4.png'},
        { id: 5, image: '/images/portfolio/portfolio5.png'},
        { id: 6, image: '/images/portfolio/portfolio6.png'},
        { id: 7, image: '/images/portfolio/portfolio7.png' },
        { id: 8, image: '/images/portfolio/portfolio8.png'},
        { id: 9, image: 'https://cdn.dribbble.com/userupload/9000434/file/original-903fac30a0a944a36dcfaeb29e373619.png?format=webp&resize=400x300&vertical=center'},
        { id: 10, image: 'https://pixel77.com/wp-content/uploads/2024/06/ecommerce-website-designs-8-1024x768.webp'},
        { id: 11, image: 'https://design4users.com/wp-content/uploads/2021/03/web-design-ecommerce.png' },
        { id: 12, image: 'https://cdn.dribbble.com/userupload/44167308/file/original-f9a03c272504de8d1856f8ff6cd9ab31.jpg?resize=752x&vertical=center'}
      ],

      'Wordpress Websites': [
        { id: 13, image: 'https://en-blog.files.wordpress.com/2025/03/wordpress-com-portfolio-themes.jpg' },
        { id: 14, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1t9sM0Ul5bXzevSx9mUXTFouhlu76QMybA&s' },
        { id: 15, image: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/55e7171d90336027d77078f6/images/5868eea6c697915403a0880c/file-t7KjIhvIUZ.png' },
        { id: 16, image: 'https://clearbrand.com/wp-content/uploads/2024/06/MJR-Landscape-cover.jpg' },
        { id: 17, image: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/how%20to%20manage%20wordpress%20themes..webp?width=650&height=552&name=how%20to%20manage%20wordpress%20themes..webp' },
        { id: 18, image: 'https://beautifulpress-6d6e.kxcdn.com/wp-content/uploads/2022/11/RH-Customs-800x600.png'},
      ],
      'Logos Design': [
        { id: 25, image: 'https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80' },
        { id: 26, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_aF4YA1qyeG2pR11PvyV9Z7cYmp_KTKgZw&s'},
        { id: 27, image: 'https://img.freepik.com/premium-vector/stylish-trendy-logo-design-ideas-vector-format_1100229-7423.jpg' },
        { id: 28, image: 'https://www.shutterstock.com/image-vector/initial-letter-rj-linked-design-260nw-702242779.jpg' },
        { id: 29, image: 'https://img.freepik.com/premium-vector/creative-ab-logo-with-cross-line-logo_93323-388.jpg?semt=ais_hybrid&w=740&q=80' },
        { id: 30, image: 'https://img.freepik.com/premium-vector/creative-m-lettermark-minimal-logo-design_1131657-70.jpg?semt=ais_hybrid&w=740&q=80' },
        { id: 31, image: 'https://img.freepik.com/premium-vector/creative-letter-hexagonal-shape-negative-space-letter-line-art-monogram-logo-design_880858-28.jpg' },
        { id: 32, image: 'https://static.vecteezy.com/system/resources/previews/024/542/754/non_2x/unique-letter-ac-or-ca-modern-shape-alphabet-monogram-minimal-logo-ca-logo-ac-logo-free-vector.jpg' },
        { id: 33, image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709837715/catalog/1339821279232372736/mn6s9bswg5otzckudfti.webp' },
        { id: 34, image: 'https://img.freepik.com/premium-vector/modern-luxurious-geometric-letter-l-initial-logo-design-logo-business-company-identity_661039-4683.jpg' },
        { id: 35, image: 'https://www.designevo.com/res/templates/thumb_small/simple-golden-construction.webp' },
        { id: 36, image: 'https://www.logoai.com/uploads/output/2022/09/25/1cf15839181cac6c06ce7f002f793645.jpg' }
      ],

      'Graphics Design': [
        { id: 37, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE389fgjYRmqyvA82LD8irW8gkhCZFgMdIQ&s'},
        { id: 38, image: 'https://smartdigitalworks.com/wp-content/uploads/2022/11/off-page-seo-16.png' },
        { id: 39, image: 'https://i0.wp.com/graphicdesignjunction.com/wp-content/uploads/2014/05/002%2Bbranding%2Bstationery.jpg?w=600&ssl=1' },
        { id: 40, image: 'https://admin.shillingtoneducation.com/images/cttvfPU83n9oeSxqA50XZG3LlbY=/2300/format-webp%7Cwidth-3200/MultiAdaptor_Walr.jpeg'},
        { id: 41, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPuecZ4r1xoJpTRackepzSQlgy82ByL2UGIAGcqvUPGujYZnF___WxYZTMHP07oh8_n4&usqp=CAU' },
        { id: 42, image: 'https://static.wixstatic.com/media/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png/v1/fill/w_568,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png' },
        { id: 43, image: 'https://as1.ftcdn.net/v2/jpg/04/50/20/96/1000_F_450209669_OZ26fkwzrUoAjTsTyN1Ibhw39f8GnD1E.jpg'},
      ]
  
  })

      const t = (key) => {
      const lang = isArabic.value ? 'ar' : 'en'
      return translations[lang][key] || key
    }
        const translatedCategories = computed(() => {
      return categoryKeys.value.map(key => t(key))
    })

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
      activeCategory,
      categoryKeys,
      translatedCategories,
      portfolioData,
      t
    }
  }
}
</script>

<style scoped>
.portfolio-section {
  padding: 80px 20px;
}

.portfolio-container {
  max-width: 1400px;
  margin: 0 auto;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 60px;
}

.portfolio-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1f2e;
  margin: 0;
  position: relative;
  display: inline-block;
}

.portfolio-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 4px;
  background: #4285f4;
}

[dir="rtl"] .portfolio-title::after {
  left: auto;
  right: 50%;
  transform: translateX(50%);
}

.portfolio-title-icon {
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: white;
  border: 3px solid #4285f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

[dir="rtl"] .portfolio-title-icon {
  left: auto;
  right: 50%;
  transform: translateX(50%);
}

.portfolio-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  padding: 30px;
}

.portfolio-sidebar {
  min-width: 230px;
}

.portfolio-category {
  font-size: 20px;
  padding: 18px 0;
  margin: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1a1f2e;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.portfolio-category.active {
  color: #4285f4;
  font-weight: 600;
}

.portfolio-category.active::before {
  content: '';
  position: absolute;
  left: -20px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid #4285f4;
}

[dir="rtl"] .portfolio-category.active::before {
  left: auto;
  right: -20px;
  border-left: none;
  border-right: 10px solid #4285f4;
}

.portfolio-category:hover {
  color: #4285f4;
  transform: translateX(5px);
}

[dir="rtl"] .portfolio-category:hover {
  transform: translateX(-5px);
}

.portfolio-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.portfolio-item {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  width: 170px;
  height: 150px;
}

.portfolio-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.portfolio-item-image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.portfolio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-img {
  transform: scale(1.05);
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.dark .portfolio-section{
  background: #121212;
}

.dark .portfolio-title , .dark .portfolio-category {
  color: white;
}

.dark .portfolio-category.active{
  color: #4285f4;
}

.dark .portfolio-title::after {
  background: #e0e0e0;
}

.dark .portfolio-title-icon {
  color: white;
  background: #4285f4;
  border: #e0e0e0 4px solid;
}

@media (max-width: 1200px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .portfolio-content {
    flex-direction: column;
    gap: 40px;
  }

  .portfolio-sidebar {
    width: 100%;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 10px;
  }

  .portfolio-category {
    white-space: nowrap;
    padding: 12px 20px;
    background: white;
    border-radius: 25px;
    border: 2px solid #e0e0e0;
  }

  .portfolio-category.active {
    background: #4285f4;
    color: white;
    border-color: #4285f4;
  }

  .portfolio-category.active::before {
    display: none;
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .portfolio-section {
    padding: 50px 15px;
  }

  .portfolio-title {
    font-size: 1.8rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
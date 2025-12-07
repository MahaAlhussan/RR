<template>
  <div>
    <div class="register-section">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
      <div class="decoration-circle circle-4"></div>
      <div class="decoration-circle circle-5"></div>
      <div class="decoration-circle circle-6"></div>
      <div class="decoration-circle circle-7"></div>
      <div class="decoration-circle circle-8"></div>

      <div class="register-container">
        <div class="register-image-section">
          <img 
            src="/images/end.png" 
            :alt="t('Register Interest Illustration')" 
            class="register-image"
          />
        </div>

        <div class="register-form-section">
          <div class="register-form-card">
            <h2 class="register-title">{{ t('Register interest') }}</h2>
            <p class="register-description">
              {{ t('Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.') }}
            </p>

            <div>

              <div class="mb-3">
                <label class="form-label">
                  {{ t('Name') }} <span class="required">*</span>
                </label>
                <input type="text"  class="form-control"  v-model="formData.name"
                  :placeholder="t('Enter your name')" />
              </div>

              <div class="mb-3">
                <label class="form-label">

                  {{ t('Company') }}
                </label>

                <input   type="text" class="form-control" v-model="formData.company"  :placeholder="t('Enter your company name')"/>
              </div>

              <div class="mb-3">
                <label class="form-label">
                  {{ t('Email address') }} <span class="required">*</span>
                </label>
                <input type="email" class="form-control" v-model="formData.email" :placeholder="t('Enter your email address')"  />
              </div>

              <div class="mb-4">
                <label class="form-label">
                  {{ t('Message') }} <span class="required">*</span>
                </label>

                <textarea
                  class="form-control" v-model="formData.message" :placeholder="t('Your message here')" ></textarea>

              </div>

              <button @click="handleSubmit" class="submit-btn">
                {{ t('Submit') }}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-text">

      {{ t('@Copyright 2023 all right reserved by Naimur Rahman Hira') }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Register',
  setup() {
    const isArabic = ref(localStorage.getItem('language') === 'ar')
    const formData = ref({
      name: '',
      company: '',
      email: '',
      message: ''
    })
    
    const translations = {
      en: {
        'Register interest': 'Register interest',
        'Register Interest Illustration': 'Register Interest Illustration',
        'Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.': 'Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.',
        'Name': 'Name',
        'Enter your name': 'Enter your name',
        'Company': 'Company',
        'Enter your company name': 'Enter your company name',
        'Email address': 'Email address',
        'Enter your email address': 'Enter your email address',
        'Message': 'Message',
        'Your message here': 'Your message here',
        'Submit': 'Submit',
        '@Copyright 2023 all right reserved by Naimur Rahman Hira': '@Copyright 2023 all right reserved by Naimur Rahman Hira'
      },
      ar: {
        'Register interest': ' التسجيل',
        'Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.': 'استخدم النموذج أدناه للاتصال بنا. يرجى أن تكون مفصلاً ودقيقاً قدر الإمكان. قم بتضمين مجال عملك وأي طلبات محددة. لمساعدتنا على التعرف عليك وخدمتك بشكل أفضل، نشكرك أولاً على إعطائنا وصفًا جيدًا عن هويتك. يمكنك أيضًا إرسال بريد إلكتروني أو الاتصال بنا أو إرسال رسالة عبر WhatsApp لتحديد موعد.',
        'Name': 'الاسم',
        'Enter your name': 'أدخل اسمك',
        'Company': 'الشركة',
        'Enter your company name': 'أدخل اسم شركتك',
        'Email address': 'عنوان البريد الإلكتروني',
        'Enter your email address': 'أدخل عنوان بريدك الإلكتروني',
        'Message': 'الرسالة',
        'Your message here': 'رسالتك هنا',
        'Submit': 'إرسال',
        '@Copyright 2023 all right reserved by Naimur Rahman Hira': '© جميع الحقوق محفوظة 2023 لنعيم الرحمن هير'
      }
    }
    
    const t = (key) => {
      const lang = isArabic.value ? 'ar' : 'en'
      return translations[lang][key] || key
    }
        const handleSubmit = () => {
      console.log('Form submitted:', formData.value);
      
      const message = isArabic.value 
        ? 'تم إرسال النموذج بنجاح!' 
        : 'Form submitted successfully!'
      
      alert(message);
      
      formData.value = {
        name: '',
        company: '',
        email: '',
        message: ''
      }
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
      formData,
      t,
      handleSubmit
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');

.register-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%);
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

img {
  width: 500px;
}

[dir="rtl"] .register-title,
[dir="rtl"] .register-description,
[dir="rtl"] .form-label,
[dir="rtl"] .form-control,
[dir="rtl"] .footer-text {
  font-family: "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .register-form-card {
  text-align: right;
}

[dir="rtl"] .form-control {
  text-align: right;
}

[dir="rtl"] .form-control::placeholder {
  text-align: right;
}

[dir="rtl"] .register-description {
  direction: rtl;
  text-align: justify;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.9;
}

.circle-1 {
  width: 30px;
  height: 30px;
  background: #FFD54F;
  top: 15%;
  left: 10%;
}

.circle-2 {
  width: 20px;
  height: 20px;
  background: #FF8A80;
  top: 10%;
  right: 30%;
}

.circle-3 {
  width: 20px;
  height: 20px;
  background: #4285f4;
  top: 20%;
  left: 20%;
}

.circle-4 {
  width: 45px;
  height: 45px;
  background: #FFD54F;
  top: 45%;
  right: 15%;
}

.circle-5 {
  width: 35px;
  height: 35px;
  background: #FF8A80;
  bottom: 30%;
  left: 15%;
}

.circle-6 {
  width: 30px;
  height: 30px;
  background: #4285f4;
  bottom: 35%;
  left: 18%;
}

.circle-7 {
  width: 40px;
  height: 40px;
  background: #4285f4;
  bottom: 20%;
  right: 25%;
}

.circle-8 {
  width: 45px;
  height: 45px;
  background: #FFD54F;
  bottom: 25%;
  right: 20%;
}

[dir="rtl"] .circle-1 {
  left: auto;
  right: 10%;

}

[dir="rtl"] .circle-2 {
  right: auto;
  left: 30%;

}

[dir="rtl"] .circle-3 {
  left: auto;
  right: 20%;

}

[dir="rtl"] .circle-4 {
  right: auto;

  left: 15%;
}

[dir="rtl"] .circle-5 {
  left: auto;
  right: 15%;
}

[dir="rtl"] .circle-6 {
  left: auto;
  right: 18%;
}

[dir="rtl"] .circle-7 {
  right: auto;
  left: 25%;
}

[dir="rtl"] .circle-8 {
  right: auto;
  left: 20%;
}

.register-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.register-image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
}

.register-form-section {
  flex: 1;
}

.register-form-card {
  background: white;
  border-radius: 16px;
  padding: 50px 45px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 500px;
}

.register-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #4285f4;
  margin-bottom: 20px;
}

.register-description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

.form-label {
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.95rem;
  display: block;
}

.required {
  color: #ff5252;
}

.form-control {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  width: 100%;
  display: block;
}

.form-control:focus {
  border-color: #4285f4;
  box-shadow: 0 0 0 0.2rem rgba(66, 133, 244, 0.15);
  outline: none;
}

.form-control::placeholder {
  color: #bbb;
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.submit-btn {
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 14px 60px;
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #3367d6;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(66, 133, 244, 0.3);
}

.footer-text {
  text-align: center;
  padding: 30px 20px;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 60px;
}

:root.dark .register-section {
  background: linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%);
}

:root.dark .register-form-card {
  background: #2d3748;
}

:root.dark .register-title,
:root.dark .form-label {
  color: #ffffff;
}

:root.dark .register-description,
:root.dark .footer-text {
  color: #b0b0b0;
}

:root.dark .form-control {
  background: #1e293b;
  border-color: #4a5568;
  color: #ffffff;
}

:root.dark .form-control::placeholder {
  color: #718096;
}

:root.dark .form-control:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 0.2rem rgba(66, 153, 225, 0.15);
}

:root.dark .footer-text {
  border-top-color: #4a5568;
  color: #cbd5e0;
}

@media (max-width: 992px) {
  .register-container {
    flex-direction: column;
    gap: 40px;
  }

  .register-image-section {
    max-width: 400px;
  }

  .register-form-card {
    padding: 40px 35px;
    width: 100%;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .register-section {
    padding: 40px 15px;
  }

  .register-title {
    font-size: 1.8rem;
  }

  .register-form-card {
    padding: 30px 25px;
  }

  .decoration-circle {
    display: none;
  }
}

@media (max-width: 576px) {
  .register-title {
    font-size: 1.5rem;
  }

  .submit-btn {
    width: 100%;
    padding: 14px 30px;
  }
  
  .register-form-card {
    padding: 25px 20px;
  }
  
  img {
    width: 300px;
  }
}
</style>
// نظام الترجمة ثنائي اللغة
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'ar';
        this.translations = {
            ar: {
                // العناوين الرئيسية
                'siteTitle': 'دليل فعاليات دمشق',
                'home': 'الرئيسية',
                'events': 'الفعاليات',
                'about': 'عن الدليل',
                'contact': 'اتصل بنا',
                
                // النصوص العامة
                'searchPlaceholder': 'ابحث في الفعاليات...',
                'allCategories': 'جميع التصنيفات',
                'filter': 'تصفية',
                'details': 'التفاصيل',
                'readMore': 'اقرأ المزيد',
                'viewAll': 'عرض الكل',
                
                // التصنيفات
                'culture': 'ثقافة',
                'music': 'موسيقى',
                'sports': 'رياضة',
                'art': 'فنون',
                'food': 'طعام',
                'education': 'تعليم',
                
                // رسائل
                'noEvents': 'لا توجد فعاليات',
                'loading': 'جاري التحميل...',
                'success': 'تم بنجاح',
                'error': 'حدث خطأ'
            },
            en: {
                // Main titles
                'siteTitle': 'Damascus Events Guide',
                'home': 'Home',
                'events': 'Events',
                'about': 'About',
                'contact': 'Contact Us',
                
                // General texts
                'searchPlaceholder': 'Search events...',
                'allCategories': 'All Categories',
                'filter': 'Filter',
                'details': 'Details',
                'readMore': 'Read More',
                'viewAll': 'View All',
                
                // Categories
                'culture': 'Culture',
                'music': 'Music',
                'sports': 'Sports',
                'art': 'Arts',
                'food': 'Food',
                'education': 'Education',
                
                // Messages
                'noEvents': 'No events found',
                'loading': 'Loading...',
                'success': 'Success',
                'error': 'Error occurred'
            }
        };
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.setDirection(this.currentLang);
        this.setupEventListeners();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // تحديث النصوص
        this.updateTexts();
        
        // تحديث سمة اللغة
        document.documentElement.lang = lang;
        
        // تحديث الاتجاه
        this.setDirection(lang);
        
        // إرسال حدث التغيير
        window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }

    setDirection(lang) {
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
        }
    }

    updateTexts() {
        // تحديث النصوص ذات البيانات المخصصة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });

        // تحديث النصوص ذات data-lang
        document.querySelectorAll('[data-lang]').forEach(element => {
            if (element.getAttribute('data-lang') === this.currentLang) {
                element.style.display = 'inline';
            } else {
                element.style.display = 'none';
            }
        });

        // تحديث عناوين الصفحات
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            const titleKey = pageTitle.getAttribute('data-title-key');
            if (titleKey && this.translations[this.currentLang][titleKey]) {
                pageTitle.textContent = this.translations[this.currentLang][titleKey];
            }
        }
    }

    setupEventListeners() {
        // تحديث النصوص عند تغيير الحجم (للتأكد من التحديث)
        window.addEventListener('resize', () => {
            this.updateTexts();
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    translate(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// إنشاء نسخة عامة
const languageManager = new LanguageManager();

// دالة عامة لتغيير اللغة
function changeLanguage(lang) {
    languageManager.setLanguage(lang);
}

// دوال مساعدة للتمرير
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// تهيئة السلايدر
function initCarousel() {
    const myCarousel = document.querySelector('#eventsCarousel');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
    }
}

// تهيئة عامة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
    initCarousel();
});

// تحديث النصوص عند تغيير اللغة
window.addEventListener('languageChange', function() {
    // سيتم تحديث النصوص تلقائياً عبر النظام
});
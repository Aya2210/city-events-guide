// نظام الترجمة ثنائي اللغة
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'ar';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        this.setDirection(lang);
        this.updatePageContent();
        window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }

    setDirection(lang) {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
    }

    updatePageContent() {
        // تحديث النصوص ذات data-lang
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.display = element.getAttribute('data-lang') === this.currentLang ? 'inline' : 'none';
        });

        // تحديث عناوين الصفحات
        const titles = document.querySelectorAll('title[data-lang]');
        titles.forEach(title => {
            if (title.getAttribute('data-lang') === this.currentLang) {
                title.style.display = 'block';
            } else {
                title.style.display = 'none';
            }
        });
    }

    setupEventListeners() {
        // تحديث عند تغيير الحجم
        window.addEventListener('resize', () => this.updatePageContent());
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// إنشاء نسخة عامة
const languageManager = new LanguageManager();

// دالة عامة لتغيير اللغة
function changeLanguage(lang) {
    languageManager.setLanguage(lang);
}

// دوال مساعدة عامة
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;
    
    window.addEventListener('scroll', function() {
        scrollButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// تهيئة عامة
document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
});
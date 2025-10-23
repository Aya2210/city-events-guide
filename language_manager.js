// نظام إدارة اللغة
class LanguageManager {
    constructor() {
        this.currentLanguage = 'ar';
        this.init();
    }
    
    init() {
        this.loadLanguagePreference();
        this.setupLanguageSwitcher();
        this.applyLanguage();
    }
    
    loadLanguagePreference() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            this.currentLanguage = savedLang;
        }
    }
    
    setupLanguageSwitcher() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-lang]')) {
                const lang = e.target.closest('[data-lang]').getAttribute('data-lang');
                this.switchLanguage(lang);
            }
        });
    }
    
    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.applyLanguage();
        this.dispatchLanguageChange();
    }
    
    applyLanguage() {
        document.documentElement.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', this.currentLanguage);
        this.updateTexts();
        this.updateLanguageButtons();
    }
    
    updateTexts() {
        document.querySelectorAll('[data-ar]').forEach(element => {
            const text = this.currentLanguage === 'ar' ? 
                element.getAttribute('data-ar') : 
                element.getAttribute('data-en');
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });
    }
    
    updateLanguageButtons() {
        document.querySelectorAll('[data-lang]').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === this.currentLanguage) {
                button.classList.add('active');
            }
        });
    }
    
    dispatchLanguageChange() {
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: this.currentLanguage
        }));
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

const languageManager = new LanguageManager();
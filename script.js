// بيانات الفعاليات الكاملة
const eventsData = [
    {
        id: 1,
        title: {
            ar: "مهرجان 'دمشق تعود' للتراث والفنون",
            en: "'Damascus Returns' Heritage and Arts Festival"
        },
        description: {
            ar: "إحياء التراث الدمشقي عبر عروض الأزياء التقليدية، حكايات الجدات، وعروض المسرح التراثي في ساحة المرجة التاريخية. تجربة ثقافية فريدة تعيد إحياء تراث دمشق العريق.",
            en: "Reviving Damascene heritage through traditional fashion shows, grandmothers' tales, and heritage theater performances in Al-Marjah Square. A unique cultural experience that brings Damascus' rich heritage back to life."
        },
        category: "culture",
        date: "2025-03-15",
        time: "18:00",
        location: {
            ar: "ساحة المرجة - قلب دمشق",
            en: "Al-Marjah Square - Heart of Damascus"
        },
        image: "https://images.unsplash.com/photo-1540541339277-448b292d68c3?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "مجاني",
            en: "Free"
        },
        organizer: {
            ar: "وزارة الثقافة",
            en: "Ministry of Culture"
        }
    },
    {
        id: 2,
        title: {
            ar: "حفل 'أصوات السلام' السيمفوني",
            en: "'Voices of Peace' Symphonic Concert"
        },
        description: {
            ar: "أوركسترا سورية شابة تعزف مقطوعات تجمع بين الأصالة والمعاصرة برعاية فنانين سوريين في مدرج جامعة دمشق. سيمفونية تجسد أمل السلام والبناء.",
            en: "Young Syrian orchestra performing pieces that blend authenticity and modernity, sponsored by Syrian artists at Damascus University Amphitheater. A symphony embodying the hope of peace and reconstruction."
        },
        category: "music",
        date: "2025-04-01",
        time: "20:00",
        location: {
            ar: "مدرج جامعة دمشق المفتوح",
            en: "Damascus University Open Amphitheater"
        },
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "25,000 ل.س",
            en: "25,000 SYP"
        },
        organizer: {
            ar: "الجمعية السورية للموسيقى",
            en: "Syrian Music Association"
        }
    },
    {
        id: 3,
        title: {
            ar: "سباق 'دراجات دمشق' للتحدي والتضامن",
            en: "'Damascus Bikes' Challenge and Solidarity Race"
        },
        description: {
            ar: "سباق دراجات لمسافة 30 كم بمشاركة شبابية كبيرة لإظهار جمال المدينة المستعادة عبر أحياء دمشق. فعالية رياضية ترمز للتضامن والأمل.",
            en: "30 km bike race with massive youth participation to showcase the beauty of the restored city through Damascus neighborhoods. A sports event symbolizing solidarity and hope."
        },
        category: "sports",
        date: "2025-04-10",
        time: "07:00",
        location: {
            ar: "انطلاق من جسر الرئيس - مسار عبر أحياء دمشق",
            en: "Starting from Al-Raies Bridge - Route through Damascus neighborhoods"
        },
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "10,000 ل.س",
            en: "10,000 SYP"
        },
        organizer: {
            ar: "نادي دمشق للدراجات",
            en: "Damascus Cycling Club"
        }
    },
    {
        id: 4,
        title: {
            ar: "سوق 'حارات الشام' الذواقة",
            en: "'Alleys of Sham' Gourmet Market"
        },
        description: {
            ar: "تجربة طعام شامية أصلية في الأزقة القديمة بحي القيمرية مع عروض حية للطهي والحرف اليدوية. استكشاف لأصالة المطبخ الدمشقي.",
            en: "Authentic Sham food experience in the ancient alleys of Al-Qaimariya neighborhood with live cooking and craft demonstrations. An exploration of Damascene culinary authenticity."
        },
        category: "food",
        date: "2025-04-12",
        time: "11:00",
        location: {
            ar: "حي القيمرية التاريخي",
            en: "Historic Al-Qaimariya Neighborhood"
        },
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "مجاني الدخول",
            en: "Free Entry"
        },
        organizer: {
            ar: "جمعية الطهاة السوريين",
            en: "Syrian Chefs Association"
        }
    },
    {
        id: 5,
        title: {
            ar: "ملتقى 'شباب دمشق الرقمي' للتكنولوجيا",
            en: "'Digital Damascus Youth' Technology Forum"
        },
        description: {
            ar: "ورش عمل حول البرمجة، التسويق الرقمي، والذكاء الاصطناعي لبناء جيل تقني في حاضنة دمشق للتكنولوجيا. استثمار في مستقبل الشباب.",
            en: "Workshops on programming, digital marketing, and artificial intelligence to build a tech generation at Damascus Technology Incubator. Investing in youth's future."
        },
        category: "education",
        date: "2025-05-05",
        time: "09:00",
        location: {
            ar: "حاضنة دمشق للتكنولوجيا (باب توما)",
            en: "Damascus Technology Incubator (Bab Touma)"
        },
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "مجاني",
            en: "Free"
        },
        organizer: {
            ar: "وزارة الاتصالات والتكنولوجيا",
            en: "Ministry of Communications & Technology"
        }
    },
    {
        id: 6,
        title: {
            ar: "معرض 'جداريات الأمل' الفني",
            en: "'Murals of Hope' Art Exhibition"
        },
        description: {
            ar: "فنانون شباب يرسمون جداريات تعبر عن الأمل، السلام، وإعادة الإعمار على جدران شارع أبو رمانة. فن يروي قصة النهضة.",
            en: "Young artists painting murals expressing hope, peace, and reconstruction on Abu Rummaneh Street walls. Art that tells the story of renaissance."
        },
        category: "art",
        date: "2025-04-20",
        time: "16:00",
        location: {
            ar: "جدران شارع أبو رمانة",
            en: "Abu Rummaneh Street Walls"
        },
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "مجاني",
            en: "Free"
        },
        organizer: {
            ar: "رواق الفنون التشكيلية",
            en: "Fine Arts Gallery"
        }
    }
];

// دوال مساعدة
function getCategoryName(category, lang) {
    const categories = {
        music: { ar: 'موسيقى', en: 'Music' },
        sports: { ar: 'رياضة', en: 'Sports' },
        art: { ar: 'فنون', en: 'Arts' },
        culture: { ar: 'ثقافة', en: 'Culture' },
        food: { ar: 'طعام', en: 'Food' },
        education: { ar: 'تعليم', en: 'Education' }
    };
    return categories[category]?.[lang] || category;
}

function formatDate(dateString, lang) {
    const date = new Date(dateString);
    if (lang === 'ar') {
        return date.toLocaleDateString('ar-EG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } else {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// عرض الفعاليات في الشبكة
function initEventsGrid() {
    const eventsGrid = document.getElementById('eventsGrid');
    console.log('🎯 البحث عن eventsGrid:', eventsGrid);
    
    if (!eventsGrid) {
        console.error('❌ eventsGrid غير موجود في الصفحة');
        return;
    }

    const currentLang = languageManager.getCurrentLanguage();
    const eventsToShow = eventsData.slice(0, 6);

    console.log('📝 عرض الفعاليات:', eventsToShow.length);
    displayEventsInGrid(eventsGrid, eventsToShow, currentLang);
}

function displayEventsInGrid(container, events, currentLang) {
    console.log('🎨 عرض الفعاليات في الشبكة:', events.length);
    
    if (events.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                    <h4 data-lang="ar">لا توجد فعاليات</h4>
                    <h4 data-lang="en" style="display:none;">No events found</h4>
                    <p class="text-muted" data-lang="ar">جرب تصنيف آخر أو تحقق لاحقاً</p>
                    <p class="text-muted" data-lang="en" style="display:none;">Try another category or check back later</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="col-lg-4 col-md-6 mb-4" data-category="${event.category}">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title[currentLang]}" 
                     onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>
                            ${event.time}
                        </small>
                    </div>
                    <h5 class="card-title">${event.title[currentLang]}</h5>
                    <p class="card-text">${event.description[currentLang].substring(0, 120)}...</p>
                    <div class="event-meta">
                        <small class="text-muted d-block mb-2">
                            <i class="fas fa-calendar me-1"></i>
                            ${formatDate(event.date, currentLang)}
                        </small>
                        <small class="text-muted d-block mb-2">
                            <i class="fas fa-map-marker-alt me-1"></i>
                            ${event.location[currentLang]}
                        </small>
                        <small class="text-muted">
                            <i class="fas fa-tag me-1"></i>
                            ${event.price[currentLang]}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <a href="event-details.html?id=${event.id}" class="btn btn-primary w-100">
                        <i class="fas fa-info-circle me-1"></i>
                        <span data-lang="ar">التفاصيل</span>
                        <span data-lang="en" style="display:none;">Details</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    console.log('✅ تم عرض الفعاليات بنجاح');
}

// نظام التصفية
function initCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    console.log('🎯 أزرار التصنيف:', categoryButtons.length);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('🔘 زر مضغوط:', category);
            
            // تحديث الحالة النشطة للأزرار
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            
            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline-primary');
            
            filterEventsByCategory(category);
        });
    });
}

function filterEventsByCategory(category) {
    console.log('🔍 تصفية الفعاليات حسب:', category);
    
    const eventsGrid = document.getElementById('eventsGrid');
    const currentLang = languageManager.getCurrentLanguage();
    
    let filteredEvents;
    
    if (category === 'all') {
        filteredEvents = eventsData.slice(0, 6);
    } else {
        filteredEvents = eventsData.filter(event => event.category === category);
    }
    
    console.log('📊 الفعاليات المصفاة:', filteredEvents.length);
    displayEventsInGrid(eventsGrid, filteredEvents, currentLang);
}

// عرض السلايدر
function initFeaturedCarousel() {
    const carouselInner = document.querySelector('#eventsCarousel .carousel-inner');
    console.log('🎠 البحث عن السلايدر:', carouselInner);
    
    if (!carouselInner) {
        console.error('❌ السلايدر غير موجود في الصفحة');
        return;
    }

    const currentLang = languageManager.getCurrentLanguage();
    const featuredEvents = eventsData.filter(event => event.featured);

    console.log('⭐ الفعاليات البارزة:', featuredEvents.length);

    if (featuredEvents.length === 0) {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <div class="row align-items-center">
                    <div class="col-12 text-center py-5">
                        <p data-lang="ar">لا توجد فعاليات بارزة حالياً</p>
                        <p data-lang="en" style="display:none;">No featured events at the moment</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    carouselInner.innerHTML = featuredEvents.map((event, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="${event.image}" class="d-block w-100 rounded" alt="${event.title[currentLang]}"
                         onerror="this.src='https://via.placeholder.com/600x400/3498db/ffffff?text=Featured+Event'">
                </div>
                <div class="col-md-6">
                    <div class="carousel-content">
                        <span class="badge bg-primary mb-3">${getCategoryName(event.category, currentLang)}</span>
                        <h3>${event.title[currentLang]}</h3>
                        <p class="lead">${event.description[currentLang].substring(0, 150)}...</p>
                        <div class="event-info mb-3">
                            <p><i class="fas fa-calendar me-2"></i> ${formatDate(event.date, currentLang)}</p>
                            <p><i class="fas fa-map-marker-alt me-2"></i> ${event.location[currentLang]}</p>
                            <p><i class="fas fa-clock me-2"></i> ${event.time}</p>
                        </div>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary btn-lg">
                            <span data-lang="ar">اكتشف المزيد</span>
                            <span data-lang="en" style="display:none;">Discover More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    console.log('✅ تم تحميل السلايدر بنجاح');
}

// التهيئة الرئيسية
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 بدء تحميل الصفحة الرئيسية');
    
    // تهيئة المكونات بالترتيب
    setTimeout(() => {
        initEventsGrid();
        initCategoryFilters();
        initFeaturedCarousel();
        initScrollToTop();
        initCarousel();
        
        console.log('✅ جميع المكونات تم تحميلها بنجاح');
    }, 100);
});

// تحديث المحتوى عند تغيير اللغة
window.addEventListener('languageChange', function(e) {
    console.log('🔄 تغيير اللغة إلى:', e.detail);
    const currentLang = e.detail;
    
    setTimeout(() => {
        initEventsGrid();
        initFeaturedCarousel();
        console.log('✅ تم تحديث المحتوى للغة:', currentLang);
    }, 100);
});

// إضافة تفاعلية للفلترة
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('input[type="text"]').value;
    const dateInput = document.querySelector('input[type="date"]').value;
    const categorySelect = document.querySelectorAll('select')[0].value;
    
    alert(`جاري البحث:\nالاسم: ${searchInput || "جميع الفعاليات"}\nالتاريخ: ${dateInput || "جميع التواريخ"}\nالنوع: ${categorySelect || "جميع الأنواع"}`);
});

// دالة تبديل اللغة
function toggleLanguage() {
    const translations = document.querySelectorAll('.translation');
    const isEnglish = translations[0].style.display === 'block';
    
    if (isEnglish) {
        // إخفاء الترجمة الإنجليزية (إظهار العربي)
        translations.forEach(trans => {
            trans.style.display = 'none';
        });
        document.getElementById('languageToggle').textContent = '🌐 English';
        document.documentElement.dir = 'rtl';
        document.querySelector('.search-btn').textContent = 'بحث';
    } else {
        // إظهار الترجمة الإنجليزية (إخفاء العربي)
        translations.forEach(trans => {
            trans.style.display = 'block';
        });
        document.getElementById('languageToggle').textContent = '🌐 العربية';
        document.documentElement.dir = 'ltr';
        document.querySelector('.search-btn').textContent = 'Search';
    }
}

// تأثيرات عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// تطبيق التأثير على جميع البطاقات
document.querySelectorAll('.event-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// تهيئة زر اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    let languageBtn = document.getElementById('languageToggle');
    
    if (!languageBtn) {
    
        const headerTop = document.createElement('div');
        headerTop.className = 'header-top';
        headerTop.innerHTML = '<button id="languageToggle" class="language-btn">🌐 English</button>';
        document.querySelector('.header').insertBefore(headerTop, document.querySelector('.header h1'));
        
        languageBtn = document.getElementById('languageToggle');
    }
    
    // إضافة حدث النقر لزر اللغة
    languageBtn.addEventListener('click', toggleLanguage);
    
    // إخفاء جميع الترجمات افتراضياً
    document.querySelectorAll('.translation').forEach(trans => {
        trans.style.display = 'none';
    });
    
    // التأكد من أن الاتجاه عربي افتراضي
    document.documentElement.dir = 'rtl';
});

document.querySelector('.filter-dropdown').addEventListener('change', function() {
    const selectedValue = this.value;
    
    // إخفاء جميع الفعاليات أولاً
    const allEvents = document.querySelectorAll('.event-item');
    allEvents.forEach(event => event.style.display = 'none');
    
 
    console.log('تم اختيار:', selectedValue);
});
function filterEvents() {
    const filter = document.querySelector('.filter-dropdown').value;
    alert('تم اختيار: ' + filter + ' - جاري تطبيق التصفية...');
}
/**
 * Dark Mode Manager - Standalone
 * يمكن إضافته لأي موقع بدون تعديلات على الكود الحالي
 */

class DarkModeManager {
    constructor() {
        this.isDark = false;
        this.toggleButton = null;
        this.currentLanguage = 'ar';
        this.init();
    }
    
    init() {
        this.detectLanguage();
        this.loadPreference();
        this.createToggleButton();
        this.applyMode();
        this.setupEventListeners();
    }
    
    detectLanguage() {
        const html = document.documentElement;
        this.currentLanguage = html.getAttribute('lang') || 'ar';
        this.isRTL = html.getAttribute('dir') === 'rtl';
    }
    
    loadPreference() {
        const saved = localStorage.getItem('darkMode');
        this.isDark = saved === 'true';
        
        // Auto-detect system preference if no saved preference
        if (saved === null && window.matchMedia) {
            this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    }
    
    createToggleButton() {
        // Remove existing toggle button if any
        const existingToggle = document.querySelector('.dark-mode-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }
        
        // Create new toggle button
        this.toggleButton = document.createElement('button');
        this.toggleButton.className = 'dark-mode-toggle';
        this.toggleButton.setAttribute('aria-label', this.getToggleText());
        this.toggleButton.innerHTML = this.isDark ? '☀️' : '🌙';
        
        // Position based on language direction
        if (this.isRTL) {
            this.toggleButton.style.left = '20px';
            this.toggleButton.style.right = 'auto';
        } else {
            this.toggleButton.style.right = '20px';
            this.toggleButton.style.left = 'auto';
        }
        
        document.body.appendChild(this.toggleButton);
        this.updateButtonText();
    }
    
    setupEventListeners() {
        // Toggle button click
        this.toggleButton.addEventListener('click', () => this.toggle());
        
        // Listen for language changes
        this.observeLanguageChanges();
        
        // Listen for system preference changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('darkMode')) {
                    this.isDark = e.matches;
                    this.applyMode();
                    this.updateButtonText();
                }
            });
        }
    }
    
    observeLanguageChanges() {
        // Observe DOM changes to detect language switches
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && 
                    (mutation.attributeName === 'lang' || mutation.attributeName === 'dir')) {
                    this.detectLanguage();
                    this.updateButtonPosition();
                    this.updateButtonText();
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang', 'dir']
        });
    }
    
    toggle() {
        this.isDark = !this.isDark;
        this.applyMode();
        this.savePreference();
        this.updateButtonText();
    }
    
    applyMode() {
        if (this.isDark) {
            document.body.classList.add('dark-mode');
            this.toggleButton.innerHTML = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            this.toggleButton.innerHTML = '🌙';
        }
    }
    
    savePreference() {
        localStorage.setItem('darkMode', this.isDark);
    }
    
    updateButtonText() {
        if (this.toggleButton) {
            const text = this.getToggleText();
            this.toggleButton.setAttribute('aria-label', text);
            this.toggleButton.setAttribute('title', text);
        }
    }
    
    updateButtonPosition() {
        if (this.toggleButton) {
            if (this.isRTL) {
                this.toggleButton.style.left = '20px';
                this.toggleButton.style.right = 'auto';
            } else {
                this.toggleButton.style.right = '20px';
                this.toggleButton.style.left = 'auto';
            }
        }
    }
    
    getToggleText() {
        if (this.currentLanguage === 'ar') {
            return this.isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن';
        } else {
            return this.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    }
    
    // Public methods
    enable() {
        this.isDark = true;
        this.applyMode();
        this.savePreference();
        this.updateButtonText();
    }
    
    disable() {
        this.isDark = false;
        this.applyMode();
        this.savePreference();
        this.updateButtonText();
    }
    
    isEnabled() {
        return this.isDark;
    }
}

// Initialize Dark Mode Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.darkModeManager = new DarkModeManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeManager;
}
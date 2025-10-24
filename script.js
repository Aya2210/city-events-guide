
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
    },
    {
        id: 7,
        title: {
            ar: "أمسية 'قصائد من دمشق' الشعرية",
            en: "'Poems from Damascus' Poetry Evening"
        },
        description: {
            ar: "أمسية شعرية تجمع شعراء من مختلف الأجيال يلقون قصائدهم في جو حميمي بحديقة السبكي. احتفاء بالكلمة والجمال.",
            en: "A poetry evening gathering poets from different generations reciting their poems in an intimate atmosphere at Al-Sibki Garden. Celebrating words and beauty."
        },
        category: "culture",
        date: "2025-04-25",
        time: "19:00",
        location: {
            ar: "حديقة السبكي - أبو رمانة",
            en: "Al-Sibki Garden - Abu Rummaneh"
        },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "مجاني",
            en: "Free"
        },
        organizer: {
            ar: "اتحاد الكتاب العرب",
            en: "Arab Writers Union"
        }
    },
    {
        id: 8,
        title: {
            ar: "بطولة دمشق للشطرنج المفتوحة",
            en: "Damascus Open Chess Championship"
        },
        description: {
            ar: "بطولة شطرنج مفتوحة لجميع الأعمار بمشاركة أبطال سوريا في نادي الشطرنج السوري. تنافس شريف وبناء مهارات.",
            en: "Open chess championship for all ages with participation of Syrian champions at the Syrian Chess Club. Noble competition and skill building."
        },
        category: "sports",
        date: "2025-05-15",
        time: "10:00",
        location: {
            ar: "النادي السوري للشطرنج - المزة",
            en: "Syrian Chess Club - Al-Mazzah"
        },
        image: "https://images.unsplash.com/photo-1586165368501-2e5b8a1f7a0f?w=800&h=500&fit=crop",
        featured: true,
        price: {
            ar: "15,000 ل.س",
            en: "15,000 SYP"
        },
        organizer: {
            ar: "الاتحاد السوري للشطرنج",
            en: "Syrian Chess Federation"
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
    const options = {
        weekday: 'long',
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', options);
}

// عرض الفعاليات في الشبكة
function displayEventsInGrid(container, events, currentLang) {
    if (events.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                    <h4 data-lang="ar">لا توجد فعاليات</h4>
                    <h4 data-lang="en" style="display:none;">No events found</h4>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title[currentLang]}" 
                     onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>${event.time}
                        </small>
                    </div>
                    <h5 class="card-title">${event.title[currentLang]}</h5>
                    <p class="card-text">${event.description[currentLang].substring(0, 120)}...</p>
                    <div class="event-meta">
                        <small class="text-muted d-block mb-2">
                            <i class="fas fa-calendar me-1"></i>${formatDate(event.date, currentLang)}
                        </small>
                        <small class="text-muted d-block">
                            <i class="fas fa-map-marker-alt me-1"></i>${event.location[currentLang]}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <a href="event.html?id=${event.id}" class="btn btn-primary w-100">
                        <i class="fas fa-info-circle me-1"></i>
                        <span data-lang="ar">التفاصيل</span>
                        <span data-lang="en" style="display:none;">Details</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// التهيئة الرئيسية
document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
    initDarkMode();
});
// ملف JavaScript الرئيسي للصفحة الرئيسية
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 بدء تحميل الصفحة الرئيسية');
    
    // تهيئة المكونات
    initHomePage();
    initCategoryFilters();
    initScrollToTop();
    
    console.log('✅ الصفحة الرئيسية جاهزة');
});

// تهيئة الصفحة الرئيسية
function initHomePage() {
    displayFeaturedEvents();
    displayLatestEvents();
}

// عرض الفعاليات البارزة
function displayFeaturedEvents() {
    const featuredContainer = document.getElementById('featuredEvents');
    if (!featuredContainer) return;
    
    const currentLang = languageManager.getCurrentLanguage();
    const featuredEvents = eventsData.filter(event => event.featured).slice(0, 3);
    
    if (featuredEvents.length === 0) {
        featuredContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                    <h4 data-lang="ar">لا توجد فعاليات بارزة</h4>
                    <h4 data-lang="en" style="display:none;">No featured events</h4>
                </div>
            </div>
        `;
        return;
    }
    
    featuredContainer.innerHTML = featuredEvents.map(event => `
        <div class="col-md-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title[currentLang]}" 
                     style="height: 250px; object-fit: cover;"
                     onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>${event.time}
                        </small>
                    </div>
                    <h5 class="card-title">${event.title[currentLang]}</h5>
                    <p class="card-text">${event.description[currentLang].substring(0, 100)}...</p>
                    <div class="event-meta">
                        <small class="text-muted d-block mb-2">
                            <i class="fas fa-calendar me-1"></i>${formatDate(event.date, currentLang)}
                        </small>
                        <small class="text-muted d-block">
                            <i class="fas fa-map-marker-alt me-1"></i>${event.location[currentLang]}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <a href="event.html?id=${event.id}" class="btn btn-primary w-100">
                        <i class="fas fa-info-circle me-1"></i>
                        <span data-lang="ar">التفاصيل</span>
                        <span data-lang="en" style="display:none;">Details</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// عرض أحدث الفعاليات
function displayLatestEvents() {
    const eventsContainer = document.getElementById('eventsGrid');
    if (!eventsContainer) return;
    
    const currentLang = languageManager.getCurrentLanguage();
    const latestEvents = eventsData.slice(0, 6); // أول 6 فعاليات
    
    displayEventsInGrid(eventsContainer, latestEvents, currentLang);
}

// تصفية الفعاليات حسب التصنيف
function initCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
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
    const eventsContainer = document.getElementById('eventsGrid');
    const currentLang = languageManager.getCurrentLanguage();
    
    let filteredEvents;
    
    if (category === 'all') {
        filteredEvents = eventsData.slice(0, 6);
    } else {
        filteredEvents = eventsData.filter(event => event.category === category);
    }
    
    displayEventsInGrid(eventsContainer, filteredEvents, currentLang);
}

// تحديث المحتوى عند تغيير اللغة
window.addEventListener('languageChange', function(e) {
    console.log('🔄 تحديث الصفحة الرئيسية للغة:', e.detail);
    
    setTimeout(() => {
        displayFeaturedEvents();
        displayLatestEvents();
    }, 100);

});

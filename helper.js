// دوال مساعدة للمشروع

// الحصول على اسم التصنيف باللغة المطلوبة
function getCategoryName(category, lang) {
    const categories = {
        music: { ar: 'موسيقى', en: 'Music' },
        sports: { ar: 'رياضة', en: 'Sports' },
        art: { ar: 'فنون', en: 'Arts' },
        culture: { ar: 'ثقافة', en: 'Culture' },
        food: { ar: 'طعام', en: 'Food' },
        education: { ar: 'تعليم', en: 'Education' },
        all: { ar: 'الكل', en: 'All' }
    };
    return categories[category]?.[lang] || category;
}

// تنسيق التاريخ حسب اللغة
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

// إنشاء صورة افتراضية في حالة الخطأ
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjhmOGY4Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
    img.alt = 'صورة الفعالية';
}

// تصفية الفعاليات
function filterEvents(searchTerm, category, date) {
    let filtered = eventsData;
    
    if (category && category !== 'all') {
        filtered = filtered.filter(event => event.category === category);
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(event => 
            event.title.ar.includes(searchTerm) || 
            event.title.en.toLowerCase().includes(term) ||
            event.description.ar.includes(searchTerm) ||
            event.description.en.toLowerCase().includes(term)
        );
    }
    
    if (date) {
        filtered = filtered.filter(event => event.date === date);
    }
    
    return filtered;
}

// الحصول على فعالية حسب الـ ID
function getEventById(id) {
    return eventsData.find(event => event.id === parseInt(id));
}

// الحصول على الفعاليات البارزة
function getFeaturedEvents() {
    return eventsData.filter(event => event.featured);
}

// الحصول على الفعاليات حسب التصنيف
function getEventsByCategory(category) {
    if (category === 'all') return eventsData;
    return eventsData.filter(event => event.category === category);
}
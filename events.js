// عرض جميع الفعاليات
function displayAllEvents() {
    const eventsGrid = document.getElementById('allEventsGrid');
    if (!eventsGrid) return;

    const currentLang = languageManager.getCurrentLanguage();
    
    displayEventsInGrid(eventsGrid, eventsData, currentLang);
}

// تطبيق الفلاتر
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const date = document.getElementById('dateFilter').value;
    const sortBy = document.getElementById('sortSelect').value;
    
    let filteredEvents = [...eventsData];
    
    // تطبيق البحث
    if (searchTerm) {
        filteredEvents = filteredEvents.filter(event => 
            event.title.ar.toLowerCase().includes(searchTerm) ||
            event.title.en.toLowerCase().includes(searchTerm) ||
            event.description.ar.toLowerCase().includes(searchTerm) ||
            event.description.en.toLowerCase().includes(searchTerm)
        );
    }
    
    // تطبيق التصنيف
    if (category !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.category === category);
    }
    
    // تطبيق التاريخ
    if (date) {
        filteredEvents = filteredEvents.filter(event => event.date === date);
    }
    
    // التصنيف
    if (sortBy === 'date') {
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'name') {
        filteredEvents.sort((a, b) => a.title.ar.localeCompare(b.title.ar));
    }
    
    const eventsGrid = document.getElementById('allEventsGrid');
    const currentLang = languageManager.getCurrentLanguage();
    
    displayEventsInGrid(eventsGrid, filteredEvents, currentLang);
}

// إضافة للتقويم
function addToCalendar(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const currentLang = languageManager.getCurrentLanguage();
    
    if (event) {
        // محاكاة إضافة للتقويم
        const calendarEvent = {
            title: event.title[currentLang],
            start: `${event.date}T${event.time}`,
            description: event.description[currentLang],
            location: event.location[currentLang]
        };
        
        // يمكن تطوير هذه الدالة لإنشاء ملف .ics حقيقي
        alert(currentLang === 'ar' 
            ? `تمت إضافة "${event.title.ar}" إلى التقويم`
            : `"${event.title.en}" has been added to calendar`
        );
        
        // حفظ في localStorage
        const savedEvents = JSON.parse(localStorage.getItem('calendarEvents') || '[]');
        savedEvents.push(calendarEvent);
        localStorage.setItem('calendarEvents', JSON.stringify(savedEvents));
    }
}

// مشاركة الفعالية
function shareEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const currentLang = languageManager.getCurrentLanguage();
    
    if (navigator.share) {
        navigator.share({
            title: event.title[currentLang],
            text: event.description[currentLang],
            url: `event-details.html?id=${eventId}`,
        });
    } else {
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(`${window.location.origin}/event-details.html?id=${eventId}`);
        alert(currentLang === 'ar' 
            ? 'تم نسخ رابط الفعالية' 
            : 'Event link copied to clipboard'
        );
    }
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل صفحة الفعاليات بنجاح');
    displayAllEvents();
    initScrollToTop();
    
    // إضافة مستمعين للأحداث
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('dateFilter').addEventListener('change', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', applyFilters);
});

// تحديث المحتوى عند تغيير اللغة
window.addEventListener('languageChange', function() {
    displayAllEvents();
    updatePlaceholders();
});

function updatePlaceholders() {
    const currentLang = languageManager.getCurrentLanguage();
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.placeholder = currentLang === 'ar' ? 'اكتب للبحث...' : 'Type to search...';
    }
}

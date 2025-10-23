// نظام إدارة وعرض الفعاليات
class EventsManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadInitialEvents();
        window.addEventListener('languageChange', () => this.refreshEventsDisplay());
    }
    
    setupEventListeners() {
        // تصفية حسب التصنيف
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const category = e.target.closest('.category-btn').getAttribute('data-category');
                this.filterByCategory(category);
            }
        });
    }
    
    loadInitialEvents() {
        this.displayEvents(eventsData, 'eventsGrid');
        this.displayFeaturedEvents();
    }
    
    displayEvents(events, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const currentLang = languageManager.getCurrentLanguage();
        
        if (events.length === 0) {
            container.innerHTML = this.getNoEventsHTML(currentLang);
            return;
        }
        
        container.innerHTML = events.map(event => this.createEventCard(event, currentLang)).join('');
    }
    
    createEventCard(event, lang) {
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card event-card h-100 shadow-sm">
                    <div class="card-img-container">
                        <img src="${event.image}" 
                             class="card-img-top" 
                             alt="${event.title[lang]}"
                             onerror="handleImageError(this)"
                             style="height: 200px; object-fit: cover;">
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <span class="badge bg-primary">${getCategoryName(event.category, lang)}</span>
                            <small class="text-muted">
                                <i class="fas fa-clock me-1"></i>${event.time}
                            </small>
                        </div>
                        <h5 class="card-title">${event.title[lang]}</h5>
                        <p class="card-text text-muted">${event.description[lang]}</p>
                        <div class="event-meta">
                            <small class="text-muted d-block mb-1">
                                <i class="fas fa-calendar me-1"></i>
                                ${formatDate(event.date, lang)}
                            </small>
                            <small class="text-muted d-block mb-2">
                                <i class="fas fa-map-marker-alt me-1"></i>
                                ${event.location[lang]}
                            </small>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-primary fw-bold">${event.price[lang]}</span>
                            <a href="event.html?id=${event.id}" class="btn btn-sm btn-outline-primary">
                                <i class="fas fa-info-circle me-1"></i>
                                ${lang === 'ar' ? 'التفاصيل' : 'Details'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    displayFeaturedEvents() {
        const container = document.getElementById('featuredEvents');
        if (!container) return;
        
        const featuredEvents = getFeaturedEvents();
        const currentLang = languageManager.getCurrentLanguage();
        
        if (featuredEvents.length === 0) {
            container.innerHTML = this.getNoEventsHTML(currentLang);
            return;
        }
        
        container.innerHTML = featuredEvents.map(event => this.createFeaturedCard(event, currentLang)).join('');
    }
    
    createFeaturedCard(event, lang) {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card featured-card h-100 shadow">
                    <img src="${event.image}" 
                         class="card-img-top" 
                         alt="${event.title[lang]}"
                         onerror="handleImageError(this)"
                         style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <span class="badge bg-warning mb-2">${lang === 'ar' ? 'مميز' : 'Featured'}</span>
                        <h5 class="card-title">${event.title[lang]}</h5>
                        <p class="card-text">${event.description[lang]}</p>
                        <div class="event-info">
                            <small class="text-muted d-block">
                                <i class="fas fa-calendar me-1"></i>
                                ${formatDate(event.date, lang)}
                            </small>
                            <small class="text-muted d-block">
                                <i class="fas fa-map-marker-alt me-1"></i>
                                ${event.location[lang]}
                            </small>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <a href="event.html?id=${event.id}" class="btn btn-primary w-100">
                            ${lang === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
    
    getNoEventsHTML(lang) {
        return `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                    <h4 class="text-muted">${lang === 'ar' ? 'لا توجد فعاليات' : 'No events found'}</h4>
                    <p class="text-muted">${lang === 'ar' ? 'جرب بحثاً مختلفاً أو تحقق لاحقاً' : 'Try a different search or check back later'}</p>
                </div>
            </div>
        `;
    }
    
    filterByCategory(category) {
        const filteredEvents = getEventsByCategory(category);
        this.displayEvents(filteredEvents, 'eventsGrid');
        this.updateActiveCategory(category);
    }
    
    updateActiveCategory(activeCategory) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active', 'btn-primary');
            btn.classList.add('btn-outline-primary');
        });
        
        const activeBtn = document.querySelector(`[data-category="${activeCategory}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'btn-primary');
            activeBtn.classList.remove('btn-outline-primary');
        }
    }
    
    refreshEventsDisplay() {
        this.displayEvents(eventsData, 'eventsGrid');
        this.displayFeaturedEvents();
    }
}

// تهيئة مدير الفعاليات
const eventsManager = new EventsManager();
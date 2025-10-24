// نظام الفعاليات المحسن
let currentView = 'grid';
let currentPage = 1;
let itemsPerPage = 6;
let filteredEvents = [];

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 بدء تحميل صفحة الفعاليات');
    
    initEventsPage();
    initScrollToTop();
    setupEventListeners();
    
    console.log('✅ صفحة الفعاليات جاهزة');
});

function initEventsPage() {
    displayAllEvents();
    updateEventsCounter();
    setupViewToggle();
    checkUrlParams();
}

function setupEventListeners() {
    // مستمعين الأحداث
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('dateFilter').addEventListener('change', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', applyFilters);
    document.getElementById('itemsPerPage').addEventListener('change', function() {
        itemsPerPage = parseInt(this.value);
        currentPage = 1;
        applyFilters();
    });
    
    // تحديث عند تغيير اللغة
    window.addEventListener('languageChange', function() {
        displayFilteredEvents();
        updateEventsCounter();
        updatePlaceholders();
    });
}

function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        document.getElementById('categoryFilter').value = category;
        applyFilters();
    }
}

// عرض جميع الفعاليات
function displayAllEvents() {
    filteredEvents = [...eventsData];
    displayFilteredEvents();
}

// تطبيق الفلاتر
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const date = document.getElementById('dateFilter').value;
    const sortBy = document.getElementById('sortSelect').value;
    
    // إظهار حالة التحميل
    showLoadingState();
    
    // محاكاة تأخير للواقعية
    setTimeout(() => {
        let results = [...eventsData];
        
        // تطبيق البحث
        if (searchTerm) {
            results = results.filter(event => 
                event.title.ar.toLowerCase().includes(searchTerm) ||
                event.title.en.toLowerCase().includes(searchTerm) ||
                event.description.ar.toLowerCase().includes(searchTerm) ||
                event.description.en.toLowerCase().includes(searchTerm) ||
                event.location.ar.toLowerCase().includes(searchTerm) ||
                event.organizer.ar.toLowerCase().includes(searchTerm)
            );
        }
        
        // تطبيق التصنيف
        if (category !== 'all') {
            results = results.filter(event => event.category === category);
        }
        
        // تطبيق التاريخ
        if (date) {
            results = results.filter(event => event.date === date);
        }
        
        // التصنيف
        results = sortEvents(results, sortBy);
        
        filteredEvents = results;
        currentPage = 1;
        displayFilteredEvents();
        updateEventsCounter();
    }, 500);
}

// ترتيب الفعاليات
function sortEvents(events, sortBy) {
    const currentLang = languageManager.getCurrentLanguage();
    
    switch (sortBy) {
        case 'date-asc':
            return events.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'date-desc':
            return events.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'price-asc':
            return events.sort((a, b) => {
                const priceA = a.price[currentLang] === 'مجاني' || a.price[currentLang] === 'Free' ? 0 : parseInt(a.price[currentLang]);
                const priceB = b.price[currentLang] === 'مجاني' || b.price[currentLang] === 'Free' ? 0 : parseInt(b.price[currentLang]);
                return priceA - priceB;
            });
        case 'price-desc':
            return events.sort((a, b) => {
                const priceA = a.price[currentLang] === 'مجاني' || a.price[currentLang] === 'Free' ? 0 : parseInt(a.price[currentLang]);
                const priceB = b.price[currentLang] === 'مجاني' || b.price[currentLang] === 'Free' ? 0 : parseInt(b.price[currentLang]);
                return priceB - priceA;
            });
        case 'name':
            return events.sort((a, b) => a.title[currentLang].localeCompare(b.title[currentLang]));
        default:
            return events;
    }
}

// عرض الفعاليات المصفاة
function displayFilteredEvents() {
    const eventsContainer = document.getElementById('allEventsGrid');
    const noResults = document.getElementById('noResults');
    const loadingState = document.getElementById('loadingState');
    
    // إخفاء حالة التحميل
    loadingState.style.display = 'none';
    
    if (filteredEvents.length === 0) {
        eventsContainer.style.display = 'none';
        noResults.style.display = 'block';
        updatePagination();
        return;
    }
    
    noResults.style.display = 'none';
    eventsContainer.style.display = 'flex';
    
    const currentLang = languageManager.getCurrentLanguage();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedEvents = filteredEvents.slice(startIndex, endIndex);
    
    if (currentView === 'grid') {
        displayGridview(eventsContainer, paginatedEvents, currentLang);
    } else {
        displayListView(eventsContainer, paginatedEvents, currentLang);
    }
    
    updatePagination();
    updateFilteredCount();
}

// عرض الوضع الشبكي
function displayGridview(container, events, currentLang) {
    container.className = 'row g-4';
    container.innerHTML = events.map(event => `
        <div class="col-lg-4 col-md-6">
            <div class="card event-card-enhanced h-100">
                <div class="position-relative">
                    <img src="${event.image}" class="card-img-top event-image" alt="${event.title[currentLang]}"
                         onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                    <span class="event-badge">
                        <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                    </span>
                    ${event.featured ? `<span class="position-absolute top-0 start-0 m-2 badge bg-warning">
                        <i class="fas fa-star me-1"></i>
                        <span data-lang="ar">مميز</span>
                        <span data-lang="en" style="display:none;">Featured</span>
                    </span>` : ''}
                </div>
                
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h5 class="card-title flex-grow-1 me-3">${event.title[currentLang]}</h5>
                        <div class="price-tag">${event.price[currentLang]}</div>
                    </div>
                    
                    <p class="card-text text-muted">${event.description[currentLang].substring(0, 120)}...</p>
                    
                    <div class="event-meta mb-3">
                        <div class="d-flex align-items-center text-muted mb-2">
                            <i class="fas fa-calendar me-2"></i>
                            <small>${formatDate(event.date, currentLang)}</small>
                        </div>
                        <div class="d-flex align-items-center text-muted mb-2">
                            <i class="fas fa-clock me-2"></i>
                            <small>${event.time}</small>
                        </div>
                        <div class="d-flex align-items-center text-muted">
                            <i class="fas fa-map-marker-alt me-2"></i>
                            <small>${event.location[currentLang]}</small>
                        </div>
                    </div>
                    
                    <div class="event-actions d-flex gap-2">
                        <button class="btn btn-outline-primary btn-sm flex-fill" onclick="addToCalendar(${event.id})">
                            <i class="fas fa-calendar-plus me-1"></i>
                            <span data-lang="ar">تقويم</span>
                            <span data-lang="en" style="display:none;">Calendar</span>
                        </button>
                        <button class="btn btn-outline-secondary btn-sm flex-fill" onclick="shareEvent(${event.id})">
                            <i class="fas fa-share-alt me-1"></i>
                            <span data-lang="ar">مشاركة</span>
                            <span data-lang="en" style="display:none;">Share</span>
                        </button>
                        <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm flex-fill">
                            <i class="fas fa-info-circle me-1"></i>
                            <span data-lang="ar">تفاصيل</span>
                            <span data-lang="en" style="display:none;">Details</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// عرض الوضع القائم (للمستقبل)
function displayListView(container, events, currentLang) {
    container.className = 'row';
    container.innerHTML = events.map(event => `
        <div class="col-12 mb-4">
            <div class="card event-card-enhanced">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${event.image}" class="img-fluid h-100 event-image" alt="${event.title[currentLang]}"
                             style="object-fit: cover;"
                             onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <h5 class="card-title">${event.title[currentLang]}</h5>
                                <div class="d-flex gap-2">
                                    <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                                    <div class="price-tag">${event.price[currentLang]}</div>
                                </div>
                            </div>
                            
                            <p class="card-text">${event.description[currentLang]}</p>
                            
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center text-muted mb-2">
                                        <i class="fas fa-calendar me-2"></i>
                                        <small>${formatDate(event.date, currentLang)}</small>
                                    </div>
                                    <div class="d-flex align-items-center text-muted">
                                        <i class="fas fa-clock me-2"></i>
                                        <small>${event.time}</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center text-muted">
                                        <i class="fas fa-map-marker-alt me-2"></i>
                                        <small>${event.location[currentLang]}</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="event-actions d-flex gap-2 mt-3">
                                <button class="btn btn-outline-primary btn-sm" onclick="addToCalendar(${event.id})">
                                    <i class="fas fa-calendar-plus me-1"></i>
                                    <span data-lang="ar">تقويم</span>
                                </button>
                                <button class="btn btn-outline-secondary btn-sm" onclick="shareEvent(${event.id})">
                                    <i class="fas fa-share-alt me-1"></i>
                                    <span data-lang="ar">مشاركة</span>
                                </button>
                                <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm">
                                    <i class="fas fa-info-circle me-1"></i>
                                    <span data-lang="ar">تفاصيل</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// تبديل طريقة العرض
function setupViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // تحديث الحالة النشطة
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentView = view;
            displayFilteredEvents();
        });
    });
}

// ترقيم الصفحات
function updatePagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    const currentLang = languageManager.getCurrentLanguage();
    
    // زر السابق
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">
                <span data-lang="ar">السابق</span>
                <span data-lang="en" style="display:none;">Previous</span>
            </a>
        </li>
    `;
    
    // أرقام الصفحات
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                </li>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    // زر التالي
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
                <span data-lang="ar">التالي</span>
                <span data-lang="en" style="display:none;">Next</span>
            </a>
        </li>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    displayFilteredEvents();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تحديث العداد
function updateEventsCounter() {
    const counter = document.getElementById('eventsCount');
    if (counter) {
        counter.textContent = filteredEvents.length;
    }
}

function updateFilteredCount() {
    const countElement = document.getElementById('filteredCount');
    if (countElement) {
        const currentLang = languageManager.getCurrentLanguage();
        const total = filteredEvents.length;
        const start = (currentPage - 1) * itemsPerPage + 1;
        const end = Math.min(currentPage * itemsPerPage, total);
        
        if (currentLang === 'ar') {
            countElement.textContent = `(عرض ${start}-${end} من ${total})`;
        } else {
            countElement.textContent = `(Showing ${start}-${end} of ${total})`;
        }
    }
}

// إعادة تعيين الفلاتر
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('dateFilter').value = '';
    document.getElementById('sortSelect').value = 'date-asc';
    document.getElementById('itemsPerPage').value = '6';
    
    itemsPerPage = 6;
    currentPage = 1;
    applyFilters();
}

// إظهار حالة التحميل
function showLoadingState() {
    const loadingState = document.getElementById('loadingState');
    const eventsContainer = document.getElementById('allEventsGrid');
    const noResults = document.getElementById('noResults');
    
    loadingState.style.display = 'block';
    eventsContainer.style.display = 'none';
    noResults.style.display = 'none';
}

// دوال مساعدة
function addToCalendar(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const currentLang = languageManager.getCurrentLanguage();
    
    if (event) {
        alert(currentLang === 'ar' 
            ? `تمت إضافة "${event.title.ar}" إلى التقويم`
            : `"${event.title.en}" has been added to calendar`
        );
    }
}

function shareEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const currentLang = languageManager.getCurrentLanguage();
    
    if (navigator.share) {
        navigator.share({
            title: event.title[currentLang],
            text: event.description[currentLang],
            url: `event.html?id=${eventId}`,
        });
    } else {
        navigator.clipboard.writeText(`${window.location.origin}/event.html?id=${eventId}`);
        alert(currentLang === 'ar' 
            ? 'تم نسخ رابط الفعالية' 
            : 'Event link copied to clipboard'
        );
    }
}

function updatePlaceholders() {
    const currentLang = languageManager.getCurrentLanguage();
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.placeholder = currentLang === 'ar' ? 'اكتب للبحث...' : 'Type to search...';
    }
}
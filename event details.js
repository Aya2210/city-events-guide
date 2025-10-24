// عرض تفاصيل الفعالية
function displayEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));
    const event = eventsData.find(e => e.id === eventId);
    
    const eventDetails = document.getElementById('eventDetails');
    const currentLang = languageManager.getCurrentLanguage();

    if (!event) {
        eventDetails.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                    <h3 data-lang="ar">الفعالية غير موجودة</h3>
                    <h3 data-lang="en" style="display:none;">Event not found</h3>
                    <p class="text-muted mb-4" data-lang="ar">عذراً، لم نتمكن من العثور على الفعالية المطلوبة.</p>
                    <p class="text-muted mb-4" data-lang="en" style="display:none;">Sorry, we couldn't find the requested event.</p>
                    <a href="events.html" class="btn btn-primary">
                        <i class="fas fa-arrow-left me-2"></i>
                        <span data-lang="ar">العودة للفعاليات</span>
                        <span data-lang="en" style="display:none;">Back to Events</span>
                    </a>
                </div>
            </div>
        `;
        return;
    }

    eventDetails.innerHTML = `
        <div class="col-lg-8">
            <div class="card event-detail-card">
                <img src="${event.image}" class="card-img-top event-main-image" alt="${event.title[currentLang]}"
                     onerror="this.src='https://via.placeholder.com/800x400/3498db/ffffff?text=Event+Image'">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-4">
                        <span class="badge bg-primary fs-5">${getCategoryName(event.category, currentLang)}</span>
                        <div class="event-actions">
                            <button class="btn btn-outline-primary me-2" onclick="addToCalendar(${event.id})">
                                <i class="fas fa-calendar-plus me-1"></i>
                                <span data-lang="ar">أضف للتقويم</span>
                                <span data-lang="en" style="display:none;">Add to Calendar</span>
                            </button>
                            <button class="btn btn-outline-secondary me-2" onclick="shareEvent(${event.id})">
                                <i class="fas fa-share-alt me-1"></i>
                                <span data-lang="ar">شارك</span>
                                <span data-lang="en" style="display:none;">Share</span>
                            </button>
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#bookingModal">
                                <i class="fas fa-ticket-alt me-1"></i>
                                <span data-lang="ar">احجز مكان</span>
                                <span data-lang="en" style="display:none;">Book Now</span>
                            </button>
                        </div>
                    </div>
                    
                    <h1 class="event-title mb-4">${event.title[currentLang]}</h1>
                    <p class="event-description fs-5">${event.description[currentLang]}</p>
                    
                    <div class="event-info mt-5">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="info-item">
                                    <i class="fas fa-calendar-day fa-2x text-primary mb-3"></i>
                                    <h5 data-lang="ar">التاريخ والوقت</h5>
                                    <h5 data-lang="en" style="display:none;">Date & Time</h5>
                                    <p class="fs-5">${formatDate(event.date, currentLang)}</p>
                                    <p class="text-muted"><i class="fas fa-clock me-2"></i> ${event.time}</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="info-item">
                                    <i class="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                                    <h5 data-lang="ar">الموقع</h5>
                                    <h5 data-lang="en" style="display:none;">Location</h5>
                                    <p class="fs-5">${event.location[currentLang]}</p>
                                    <button class="btn btn-outline-primary btn-sm mt-2" onclick="showMap('${event.location[currentLang]}')">
                                        <i class="fas fa-map me-1"></i>
                                        <span data-lang="ar">عرض على الخريطة</span>
                                        <span data-lang="en" style="display:none;">View on Map</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="info-item">
                                    <i class="fas fa-tag fa-2x text-primary mb-3"></i>
                                    <h5 data-lang="ar">السعر</h5>
                                    <h5 data-lang="en" style="display:none;">Price</h5>
                                    <p class="fs-4 text-success fw-bold">${event.price[currentLang]}</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="info-item">
                                    <i class="fas fa-building fa-2x text-primary mb-3"></i>
                                    <h5 data-lang="ar">المنظم</h5>
                                    <h5 data-lang="en" style="display:none;">Organizer</h5>
                                    <p class="fs-5">${event.organizer[currentLang]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- خريطة وهمية -->
                    <div class="map-section mt-4">
                        <h4 class="mb-3">
                            <i class="fas fa-map-marked-alt me-2"></i>
                            <span data-lang="ar">الموقع على الخريطة</span>
                            <span data-lang="en" style="display:none;">Location Map</span>
                        </h4>
                        <div class="map-placeholder bg-light border rounded p-5 text-center">
                            <i class="fas fa-map fa-3x text-muted mb-3"></i>
                            <p class="text-muted" data-lang="ar">خريطة تفاعلية لموقع الفعالية</p>
                            <p class="text-muted" data-lang="en" style="display:none;">Interactive map of event location</p>
                            <small class="text-muted" data-lang="ar">${event.location[currentLang]}</small>
                            <small class="text-muted" data-lang="en" style="display:none;">${event.location[currentLang]}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="sticky-sidebar">
                <div class="card quick-info-card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">
                            <i class="fas fa-info-circle me-2"></i>
                            <span data-lang="ar">معلومات سريعة</span>
                            <span data-lang="en" style="display:none;">Quick Info</span>
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="quick-info">
                            <div class="info-row mb-3">
                                <strong>
                                    <i class="fas fa-tags me-2"></i>
                                    <span data-lang="ar">التصنيف:</span>
                                    <span data-lang="en" style="display:none;">Category:</span>
                                </strong>
                                <span class="badge bg-primary">${getCategoryName(event.category, currentLang)}</span>
                            </div>
                            
                            <div class="info-row mb-3">
                                <strong>
                                    <i class="fas fa-calendar me-2"></i>
                                    <span data-lang="ar">التاريخ:</span>
                                    <span data-lang="en" style="display:none;">Date:</span>
                                </strong>
                                <span>${formatDate(event.date, currentLang)}</span>
                            </div>
                            
                            <div class="info-row mb-3">
                                <strong>
                                    <i class="fas fa-clock me-2"></i>
                                    <span data-lang="ar">الوقت:</span>
                                    <span data-lang="en" style="display:none;">Time:</span>
                                </strong>
                                <span>${event.time}</span>
                            </div>
                            
                            <div class="info-row mb-3">
                                <strong>
                                    <i class="fas fa-map-marker-alt me-2"></i>
                                    <span data-lang="ar">المكان:</span>
                                    <span data-lang="en" style="display:none;">Location:</span>
                                </strong>
                                <span>${event.location[currentLang]}</span>
                            </div>
                            
                            <div class="info-row mb-3">
                                <strong>
                                    <i class="fas fa-tag me-2"></i>
                                    <span data-lang="ar">السعر:</span>
                                    <span data-lang="en" style="display:none;">Price:</span>
                                </strong>
                                <span class="text-success fw-bold">${event.price[currentLang]}</span>
                            </div>
                            
                            <div class="info-row">
                                <strong>
                                    <i class="fas fa-building me-2"></i>
                                    <span data-lang="ar">المنظم:</span>
                                    <span data-lang="en" style="display:none;">Organizer:</span>
                                </strong>
                                <span>${event.organizer[currentLang]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-warning text-dark">
                        <h5 class="mb-0">
                            <i class="fas fa-exclamation-triangle me-2"></i>
                            <span data-lang="ar">معلومات مهمة</span>
                            <span data-lang="en" style="display:none;">Important Info</span>
                        </h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <small data-lang="ar">يرجى الحضور قبل 30 دقيقة من بدء الفعالية</small>
                                <small data-lang="en" style="display:none;">Please arrive 30 minutes before the event starts</small>
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <small data-lang="ar">التذاكر غير قابلة للاسترجاع</small>
                                <small data-lang="en" style="display:none;">Tickets are non-refundable</small>
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <small data-lang="ar">يسمح بالتصوير بدون فلاش</small>
                                <small data-lang="en" style="display:none;">Photography without flash is allowed</small>
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <small data-lang="ar">متوفر مواقف سيارات مجانية</small>
                                <small data-lang="en" style="display:none;">Free parking available</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    displayRelatedEvents(event.category, event.id);
}

// عرض الفعاليات ذات الصلة
function displayRelatedEvents(category, currentEventId) {
    const relatedEvents = eventsData.filter(event => 
        event.category === category && event.id !== currentEventId
    ).slice(0, 3);

    const relatedContainer = document.getElementById('relatedEvents');
    const currentLang = languageManager.getCurrentLanguage();

    if (relatedEvents.length === 0) {
        relatedContainer.innerHTML = `
            <div class="col-12 text-center">
                <div class="empty-state">
                    <i class="fas fa-calendar-plus fa-2x text-muted mb-3"></i>
                    <p data-lang="ar">لا توجد فعاليات ذات صلة حالياً</p>
                    <p data-lang="en" style="display:none;">No related events at the moment</p>
                </div>
            </div>
        `;
        return;
    }

    relatedContainer.innerHTML = relatedEvents.map(event => `
        <div class="col-md-4 mb-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title[currentLang]}" 
                     onerror="this.src='https://via.placeholder.com/400x250/3498db/ffffff?text=Event+Image'">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${getCategoryName(event.category, currentLang)}</span>
                    <h5 class="card-title">${event.title[currentLang]}</h5>
                    <p class="card-text">${event.description[currentLang].substring(0, 100)}...</p>
                    <div class="event-meta">
                        <small class="text-muted">
                            <i class="fas fa-calendar me-1"></i>
                            ${formatDate(event.date, currentLang)}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <a href="event-details.html?id=${event.id}" class="btn btn-primary btn-sm w-100">
                        <i class="fas fa-info-circle me-1"></i>
                        <span data-lang="ar">التفاصيل</span>
                        <span data-lang="en" style="display:none;">Details</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// مشاركة الفعالية
function shareEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const currentLang = languageManager.getCurrentLanguage();
    
    if (navigator.share) {
        navigator.share({
            title: event.title[currentLang],
            text: event.description[currentLang],
            url: window.location.href,
        });
    } else {
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(window.location.href);
        alert(currentLang === 'ar' 
            ? 'تم نسخ رابط الفعالية' 
            : 'Event link copied to clipboard'
        );
    }
}

// عرض الخريطة
function showMap(location) {
    alert(currentLang === 'ar' 
        ? `سيتم فتح خريطة لموقع: ${location}`
        : `Opening map for location: ${location}`
    );
    // يمكن دمج خرائط Google هنا
}

// تقديم الحجز
function submitBooking() {
    const currentLang = languageManager.getCurrentLanguage();
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    
    // محاكاة عملية الحجز
    setTimeout(() => {
        alert(currentLang === 'ar' 
            ? 'تم تأكيد حجزك بنجاح! ستتلقى رسالة تأكيد على بريدك الإلكتروني.'
            : 'Your booking has been confirmed! You will receive a confirmation email.'
        );
        
        modal.hide();
        document.getElementById('bookingForm').reset();
    }, 1000);
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل صفحة التفاصيل بنجاح');
    displayEventDetails();
    initScrollToTop();
});

// تحديث المحتوى عند تغيير اللغة
window.addEventListener('languageChange', function() {
    displayEventDetails();
});
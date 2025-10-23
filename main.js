// الملف الرئيسي للتطبيق

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 بدء تحميل تطبيق دليل الفعاليات');
    
    initApplication();
});

function initApplication() {
    // تهيئة جميع المكونات
    initScrollToTop();
    initAnimations();
    
    console.log('✅ تم تحميل التطبيق بنجاح');
}

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

function initAnimations() {
    // إضافة تأثيرات للبطاقات عند التمرير
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

    // تطبيق التأثير على جميع البطاقات بعد تحميل المحتوى
    setTimeout(() => {
        document.querySelectorAll('.event-card, .featured-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// دالة عامة لعرض التنبيهات
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 5000);
}

// دالة للتحقق من البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// تهيئة نموذج الاتصال (لصفحة contact.html)
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateContactForm();
    });
}

function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const currentLang = languageManager.getCurrentLanguage();
    
    let isValid = true;
    let errors = [];
    
    if (!name) {
        isValid = false;
        errors.push(currentLang === 'ar' ? 'الاسم مطلوب' : 'Name is required');
    }
    
    if (!email) {
        isValid = false;
        errors.push(currentLang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required');
    } else if (!isValidEmail(email)) {
        isValid = false;
        errors.push(currentLang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address');
    }
    
    if (!message) {
        isValid = false;
        errors.push(currentLang === 'ar' ? 'الرسالة مطلوبة' : 'Message is required');
    }
    
    if (isValid) {
        showAlert(
            currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!', 
            'success'
        );
        document.getElementById('contactForm').reset();
    } else {
        showAlert(errors.join('\n'), 'danger');
    }
}

// تهيئة صفحة تفاصيل الفعالية
function initEventDetails() {
    if (!window.location.pathname.includes('event.html')) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (eventId) {
        const event = getEventById(parseInt(eventId));
        if (event) {
            displayEventDetails(event);
        } else {
            showAlert('الفعالية غير موجودة', 'danger');
        }
    }
}

function displayEventDetails(event) {
    const currentLang = languageManager.getCurrentLanguage();
    
    // تحديث محتوى الصفحة
    const elements = {
        '.event-title': event.title[currentLang],
        '.event-description': event.description[currentLang],
        '.event-date': formatDate(event.date, currentLang),
        '.event-time': event.time,
        '.event-location': event.location[currentLang],
        '.event-price': event.price[currentLang],
        '.event-organizer': event.organizer[currentLang],
        '.event-category': getCategoryName(event.category, currentLang)
    };
    
    Object.keys(elements).forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = elements[selector];
        }
    });
    
    // تحديث الصورة
    const eventImage = document.querySelector('.event-image');
    if (eventImage) {
        eventImage.src = event.image;
        eventImage.alt = event.title[currentLang];
        eventImage.onerror = function() { handleImageError(this); };
    }
    
    // تحديث title الصفحة
    document.title = event.title[currentLang] + ' - ' + (currentLang === 'ar' ? 'دليل الفعاليات' : 'Events Guide');
}

// استدعاء تهيئة صفحة التفاصيل إذا كانت الصفحة الحالية
if (window.location.pathname.includes('event.html')) {
    document.addEventListener('DOMContentLoaded', initEventDetails);
}

// استدعاء تهيئة نموذج الاتصال إذا كانت الصفحة الحالية
if (window.location.pathname.includes('contact.html')) {
    document.addEventListener('DOMContentLoaded', initContactForm);
}
// التحقق من نموذج الاتصال
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const alertContainer = document.getElementById('alertContainer');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    initScrollToTop();
    setupFormValidation();
});

function setupFormValidation() {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    if (field.checkValidity()) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    const currentLang = languageManager.getCurrentLanguage();
    
    // إزالة classes السابقة
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
    });
    
    // التحقق من الحقول المطلوبة
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else if (input.checkValidity()) {
            input.classList.add('is-valid');
        } else {
            input.classList.add('is-invalid');
            isValid = false;
        }
    });
    
    // تحقق خاص للبريد الإلكتروني
    const email = document.getElementById('email');
    if (email.value && !isValidEmail(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const currentLang = languageManager.getCurrentLanguage();
    const alertContainer = document.getElementById('alertContainer');
    const form = document.getElementById('contactForm');
    
    // إظهار حالة التحميل
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = currentLang === 'ar' 
        ? '<i class="fas fa-spinner fa-spin me-2"></i> جاري الإرسال...'
        : '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
    submitBtn.disabled = true;
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
        // إظهار رسالة النجاح
        const successMessage = currentLang === 'ar' 
            ? 'تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت ممكن.'
            : 'Your message has been sent successfully! We will get back to you as soon as possible.';
        
        showAlert(successMessage, 'success');
        
        // إعادة تعيين النموذج
        form.reset();
        
        // إزالة classes الصحيحة
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.classList.remove('is-valid');
        });
        
        // إعادة زر الإرسال إلى حالته الأصلية
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
}

function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
    
    alertContainer.innerHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            <div class="d-flex align-items-center">
                <i class="fas ${icon} me-3 fa-lg"></i>
                <div class="flex-grow-1">
                    <h5 class="alert-heading mb-1">
                        ${type === 'success' ? 
                            (languageManager.getCurrentLanguage() === 'ar' ? 'تم بنجاح!' : 'Success!') : 
                            (languageManager.getCurrentLanguage() === 'ar' ? 'حدث خطأ!' : 'Error!')}
                    </h5>
                    <p class="mb-0">${message}</p>
                </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    // إخفاء التنبيه تلقائياً بعد 5 ثوان
    setTimeout(() => {
        const alert = alertContainer.querySelector('.alert');
        if (alert) {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }
    }, 5000);
}

// تحديث المحتوى عند تغيير اللغة
window.addEventListener('languageChange', function() {
    updatePlaceholders();
});

function updatePlaceholders() {
    const currentLang = languageManager.getCurrentLanguage();
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        messageTextarea.placeholder = currentLang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...';
    }
}

// إضافة أنماط إضافية للصفحة
const additionalStyles = `
    .contact-form-card {
        border: none;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }
    
    .contact-info-card, .social-card {
        border: none;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .contact-info-item {
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }
    
    .contact-info-item:last-child {
        border-bottom: none;
    }
    
    .social-links-large {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .social-link-large {
        display: flex;
        align-items: center;
        padding: 12px 20px;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .social-link-large i {
        margin-right: 10px;
        font-size: 1.2rem;
    }
    
    .social-link-large.facebook { background: #3b5998; }
    .social-link-large.twitter { background: #1da1f2; }
    .social-link-large.instagram { background: #e4405f; }
    .social-link-large.linkedin { background: #0077b5; }
    
    .social-link-large:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        color: white;
    }
    
    .form-control-lg, .form-select-lg {
        border-radius: 10px;
        border: 2px solid #e9ecef;
        padding: 15px 20px;
    }
    
    .form-control-lg:focus, .form-select-lg:focus {
        border-color: var(--secondary-color);
        box-shadow: 0 0 0 0.3rem rgba(52, 152, 219, 0.15);
    }
    
    .is-valid {
        border-color: var(--success-color) !important;
    }
    
    .is-invalid {
        border-color: var(--accent-color) !important;
    }
    
    @media (max-width: 768px) {
        .contact-form-card .card-body {
            padding: 2rem !important;
        }
        
        .social-links-large {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .social-link-large {
            flex: 1;
            min-width: 120px;
            justify-content: center;
        }
    }
`;

// إضافة الأنماط الإضافية للصفحة
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
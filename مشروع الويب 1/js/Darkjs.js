// نظام الوضع المظلم
function initDarkMode() {
    createDarkModeToggle();
    loadDarkModePreference();
}

function createDarkModeToggle() {
    const existingToggle = document.querySelector('.dark-mode-toggle');
    if (existingToggle) existingToggle.remove();

    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.innerHTML = '🌙';
    toggleButton.setAttribute('title', 'تفعيل الوضع الداكن');
    
    toggleButton.addEventListener('click', toggleDarkMode);
    document.body.appendChild(toggleButton);
    updateDarkModeButtonPosition();
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton();
}

function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }
}

function updateDarkModeButton() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (toggleButton) {
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
        toggleButton.setAttribute('title', isDarkMode ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
    }
}

function updateDarkModeButtonPosition() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (toggleButton) {
        const isRTL = document.documentElement.dir === 'rtl';
        toggleButton.style[isRTL ? 'left' : 'right'] = '20px';
        toggleButton.style[isRTL ? 'right' : 'left'] = 'auto';
    }
}

// التهيئة
document.addEventListener('DOMContentLoaded', initDarkMode);
// نظام الوضع المظلم
function initDarkMode() {
    createDarkModeToggle();
    loadDarkModePreference();
    setupDarkModeListeners();
}

function createDarkModeToggle() {
    // Remove existing button if any
    const existingToggle = document.querySelector('.dark-mode-toggle');
    if (existingToggle) {
        existingToggle.remove();
    }

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.innerHTML = '🌙';
    toggleButton.setAttribute('title', 'تفعيل الوضع الداكن');
    toggleButton.setAttribute('aria-label', 'تبديل الوضع الداكن');

    // Add click event
    toggleButton.addEventListener('click', toggleDarkMode);

    document.body.appendChild(toggleButton);
    updateDarkModeButtonPosition();
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    updateDarkModeButton();
    updateDarkModeButtonPosition();
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }
}

function updateDarkModeButton() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (toggleButton) {
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
        
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const title = isDarkMode ? 
            (currentLang === 'ar' ? 'تفعيل الوضع الفاتح' : 'Switch to Light Mode') : 
            (currentLang === 'ar' ? 'تفعيل الوضع الداكن' : 'Switch to Dark Mode');
        
        toggleButton.setAttribute('title', title);
        toggleButton.setAttribute('aria-label', title);
    }
}

function updateDarkModeButtonPosition() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (toggleButton) {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (isRTL) {
            toggleButton.style.left = '20px';
            toggleButton.style.right = 'auto';
        } else {
            toggleButton.style.right = '20px';
            toggleButton.style.left = 'auto';
        }
    }
}

function setupDarkModeListeners() {
    // Update button position when language changes
    window.addEventListener('languageChange', function() {
        setTimeout(updateDarkModeButtonPosition, 100);
        updateDarkModeButton();
    });
}

// التهيئة التلقائية
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
});
// ==========================================
// BOOT AI - Shared JavaScript
// Language, Theme, and Navigation Functions
// ==========================================

// Language translations
const translations = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            manifest: "Manifest",
            gallery: "Gallery",
            beta: "Beta Hub",
            blog: "Blog",
            docs: "Docs",
            socials: "Socials",
            ai: "AI Lab"
        },
        footer: {
            copyright: "© 2024-present BOOT AI / Tech Haven Studios",
            builtBy: "Built by MGKFN",
            allRights: "All rights reserved"
        }
    },
    nl: {
        nav: {
            home: "Home",
            products: "Producten",
            manifest: "Manifest",
            gallery: "Galerij",
            beta: "Beta Hub",
            blog: "Blog",
            docs: "Documentatie",
            socials: "Socials",
            ai: "AI Lab"
        },
        footer: {
            copyright: "© 2024-heden BOOT AI / Tech Haven Studios",
            builtBy: "Gebouwd door MGKFN",
            allRights: "Alle rechten voorbehouden"
        }
    }
};

// Get current language from localStorage
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

// Set language and reload page
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    location.reload();
}

// Apply translations to page
function applyTranslations() {
    const lang = getCurrentLang();
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (let k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    updateThemeIcon();
}

// Toggle between light and dark theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon();
}

// Update theme icon based on current theme
function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const iconElement = document.getElementById('themeIcon');
    
    if (iconElement) {
        iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Toggle mobile menu
function toggle() {
    const menu = document.getElementById('menuSide');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Set language selector to current language
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.value = getCurrentLang();
    }
    
    // Apply translations if using i18n
    applyTranslations();
});

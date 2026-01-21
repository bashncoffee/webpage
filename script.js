let currentLang = 'en';
let currentTheme = 'light';

function updateContent() {
    // Basic text updates
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    // List updates
    document.querySelectorAll('[data-en-list]').forEach(el => {
        const content = el.getAttribute(`data-${currentLang}-list`);
        if (content) {
            const items = content.split(';');
            el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        }
    });

    // Button labels
    document.getElementById('lang-label').innerText = currentLang === 'en' ? 'PL' : 'EN';
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pl' : 'en';
    document.body.className = `lang-${currentLang}`;
    updateContent();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.getElementById('theme-icon').innerText = currentTheme === 'light' ? '🌙' : '☀️';
}

function generatePDF() {
    window.print();
}

window.onload = updateContent;

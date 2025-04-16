// 简化的主题切换功能
function toggleTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
    
    // 更新主题图标
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
    }
}

// 检查并设置主题
function checkAndSetTheme() {
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
        toggleTheme(savedTheme === 'dark');
    } else {
        // 根据东八区（北京时间）自动设置
        const hour = (new Date().getUTCHours() + 8) % 24;
        toggleTheme(hour < 6 || hour >= 18);
    }
}

// 手动切换主题
function manualToggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    toggleTheme(currentTheme === 'light');
}

// 初始化主题
checkAndSetTheme();

// 初始化主题图标
document.addEventListener('DOMContentLoaded', checkAndSetTheme);

// 每小时检查一次时间并更新主题（仅当用户没有手动设置主题时）
setInterval(() => {
    if (!localStorage.getItem('theme-preference')) {
        checkAndSetTheme();
    }
}, 3600000);


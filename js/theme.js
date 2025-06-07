// 优化的主题切换功能
function toggleTheme(isDark) {
    // 只在实际需要切换时修改DOM
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = isDark ? 'dark' : 'light';
    
    if (currentTheme !== newTheme) {
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // 更新主题图标
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
        }
    }
    
    // 保存用户偏好
    localStorage.setItem('theme-preference', newTheme);
}

// 检查并设置主题（使用防抖处理）
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

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

// 初始化主题
checkAndSetTheme();

// 初始化主题图标
document.addEventListener('DOMContentLoaded', checkAndSetTheme);

// 使用防抖处理的自动主题检查
const debouncedThemeCheck = debounce(() => {
    if (!localStorage.getItem('theme-preference')) {
        checkAndSetTheme();
    }
}, 1000);

// 每小时检查一次时间并更新主题（仅当用户没有手动设置主题时）
setInterval(debouncedThemeCheck, 3600000);


// 简化的FPS计数器，仅在开发模式下显示
document.addEventListener('DOMContentLoaded', () => {
    const fpsDisplay = document.getElementById('fps');
    
    // 检查是否为开发环境（可以通过URL参数控制）
    const isDevMode = window.location.search.includes('dev=true');
    
    // 非开发环境下隐藏FPS显示
    if (!isDevMode) {
        fpsDisplay.style.display = 'none';
        return;
    }
    
    let fps = 0;
    let frames = 0;
    let lastTime = performance.now();
    
    function updateFPS() {
        frames++;
        const now = performance.now();
        
        if (now > lastTime + 1000) {
            fps = Math.round((frames * 1000) / (now - lastTime));
            fpsDisplay.textContent = `FPS: ${fps}`;
            lastTime = now;
            frames = 0;
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    // 初始显示
    fpsDisplay.textContent = 'FPS: 60';
    // 启动FPS计数器
    requestAnimationFrame(updateFPS);
});
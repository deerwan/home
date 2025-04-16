// 简化的FPS计数器
document.addEventListener('DOMContentLoaded', () => {
    const fpsDisplay = document.getElementById('fps');
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
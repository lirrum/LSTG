// Lirrum Custom Syntax Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    // 1. 为所有马赛克元素添加点击事件
    document.querySelectorAll('.lirrum-spoiler').forEach(function(spoiler) {
        spoiler.addEventListener('click', function(e) {
            this.classList.toggle('revealed');
            // 可选：添加一点视觉反馈
            this.style.transform = 'scale(1.05)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });

    // 2. 控制台提示（仅开发环境）
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        console.log('%c🔧 Lirrum自定义语法已加载', 'color: #3498db; font-weight: bold;');
        console.log('可用样式: .lirrum-red, .lirrum-blue, .lirrum-green, .lirrum-highlight 等');
    }
});
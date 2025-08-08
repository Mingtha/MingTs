// 等待DOM加载完成
function waitForElement(selector: string): Promise<Element> {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector)!);
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector)!);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

// 创建一个简单的提示框
function createNotification(message: string) {
    const notification = document.createElement('div');
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 10000;
    font-family: Arial, sans-serif;
    transition: all 0.3s ease;
  `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // 3秒后自动移除
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 主函数
async function main() {
    console.log('油猴脚本已启动！');

    // 等待页面加载
    await waitForElement('body');

    // 显示欢迎消息
    createNotification('🎉 油猴脚本已成功加载！');

    // 在页面顶部添加一个彩色横条
    const banner = document.createElement('div');
    banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4);
    z-index: 9999;
    animation: shimmer 2s infinite;
  `;

    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shimmer {
      0% { opacity: 0.8; }
      50% { opacity: 1; }
      100% { opacity: 0.8; }
    }
  `;
    document.head.appendChild(style);
    document.body.appendChild(banner);

    // 添加点击事件示例
    document.addEventListener('click', (e) => {
        if (e.target instanceof Element && e.target.tagName === 'A') {
            console.log('点击了链接:', e.target.textContent);
        }
    });

    console.log('✅ 脚本初始化asdasd完成1111');
}

// 启动脚本
main().catch(console.error);

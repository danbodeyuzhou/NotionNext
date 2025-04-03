// 创建倒计时弹窗元素
function createCountdownModal() {
    const modalHTML = `
    <div id="countdown-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:999;"></div>
    <div id="countdown-modal" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border-radius:10px;box-shadow:0 0 20px rgba(0,0,0,0.3);z-index:1000;text-align:center;max-width:400px;width:90%;">
        <h2 style="color:#e74c3c;margin-top:0;">中考倒计时</h2>
        <p>距离2025年中考(6月14日)还有:</p>
        <div id="countdown-timer" style="font-size:24px;font-weight:bold;margin:20px 0;display:flex;justify-content:center;gap:15px;">
            <div>
                <div id="days" style="font-size:28px;color:#e74c3c;">00</div>
                <div style="font-size:14px;color:#7f8c8d;">天</div>
            </div>
            <div>
                <div id="hours" style="font-size:28px;color:#e74c3c;">00</div>
                <div style="font-size:14px;color:#7f8c8d;">时</div>
            </div>
            <div>
                <div id="minutes" style="font-size:28px;color:#e74c3c;">00</div>
                <div style="font-size:14px;color:#7f8c8d;">分</div>
            </div>
            <div>
                <div id="seconds" style="font-size:28px;color:#e74c3c;">00</div>
                <div style="font-size:14px;color:#7f8c8d;">秒</div>
            </div>
        </div>
        <button id="countdown-close" style="background:#3498db;color:white;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;font-size:16px;">关闭</button>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 关闭按钮事件
    document.getElementById('countdown-close').addEventListener('click', function() {
        document.getElementById('countdown-modal').style.display = 'none';
        document.getElementById('countdown-overlay').style.display = 'none';
    });
}

// 更新倒计时
function updateCountdown() {
    const examDate = new Date('2025-06-14T00:00:00');
    const now = new Date();
    const diff = examDate - now;
    
    if (diff <= 0) {
        document.getElementById('countdown-timer').innerHTML = '<p style="color:#e74c3c;font-size:24px;">中考已经开始！</p>';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 初始化倒计时
function initCountdown() {
    createCountdownModal();
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// 页面加载后显示倒计时
window.addEventListener('DOMContentLoaded', initCountdown);
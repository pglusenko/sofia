// =================================================================
// 1. НАДІЙНИЙ BASE64 МАСИВ (БЕЗ СПОТВОРЕННЯ СИМВОЛІВ)
// =================================================================
const ENCRYPTED_PHOTOS = [
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkd7YGVnQmV1Y3lWBkFOYgJXdnlYUEhTVndkXVljY3xfCXRXcVtiYUheC2VZVUFQfHhzblx9VG4FQwJ4CARVW1ldbH5hfllnbHFebmVwdVJ3bANQcVZbbQFpentgREhjU2N3b3AERX5ufnhWfFtaV1xgdWZrb2JgBl58bQBlVXlZRFxkCHdVXQdzZ2oEVEtnCn1/UXR3DGRlewdRB38CbmRQTlRhYkVhcHd/XG9eQGZ+dgdkf214bndgcGJJVWZgYVoHYV1XS3lPfkJSQWRJa39WTH9cX0Z/blAAelh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkd6VV5sYn1md2ZRBEZPd3ZLYXljYkFjCH9cY1tnQn9icmhlUAZBVwIODFVYDHJvfFpablxbDVN9cQJSU3tab3JFe39iUEFpfFsHYHpwXmNmbE5iYGhiamdlUmRPdn9XVl4CWHJFWmFyUEd+CHVDVWVOXn1ka3hRBGBmWXVbf2NiRHdlVmdSbQReTWFycnl/bV9tV1x8VGgBTXhRXQNEbV11X3peAWtXVnNnYGAAYX1hbnRSU3VieV58aVNJXgZQfHdMdXlXf21gfnxsQWRJa39WB3xMdUVSfXJCeUh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkd6YgBVQlJ3c1FnY2cDa3ZDCFRYRAd4cHN0agUAdlNaXAV9cWFfeV9RQWhkd2RjYX9ObXlfCWFyfmNSU1l9WmNRXWZdTHhhbAZjVgJODFReAF5nTngAdWl9bmZtZmFSC2NCdmFnW2hzclBQbGFUVmpSUFR1b3xmcXdCXHRQC1NxbndlbF0Ad3BeQFZuSFBmCnkEVXZeDGd0b1thYUZdbHlfcmBeDXlvVn90W3N3Y2BbQHNSV2VUZnZdQlJreENXbHhyWVxbUW1jWH9ja2RJa39WAXxiX0VSfVRNe2EHQn1kDEF5Y1ZCcmV9fm5tYgJXcGdJY298WH8GaUY=",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkdlZV9SYVMCe3JUcmhwbXZmTVZjfUZ4fV4AXHN0TGd+cndmC1NfbWdkd3xYSX1gYXxZWlplf2BbckJjfnN6Wn9nBFBbQGtpVFNEe3ZSe1Rre2RQX1p8WnVxamNyRHVnCElgXVpsBWMGUABiCHFsbV9FClV3XUNnWHR9bWV1d1NYYnRXfQRjb1pnY1BzV0VRVV9sY2UHbmUAUUJXTlZnbQB+QVMGRFpsbn9VYGINAGdMYkN9fFNtVllBC1AAa2F6YXxeWQFbT2ViDUJja2RJa39WB3xMdUVSfXJCeUh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkdlelxaU2RJbAdnWVpBXVoCdGRxXHBkVncDXGBWBmQGQHdib3YEZmdSdVN7a3RtBVZubQBbT1Nfcl1gfWd4bGFgTGQEbgRnU31jZll4VWBJYAdjWnB5bF1Xcm8FbkFXU1VJa3B/Z2tYbmtmVGVcZQFdTGVmDAdhYmRZaWZXVG4HAXZVVGdFb2IMY2Naekd8YXViYGEHe2d2CANnXwNwal95V1VyAEtkCmd2aFlwTVAHXHR+VFhNeQIPcmV1UVFRYFUGa2VXCFUFegBja2RJa39WB3xMdUVSfXJCeUh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkd6eV5SaFJ0VXtmBgtmdml5Q3lmBUtjfQVKbmBnfVZ+XGtpVF9/bkhzDFJJY09vWHxhXHZlUG1iQFNhbntZbWJeTmZ+cmVgcVNcYGVdDFMDDFt4Tlp+bVt9UVUGWEh4bQRDXQcEflFyanhqbXpBVmRSaWBeDQNnX2Rwa3VQQFVyYUVVVnNFXU1dAWBafgJ+cVQGVmp8UGQBAGRUcncGdXdbSnpjcnRSbQR2WGNzXFBgVHJSYW1zeGp4d2BZf2d4YwN1YWYGCW1yYl9sQWRJa39WAXxiX0VSfVRNe2EHQn1kDEF5Y1ZCcmV9fm5tYgJXcGdJY298WH8GaUY=",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkdlV3cPSVNeYwZjTnRkanZLU3pmBQdSCUFxWH93dmhxVwNmbXVfZ3ZVQGJYcE9Uc10CYl9pUm5gYnFTfH9aaGNje1dxAAVkfWF6bmdaDWRZc1hhXwtGWXl9aFReRF5Sf3QAW3EMc39ydnVhf3oBV2dgVlJec3tWX3h6aWZXc2YFUEVkVVJJa3B/BGFualtmV1RBbAJ4fmR0TW54bFEEbktUTVRtbkdTU0FFWAdSAFdzfkRmcWJCUV8Pf2RgCAd7WnxbbFxUQGJibmJna2RJa39WAXxiX0VSfVRNe2EHQn1kDEF5Y1ZCcmV9fm5tYgJXcGdJY298WH8GaUY=",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkd7bWVjCVJkDH1gTnQCb19baGRYQHVVf2cFWGFFcX1jUAF+b1NHYllOamRdf11hbHBvWXd9bXhxUHZjCgR5bmJRW2MFXAFlfEdUVVhwDmNfc0FjX2NOdkt5f2VbV0ZiVQReWHF/Un9bdkdiC313ZVh4YVIDfE5nWkJbb19UQGMEVwdsbl1ZWHBNeX1jVGRWb3FvbmR8DmBmfwFXBANea1x9cnpYegdgCXtVdmJzYFMEcgJSQ1NGegF7QmN0UUF5YnhbWV1bVWJYAVxsQWRJa39WB3xMdUVSfXJCeUh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI",
  "VXpkCFJ7dFt4BHdadVpqVXpebkFXfHxGYwUMQmgEQF1XYXlZV194TlNda1tXWmNDYQMKTX1hfnVVcFJfdFxvdmdyfnlqCkdlZmpsd1Nka3JUcXQHdlplSVJhWEBvCmN8d2JZZVFyXEdmC2FsYAJ8SlNeSkB7cl56b19DbVZPflhUfwQHbmJjQH9zfgB9UmFgegFse2BJf21nbGBHYQFcQ2NhbnFgVHd/aGF7elBwcmJhUm5MUHRsSFRmCHJ7YHRfbFxHV2ZgXGh7bntrbGJRcFNcdUhmbGUGVQMPdGcDf3BkTmhAYWZlVWMFXFRlbHNSd2BkTn8FdQFlVQ5fYVhkbWRkXUVsWQtbYWR5DVJZemtna2RJa39WB3xMdUVSfXJCeUh3TFJKCEJXTQNYWmJmQ2VYcgNSf1kCWgVjTXhidnR+eAoI"
];

let activeNodes = [];
let isTracking = false;

const canvas = document.getElementById('pattern-canvas');
const ctx = canvas.getContext('2d');
const grid = document.getElementById('pattern-grid');
const nodes = document.querySelectorAll('.pattern-node');

function resizeCanvas() {
    const rect = grid.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawLines(mouseX, mouseY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (activeNodes.length === 0) return;
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fd79a8';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#fd79a8';
    
    ctx.beginPath();
    activeNodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const gridRect = grid.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) - gridRect.left;
        const y = (rect.top + rect.height / 2) - gridRect.top;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    
    if (mouseX && mouseY && isTracking) {
        const gridRect = grid.getBoundingClientRect();
        ctx.lineTo(mouseX - gridRect.left, mouseY - gridRect.top);
    }
    ctx.stroke();
}

function handleStart(e) {
    e.preventDefault();
    resizeCanvas();
    isTracking = true;
    activeNodes = [];
    nodes.forEach(n => n.classList.remove('active'));
    document.getElementById('error-message').classList.add('hidden');
    handleMove(e);
}

function handleMove(e) {
    if (!isTracking) return;
    if (e.touches) e.preventDefault(); 
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const node = getNodeFromPoint(clientX, clientY);
    
    if (node) {
        if (!activeNodes.includes(node)) {
            activeNodes.push(node);
            node.classList.add('active');
            if (navigator.vibrate) navigator.vibrate(15);
        }
    }
    drawLines(clientX, clientY);
}

// 🎯 ЗМЕНШЕНИЙ РАДІУС ЗАХВАТУ (Точно 15px, без випадкових збоїв)
function getNodeFromPoint(x, y) {
    const CAPTURE_RADIUS = 15; 
    for (let node of nodes) {
        const rect = node.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(x - centerX, y - centerY);
        if (distance <= CAPTURE_RADIUS) {
            return node;
        }
    }
    return null;
}

function handleEnd(e) {
    if (!isTracking) return;
    isTracking = false;
    
    const userPattern = activeNodes.map(n => n.getAttribute('data-index')).join('');
    console.log("Введений Софією ключ:", userPattern);
    
    // Декодуємо через двошаровий дешифратор
    const url1 = decryptDoubleBase64(ENCRYPTED_PHOTOS[0], userPattern);
    
    if (url1 && url1.startsWith('http')) {
        document.getElementById(`photo-1`).src = url1;
        for (let i = 1; i < 8; i++) {
            document.getElementById(`photo-${i+1}`).src = decryptDoubleBase64(ENCRYPTED_PHOTOS[i], userPattern);
        }
        document.getElementById('photo-final').src = decryptDoubleBase64(ENCRYPTED_PHOTOS[8], userPattern);

        document.getElementById('auth-screen').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
            setInterval(updateCounter, 1000);
            updateCounter();
        }, 400);
    } else {
        ctx.strokeStyle = '#ff7675';
        ctx.shadowColor = '#ff7675';
        drawLines();
        document.getElementById('error-message').classList.remove('hidden');
        setTimeout(resetLock, 1000);
    }
}

function resetLock() {
    if (isTracking) return;
    activeNodes.forEach(n => n.classList.remove('active'));
    activeNodes = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

grid.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

grid.addEventListener('touchstart', handleStart, { passive: false });
window.addEventListener('touchmove', handleMove, { passive: false });
window.addEventListener('touchend', handleEnd);

// ПРАВИЛЬНИЙ ДВОШАРОВІЙ ДЕШИФРАТОР
function decryptDoubleBase64(doubleBase64Text, key) {
    try {
        if (!key || key.length === 0 || !doubleBase64Text) return null;
        
        // 1. Знімаємо перший захисний шар Base64, щоб отримати рядок XOR зі спецсимволами
        const xorStr = atob(doubleBase64Text.trim());
        
        // 2. Виконуємо XOR операцію
        const firstBase64Chars = xorStr.split('').map((ch, i) => {
            return String.fromCharCode(ch.charCodeAt(0) ^ key.charCodeAt(i % key.length));
        }).join('');
        
        // 3. Знімаємо фінальний шар Base64, щоб отримати чистий URL-рядок
        return decodeURIComponent(atob(firstBase64Chars));
    } catch (e) { 
        return null; 
    }
}

// Лічильник знайомства (26 лютого 2026 року)
const startDate = new Date(2026, 1, 26, 23, 4); 
function updateCounter() {
    const now = new Date();
    
    // Розрахунок різниці в роках та місяцях
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        // Отримуємо кількість днів у попередньому місяці
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Розрахунок годин, хвилин, секунд для залишку часу
    let diff = now - new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 4);
    if (diff < 0) diff += 24 * 60 * 60 * 1000; // якщо день ще не закінчився

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Оновлення DOM
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();
const noBtn = document.getElementById('final-no');
function escape() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    if (noBtn) {
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px'; 
        noBtn.style.top = y + 'px';
    }
}
noBtn?.addEventListener('mouseenter', escape);
noBtn?.addEventListener('touchstart', (e) => { e.preventDefault(); escape(); });

document.getElementById('final-yes')?.addEventListener('click', () => {
    document.getElementById('quiz-card').classList.add('hidden');
    document.getElementById('final-card').classList.remove('hidden');
});
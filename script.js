// Твій графічний ключ: наприклад 26.02.2026 можна закодувати як комбінацію точок
// Давай зробимо ключ формою у вигляді літери "Z" (Знак знайомства): 1 -> 2 -> 3 -> 5 -> 7 -> 8 -> 9
const SECRET_PATTERN = "1235789"; 

// Сюди вставиш 9 зашифрованих рядків, згенерованих під ключ "1235789"
const ENCRYPTED_PHOTOS = [
    "РЯДОК_1", "РЯДОК_2", "РЯДОК_3", "РЯДОК_4", "РЯДОК_5", "РЯДОК_6", "РЯДОК_7", "РЯДОК_8", "РЯДОК_9"
];

let activeNodes = [];
let isTracking = false;

const canvas = document.getElementById('pattern-canvas');
const ctx = canvas.getContext('2d');
const grid = document.getElementById('pattern-grid');
const nodes = document.querySelectorAll('.pattern-node');

// Підганяємо дозвіл канвасу під розмір контейнера
canvas.width = 300;
canvas.height = 300;

// Функція малювання ліній
function drawLines(mouseX, mouseY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (activeNodes.length === 0) return;
    
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#fd79a8';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#fd79a8';
    
    ctx.beginPath();
    
    // Малюємо лінії між вибраними точками
    activeNodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const gridRect = grid.getBoundingClientRect();
        
        // Знаходимо центр кожної точки відносно сітки
        const x = (rect.left + rect.width / 2) - gridRect.left;
        const y = (rect.top + rect.height / 2) - gridRect.top;
        
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    
    // Ведемо тимчасову лінію до поточного положення мишки/пальця
    if (mouseX && mouseY) {
        const gridRect = grid.getBoundingClientRect();
        ctx.lineTo(mouseX - gridRect.left, mouseY - gridRect.top);
    }
    
    ctx.stroke();
}

// Обробники подій
function handleStart(e) {
    isTracking = true;
    handleMove(e);
}

function handleMove(e) {
    if (!isTracking) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Перевіряємо, чи знаходиться палець над якоюсь точкою
    const elem = document.elementFromPoint(clientX, clientY);
    const node = elem ? elem.closest('.pattern-node') : null;
    
    if (node) {
        const index = node.getAttribute('data-index');
        if (!activeNodes.includes(node)) {
            activeNodes.push(node);
            node.classList.add('active');
            if (navigator.vibrate) navigator.vibrate(10); // Адмінський тактильний відгук
        }
    }
    
    drawLines(clientX, clientY);
}

function handleEnd() {
    if (!isTracking) return;
    isTracking = false;
    
    // Збираємо код, який ввів користувач
    const resultPattern = activeNodes.map(n => n.getAttribute('data-index')).join('');
    
    // Перевіряємо ключ
    const url1 = decrypt(ENCRYPTED_PHOTOS[0], resultPattern);
    
    if (resultPattern === SECRET_PATTERN && url1 && url1.startsWith('http')) {
        // УСПІХ: Розшифровуємо і запускаємо сайт
        for (let i = 0; i < 8; i++) {
            document.getElementById(`photo-${i+1}`).src = decrypt(ENCRYPTED_PHOTOS[i], resultPattern);
        }
        document.getElementById('photo-final').src = decrypt(ENCRYPTED_PHOTOS[8], resultPattern);

        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        
        setInterval(updateCounter, 1000);
    } else {
        // ПОМИЛКА: підсвічуємо червоним і скидаємо
        ctx.strokeStyle = '#ff7675';
        ctx.shadowColor = '#ff7675';
        drawLines();
        document.getElementById('error-message').classList.remove('hidden');
        
        setTimeout(resetLock, 1000);
    }
}

function resetLock() {
    activeNodes.forEach(n => n.classList.remove('active'));
    activeNodes = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('error-message').classList.add('hidden');
}

// Вішаємо події як на мишку, так і на тачпади смартфонів
grid.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

grid.addEventListener('touchstart', handleStart);
window.addEventListener('touchmove', handleMove);
window.addEventListener('touchend', handleEnd);

// Твої старі функції лічильника та XOR-дешифратора залишаються тут внизу без змін:
function decrypt(cipherText, key) {
    try {
        const decoded = cipherText.split('').map((ch, i) => String.fromCharCode(ch.charCodeAt(0) ^ key.charCodeAt(i % key.length))).join('');
        return decodeURIComponent(atob(decoded).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    } catch (e) { return null; }
}

const startDate = new Date(2026, 1, 26, 0, 0); 
function updateCounter() {
    const now = new Date(); const diff = now - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000*60*60)) / (1000*60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000*60)) / 1000);
}
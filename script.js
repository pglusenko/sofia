// =================================================================
// 1. БЕЗПЕЧНИЙ МАСИВ ДАНИХ (БЕЗ ВІДКРИТОГО КЛЮЧА)
// =================================================================
const ENCRYPTED_PHOTOS = [
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Iy`egBeucyW\u0000E@k\u0000]xz_RBT]`P\\`oZ\brPzZodIQ\u0004`XZNT{srb_xUh\u0003N\u0007z\u0002\u0003^S]QoxepPef\\nepuRwl\u0003QwRUd\u0003ctxgFBdXksbu\u0007I}k~QwZWR]ozcj`md\u0001U}a\u0003`T_IYf\u0002p^U\u0003dl\u0000ZBe\u0000s}Qtw\fde{\u0007P\u0001{\fgfZ@Wf`Of{{Qj]Le{w\u0001ctlukvogHZidfQ\u0006m^RJIsGPKcBc{ZOyXQO}d^\u0002zXwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000IxU^lb}fwfP\u0002BA~tAozd`Kd\u0003wXn^dN|gsnb[\u0007LR\u0003\u0001\u0003PY\u0003}k{Q[b_^\fU{|\u0007PY|QgvIxyf^HkvU\u0005`zp^cflNcfllceo\\gHtuP]V\u0006UwFVbwQAy\u0003tNPdAQxedwU\u0003kgUv^~edIrg\\`Ye\u0000RNgv|p}gQoW\\|Th\u0001MxP[\u0007Jd_QyY\u0003aP]{cme\u0003m~dorUXto|_sfVHQ\tT{|MyzR~kfsynKcBc{Z\u0004zH{LPw|@yHwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Ixb\u0000UBRwsQfec\rbtI\u0006W_F\r{{pg\u0000\u0003zP_]\u0003zz`R|^^NmexkgftOazZ\bgtsfPY^vRg]^`YBqcf\baV\u0002N\fT^\u0000^fH|\u000e|kw`ejdkU\u0000kF{ddWkvsVWg`YSk]_Qt`sbv|CPwU\nUwcrgfZ\u000btRCPjFYd\u0000w\u0006Uv^\fgto[`gBSe{U|cY\u000fsh]wpVvtoc^AuU\\dYcwRMWjwLSkssU_^PkeUzaacBc{Z\u0002zfQLPwZO{a\u0007B}d\fAxeRL{gwpmj`\bP{oMnjT|\u0003h@",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Ige_RaS\u0002{rUtl~dtlCUdLvV\u0004Qvw@d{sqa\u0000RRhfkxyYFrdfwXVY`~f]GattqR{k\u0007V_Nbk^]F{vR{Tk{dQY^rSw{d`uF`\u0003AdP_o\t`\u0003Q\u0006e\u0003pah^J\u0005PvRLc_|afpvU^oqUw\u0003hg^k`VwYLS_Qnce\u0007ne\u0000QBVHRid\u0002tOP\u0001FPkewQmg\u000e\fdIcEzwR`SXN\u0004U\u0001dn~fw_U\u0002^Ncd\u0000GaacBc{Z\u0004zH{LPw|@yHwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Igz\\ZSdIl\u0007f_^OTX\bzgv^zc]\u0007QeU\ng\u0003Aqedw\tcf]zVzd{i\u0002]oa\u0003^NUYXbw`sdelOb\u0000`\reYsafYxU`I`\u0007b\\twe_]|l\u0002lKPX]Mfu|kh]oma_dQ`\u0000RC`g\u0003\beeoXeeRUh\u0001\fsW^`Ngf\u0000`e^tN~k{``a\u0007{gv\b\u0003fY\u0007~c]sYVu\u0002Ac\u0001ore\\sAS\u0002]ry_Y@|\u0003\u0000}`t^^Ug^\u0007gfR\tS\u0003w\u0005aacBc{Z\u0004zH{LPw|@yHwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Ixy^RhRtU{g\u0000\u000fhksMza\u0007Adv\rNcedqU{]mn_^rkI|\u0003WHl@k_w`Pu`QkdMVcd|RefRM`z|lb{]^`e]\fS\u0003\f[yH^pdYw_V\u0001ZBf\fGP\u0002\u0007rRwk~mf{LSe]fe_\u0002\fcXoqgvUAStl@W\\tNUIQ\u0002f^p\u000b|{Z\u0004Vj|Pd\u0001\u0000dUts\b|uQDydp~Uf\frUfpPSeUtUjl~}kwxeXph|d\btme\u0003\bktoZnKcBc{Z\u0002zfQLPwZO{a\u0007B}d\fAxeRL{gwpmj`\bP{oMnjT|\u0003h@",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000IgWw\u000fIS^c\u0006bHpjctA]ya\u0007\rU\u0002IuUztzktV\u0005aftRbwZOgY@PtV\u0003n\\lShfotQvxQ`goxQu\u000e\ffwoxngZ\rdYsX`Y\u000fHP{wfWYFTUt|\u0004Vt\u000f|wwsft{\fRfoYW_|tRXs{eeRr`\u0003]@f_UBcts\u0007gjdRd]ZCl\u0002x~dtMnyjU\ngI^CWjlMTXIAU\u0002Q\fTvBazcOT^\u0000paa\u0007\b]wZ`_QAddcgeacBc{Z\u0002zfQLPwZO{a\u0007B}d\fAxeRL{gwpmj`\bP{oMnjT|\u0003h@",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000Iymec\tRd\f}aHp\ff]Qfg_BRto\u0001UdF}~fQ\u0007ydRJgXAea\\pRek{nUtxl~w]sa\u0000\u0003rff]Xe\u0001R\bgvIVUXp\u000ec_sAbYg@Isqf\\ULe^\fZUt|^|^wAe\u0000|z`YwnW\u0002sAc]IZc\\QAe\u0002Z\u0002ndZRPtAz{gZmTemnd|\u000e`f\u0001V\u0002\u0007Pb^w|y_x\rg\u0002sQ{gplP\u0001s\u0004UHRK\u0000tMfu^N}esZU^^Td^\fYnKcBc{Z\u0004zH{LPw|@yHwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005",
  "Uzd\bR{t[y\u0002sT|X`[yYlKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL{gspWzUT|Xcuavpph\u0000IgfjlwSdkrUwp\tXoGQfZJh\u0001kxzgZiRw]Aa\u0000`ae\u0003sEV_EOuU{c\\FlPIs]Vu\u0003\fffoCywp\tXobz\u0001l{`ImfjdIh\u0003VM`fl{g_{edxvSusdfYoAUucGQg\u0007}g^`_BV`fQmyd|`df]sUX{Adfk\u0004U\u0003\u000ftg\u0003peHlNhdo[`\u0002^^bg{VzegB|\u0000t\u0007b^\u000fRdYkbaeRJh^\u0000Zmg|\fT_wneacBc{Z\u0004zH{LPw|@yHwLRJ\bBVK\u0007VS`lMf_p\tUtQ\u0006W\u0000`A{gwrys\u000b\u0005"
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
    
    if (mouseX && mouseY) {
        const gridRect = grid.getBoundingClientRect();
        ctx.lineTo(mouseX - gridRect.left, mouseY - gridRect.top);
    }
    ctx.stroke();
}

function handleStart(e) {
    resizeCanvas();
    isTracking = true;
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

// =================================================================
// ЗМЕНШЕНИЙ РАДІУС ЗАХВАТУ (ОБЧИСЛЕННЯ ВІДСТАНІ ДО ЦЕНТРУ ТОЧКИ)
// =================================================================
function getNodeFromPoint(x, y) {
    const CAPTURE_RADIUS = 25; // Радіус захвату в пікселях. Зменшуй/збільшуй це значення для точності
    
    for (let node of nodes) {
        const rect = node.getBoundingClientRect();
        // Знаходимо центр кожної точки на екрані
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Математична відстань між пальцем та центром круга
        const distance = Math.hypot(x - centerX, y - centerY);
        
        if (distance <= CAPTURE_RADIUS) {
            return node;
        }
    }
    return null;
}

// =================================================================
// 2. ПЕРЕВІРКА КЛЮЧА ОДРАЗУ ПРИ ВІДПУСКАННІ ПАЛЬЦЯ
// =================================================================
function handleEnd() {
    if (!isTracking) return;
    isTracking = false;
    
    const userPattern = activeNodes.map(n => n.getAttribute('data-index')).join('');
    const url1 = decrypt(ENCRYPTED_PHOTOS[0], userPattern);
    
    if (url1 && url1.startsWith('http')) {
        document.getElementById(`photo-1`).src = url1;
        for (let i = 1; i < 8; i++) {
            document.getElementById(`photo-${i+1}`).src = decrypt(ENCRYPTED_PHOTOS[i], userPattern);
        }
        document.getElementById('photo-final').src = decrypt(ENCRYPTED_PHOTOS[8], userPattern);

        document.getElementById('auth-screen').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
            setInterval(updateCounter, 1000);
            updateCounter();
        }, 400);
    } else {
        // Якщо помилка — підсвічуємо червоним
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

// Слухачі подій перенесені на grid та window для максимальної чутливості
grid.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

grid.addEventListener('touchstart', handleStart);
window.addEventListener('touchmove', handleMove, { passive: false });
window.addEventListener('touchend', handleEnd);

// Дешифратор
function decrypt(cipherText, key) {
    try {
        const decoded = cipherText.split('').map((ch, i) => String.fromCharCode(ch.charCodeAt(0) ^ key.charCodeAt(i % key.length))).join('');
        return decodeURIComponent(atob(decoded).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    } catch (e) { return null; }
}

// Лічильник знайомства
const startDate = new Date(2026, 1, 26, 0, 0); 
function updateCounter() {
    const now = new Date(); const diff = now - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000*60*60)) / (1000*60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000*60)) / 1000);
}

// Кнопка "Ні"
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
// =================================================================
// 1. БЕЗПЕЧНИЙ МАСИВ ДАНИХ (БЕЗ ВІДКРИТОГО КЛЮЧА)
// =================================================================
const ENCRYPTED_PHOTOS = [
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u0007vkwwzbY\u0007BPI YP\u0002\u0002\nk\u0000w\u0001Wdl\nUe`\u0005xgd\bTecc{zRw~d\u0000\u0003WYdoh\u0001c]`vg\u000be_\u0000BQtULhd yeedThfA@zf^\fc\u0001ccfY Lb]wdfwxmSdVCWg^\fbdQNPgNbUekcUgZlgdl\u0005c_Rp`e\u0000\u0004ed|^PkwgWYZ\fdwQeazd\u000bRIQafHt@ k{nWgB\rT`\bzW\u0001FagXA\\fgRt~e{egz`Qg\u0001J\u0004y_Z\u000bakZOyXQO}d^\u0002zXwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u0003Ig_RCe\u0003t\u000bb\u0000p\u0003VtU\tgdAce\u0000^Ugt\u0001Oy^^o}d\bM`H^\neXk\\Qu`oP{Q\u0007Wfd\n`^sbgY\u0002@~tU\\gjluRe\u0000qff|b _wqbedt|vAFQX`Wb^]~{u\u000eBdt\u0000GVt\u000eLkv\f\u0004fw\u000fW~voyUYdsUeIgQf|q|XZC{tRAR^o]U\u0002\u0003\n}dMdad\u000eAe_QFWtxPS_h\u0002ngdI|u`Na^tN~wo\u0003Wf{OU\u0003o[eY\u0007VakZ\u0004zH{LPw|@yHwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u0003`kIw@y^\u000f~kgU~U\\`AP]R\u0007WwltSX Fb\u0001Q\bUdtNUv|Ph\u0002saeHpiTkkbm^t\nbv\bOz\u0000|wb\u0003Qq`d`Ne{Q\u0001V\u0000|p|]VOW\u0003lzUus\u0004PuY\rgtQ\\e^F@ceICP\u0000p\fgfI~ea\u0007\bcIc\u0007zYdr~kZ\u0007Ua\u0007\tT_IcW\u0001`W~{Qbne`vb\u0001kzQgFYe\u0003I^W\u0002lK|ucpVwpIUuIr{fx@Rp\bCWYxIPt [cgNjakZ\u0002zfQLPwZO{a\u0007B}d\fAxeRLa\u0001 \u0006Pu^\tR\u0001oNdfw\u0005",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u000f{k\u0002QAawdWgXofna\u0007HdZ\t\u0007gXR\f|w fWY`lk\u0001w_fw\u0002AbXUee\u0000^McfoVWeZidvQ@PzdMSuUZn\u0000Y\f \u0003s\u0002Wt|\u000ebvUDyt|uPXcs`t|\nkYosgz`|deQ^UHl\b \u0001\bpagFj|f\b\u0005ng`WeX\u0000`ntlKbZ\bBct^bSeogQu\u0003N \u0002{caHp\u000bT^ [a\u0003\u000fPeIQcz_E\bc\u0002]B`vRJUul\u0002e\u0000pJbt\u0000qV\u0000ZjakZ\u0004zH{LPw|@yHwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u000e\nTdkczfd P{{\u0001`gNq~v pWjd\rkIco`w`zdwoqf\u0002NKUvsQb\u0003Rlft\u0000\u0005ye^mcfIebfp`kkUxy^` `\u0001cszXdoRv\fxb\u0002F^c^AFf\u0001x}h_s^PdZkktssQa\u0007ve]kybe^zk\u0001c]VYxAgd\u0000a`\u0003l{dt\u0001\u0002Wtlv}fsb`j^ efopW_RKSYs ngd{RgsAb\u0002gAPY|M`\u0002Zufu\u0000\u0006{vdr \u0000oAe\u0001ljakZ\u0004zH{LPw|@yHwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u0002Ag\u0003\u0000@UgBtS\u0003\u0001\u0006W\\{\t}ksf`X|bkvQ\u0007P\u0003ZUPvUYyf^B ] Za\u0003l\bkds[U\u0003Fbd^wygfxuR_w~P\u0000|vPgQA`_cB~v]dy\u0000pNTkt\u0006`_Z\u000befU@zw^P|J\bCb\u0003t{SYQpfg`q IsDnftARt\u0000\u0004{zZ dkZ@PHRLR^ cV\u0003|Wdgh@cuA@dfo\u0006`YdH|d Ccg|HUXlCW\u0002\u0003{|f\u0001OVg|PS]k\\nelVakZ\u0002zfQLPwZO{a\u0007B}d\fAxeRLa\u0001 \u0006Pu^\tR\u0001oNdfw\u0005",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u000fOe\u0001IBn\\``|e rVu{@}kU\u0004cYpWRv \\UXlj|tw~zHps`Y XUX^UU^k_fg|\f|\u0001suzg\u0003\fSIQnzg\u0003TbkUdy_^we\u0001UXW\u0003tAb^o\u0007mfRKi\u0003`@y\u0002x}dIQOfeRAhXMNeYBzk\u0003Usf\u0001t kIwrm\\drUtwdPK\u0007^`\u0003ofU\u0003Q@UIco{q\u0007@U^\f\u0001g_\u000fJbwQ\u0003ee\u0003iUg{\u0001V\u0002lj}kh\u0005W\u0000lwPwsenY\u000fzakZ\u0002zfQLPwZO{a\u0007B}d\fAxeRLa\u0001 \u0006Pu^\tR\u0001oNdfw\u0005",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u0007PkgoOVYZl|kQVQttsP\u0003c@njFHfXh\u0002gzg@g\u0001M``tpkRdwyWt^Wd\u0002t\u0003z\u0002xlSXUmf\u0000^|U\u0000kbg^FI|kIpa_\u000focw|\u0004yY` UJ\bxV_lWd_\u0001Nm\u0000\u000f|hX ty\u0003^B`gspQ_lYTwsgbHZTfdwXVwA\rbek\u0002adZTd]IuejFNed |m\u0002YAh\u0000Uoa^\u000e\r`ewEm\\RJ\u0001N\u0004WHx}Pt\u0001Ca_lIftodV_RVakZ\u0004zH{LPw|@yHwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O",
  "Uzd\bR{t\u0001xK\u000fKPwtBn\u0000\u000fNk\u0001A[PjxTR^wAV\\dTS]hBm\u0000\u000fL}\u0000{\u0004x\u0002pi|f]]QY\u000f~UX\fCnwdW`kl\u0005feZ\r~dM]nw\u0002\tbe{@z\u0000\u000flkeQge_BMPIx\u0007cgBYT_wEy_xKS]Qmfe\u0006O`kl\u0005fdg\u000bUXssydZ~UtI]gXxv Xs`agBzd\u0003\bDa^| cYs\u0007b_Z\refh\u0006ye|wP\u0001]ugt]@d_]ef\u0002xI|IsefzRJi\u0003Moegl| ^\u0000_ne`hbu\u0000}ytY\tkwtMWHdoi\u0001wdztdjk\u0001M^V\u0000lP`]Q\u0001a\u0003^zakZ\u0004zH{LPw|@yHwLRJ\bBVK\u0007VSg\u0000_PjdWUkw[WX\u0006O"
];

let activeNodes = [];
let isTracking = false;

const canvas = document.getElementById('pattern-canvas');
const ctx = canvas.getContext('2d');
const grid = document.getElementById('pattern-grid');
const nodes = document.querySelectorAll('.pattern-node');

// Динамічно адаптуємо внутрішній розмір канвасу під CSS
function resizeCanvas() {
    const rect = grid.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Викликаємо один раз при старті

// Малювання ліній
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
    resizeCanvas(); // Гарантуємо точність розмірів перед малюванням
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

function getNodeFromPoint(x, y) {
    for (let node of nodes) {
        const rect = node.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            return node;
        }
    }
    return null;
}

// =================================================================
// 2. ДИНАМІЧНЕ РОЗШИФРУВАННЯ
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

grid.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);
grid.addEventListener('touchstart', handleStart);
window.addEventListener('touchmove', handleMove);
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
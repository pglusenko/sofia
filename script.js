// =================================================================
// 1. ОНОВЛЕНИЙ МАСИВ (ПОВНІСТЮ ВАЛІДНИЙ)
// =================================================================
const ENCRYPTED_PHOTOS = [
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nG{`egBeucyV\u0006ANb\u0002WvyXPHSVwd]Ycc|_\ttWq[baH^\u000beYUAP|xsn\\}Tn\u0005C\u0002x\b\u0004U[Y]l~a~Yglq^nepuRwl\u0003PqV[m\u0001iz{`DHcScwop\u0004E~n~xV|[ZW\\`ufkob`\u0006^|m\u0000eUyYD\\d\bwU]\u0007sgj\u0004TKg\n}Qtw\fde{\u0007Q\u0007\u0002ndPNTabEapw\\o^@f~v\u0007dmxnw`pbIUf`aZ\u0007a]WKyO~BRAdIkVL\\_FnP\u0000zXwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGzU^lb}fwfQ\u0004FOwvKaycbAc\b\\c[gBbrheP\u0006AW\u0002\u000e\fUX\fro|ZZn\\[\rS}q\u0002RS{ZorE{bPAi|[\u0007`zp^cflNb`hbjgeRdOvWV^\u0002XrEZarPG~\buCUeN^}dkxQ\u0004`fYu[cbDweVgRm\u0004^Marrym_mW\\|Th\u0001MxQ]\u0003Dm]u_z^\u0001kWVsg``\u0000a}antRSuby^|iSI^\u0006P|wLuyWm`~|lAdIkV\u0007|LuER}rByHwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGzb\u0000UBRwsQgcg\u0003kvC\bTXD\u0007xpstj\u0005\u0000vSZ\\\u0005}qa_y_QAhdwdcaNmy_\tar~cRSY}ZcQ]f]Lxal\u0006cV\u0002N\fT^\u0000^gNx\u0000ui}nfmfaR\u000bcBvag[hsrPPlaTVjRPTuo|fqwB\\tP\u000bSqnwel]\u0000wp^@VnHPf\ny\u0004Uv^\fgto[aaF]ly_r`^\ryoVt[swc`[@sRWeTfv]BRkxCWlxrY\\[QmcXckdIkV\u0001|b_ER}TM{a\u0007B}d\fAycVBre}~nmb\u0002WpgIco|X\u0006iF",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGee_RaS\u0002{rTrhpmvfMVc}Fx}^\u0000\\stLg~rwf\u000bS_mgdw|XI}`a|YZZe`[rBc~szZg\u0004P[@kiTSD{vR{Tk{dP_Z|ZuqjcrDug\bI`]Zl\u0005c\u0006P\u0000b\bqlm_E\nUw]CgXt}meuwSXbtW}\u0004coZgcPsWEQU_lce\u0007ne\u0000QBWNVgm\u0000~AS\u0006DZlnU`b\r\u0000gLbC}|SmVYA\u000bP\u0000kaza|^Y\u0001[Oeb\rBckdIkV\u0007|LuER}rByHwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGez\\ZSdIl\u0007gYZA]Z\u0002tdq\\pdVw\u0003\\`V\u0006d\u0006@wbov\u0004fgRuS{ktm\u0005Vnm\u0000[OS_r]`}gxla`Ld\u0004n\u0004gS}cfYxU`I`\u0007cZpyl]Wro\u0005nAWSUIkpgkXnkfTe\\e\u0001]Lef\f\u0007abdYifWTn\u0007\u0001vUTgEob\fccZzG|aub`a\u0007{gv\b\u0003g_\u0003pj_yWUr\u0000Kd\ngvhYpMP\u0007\\t~TXMy\u0002\u000freuQQQ`U\u0006keW\bU\u0005z\u0000ckdIkV\u0007|LuER}rByHwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGzy^RhRtU{f\u0006\u000bfviyCyf\u0005Kc}\u0005Jn`g}V~\\kiT_nHs\fRIcOoX|a\\vePmb@San{Ymb^Nf~re`qS\\`e]\fS\u0003\f[xNZ~m[}QU\u0006XHxm\u0004C]\u0007\u0004~QrjxjmzAVdRi`^\r\u0003g_dpkuP@UraEUVsE]M]\u0001`Z~\u0002~qT\u0006Vj|Pd\u0001\u0000dTrw\u0006uw[JzcrtRm\u0004vXcs\\P`TrRamsxjxw`Ygxc\u0003uaf\u0006\tmrb_lAdIkV\u0001|b_ER}TM{a\u0007B}d\fAycVBre}~nmb\u0002WpgIco|X\u0006iF",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGeWw\u000fIS^c\u0006cNtdjvKSzf\u0005\u0007R\tAqXwvhqW\u0003fmu_gvU@bXpOTs]\u0002b_iRn`bqS|Zhcc{Wq\u0000\u0005d}azngZ\rdYsXa_\u000bFYy}hT^D^Rt\u0000[q\fsrvuaz\u0001Wg`VR^s{V_xzifWsf\u0005PEdURIkp\u0004anj[fWTAl\u0002x~dtMnxlQ\u0004nKTMTmnGSSAEX\u0007R\u0000Ws~DfqbBQ_\u000fd`\b\u0007{Z|[l\\T@bbnbgkdIkV\u0001|b_ER}TM{a\u0007B}d\fAycVBre}~nmb\u0002WpgIco|X\u0006iF",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nG{mec\tRd\f}`Nt\u0002o_[hdX@uUg\u0005XaEq}cP\u0001~oSGbYNjd]]alpoYw}mxqPvc\n\u0004ynbQ[c\u0005\\\u0001e|GTUXp\u000ec_sAc_cNvKye[WFbU\u0004^XqR[vGb\u000b}weXxaR\u0003|NgZB[o_T@c\u0004W\u0007ln]YXpMy}cTdVoqond|\u000e`f\u0001W\u0004\u0003^k\\}rzXz\u0007`\t{Uvbs`S\u0004r\u0002RCSFz\u0001{BctQAybx[Y][UbX\u0001\\lAdIkV\u0007|LuER}rByHwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b",
  "Uzd\bR{t[x\u0004wZuZjUz^nAW||Fc\u0005\fBh\u0004@]WayYW_xNS]k[WZcCa\u0003\nM}a~uUpR_t\\ovgr~yj\nGefjlwSdkrTqt\u0007vZeIRaX@o\nc|wbYeQr\\Gf\u000bal`\u0002|JS^J@{r^zo_CmVO~XT\u0004\u0007nbc@s~\u0000}Ra`z\u0001l{`Imgl`Ga\u0001\\Ccanq`Twha{zPprbaRnLPtlHTf\br{`t_l\\GWf`\\h{n{klbQpS\\uHfle\u0006U\u0003\u000ftg\u0003pdNh@afeUc\u0005\\TelsRw`dN\u0005u\u0001eU\u000e_aXdmdd]ElY\u000b[ady\rRYzkgkdIkV\u0007|LuER}rByHwLRJ\bBWM\u0003XZbfCeXr\u0003RY\u0002Z\u0005cMxbvt~x\n\b"
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

// РАДІУС ЗАХВАТУ ЦЕНТРУ ТОЧОК
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

// ПЕРЕВІРКА ПРИ ВІДПУСКАННІ ПАЛЬЦЯ
function handleEnd(e) {
    if (!isTracking) return;
    isTracking = false;
    
    let userPattern = activeNodes.map(n => n.getAttribute('data-index')).join('');
    console.log("Введений Софією ключ:", userPattern);
    
    // АВТОМАТИЧНА КОРЕКЦІЯ: Якщо вона веде палець за логічним паттерном 426813975,
    // скрипт автоматично виправляє його на ключ шифрування (426813795)
    if (userPattern === "426813975") {
        userPattern = "426813795";
    }
    
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
        // Якщо помилка
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

// Надійний дешифратор
function decrypt(cipherText, key) {
    try {
        if (!key || key.length === 0) return null;
        const cleanCipher = cipherText.trim(); 
        const decoded = cleanCipher.split('').map((ch, i) => {
            return String.fromCharCode(ch.charCodeAt(0) ^ key.charCodeAt(i % key.length));
        }).join('');
        return decodeURIComponent(atob(decoded));
    } catch (e) { 
        return null; 
    }
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

// Елементи форми з кнопкою "Ні"
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
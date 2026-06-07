// ============================================================
//  FIREBASE CONFIG
//  Bytt ut med config fra konferansespill Firebase-prosjektet
// ============================================================
const FB_CONFIG = {
    apiKey: "REPLACE_WITH_API_KEY",
    authDomain: "konferansespill.firebaseapp.com",
    databaseURL: "https://konferansespill-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "konferansespill",
    storageBucket: "konferansespill.appspot.com",
    messagingSenderId: "REPLACE",
    appId: "REPLACE"
};

// ============================================================
//  STANDARDUTFORDRINGER
// ============================================================
const DEFAULT_CHALLENGES = [
    { text: "Finn noen som jobber i en helt annen bransje enn deg", points: 1, category: "finn" },
    { text: "Snakk med en av foredragsholderne", points: 2, category: "snakk" },
    { text: "Finn noen fra en by du aldri har besøkt", points: 1, category: "finn" },
    { text: "Bytt kontaktinfo med noen du ikke kjente fra før", points: 1, category: "del" },
    { text: "Finn noen som nettopp har startet i en ny jobb (siste 6 måneder)", points: 1, category: "finn" },
    { text: "Snakk med noen som har over 15 års erfaring i din bransje", points: 2, category: "snakk" },
    { text: "Finn noen som driver sitt eget selskap", points: 1, category: "finn" },
    { text: "Snakk med noen om hva de tar med seg hjem fra konferansen", points: 2, category: "snakk" },
    { text: "Finn noen som reiste lengst for å komme hit", points: 1, category: "finn" },
    { text: "Del et godt tips eller ressurs med noen du nettopp møtte", points: 2, category: "del" },
    { text: "Finn noen med en uvanlig hobby eller fritidsinteresse", points: 1, category: "finn" },
    { text: "Snakk med noen du ønsker å samarbeide med i fremtiden", points: 2, category: "snakk" },
    { text: "Finn noen som har byttet karriere en eller flere ganger", points: 1, category: "finn" },
    { text: "Del det beste karriererådet du har fått med noen du nettopp møtte", points: 2, category: "del" },
    { text: "Finn noen du faktisk kan hjelpe med noe konkret", points: 3, category: "spesiell" },
];

// ============================================================
//  STATE
// ============================================================
let db = null;

const state = {
    eventCode: null,
    eventData: null,
    participantId: null,
    participantData: null,
    teamId: null,
    pendingName: null,
    adminMode: false,
    deviceId: getOrCreateDeviceId(),
    challengeListener: null,
};

let leaderboardTab = 'individual';
let currentScreen = 'landing';

function getOrCreateDeviceId() {
    let id = localStorage.getItem('ns_device_id');
    if (!id) {
        id = Date.now().toString(36) + Math.random().toString(36).slice(2);
        localStorage.setItem('ns_device_id', id);
    }
    return id;
}

// ============================================================
//  FIREBASE
// ============================================================
async function initFirebase() {
    if (db) return;
    await loadScript("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
    await loadScript("https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js");
    firebase.initializeApp(FB_CONFIG);
    db = firebase.database();
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const s = document.createElement('script');
        s.src = src; s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
    });
}

// ============================================================
//  NAVIGASJON
// ============================================================
function showScreen(name) {
    document.querySelectorAll('.ns-screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(`screen-${name}`);
    if (el) { el.classList.add('active'); currentScreen = name; }
    window.scrollTo(0, 0);
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg) {
    let t = document.getElementById('ns-toast-el');
    if (!t) {
        t = document.createElement('div');
        t.id = 'ns-toast-el';
        t.className = 'ns-toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ============================================================
//  BLI MED I ARRANGEMENT
// ============================================================
async function joinEvent() {
    const code = document.getElementById('event-code').value.trim().toUpperCase();
    const name = document.getElementById('player-name').value.trim();
    if (!code || !name) return;

    const btn = document.getElementById('btn-join');
    btn.disabled = true;
    btn.textContent = 'Kobler til...';

    try {
        await initFirebase();
        const snap = await db.ref(`events/${code}`).once('value');

        if (!snap.exists()) {
            showToast('Fant ikke arrangementet — sjekk koden');
            resetJoinBtn();
            return;
        }

        const event = snap.val();
        if (!event.active) {
            showToast('Dette arrangementet er avsluttet');
            resetJoinBtn();
            return;
        }

        state.eventCode = code;
        state.eventData = event;
        state.pendingName = name;

        // Sjekk om deltakeren har vært her før (samme enhet)
        const savedId = localStorage.getItem(`ns_p_${code}`);
        if (savedId) {
            const pSnap = await db.ref(`events/${code}/participants/${savedId}`).once('value');
            if (pSnap.exists()) {
                state.participantId = savedId;
                state.participantData = pSnap.val();
                state.teamId = state.participantData.teamId || null;
                resetJoinBtn();
                enterChallenges();
                return;
            }
        }

        resetJoinBtn();

        const mode = event.mode;
        if (mode === 'individual') {
            await registerParticipant(name, 'individual', null);
            enterChallenges();
        } else if (mode === 'team') {
            showModeScreen('team');
        } else {
            showModeScreen('both');
        }
    } catch (err) {
        console.error(err);
        showToast('Noe gikk galt — prøv igjen');
        resetJoinBtn();
    }
}

function resetJoinBtn() {
    const btn = document.getElementById('btn-join');
    btn.disabled = false;
    btn.textContent = 'Bli med';
}

function showModeScreen(availableModes) {
    document.getElementById('mode-event-name').textContent = state.eventData.name;
    document.getElementById('mode-player-name').textContent = state.pendingName;
    document.getElementById('mode-card-individual').style.display = availableModes === 'team' ? 'none' : '';
    document.getElementById('mode-card-team').style.display = availableModes === 'individual' ? 'none' : '';
    showScreen('mode');
}

async function selectMode(mode) {
    if (mode === 'individual') {
        await registerParticipant(state.pendingName, 'individual', null);
        enterChallenges();
    } else {
        await loadTeamScreen();
    }
}

// ============================================================
//  LAG
// ============================================================
async function loadTeamScreen() {
    showScreen('team');
    const listEl = document.getElementById('team-list');
    listEl.innerHTML = '<div class="ns-empty">Laster lag...</div>';

    const snap = await db.ref(`events/${state.eventCode}/teams`).once('value');
    const teams = snap.val() || {};
    const entries = Object.entries(teams);

    if (entries.length === 0) {
        listEl.innerHTML = '<div class="ns-empty">Ingen lag opprettet ennå. Vær den første!</div>';
    } else {
        listEl.innerHTML = '';
        entries.forEach(([teamId, team]) => {
            const count = Object.keys(team.members || {}).length;
            const el = document.createElement('div');
            el.className = 'ns-team-item';
            el.innerHTML = `
                <div>
                    <div class="ns-team-name">${escHtml(team.name)}</div>
                    <div class="ns-team-members">${count} ${count === 1 ? 'deltaker' : 'deltakere'}</div>
                </div>
                <button class="ns-btn ns-btn-outline" style="width:auto;padding:8px 16px;font-size:0.85rem;" onclick="joinTeam('${teamId}')">Bli med</button>
            `;
            listEl.appendChild(el);
        });
    }
}

async function joinTeam(teamId) {
    await registerParticipant(state.pendingName, 'team', teamId);
    await db.ref(`events/${state.eventCode}/teams/${teamId}/members/${state.participantId}`).set(true);
    state.teamId = teamId;
    enterChallenges();
}

async function createTeam() {
    const teamName = document.getElementById('new-team-name').value.trim();
    if (!teamName) { showToast('Skriv inn et lagnavn'); return; }

    const teamRef = db.ref(`events/${state.eventCode}/teams`).push();
    await teamRef.set({ name: teamName, members: {}, score: 0, createdAt: Date.now() });

    await registerParticipant(state.pendingName, 'team', teamRef.key);
    await db.ref(`events/${state.eventCode}/teams/${teamRef.key}/members/${state.participantId}`).set(true);
    state.teamId = teamRef.key;
    enterChallenges();
}

// ============================================================
//  REGISTRER DELTAKER
// ============================================================
async function registerParticipant(name, mode, teamId) {
    const ref = db.ref(`events/${state.eventCode}/participants`).push();
    const data = {
        name, mode,
        teamId: teamId || null,
        deviceId: state.deviceId,
        completedChallenges: {},
        score: 0,
        joinedAt: Date.now(),
    };
    await ref.set(data);
    state.participantId = ref.key;
    state.participantData = data;
    state.teamId = teamId;
    localStorage.setItem(`ns_p_${state.eventCode}`, ref.key);
}

// ============================================================
//  UTFORDRINGER
// ============================================================
function enterChallenges() {
    document.getElementById('challenges-player-badge').textContent = state.participantData.name;
    document.getElementById('challenges-event-name').textContent = state.eventData.name;
    showScreen('challenges');
    renderChallenges();
    subscribeToChallenges();
}

function renderChallenges() {
    const listEl = document.getElementById('challenge-list');
    listEl.innerHTML = '';

    const challenges = state.eventData.challenges || {};
    const completed = state.participantData.completedChallenges || {};

    const catLabels = { finn: 'Finn noen', snakk: 'Snakk med', del: 'Del noe', spesiell: 'Spesiell' };

    let totalPoints = 0, earnedPoints = 0, totalCount = 0, completedCount = 0;

    // Sorter: ufullførte først, deretter fullførte
    const sorted = Object.entries(challenges).sort(([aId], [bId]) => {
        const aDone = !!completed[aId];
        const bDone = !!completed[bId];
        return aDone - bDone;
    });

    sorted.forEach(([cId, c]) => {
        const isDone = !!completed[cId];
        const pts = c.points || 1;
        totalPoints += pts;
        totalCount++;
        if (isDone) { earnedPoints += pts; completedCount++; }

        const el = document.createElement('div');
        el.className = `ns-challenge-item${isDone ? ' completed' : ''}`;
        el.innerHTML = `
            <div class="ns-challenge-checkbox">
                <span class="ns-checkbox-icon">✓</span>
            </div>
            <div class="ns-challenge-content">
                <div class="ns-challenge-text">${escHtml(c.text)}</div>
                <div class="ns-challenge-meta">
                    <span class="ns-challenge-cat">${catLabels[c.category] || c.category}</span>
                    <span class="ns-challenge-points">+${pts}p</span>
                </div>
            </div>
        `;
        el.addEventListener('click', () => toggleChallenge(cId, pts, isDone));
        listEl.appendChild(el);
    });

    const pct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = `${completedCount} av ${totalCount} utfordringer fullført`;
    document.getElementById('score-number').textContent = earnedPoints;
}

async function toggleChallenge(cId, points, currentlyDone) {
    const base = `events/${state.eventCode}/participants/${state.participantId}`;

    if (currentlyDone) {
        await db.ref(`${base}/completedChallenges/${cId}`).remove();
        delete state.participantData.completedChallenges[cId];
        state.participantData.score = Math.max(0, (state.participantData.score || 0) - points);
    } else {
        await db.ref(`${base}/completedChallenges/${cId}`).set(true);
        state.participantData.completedChallenges[cId] = true;
        state.participantData.score = (state.participantData.score || 0) + points;
        showToast(`+${points} poeng`);
    }

    await db.ref(`${base}/score`).set(state.participantData.score);
    renderChallenges();

    if (state.teamId) updateTeamScore();
}

async function updateTeamScore() {
    const snap = await db.ref(`events/${state.eventCode}/teams/${state.teamId}/members`).once('value');
    const memberIds = Object.keys(snap.val() || {});
    let teamScore = 0;
    for (const mid of memberIds) {
        const s = await db.ref(`events/${state.eventCode}/participants/${mid}/score`).once('value');
        teamScore += s.val() || 0;
    }
    await db.ref(`events/${state.eventCode}/teams/${state.teamId}/score`).set(teamScore);
}

function subscribeToChallenges() {
    if (state.challengeListener) {
        db.ref(`events/${state.eventCode}/challenges`).off('value', state.challengeListener);
    }
    state.challengeListener = db.ref(`events/${state.eventCode}/challenges`).on('value', snap => {
        if (state.eventData) {
            state.eventData.challenges = snap.val() || {};
            if (currentScreen === 'challenges') renderChallenges();
        }
    });
}

// ============================================================
//  LEDERTAVLE
// ============================================================
async function showLeaderboard() {
    showScreen('leaderboard');

    document.getElementById('btn-back-leaderboard').onclick = () => showScreen(
        state.participantId ? 'challenges' : 'landing'
    );

    const eventMode = state.eventData?.mode || 'individual';
    const tabsEl = document.getElementById('leaderboard-tabs');

    if (eventMode === 'both') {
        tabsEl.style.display = '';
    } else {
        tabsEl.style.display = 'none';
        leaderboardTab = eventMode === 'team' ? 'team' : 'individual';
    }

    await refreshLeaderboard();
}

async function refreshLeaderboard() {
    const pSnap = await db.ref(`events/${state.eventCode}/participants`).once('value');
    const participants = pSnap.val() || {};
    const pList = Object.entries(participants)
        .map(([id, p]) => ({ id, ...p }))
        .sort((a, b) => (b.score || 0) - (a.score || 0));

    const rankIcon = (i) => i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
    const rankClass = (i) => i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';

    const indEl = document.getElementById('leaderboard-individual');
    if (pList.length === 0) {
        indEl.innerHTML = '<div class="ns-empty">Ingen deltakere ennå</div>';
    } else {
        indEl.innerHTML = pList.map((p, i) => {
            const isMe = p.id === state.participantId;
            const done = Object.keys(p.completedChallenges || {}).length;
            return `
                <div class="ns-leaderboard-item${isMe ? ' me' : ''}">
                    <div class="ns-rank-badge ${rankClass(i)}">${rankIcon(i)}</div>
                    <div style="flex:1">
                        <div class="ns-lb-name">${escHtml(p.name)}${isMe ? ' <span style="color:var(--text-muted);font-weight:400;">(deg)</span>' : ''}</div>
                        <div class="ns-lb-sub">${done} utfordringer fullført</div>
                    </div>
                    <div class="ns-lb-score">${p.score || 0}p</div>
                </div>
            `;
        }).join('');
    }

    const tSnap = await db.ref(`events/${state.eventCode}/teams`).once('value');
    const teams = tSnap.val() || {};
    const tList = Object.entries(teams)
        .map(([id, t]) => ({ id, ...t }))
        .sort((a, b) => (b.score || 0) - (a.score || 0));

    const teamEl = document.getElementById('leaderboard-team');
    if (tList.length === 0) {
        teamEl.innerHTML = '<div class="ns-empty">Ingen lag opprettet ennå</div>';
    } else {
        teamEl.innerHTML = tList.map((t, i) => {
            const isMyTeam = t.id === state.teamId;
            const count = Object.keys(t.members || {}).length;
            return `
                <div class="ns-leaderboard-item${isMyTeam ? ' me' : ''}">
                    <div class="ns-rank-badge ${rankClass(i)}">${rankIcon(i)}</div>
                    <div style="flex:1">
                        <div class="ns-lb-name">${escHtml(t.name)}${isMyTeam ? ' <span style="color:var(--text-muted);font-weight:400;">(ditt lag)</span>' : ''}</div>
                        <div class="ns-lb-sub">${count} ${count === 1 ? 'deltaker' : 'deltakere'}</div>
                    </div>
                    <div class="ns-lb-score">${t.score || 0}p</div>
                </div>
            `;
        }).join('');
    }

    document.getElementById('leaderboard-individual').style.display = leaderboardTab === 'individual' ? '' : 'none';
    document.getElementById('leaderboard-team').style.display = leaderboardTab === 'team' ? '' : 'none';
}

function switchTab(tab) {
    leaderboardTab = tab;
    document.getElementById('tab-individual').classList.toggle('active', tab === 'individual');
    document.getElementById('tab-team').classList.toggle('active', tab === 'team');
    document.getElementById('leaderboard-individual').style.display = tab === 'individual' ? '' : 'none';
    document.getElementById('leaderboard-team').style.display = tab === 'team' ? '' : 'none';
}

// ============================================================
//  ADMIN — INNLOGGING
// ============================================================
async function adminLogin() {
    const code = document.getElementById('admin-event-code').value.trim().toUpperCase();
    const password = document.getElementById('admin-password').value;
    const errEl = document.getElementById('admin-login-error');
    errEl.textContent = '';

    try {
        await initFirebase();
        const snap = await db.ref(`events/${code}`).once('value');
        if (!snap.exists()) { errEl.textContent = 'Fant ikke arrangementet.'; return; }
        const event = snap.val();
        if (event.adminPassword !== password) { errEl.textContent = 'Feil passord.'; return; }

        state.eventCode = code;
        state.eventData = event;
        state.adminMode = true;
        openAdminDashboard();
    } catch (err) {
        errEl.textContent = 'Noe gikk galt — prøv igjen.';
    }
}

function adminLogout() {
    state.adminMode = false;
    state.eventCode = null;
    state.eventData = null;
    showScreen('landing');
}

// ============================================================
//  ADMIN — DASHBOARD
// ============================================================
function openAdminDashboard() {
    document.getElementById('admin-event-display-name').textContent = state.eventData.name;
    document.getElementById('admin-event-code-badge').textContent = state.eventCode;
    showScreen('admin');
    renderAdminChallenges();
    loadAdminParticipants();
}

function renderAdminChallenges() {
    const challenges = state.eventData.challenges || {};
    const listEl = document.getElementById('admin-challenge-list');

    if (Object.keys(challenges).length === 0) {
        listEl.innerHTML = '<div class="ns-empty">Ingen utfordringer ennå.</div>';
        return;
    }

    listEl.innerHTML = Object.entries(challenges).map(([cId, c]) => `
        <div class="ns-admin-challenge-item">
            <div class="ns-admin-challenge-text">${escHtml(c.text)} <span style="color:var(--gold);font-weight:600;">(${c.points}p)</span></div>
            <button class="ns-admin-delete-btn" onclick="deleteChallenge('${cId}')">×</button>
        </div>
    `).join('');
}

async function deleteChallenge(cId) {
    if (!confirm('Slett denne utfordringen?')) return;
    await db.ref(`events/${state.eventCode}/challenges/${cId}`).remove();
    if (state.eventData.challenges) delete state.eventData.challenges[cId];
    renderAdminChallenges();
}

async function addChallenge() {
    const text = document.getElementById('new-challenge-text').value.trim();
    const points = parseInt(document.getElementById('new-challenge-points').value) || 1;
    const category = document.getElementById('new-challenge-category').value;
    if (!text) { showToast('Skriv inn utfordringen'); return; }

    const ref = db.ref(`events/${state.eventCode}/challenges`).push();
    const c = { text, points, category };
    await ref.set(c);
    state.eventData.challenges = state.eventData.challenges || {};
    state.eventData.challenges[ref.key] = c;
    document.getElementById('new-challenge-text').value = '';
    renderAdminChallenges();
    showToast('Utfordring lagt til');
}

async function addDefaultChallenges() {
    if (!confirm(`Legg til ${DEFAULT_CHALLENGES.length} standardutfordringer?`)) return;
    state.eventData.challenges = state.eventData.challenges || {};
    for (const c of DEFAULT_CHALLENGES) {
        const ref = db.ref(`events/${state.eventCode}/challenges`).push();
        await ref.set(c);
        state.eventData.challenges[ref.key] = c;
    }
    renderAdminChallenges();
    showToast('Standardutfordringer lagt til');
}

async function loadAdminParticipants() {
    const listEl = document.getElementById('admin-participant-list');
    listEl.innerHTML = '<div class="ns-empty">Laster...</div>';

    const snap = await db.ref(`events/${state.eventCode}/participants`).once('value');
    const participants = snap.val() || {};
    const sorted = Object.values(participants).sort((a, b) => (b.score || 0) - (a.score || 0));
    const total = Object.keys(state.eventData.challenges || {}).length;

    if (sorted.length === 0) {
        listEl.innerHTML = '<div class="ns-empty">Ingen deltakere ennå</div>';
        return;
    }

    listEl.innerHTML = sorted.map(p => {
        const done = Object.keys(p.completedChallenges || {}).length;
        return `
            <div class="ns-participant-item">
                <div>
                    <div class="ns-participant-name">${escHtml(p.name)}</div>
                    <div class="ns-participant-sub">${p.mode === 'team' ? 'Lag' : 'Individuell'} · ${done}/${total} utfordringer</div>
                </div>
                <div class="ns-participant-score">${p.score || 0}p</div>
            </div>
        `;
    }).join('');
}

// ============================================================
//  ADMIN — OPPRETT ARRANGEMENT
// ============================================================
function generateEventCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    document.getElementById('create-event-code').value = code;
}

async function createEvent() {
    const name = document.getElementById('create-event-name').value.trim();
    const code = document.getElementById('create-event-code').value.trim().toUpperCase();
    const password = document.getElementById('create-admin-password').value;
    const mode = document.getElementById('create-event-mode').value;
    const errEl = document.getElementById('create-event-error');
    errEl.textContent = '';

    if (!name) { errEl.textContent = 'Skriv inn et navn på arrangementet.'; return; }
    if (!code || code.length < 4) { errEl.textContent = 'Koden må ha minst 4 tegn.'; return; }
    if (!password || password.length < 4) { errEl.textContent = 'Passordet må ha minst 4 tegn.'; return; }

    try {
        await initFirebase();
        const existing = await db.ref(`events/${code}`).once('value');
        if (existing.exists()) { errEl.textContent = 'Denne koden er allerede i bruk — velg en annen.'; return; }

        const eventData = {
            name, mode, adminPassword: password,
            active: true, createdAt: Date.now(), challenges: {}
        };
        await db.ref(`events/${code}`).set(eventData);
        state.eventCode = code;
        state.eventData = eventData;
        state.adminMode = true;
        openAdminDashboard();
        showToast(`Arrangement opprettet! Kode: ${code}`);
    } catch (err) {
        errEl.textContent = 'Noe gikk galt — prøv igjen.';
    }
}

async function deleteEvent() {
    if (!confirm('Sikker? Dette sletter arrangementet og alle data permanent.')) return;
    if (!confirm('Absolutt sikker? Dette kan IKKE angres.')) return;
    await db.ref(`events/${state.eventCode}`).remove();
    state.eventCode = null;
    state.eventData = null;
    state.adminMode = false;
    showScreen('landing');
    showToast('Arrangement slettet');
}

// ============================================================
//  UTILS
// ============================================================
function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const codeEl = document.getElementById('event-code');
    const nameEl = document.getElementById('player-name');
    const joinBtn = document.getElementById('btn-join');

    const checkReady = () => {
        joinBtn.disabled = !(codeEl.value.trim() && nameEl.value.trim());
    };

    codeEl.addEventListener('input', checkReady);
    nameEl.addEventListener('input', checkReady);
    nameEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !joinBtn.disabled) joinEvent(); });

    joinBtn.addEventListener('click', joinEvent);
    document.getElementById('btn-show-admin-login').addEventListener('click', () => showScreen('admin-login'));
    document.getElementById('btn-admin-login').addEventListener('click', adminLogin);
    document.getElementById('btn-go-create-event').addEventListener('click', () => showScreen('create-event'));
    document.getElementById('btn-generate-code').addEventListener('click', generateEventCode);
    document.getElementById('btn-confirm-create').addEventListener('click', createEvent);
    document.getElementById('btn-create-team').addEventListener('click', createTeam);
    document.getElementById('btn-add-challenge').addEventListener('click', addChallenge);
    document.getElementById('btn-add-defaults').addEventListener('click', addDefaultChallenges);
    document.getElementById('btn-delete-event').addEventListener('click', deleteEvent);
    document.getElementById('btn-show-leaderboard').addEventListener('click', showLeaderboard);
    document.getElementById('btn-refresh-participants').addEventListener('click', loadAdminParticipants);
});

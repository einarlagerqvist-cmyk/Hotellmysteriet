// ============================================================
//  KONFIGURASJON OG OPPGAVETEKSTER
// ============================================================
const CONFIG = {
    mysteries: [
        {
            id: "hafslund",
            name: "Mysteriet på Hafslund Hovedgård",
            tasks: [
                { question: "For å komme videre i mysteriet må dere finne ut hvem som løy i avhøret sitt.\n\n Hva er navnet på løgneren?", answer: ["Butleren", "butler","Line", "line hansen", "linehansen"], hint: "Det er noen som lyver om tidslinjen sin. " },
                { question: "For å komme videre i mysteriet må dere finne ut hvem den hemmelige gjesten er.\n\n Hva er navnet på den hemmelgie gjesten?", answer: ["jacobjuel", "jacob", "jacob Juel"], hint: "Her må dere sjekke Norske Intelligenz-Sedler mot gjesteboken. Let etter et anagram." },
                { question: "Hvem drepte Herman Wedel Jarlsberg?", answer: ["marcus", "marcusrosenkrantz", "rosenkrantz"], hint: "Dere må se nærmere på signaturen på bestillingen av vin og trusselbrevet for å løse mordet." }
            ],
            finalMessage: "Gratulerer! \n\n Dere har sett gjennom løgnene og funnet sannheten som har vært skjult i skyggene på Hafslund.\n\n Det var Marcus Gjøe Rosenkrantz som drepte Herman Wedel Jarlsberg. Drivkraften var ren grådighet. Marcus var ute etter den enorme arven til Maren. Han tilsatte giften i hennes glass, men i forvirringen da gjestene byttet plasser, havnet Herman ved feil glass. Herman ble dermed et uskyldig offer for et komplott ment for Maren! \n\n Takket være deres skarpe etterforskning har den skyldige blitt avslørt, og rettferdigheten kan endelig skje på hovedgården."
        },
        {
            id: "ramme",
            name: "Mysteriet på Ramme",
            intro: "Sett dere godt inn i saken. Les gjennom alle sidene dere har fått utdelt: avhørene, brevene og dokumentene. Dere vil trenge dem.\n\nEn høstnatt i 1893 ble kunstmesenen Fridtjof Lowthau funnet brutalt slått i hjel i hotellets kunstgalleri. Samtidig forsvant et verdifullt maleri. Politikonestablene sto rådløse, og saken ble aldri løst.\n\nI over hundre år har sannheten ligget skjult på Ramme. I dag er det dere som skal grave den frem.",
            tasks: [
                { question: "Åpne konvolutt 1 og les godt gjennom dokumentene.\n\nFor å løse en over hundre år gammel floke, begynner vi der kunnskapen oppbevares.\n\nInne på hotellets ærverdige bibliotek skjuler det seg en firesifret kode. Søk blant hyllene, fire bøker forteller om en mørk periode i Norges historie. Tallene på bokryggene gir dere koden.\n\nSkriv inn koden under. Når den er godkjent, gå til resepsjonen og vis dem koden for å få adgangskortet til neste lokasjon.", answer: ["4567"], hint: "Se etter bøker som handler om krigen i Norge." },
                { question: "Adgangskortet leder dere dit mordet skjedde, kunstgalleriet.\n\nHer henger det et maleri som har sett alt. Løs gåten, og finn det:\n\n«Vi bærer verken våpen eller skyld, men vi satt med fasiten fra aller første stund. Hadde vi bare åpnet munnen, ville mysteriet vært over før det begynte. Vi er de eneste bevisene som puster og ser — men akkurat her er vi fanget i olje og lerret.»\n\nFinn maleriet i galleriet. Hva heter det?", answer: ["øyevitne", "øyevitner", "øyevidne", "øyevidner"], hint: "Hva kaller man de som ser en kriminell handling, men ikke deltar?" },
                { question: "Maleriet sin historie skjuler koden til neste sted. Skriv inn den firesifrede koden under. Når den er godkjent, gå til resepsjonen og hent det nye kortet.", answer: ["1895"], hint: "Undersøk informasjonen om maleriet nøye. Årstallet er koden." },
                { question: "Åpne konvolutt 2 og les dokumentet nøye.\n\nFinn ut hvor tyven gjemte maleriet. Det er for lengst fjernet, men navnet på gjemmestedet gir dere neste oppgave.", answer: ["wells fargo", "wellsfargo", "wells fargo overland express", "overland express", "wellsfargooverlandexpress", "abbot-downing concord coach", "original abbot-downing concord coach"], hint: "Finn vognen som fraktet brev." },
                { question: "Dere vet nå hvor maleriet ble gjemt. Men hvem er tyven?", answer: ["Odine Krong", "Odine", "krong", "odinekrong"], hint: "Sammenlign brevet med de andre dokumentene og se etter likheter i skrivestil og ordvalg." },
                { question: "Åpne konvolutt 3.\n\nDere har funnet tyven, men tyven er kanskje ikke morderen. Vi må teste alibiene.\n\nOdine hevder hun flyktet opp Kongetrappen med det stjålne maleriet. Hun sier øynene i bildene på veggen fulgte henne hele veien opp.\n\nTa turen til Kongetrappen. Tell alle øynene det er mulig å få øyekontakt med på vei opp. Antallet er koden. Skriv den inn under og gå til resepsjonen for adgangskortet til neste lokasjon.", answer: ["10", "0010", "ti"], hint: "Tell bare øyne som ser direkte ut mot trappen. Øyne som ser ned, opp eller til siden teller ikke." },
                { question: "Adgangskortet gir dere tilgang til tårnet. Der kan dere åpne konvolutt 4.\n\nSkissen dere finner er laget av en kunstner med et navn som minner om en av historiens store norske malere. Og skissen selv minner mistenkelig om ett av dennes mest kjente verk.\n\nHva heter maleriet skissen til slutt ble til?", answer: ["melankoli"], hint: "Se på kunstnernavnet på skissen og tenk på hvem det ligner. Hva malte denne kunstneren om sjalusi og fortvilelse?" },
                { question: "Neste steg er risset inn på utsiden av Brenneriets kalde fasade. Gransk bygget, finn den skjulte firesifrede koden, og bring den til resepsjonen for adgangskortet til Universet. Der skjuler siste hemmelighet seg.", answer: ["2020"], hint: "Let på utsiden av Brenneriet. Koden er skjult som romertall." },
                { question: "Hvem drepte Fridtjof Lowthau?\n\nNår dere har løst mysteriet, ring i bjellen.", answer: ["christopher krong", "christopher", "krong", "christopherkrong"], hint: "Studer bildene fra det Kunsthistoriske arkivet. Er det noe som ikke stemmer overens med avhørene?" }
            ],
            finalMessage: "Strålende arbeid, ærede etterforskere! I over hundre år har saken ligget som en isende gåte over Ramme fjordhotell. Datidens politikonstabler sto fullstendig rådløse, men dere lot dere ikke lure av de falske maskene. Takket være deres skarpsindighet, har sannheten endelig kommet frem i lyset.\n\nDet var ingen samkjørt plan, men to uavhengige ugjerninger utført av et ektepar fullstendig uvitende om hverandre. Brevet om gjemmestedet felte Odine. Samtidig begikk ektemannen Christopher det brutale drapet. Dere gjennomskuet løgnen hans; vinkelen på det dødelige slaget avslørte hans sanne hendthet. Et liv ble tatt og et kunstverk forsvant, men takket være dere er de begge avmaskert, og Fridtjof Lowthau kan endelig hvile i fred."
        },
        {
            id: "fossheim",
            name: "Mysteriet Fossheim Hotell",
            tasks: [
                { question: "Det er nokon som lyg i avhøyret sitt, kven?", answer: ["kokken", "daniel", "daniel gall", "kokken lyver", "gall"], hint: "De må samanlikne avhøyra mot avisutklippa." },
                { question: "Mordvåpenet vart aldri stadfesta. Legenda seier at mordvåpenet høyrde til doktorkontoret. Leit i fellesområda. Kva var mordvåpenet?", answer: ["reflekshammeren", "reflekshammaren", "reflekshammer", "hammaren", "hammer", "hammar", "reflekshammar"], hint: "De må finna medisinskapet og samanlikne det mot skildringa i obduksjonsrapporten" },
                { question: "No er me eitt steg nærmare mordaren. Åstadsundersøkinga har ein feil i seg. Kva objekt har politiet teke feil om i åstadsundersøkjinga?", answer: ["glasskåret", "glasskår", "vindauget", "vinduet", "vindu", "ruta", "glasruta", "glaset", "vindusruta"], hint: "De må sjå nøye på biletet for å finna feilen." },
                { question: "Det er eit dokument som aldri vart funne i peisestova. Skapet attmed pianoet gøymer noko. Finn det og løys saka. Kven var mordaren?", answer: ["hans", "hans jansen", "herr muller", "hans muller", "jansen", "muller"], hint: "Det er ei skjult skyvedør på skapet." }
            ],
            finalMessage: `De gjorde det lensmannen i Lom ikkje evna den stormfulle kvelden i 1946: De har avdekt sanninga!\nDen skuldige er Hans Jansen. Dokumentet frå peisestova avslørte kven han eigentleg var: Ingen fredeleg, sveitsisk gjest, men den tyske offiseren Hans Müller. Han kom ikkje til Lom for å flytte, men var driven av bekmørk hemn.\nOberstløytnant Vangli nytta i 1940 sin berykta «finger-metode» for å knekke tyske fangar. Den øydelagde venstrefingeren til Hans var inga skiulykke, men eit evigvarande minne om Vangli sin tortur.\nDå doktoren og presten forsvann inn på bakrommet, greip Hans sjansen og slo i hel mannen som hadde pint han. For å sleppe unna, knuste han ruta frå innsida, glasskåra låg jo på utsida, for å skape illusjonen av eit innbrot. Deretter sette han seg roleg tilbake i lenestolen i resepsjonen og las avisa.\nMorderen slapp unna i 1946, men takka vere dykk vil ikkje sanninga lenger liggje gravlagd. Gratulerer med strålande etterforskingsarbeid!`
        },
        {
            id: "dalen",
            name: "Mysteriet på Dalen Hotel",
            tasks: [
                { question: "Det er noen som lyver i avhøret sitt. Hvem lyver?", answer: ["max", "slakteren", "slakter"], hint: "Det er lettere å finne løgnen om man kobler to avhør og avisen." },
                { question: "Dere må finne ut hvilken gift det var som drepte Keiser Vilhelm II for å komme videre i saken. Det er en utrevet side i den botaniske boken.\n\n Den har blitt gjemt godt. Sjekk rommet deres grundig.", answer: ["gullregn"], hint: "Det er gjemt en side om en giftplante bak et bilde på rommet deres." },
                { question: "Undersøk bildene mellom rom 13 og 16 for å se om dere finner noen flere løgner. Hvem har løyet denne gangen?", answer: ["kristoff", "gartneren", "gartner"], hint: "På et av bildene er det en avis. Se nøye her." },
                { question: "Politet arresterte gartneren, men det var noe som ikke stemte. Bevis at gartneren ikke drepte keiseren. Hvilke dokumenter beviser at han ikke kunne drept Keiseren?", answer: ["Kartet", "Passasjerlisten", "kart", "Passasjerliste", "kart og passasjerliste", "Kartet og passasjerlisten"], hint: "For å løse denne må man koble flere dokumenter med tidslinjen til gartneren." },
                { question: "Et stereogram ble funnet på rommet til keiseren,det er ikke blitt tydet. Finn ut hva som er på stereogrammet og fortell bartenderen hva det viser. Skriv inn figuren her for å komme videre til neste oppgave.", answer: ["kopp","glass"], hint: "Start med bildet helt inntil nesen og stirr ufokusert gjennom det. Trekk deretter bildet sakte unna mens du holder et avslappet blikk." },
                { question: "Nå har dere nok informasjon til å finne ut hvem morderen er. Hvem gjorde det?", answer: ["alex", "butleren", "butler"], hint: "Sammenlign signaturen på barkvitteringene med håndskriften på trusselbrevet som ble funnet på Keiserens rom." }
            ],
            finalMessage: "Svaret lå i blekket: Det var Butleren som gjorde det. Hans forsøk på å legge skylden på Kong Oscar II gjennom et forfalsket trusselbrev var listig, men ikke feilfritt.\n\n Dere har avslørt at håndskriften på det truende brevet er identisk med signaturen på kvitteringene fra baren. En tjener som skulle være usynlig, har blitt avslørt som en kaldblodig morder.\n\n Godt jobbet!"
        },
        {
            id: "hurdalsjoen",
            name: "Mysteriet på Hurdalsjøen",
            tasks: [
                { question: "Åpne konvolutt 1.\n\nDet er noen som lyver i avhøret sitt. Hvem lyver?", answer: ["Felix Falk", "Felix", "felixfalk"], hint: " For å avsløre løgneren må dere sjekke telefonsvareren til Reidar." },
                { question: "Åpne konvolutt 2.\n\n Hvordan klarte morderen å få giften i vinen? Morderen gjemte verktøyet i hotellet sine ganger. Finn den gjemte gjenstanden.", answer: ["sprøyte", "kanyle"], hint: "Verktøyet ligger til utstilling i et glassbur" },
                { question: "For å komme videre i mysteriet må dere forstå hva Reidar prøvde å fortelle til Siv i sine siste øyeblikk. \n\n Ta turen til vinkjelleren for å løse oppgaven.", answer: ["Langhe Nebbiolo"], hint: "Se etter Hurdalsjøen sin egen vin for å finne svaret" },
                { question: "Hvem drepte Reidar?", answer: ["Margrete Hagen", "margrete", "margretehagen"], hint: "Det var noen som røpte seg i avhøret sitt." }
            ],
            finalMessage: "Mysteriet er løst: Gratulerer, etterforskere!\n\n Dere gjorde det det lokale politiet i Ullensaker holdt på å overse. Dere har avslørt sannheten bak tragedien på Hurdalsjøen Hotell. Den skyldige er forfatteren Margrete Hagen.Motivet var desperasjon og grådighet. Margrete hadde bestukket Kåre Lindgren med 45 000 kroner for å sikre boken sin, «Brennesle», en lukrativ plass på pensumlisten. Da hotelldirektør Reidar Moen oppdaget korrupsjonen og truet med å varsle komiteen, så Margrete hele karrieren sin smuldre opp. Hun måtte stoppe ham. Fredag kveld snek hun seg ned i vinkjelleren. Med en sprøyte injiserte hun dødelige mengder arsenikk gjennom korken på Reidars personlige flaske med Langhe Nebbiolo. Men ingen morder er feilfri. I sin arroganse snakket Margrete bredt om den forgiftede vinen under politiavhøret, en detalj etterforskerne hadde holdt strengt hemmelig. Den språklige glippen ble hennes undergang. Reidar Moen får endelig fred, og takket være deres skarpe blikk for detaljer og logikk, vil Margrete Hagen bytte ut boksigneringer med en lang fengselsstraff. \n\nTakk for strålende innsats!"
        }
    ],
    penaltyPerHint: 5 * 60 * 1000,
    penaltyPerGiveUp: 10 * 60 * 1000,
    useFirebase: true,
    firebaseConfig: {
        apiKey: "AIzaSyAnwK6Qg7TVc9vDHYeuTpKhyQPYXJkifRw",
        authDomain: "hotellmysteriet.firebaseapp.com",
        databaseURL: "https://hotellmysteriet-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "hotellmysteriet",
    },
    adminPassword: "admin123",
};

// ============================================================
//  STATE
// ============================================================
let state = {
    teamName: "", mysteryId: "", mystery: null,
    startTime: null, elapsed: 0, timerInterval: null, timerVisible: true,
    currentTask: 0, hintsUsed: 0, hintShownForTask: false, gaveUpCount: 0,
    isAdmin: false, preselected: false,
    currentRating: 0,
    taskStats: [], 
    taskStartTime: null 
};

// ============================================================
//  STORAGE (Tider og Tilbakemeldinger)
// ============================================================
const Storage = {
    _local: {
        getEntries(mysteryId) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_times") || "{}");
            if (mysteryId) return (all[mysteryId] || []);
            let entries = [];
            for (const [mid, arr] of Object.entries(all)) entries = entries.concat(arr.map(e => ({ ...e, mysteryId: mid })));
            return entries;
        },
        saveEntry(mysteryId, entry) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_times") || "{}");
            if (!all[mysteryId]) all[mysteryId] = [];
            all[mysteryId].push(entry);
            localStorage.setItem("hotellmysteriet_times", JSON.stringify(all));
        },
        deleteEntry(mysteryId, index) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_times") || "{}");
            if (all[mysteryId]) { all[mysteryId].splice(index, 1); localStorage.setItem("hotellmysteriet_times", JSON.stringify(all)); }
        },
        clearAll() { 
            localStorage.removeItem("hotellmysteriet_times"); 
            localStorage.removeItem("hotellmysteriet_feedback"); 
        },
        getFeedback(mysteryId) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_feedback") || "{}");
            if (mysteryId) return (all[mysteryId] || []);
            let entries = [];
            for (const [mid, arr] of Object.entries(all)) entries = entries.concat(arr.map(e => ({ ...e, mysteryId: mid })));
            return entries;
        },
        saveFeedback(mysteryId, feedback) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_feedback") || "{}");
            if (!all[mysteryId]) all[mysteryId] = [];
            all[mysteryId].push(feedback);
            localStorage.setItem("hotellmysteriet_feedback", JSON.stringify(all));
        }
    },
    _firebase: null,
    async init() {
        if (CONFIG.useFirebase && CONFIG.firebaseConfig.apiKey) {
            try {
                await this._loadScript("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
                await this._loadScript("https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js");
                firebase.initializeApp(CONFIG.firebaseConfig);
                this._firebase = firebase.database();
            } catch (e) { console.warn("Firebase failed", e); }
        }
    },
    _loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement("script"); s.src = src; s.onload = resolve; s.onerror = reject; document.head.appendChild(s);
        });
    },
    async getEntries(mysteryId) {
        if (this._firebase) {
            try {
                const ref = mysteryId ? this._firebase.ref(`times/${mysteryId}`) : this._firebase.ref("times");
                const snap = await ref.once("value"); const data = snap.val() || {};
                if (mysteryId) return Object.entries(data).map(([key, val]) => ({ ...val, _key: key, mysteryId }));
                let entries = [];
                for (const [mid, obj] of Object.entries(data))
                    for (const [key, val] of Object.entries(obj)) entries.push({ ...val, _key: key, mysteryId: mid });
                return entries;
            } catch (e) { console.warn("Firebase read failed", e); }
        }
        return this._local.getEntries(mysteryId);
    },
    async saveEntry(mysteryId, entry) {
        if (this._firebase) { try { await this._firebase.ref(`times/${mysteryId}`).push(entry); return; } catch (e) {} }
        this._local.saveEntry(mysteryId, entry);
    },
    async deleteEntry(mysteryId, key) {
        if (this._firebase) { try { await this._firebase.ref(`times/${mysteryId}/${key}`).remove(); return; } catch (e) {} }
        this._local.deleteEntry(mysteryId, key);
    },
    async clearAll() {
        if (this._firebase) { 
            try { await this._firebase.ref("times").remove(); await this._firebase.ref("feedback").remove(); return; } catch (e) {} 
        }
        this._local.clearAll();
    },
    async getFeedback(mysteryId) {
        if (this._firebase) {
            try {
                const ref = mysteryId ? this._firebase.ref(`feedback/${mysteryId}`) : this._firebase.ref("feedback");
                const snap = await ref.once("value"); const data = snap.val() || {};
                if (mysteryId) return Object.entries(data).map(([key, val]) => ({ ...val, _key: key, mysteryId }));
                let entries = [];
                for (const [mid, obj] of Object.entries(data))
                    for (const [key, val] of Object.entries(obj)) entries.push({ ...val, _key: key, mysteryId: mid });
                return entries;
            } catch (e) { console.warn("Firebase read failed", e); }
        }
        return this._local.getFeedback(mysteryId);
    },
    async saveFeedback(mysteryId, feedback) {
        if (this._firebase) { try { await this._firebase.ref(`feedback/${mysteryId}`).push(feedback); return; } catch (e) {} }
        this._local.saveFeedback(mysteryId, feedback);
    }
};

// ============================================================
//  SESSION PERSISTENCE
// ============================================================
const SESSION_KEY = "hotellmysteriet_session";
const SessionStore = {
    save() {
        if (!state.startTime) return;
        const data = {
            mysteryId: state.mysteryId, teamName: state.teamName, startTime: state.startTime,
            currentTask: state.currentTask, hintsUsed: state.hintsUsed, gaveUpCount: state.gaveUpCount,
            timerVisible: state.timerVisible, taskStats: state.taskStats, taskStartTime: state.taskStartTime
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    },
    load() { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { return null; } },
    clear() { localStorage.removeItem(SESSION_KEY); }
};

// ============================================================
//  HELPERS
// ============================================================
function formatTime(ms) {
    const t = Math.floor(ms / 1000);
    return `${String(Math.floor(t/3600)).padStart(2,"0")}:${String(Math.floor((t%3600)/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;
}
function showScreen(id) {
    document.querySelectorAll(".hm-screen").forEach(s => s.classList.remove("active"));
    document.getElementById(`screen-${id}`).classList.add("active");
}
function getMysteryName(id) { const m = CONFIG.mysteries.find(m => m.id === id); return m ? m.name : id; }
function escapeHtml(str) { const d = document.createElement("div"); d.textContent = str; return d.innerHTML; }
function normalizeAnswer(str) { return str.trim().toUpperCase().replace(/\s+/g, ""); }

// ============================================================
//  INIT
// ============================================================
async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedId = urlParams.get("m");
    const select = document.getElementById("mystery-select");
    const selectField = document.getElementById("mystery-select-field");
    const nameDisplay = document.getElementById("mystery-name-display");

    if (preselectedId) {
        const found = CONFIG.mysteries.find(m => m.id === preselectedId.toLowerCase());
        if (found) {
            state.mysteryId = found.id; state.preselected = true;
            selectField.style.display = "none"; nameDisplay.style.display = "block";
            nameDisplay.innerHTML = `<div class="hm-mystery-name">${escapeHtml(found.name)}</div>`;
            document.title = found.name;
            const headerMysteryName = document.getElementById('header-mystery-name');
            if (headerMysteryName) { headerMysteryName.textContent = found.name; headerMysteryName.style.display = 'block'; }
        }
    }

    if (!state.preselected) {
        const placeholderOpt = document.createElement("option");
        placeholderOpt.value = ""; placeholderOpt.textContent = "Velg mysterium...";
        placeholderOpt.disabled = true; placeholderOpt.selected = true;
        select.appendChild(placeholderOpt); select.style.color = "rgba(26, 15, 6, 0.4)";
        CONFIG.mysteries.forEach(m => {
            const opt = document.createElement("option"); opt.value = m.id; opt.textContent = m.name; select.appendChild(opt);
        });
        state.mysteryId = "";
    }

    const teamInput = document.getElementById("team-name");
    const btnStart = document.getElementById("btn-start");

    function checkReadyToStart() {
        const hasTeamName = teamInput.value.trim().length > 0;
        const hasMystery = state.mysteryId !== "";
        btnStart.disabled = !(hasTeamName && hasMystery);
    }
    teamInput.addEventListener("input", checkReadyToStart);
    teamInput.addEventListener("keydown", (e) => { if (e.key === "Enter" && !btnStart.disabled) btnStart.click(); });

    if (!state.preselected) {
        select.addEventListener("change", (e) => { state.mysteryId = e.target.value; select.style.color = "#1a0f06"; checkReadyToStart(); });
    } else { checkReadyToStart(); }

    btnStart.addEventListener("click", startGame);
    document.getElementById("btn-start-investigation").addEventListener("click", beginGameTimer);
    
    document.getElementById("btn-new-game").addEventListener("click", () => {
        SessionStore.clear();
        document.getElementById("team-name").value = "";
        if (!state.preselected) { select.value = ""; state.mysteryId = ""; select.style.color = "rgba(245, 240, 232, 0.5)"; }
        document.getElementById("btn-start").disabled = true;
        
        document.getElementById("hm-feedback-section").style.display = "block";
        document.getElementById("hm-feedback-thanks").style.display = "none";
        document.getElementById("feedback-text").value = "";
        state.currentRating = 0;
        document.querySelectorAll("#feedback-stars span").forEach(s => s.classList.remove("active", "hover"));
        
        showScreen("start");
    });
    
    document.getElementById("btn-show-leaderboard").addEventListener("click", showLeaderboard);
    document.getElementById("btn-back-start").addEventListener("click", () => showScreen("start"));
    document.getElementById("task-submit").addEventListener("click", checkAnswer);
    document.getElementById("task-answer").addEventListener("keydown", (e) => { if (e.key === "Enter") checkAnswer(); });
    document.getElementById("btn-next-task").addEventListener("click", () => { state.currentTask++; SessionStore.save(); showTask(); });
    
    document.getElementById("task-timer-toggle").addEventListener("click", () => {
        state.timerVisible = !state.timerVisible;
        document.getElementById("task-timer-toggle").textContent = state.timerVisible ? "skjul" : "vis";
        updateTimerBar();
    });
    
    /* TILBAKEMELDING LOGIKK */
    const stars = document.querySelectorAll("#feedback-stars span");
    stars.forEach(star => {
        star.addEventListener("mouseover", function() {
            const val = this.getAttribute("data-value");
            stars.forEach(s => { if (s.getAttribute("data-value") <= val) s.classList.add("hover"); else s.classList.remove("hover"); });
        });
        star.addEventListener("mouseout", function() { stars.forEach(s => s.classList.remove("hover")); });
        star.addEventListener("click", function() {
            state.currentRating = parseInt(this.getAttribute("data-value"));
            stars.forEach(s => { if (s.getAttribute("data-value") <= state.currentRating) s.classList.add("active"); else s.classList.remove("active"); });
        });
    });

    document.getElementById("btn-submit-feedback").addEventListener("click", async () => {
        if (state.currentRating === 0) { alert("Vennligst velg antall stjerner før du sender inn."); return; }
        const feedbackText = document.getElementById("feedback-text").value;
        const feedbackData = { team: state.teamName, rating: state.currentRating, comment: feedbackText, date: new Date().toISOString() };
        await Storage.saveFeedback(state.mysteryId, feedbackData);
        document.getElementById("hm-feedback-section").style.display = "none";
        document.getElementById("hm-feedback-thanks").style.display = "block";
    });

    /* ADMIN LOGIKK */
    document.getElementById("admin-toggle").addEventListener("click", () => {
        if (state.isAdmin) { state.isAdmin = false; document.getElementById("admin-panel").style.display = "none"; return; }
        const pw = prompt("Admin-passord:");
        if (pw === CONFIG.adminPassword) {
            state.isAdmin = true;
            if (document.getElementById("screen-leaderboard").classList.contains("active")) showLeaderboard();
        }
    });
    
    document.getElementById("btn-open-dashboard").addEventListener("click", openAdminDashboard);
    document.getElementById("btn-close-dashboard").addEventListener("click", showLeaderboard);

    document.getElementById("btn-clear-all").addEventListener("click", async () => {
        if (confirm("Sikker? Dette sletter både tider og tilbakemeldinger.")) { await Storage.clearAll(); showLeaderboard(); }
    });
    
    await Storage.init();

    const savedSession = SessionStore.load();
    if (savedSession && savedSession.startTime && savedSession.mysteryId && savedSession.teamName) {
        const mystery = CONFIG.mysteries.find(m => m.id === savedSession.mysteryId);
        if (mystery) {
            const elapsedMin = Math.round((Date.now() - savedSession.startTime) / 60000);
            const taskNum = savedSession.currentTask + 1;
            const resume = confirm(`Siden ble lastet på nytt.\n\nVil dere fortsette der dere slapp?\n\nLag: ${savedSession.teamName}\nMysterium: ${mystery.name}\nOppgave: ${taskNum} av ${mystery.tasks.length}\nTid brukt: ca. ${elapsedMin} min`);
            if (resume) {
                if (!state.preselected) state.mysteryId = savedSession.mysteryId;
                resumeGame(savedSession); return;
            } else { SessionStore.clear(); }
        } else { SessionStore.clear(); }
    }
}

// ============================================================
//  GAME FLOW
// ============================================================
function startGame() {
    state.teamName = document.getElementById("team-name").value.trim();
    state.mystery = CONFIG.mysteries.find(m => m.id === state.mysteryId);
    state.elapsed = 0; state.currentTask = 0; state.hintsUsed = 0;
    state.hintShownForTask = false; state.gaveUpCount = 0; state.timerVisible = true;
    
    state.taskStats = state.mystery.tasks.map(() => ({ hints: 0, gaveUp: false, timeSpent: 0 }));
    
    if (state.mystery.intro) { document.getElementById("intro-text").textContent = state.mystery.intro; showScreen("intro"); }
    else { beginGameTimer(); }
}

function beginGameTimer() {
    state.startTime = Date.now(); SessionStore.save();
    document.getElementById("task-team-name").textContent = state.teamName;
    state.timerInterval = setInterval(() => { state.elapsed = Date.now() - state.startTime; updateTimerBar(); }, 100);
    showTask();
}

function resumeGame(session) {
    state.mysteryId  = session.mysteryId; state.teamName = session.teamName; state.startTime = session.startTime;
    state.currentTask = session.currentTask; state.hintsUsed = session.hintsUsed; state.gaveUpCount = session.gaveUpCount;
    state.timerVisible = session.timerVisible !== false; state.hintShownForTask = false;
    state.mystery = CONFIG.mysteries.find(m => m.id === state.mysteryId);
    if (!state.mystery) { SessionStore.clear(); return; }
    
    state.taskStats = session.taskStats || state.mystery.tasks.map(() => ({ hints: 0, gaveUp: false, timeSpent: 0 }));
    state.taskStartTime = session.taskStartTime || Date.now();
    
    document.getElementById("task-team-name").textContent = state.teamName;
    state.timerInterval = setInterval(() => { state.elapsed = Date.now() - state.startTime; updateTimerBar(); }, 100);
    showTask(true);
}

function showTask(isResume = false) {
    const task = state.mystery.tasks[state.currentTask];
    const total = state.mystery.tasks.length;
    state.hintShownForTask = false;
    
    if (!isResume) {
        state.taskStartTime = Date.now(); 
        SessionStore.save();
    }
    
    const progressEl = document.getElementById("task-progress"); progressEl.innerHTML = "";
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = "hm-progress-dot" + (i < state.currentTask ? " completed" : "") + (i === state.currentTask ? " active" : "");
        progressEl.appendChild(dot);
    }
    document.getElementById("task-number").textContent = `Oppgave ${state.currentTask + 1} av ${total}`;
    document.getElementById("task-text").textContent = task.question;
    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = `<button class="hm-btn hm-btn-hint" id="btn-show-hint">Vis hint (+5 min strafftid)</button><br><button class="hm-btn hm-btn-giveup" id="btn-giveup" style="display:none;">Gi opp denne oppgaven (+10 min)</button>`;
    
    document.getElementById("btn-show-hint").addEventListener("click", () => {
        if (!state.hintShownForTask) { 
            state.hintsUsed++; state.hintShownForTask = true; 
            state.taskStats[state.currentTask].hints = 1; SessionStore.save(); 
        }
        hintArea.innerHTML = `
            <div class="hm-hint-box"><div class="hm-hint-warning">Hint — +5 min strafftid</div><div class="hm-hint-text">${escapeHtml(task.hint)}</div></div>
            <button class="hm-btn hm-btn-giveup" id="btn-giveup">Gi opp denne oppgaven (+10 min)</button>
        `;
        document.getElementById("btn-giveup").addEventListener("click", () => giveUp(task));
    });
    
    document.getElementById("task-answer").value = "";
    document.getElementById("task-answer").className = "hm-answer-input";
    document.getElementById("task-error").textContent = "";
    showScreen("task"); document.getElementById("task-answer").focus();
}

function giveUp(task) {
    if (!confirm("Er dere sikre? Dere får +10 minutter strafftid.")) return;
    state.gaveUpCount++; 
    state.taskStats[state.currentTask].gaveUp = true; 
    state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime; 
    SessionStore.save();
    
    const answers = Array.isArray(task.answer) ? task.answer : [task.answer];
    const correctAnswer = answers[0];
    document.querySelector(".hm-answer-row").style.display = "none";
    document.getElementById("task-error").textContent = "";
    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = `
        <div class="hm-giveup-box"><div class="hm-giveup-label">Svaret var</div><div class="hm-giveup-answer">${escapeHtml(correctAnswer)}</div><div class="hm-giveup-penalty">+10 minutter strafftid</div></div>
    `;
    const isLast = state.currentTask === state.mystery.tasks.length - 1;
    const continueBtn = document.createElement("button");
    continueBtn.className = "hm-btn hm-btn-primary"; continueBtn.textContent = isLast ? "Se resultatet" : "Neste oppgave";
    continueBtn.style.marginTop = "15px";
    continueBtn.addEventListener("click", () => {
        document.querySelector(".hm-answer-row").style.display = "flex";
        if (isLast) { finishGame(); } else { state.currentTask++; SessionStore.save(); showTask(); }
    });
    hintArea.appendChild(continueBtn);
}

function checkAnswer() {
    const input = document.getElementById("task-answer");
    const task = state.mystery.tasks[state.currentTask];
    const answer = normalizeAnswer(input.value);
    const answers = Array.isArray(task.answer) ? task.answer : [task.answer];
    if (answers.some(a => answer === normalizeAnswer(a))) {
        input.classList.add("correct"); document.getElementById("task-error").textContent = "";
        
        state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime; 
        
        const isLast = state.currentTask === state.mystery.tasks.length - 1;
        if (isLast) { finishGame(); } else { showSuccess(); }
    } else {
        input.classList.remove("wrong"); void input.offsetWidth; input.classList.add("wrong");
        document.getElementById("task-error").textContent = "Det stemmer ikke med bevisene — prøv igjen!";
        setTimeout(() => { input.classList.remove("wrong"); }, 600);
    }
}

function showSuccess() {
    const taskNum = state.currentTask + 1; const total = state.mystery.tasks.length;
    document.getElementById("success-icon").textContent = "\u2726";
    document.getElementById("success-title").textContent = `Oppgave ${taskNum} løst!`;
    document.getElementById("success-text").textContent = `Oppgave ${taskNum} av ${total} fullført.`;
    const penaltyEl = document.getElementById("success-penalty");
    if (state.hintShownForTask) { penaltyEl.innerHTML = '<div class="hm-penalty-tag">+5 min strafftid for hint</div>'; } 
    else { penaltyEl.innerHTML = ""; }
    document.getElementById("btn-next-task").textContent = (state.currentTask + 1 === total - 1) ? "Siste oppgave!" : "Neste oppgave";
    showScreen("success");
}

async function finishGame() {
    clearInterval(state.timerInterval); SessionStore.clear();
    state.elapsed = Date.now() - state.startTime;
    const hintPenalty = state.hintsUsed * CONFIG.penaltyPerHint;
    const giveUpPenalty = state.gaveUpCount * CONFIG.penaltyPerGiveUp;
    const penalty = hintPenalty + giveUpPenalty;
    const totalTime = state.elapsed + penalty;
    
    const entry = { 
        team: state.teamName, time: state.elapsed, hints: state.hintsUsed, gaveUp: state.gaveUpCount, 
        penalty: penalty, totalTime: totalTime, date: new Date().toISOString().split("T")[0],
        taskStats: state.taskStats 
    };
    await Storage.saveEntry(state.mysteryId, entry);
    
    document.getElementById("result-time").textContent = formatTime(totalTime);
    const detailEl = document.getElementById("result-detail"); const penaltyEl = document.getElementById("result-penalty");
    const penaltyParts = [];
    if (state.hintsUsed > 0) penaltyParts.push(`${state.hintsUsed} hint`);
    if (state.gaveUpCount > 0) penaltyParts.push(`${state.gaveUpCount} oppgave${state.gaveUpCount > 1 ? "r" : ""} gitt opp`);
    if (penaltyParts.length > 0) {
        detailEl.textContent = penaltyParts.join(" · "); penaltyEl.textContent = `Faktisk tid: ${formatTime(state.elapsed)} + ${formatTime(penalty)} strafftid`;
    } else { detailEl.textContent = "Ingen hint brukt!"; penaltyEl.textContent = ""; }
    
    document.getElementById("result-final-message").textContent = state.mystery.finalMessage;
    
    const entries = await Storage.getEntries(state.mysteryId);
    entries.sort((a, b) => (a.totalTime || a.time) - (b.totalTime || b.time));
    const rank = entries.findIndex(e => e.team === state.teamName && e.totalTime === totalTime) + 1;
    const rankEl = document.getElementById("result-rank");
    if (rank === 1) rankEl.textContent = "\u{1F947} Førsteplass!";
    else if (rank === 2) rankEl.textContent = "\u{1F948} Andreplass!";
    else if (rank === 3) rankEl.textContent = "\u{1F949} Tredjeplass!";
    else rankEl.textContent = `Plass ${rank} av ${entries.length}`;
    renderLeaderboardList("result-leaderboard-list", entries, state.teamName, totalTime);
    showScreen("result");
}

function updateTimerBar() {
    const el = document.getElementById("task-timer");
    if (state.timerVisible) { el.textContent = formatTime(state.elapsed); el.className = "hm-timer-bar-time"; } 
    else { el.textContent = "skjult"; el.className = "hm-timer-bar-time hm-timer-bar-hidden"; }
}

// ============================================================
//  ADMIN DASHBOARD
// ============================================================
async function openAdminDashboard() {
    showScreen("dashboard");
    const container = document.getElementById("dashboard-content");
    container.innerHTML = "<p style='color: rgba(245, 240, 232, 0.5);'>Laster inn data fra alle mysterier...</p>";

    const allTimes = await Storage.getEntries(null);
    const allFeedback = await Storage.getFeedback(null);

    let stats = {};
    CONFIG.mysteries.forEach(m => {
        stats[m.id] = { 
            name: m.name, playCount: 0, totalRating: 0, ratingCount: 0, feedbackList: [],
            taskAggregates: m.tasks.map(() => ({ hints: 0, gaveUp: 0, totalTime: 0, timeCount: 0 }))
        };
    });

    allTimes.forEach(t => {
        if (stats[t.mysteryId]) {
            stats[t.mysteryId].playCount++;
            if (t.taskStats) {
                t.taskStats.forEach((ts, idx) => {
                    if (stats[t.mysteryId].taskAggregates[idx]) {
                        if (ts.hints > 0) stats[t.mysteryId].taskAggregates[idx].hints++;
                        if (ts.gaveUp) stats[t.mysteryId].taskAggregates[idx].gaveUp++;
                        if (ts.timeSpent) {
                            stats[t.mysteryId].taskAggregates[idx].totalTime += ts.timeSpent;
                            stats[t.mysteryId].taskAggregates[idx].timeCount++;
                        }
                    }
                });
            }
        }
    });

    allFeedback.forEach(f => {
        if (stats[f.mysteryId]) {
            stats[f.mysteryId].ratingCount++;
            stats[f.mysteryId].totalRating += f.rating;
            if (f.comment && f.comment.trim() !== "") { stats[f.mysteryId].feedbackList.push(f); }
        }
    });

    container.innerHTML = "";
    Object.keys(stats).forEach(id => {
        const s = stats[id];
        if (s.playCount === 0 && s.ratingCount === 0) return;

        const avgRating = s.ratingCount > 0 ? (s.totalRating / s.ratingCount).toFixed(1) : "Ingen";
        
        let taskHtml = `<div style="margin: 20px 0; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
            <strong style="color: #e8d48b; font-family: 'Playfair Display', serif; font-size: 1.1rem;">Detaljert Oppgavestatistikk</strong>
            <ul style="font-size: 0.85rem; color: #f5f0e8; list-style: none; padding-left: 0; margin-top: 10px;">`;
        
        s.taskAggregates.forEach((ta, idx) => {
            let avgTimeStr = ta.timeCount > 0 ? formatTime(ta.totalTime / ta.timeCount) : "N/A";
            taskHtml += `<li style="margin-bottom: 5px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 5px;">
                <strong>Oppgave ${idx + 1}:</strong> Snitt-tid: ${avgTimeStr} &nbsp;|&nbsp; Hint brukt: ${ta.hints} &nbsp;|&nbsp; Ga opp: ${ta.gaveUp}
            </li>`;
        });
        taskHtml += `</ul></div>`;

        let feedbackHtml = "";
        if (s.feedbackList.length > 0) {
            feedbackHtml = `<strong style="color: #e8d48b; font-family: 'Playfair Display', serif; font-size: 1.1rem;">Tilbakemeldinger:</strong><ul class="hm-dash-feedback-list">`;
            s.feedbackList.forEach(f => {
                feedbackHtml += `
                    <li class="hm-dash-feedback-item">
                        <div><strong>${escapeHtml(f.team || "Ukjent lag")}</strong> <span class="hm-dash-stars">${f.rating}/5 stjerner</span><span style="color: gray; font-size: 0.7rem;">${new Date(f.date).toLocaleDateString()}</span></div>
                        <div class="hm-dash-comment">"${escapeHtml(f.comment)}"</div>
                    </li>`;
            });
            feedbackHtml += `</ul>`;
        } else {
            feedbackHtml = `<p style="font-size: 0.8rem; color: gray;">Ingen skriftlige tilbakemeldinger ennå.</p>`;
        }

        const card = document.createElement("div");
        card.className = "hm-dash-card";
        card.innerHTML = `
            <div class="hm-dash-title">${escapeHtml(s.name)}</div>
            <div class="hm-dash-stats">
                <span style="background: rgba(201, 168, 76, 0.2); padding: 5px 10px; border-radius: 5px;"><strong>Spilt:</strong> ${s.playCount} ganger</span>
                <span style="background: rgba(201, 168, 76, 0.2); padding: 5px 10px; border-radius: 5px;"><strong>Snittvurdering:</strong> ${avgRating} ⭐ (${s.ratingCount} stemmer)</span>
            </div>
            ${taskHtml}
            ${feedbackHtml}
        `;
        container.appendChild(card);
    });

    if (container.innerHTML === "") { container.innerHTML = "<p>Ingen data registrert på noen av mysteriene ennå.</p>"; }
}

// ============================================================
//  LEADERBOARD OG SLETTING AV ENKELTLAG
// ============================================================
async function showLeaderboard() {
    showScreen("leaderboard");
    const filterDiv = document.getElementById("leaderboard-filter"); filterDiv.innerHTML = "";
    if (state.preselected) {
        const placeholder = document.createElement("span"); filterDiv.appendChild(placeholder);
        loadLeaderboard(state.mysteryId, placeholder);
    } else {
        const allBtn = document.createElement("button"); allBtn.className = "hm-filter-btn active"; allBtn.textContent = "Alle";
        allBtn.addEventListener("click", () => loadLeaderboard(null, allBtn)); filterDiv.appendChild(allBtn);
        CONFIG.mysteries.forEach(m => {
            const btn = document.createElement("button"); btn.className = "hm-filter-btn"; btn.textContent = m.name;
            btn.addEventListener("click", () => loadLeaderboard(m.id, btn)); filterDiv.appendChild(btn);
        });
        loadLeaderboard(null, allBtn);
    }
}
async function loadLeaderboard(mysteryId, activeBtn) {
    document.querySelectorAll(".hm-filter-btn").forEach(b => b.classList.remove("active"));
    if (activeBtn && activeBtn.classList) activeBtn.classList.add("active");
    const entries = await Storage.getEntries(mysteryId);
    entries.sort((a, b) => (a.totalTime || a.time) - (b.totalTime || b.time));
    renderLeaderboardList("leaderboard-list", entries);
    
    // Her ligger funksjonen for å slette test-lag
    if (state.isAdmin) {
        document.getElementById("admin-panel").style.display = "block";
        const adminDiv = document.getElementById("admin-entries"); adminDiv.innerHTML = "";
        entries.forEach((e, i) => {
            const row = document.createElement("div"); row.className = "hm-admin-entry";
            row.innerHTML = `<span>${e.team} — ${formatTime(e.totalTime||e.time)} (${getMysteryName(e.mysteryId || mysteryId)})</span>`;
            const delBtn = document.createElement("button"); delBtn.className = "hm-admin-delete"; delBtn.textContent = "Slett";
            delBtn.addEventListener("click", async () => { 
                await Storage.deleteEntry(e.mysteryId || mysteryId, e._key ?? i); 
                loadLeaderboard(mysteryId, activeBtn); 
            });
            row.appendChild(delBtn); adminDiv.appendChild(row);
        });
    } else { document.getElementById("admin-panel").style.display = "none"; }
}
function renderLeaderboardList(listId, entries, highlightTeam, highlightTotalTime) {
    const list = document.getElementById(listId); list.innerHTML = "";
    if (entries.length === 0) { list.innerHTML = '<li class="hm-no-entries">Ingen tider registrert ennå</li>'; return; }
    entries.slice(0, 20).forEach((entry, i) => {
        const li = document.createElement("li"); li.className = "hm-lb-item";
        const entryTotal = entry.totalTime || entry.time;
        if (highlightTeam && entry.team === highlightTeam && entryTotal === highlightTotalTime) li.classList.add("highlight");
        const rankClass = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
        const hintText = entry.hints > 0 ? ` · ${entry.hints} hint` : "";
        const gaveUpText = entry.gaveUp > 0 ? ` · ${entry.gaveUp} gitt opp` : "";
        li.innerHTML = `
            <span class="hm-lb-rank ${rankClass}">${i + 1}</span>
            <div class="hm-lb-info">
                <div class="hm-lb-team">${escapeHtml(entry.team)}</div>
                <div class="hm-lb-date">${entry.date || ""}${entry.mysteryId ? " · " + getMysteryName(entry.mysteryId) : ""}${hintText}${gaveUpText}</div>
            </div>
            <div style="text-align: right; flex-shrink: 0;">
                <span class="hm-lb-time">${formatTime(entryTotal)}</span>
                ${(entry.hints > 0 || entry.gaveUp > 0) ? `<div class="hm-lb-total">${formatTime(entry.time)} + straff</div>` : ""}
            </div>
        `;
        list.appendChild(li);
    });
}
// GO!
init();
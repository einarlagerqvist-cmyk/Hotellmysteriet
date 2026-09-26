// ============================================================
//  LANGUAGE SYSTEM
// ============================================================
const LANG = new URLSearchParams(window.location.search).get('lang') || 'no';

const UI_TEXT = {
    no: {
        appTitle: 'Hotellmysteriet',
        appSubtitle: 'Tidtaker',
        startIntro: 'Løs mysteriet raskest mulig. Dere får oppgaver underveis. Hint er tilgjengelig, men koster 5 minutter i strafftid. Stikkord holder, dere trenger ikke skrive hele setninger.',
        labelMystery: 'Velg mysterium',
        placeholderMystery: 'Velg mysterium...',
        labelTeam: 'Lagets navn',
        placeholderTeam: 'Skriv inn lagnavnet...',
        btnStart: 'Start mysteriet',
        btnLeaderboard: 'Se Leaderboard',
        caseOverview: 'Saksoversikt',
        btnStartInvestigation: 'Start etterforskningen',
        hide: 'skjul',
        show: 'vis',
        hidden: 'skjult',
        taskOf: (n, t) => `Oppgave ${n} av ${t}`,
        answerPlaceholder: 'Svaret...',
        submitAnswer: 'Svar',
        showHint: 'Vis hint (+5 min strafftid)',
        giveUpBtn: 'Gi opp denne oppgaven (+10 min)',
        hintLabel: 'Hint (+5 min strafftid)',
        taskSolved: (n) => `Oppgave ${n} løst!`,
        taskCompleted: (n, t) => `Oppgave ${n} av ${t} fullført.`,
        hintPenalty: '+5 min strafftid for hint',
        lastTask: 'Siste oppgave!',
        nextTask: 'Neste oppgave',
        downloadReward: '⬇ Last ned kupong',
        congrats: 'Gratulerer!',
        yourTime: 'Deres tid',
        feedbackTitle: 'Hva syntes dere om mysteriet?',
        feedbackPlaceholder: 'Hva kunne blitt bedre? (Valgfritt)',
        submitFeedback: 'Send tilbakemelding',
        feedbackThanks: 'Takk for tilbakemeldingen!',
        btnNewGame: 'Nytt spill',
        btnBack: 'Tilbake',
        btnOpenDashboard: 'Åpne Dashboard',
        btnClearAll: 'Slett absolutt ALLE data',
        btnCloseDashboard: 'Tilbake til Leaderboard',
        wrongAnswer: 'Det stemmer ikke med bevisene. Prøv igjen!',
        rank1: '\u{1F947} Førsteplass!',
        rank2: '\u{1F948} Andreplass!',
        rank3: '\u{1F949} Tredjeplass!',
        rankN: (r, t) => `Plass ${r} av ${t}`,
        noEntries: 'Ingen tider registrert ennå',
        reloadResume: (team, name, n, total, min) => `Siden ble lastet på nytt.\n\nVil dere fortsette der dere slapp?\n\nLag: ${team}\nMysterium: ${name}\nOppgave: ${n} av ${total}\nTid brukt: ca. ${min} min`,
        giveUpConfirm: 'Er dere sikre? Dere får +10 minutter strafftid.',
        giveUpNarrative: 'Sporet ble for kaldt.',
        giveUpLabel: 'Svaret var',
        giveUpPenalty: '+10 minutter strafftid',
        seeResult: 'Se resultatet',
        adminTitle: 'Admin',
        adminDesc: 'Her kan du slette enkeltlag fra valgt mysterium, eller åpne dashbordet for å se statistikk.',
        clearAllConfirm: 'Sikker? Dette sletter både tider og tilbakemeldinger.',
        feedbackRatingAlert: 'Vennligst velg antall stjerner før du sender inn.',
        modalGiveUpHeader: 'GI OPP',
        modalGiveUpConfirm: 'Gi opp',
        modalGiveUpCancel: 'Prøv videre',
        modalQuitHeader: 'AVSLUTT',
        modalQuitMsg: 'Dere kan fortsette etterforskningen senere.',
        modalQuitConfirm: 'Avslutt',
        modalQuitCancel: 'Bli værende',
        modalClearHeader: 'SLETT ALT',
        modalClearConfirm: 'Slett',
        modalResumeHeader: 'FORTSETT?',
        modalResumeConfirm: 'Fortsett',
        modalResumeCancel: 'Start på nytt',
        modalFeedbackHeader: 'MANGLER STJERNER',
        modalOk: 'OK',
        modalCancel: 'Avbryt',
        penaltyHint: (n) => `${n} hint`,
        penaltyGaveUp: (n) => `${n} oppgave${n > 1 ? 'r' : ''} gitt opp`,
        actualTime: (actual, penalty) => `Faktisk tid: ${actual} + ${penalty} strafftid`,
        noHints: 'Ingen hint brukt!',
        dashboardLoading: 'Laster inn data fra alle mysterier...',
        detailedStats: 'Detaljert Oppgavestatistikk',
        taskStatsItem: (n, avg, hints, gave) => `<strong>Oppgave ${n}:</strong> Snitt-tid: ${avg} &nbsp;|&nbsp; Hint brukt: ${hints} &nbsp;|&nbsp; Ga opp: ${gave}`,
        feedbackComments: 'Tilbakemeldinger:',
        noFeedback: 'Ingen skriftlige tilbakemeldinger ennå.',
        played: (n) => `Spilt: ${n} ganger`,
        avgRating: (r, n) => `Snittvurdering: ${r} ⭐ (${n} stemmer)`,
        noData: 'Ingen data registrert på noen av mysteriene ennå.',
        deleteEntry: 'Slett',
        adminDashboardTitle: 'Admin Dashboard',
    },
    en: {
        appTitle: 'Hotel Mystery',
        appSubtitle: 'Timer',
        startIntro: 'Solve the mystery as fast as possible. You will receive tasks along the way. Hints are available, but each costs 5 minutes of penalty time. Keywords are enough. You do not need to write full sentences.',
        labelMystery: 'Choose mystery',
        placeholderMystery: 'Choose mystery...',
        labelTeam: 'Team name',
        placeholderTeam: 'Enter team name...',
        btnStart: 'Start the mystery',
        btnLeaderboard: 'See Leaderboard',
        caseOverview: 'Case Overview',
        btnStartInvestigation: 'Start the investigation',
        hide: 'hide',
        show: 'show',
        hidden: 'hidden',
        taskOf: (n, t) => `Task ${n} of ${t}`,
        answerPlaceholder: 'The answer...',
        submitAnswer: 'Submit',
        showHint: 'Show hint (+5 min penalty)',
        giveUpBtn: 'Give up this task (+10 min)',
        hintLabel: 'Hint (+5 min penalty)',
        taskSolved: (n) => `Task ${n} solved!`,
        taskCompleted: (n, t) => `Task ${n} of ${t} completed.`,
        hintPenalty: '+5 min penalty for hint',
        lastTask: 'Last task!',
        nextTask: 'Next task',
        downloadReward: '⬇ Download coupon',
        congrats: 'Congratulations!',
        yourTime: 'Your time',
        feedbackTitle: 'What did you think of the mystery?',
        feedbackPlaceholder: 'What could have been better? (Optional)',
        submitFeedback: 'Submit feedback',
        feedbackThanks: 'Thank you for your feedback!',
        btnNewGame: 'New game',
        btnBack: 'Back',
        btnOpenDashboard: 'Open Dashboard',
        btnClearAll: 'Delete ALL data',
        btnCloseDashboard: 'Back to Leaderboard',
        wrongAnswer: "That doesn't match the evidence. Try again!",
        rank1: '\u{1F947} First place!',
        rank2: '\u{1F948} Second place!',
        rank3: '\u{1F949} Third place!',
        rankN: (r, t) => `Place ${r} of ${t}`,
        noEntries: 'No times recorded yet',
        reloadResume: (team, name, n, total, min) => `The page was reloaded.\n\nDo you want to continue where you left off?\n\nTeam: ${team}\nMystery: ${name}\nTask: ${n} of ${total}\nTime spent: approx. ${min} min`,
        giveUpConfirm: 'Are you sure? You will receive +10 minutes penalty.',
        giveUpNarrative: 'The trail went cold.',
        giveUpLabel: 'The answer was',
        giveUpPenalty: '+10 minutes penalty',
        seeResult: 'See the result',
        adminTitle: 'Admin',
        adminDesc: 'Here you can delete individual teams from the selected mystery, or open the dashboard to view statistics.',
        clearAllConfirm: 'Are you sure? This will delete all times and feedback.',
        feedbackRatingAlert: 'Please select a star rating before submitting.',
        modalGiveUpHeader: 'GIVE UP',
        modalGiveUpConfirm: 'Give up',
        modalGiveUpCancel: 'Keep trying',
        modalQuitHeader: 'QUIT',
        modalQuitMsg: 'You can continue the investigation later.',
        modalQuitConfirm: 'Quit',
        modalQuitCancel: 'Keep going',
        modalClearHeader: 'DELETE ALL',
        modalClearConfirm: 'Delete',
        modalResumeHeader: 'CONTINUE?',
        modalResumeConfirm: 'Continue',
        modalResumeCancel: 'Start over',
        modalFeedbackHeader: 'MISSING STARS',
        modalOk: 'OK',
        modalCancel: 'Cancel',
        penaltyHint: (n) => `${n} hint${n > 1 ? 's' : ''}`,
        penaltyGaveUp: (n) => `${n} task${n > 1 ? 's' : ''} given up`,
        actualTime: (actual, penalty) => `Actual time: ${actual} + ${penalty} penalty`,
        noHints: 'No hints used!',
        dashboardLoading: 'Loading data from all mysteries...',
        detailedStats: 'Detailed Task Statistics',
        taskStatsItem: (n, avg, hints, gave) => `<strong>Task ${n}:</strong> Avg time: ${avg} &nbsp;|&nbsp; Hints used: ${hints} &nbsp;|&nbsp; Gave up: ${gave}`,
        feedbackComments: 'Feedback:',
        noFeedback: 'No written feedback yet.',
        played: (n) => `Played: ${n} time${n !== 1 ? 's' : ''}`,
        avgRating: (r, n) => `Average rating: ${r} ⭐ (${n} vote${n !== 1 ? 's' : ''})`,
        noData: 'No data recorded for any of the mysteries yet.',
        deleteEntry: 'Delete',
        adminDashboardTitle: 'Admin Dashboard',
    }
};

function T(key, ...args) {
    const dict = UI_TEXT[LANG] || UI_TEXT.no;
    const val = dict[key] !== undefined ? dict[key] : (UI_TEXT.no[key] || key);
    return typeof val === 'function' ? val(...args) : val;
}

// ============================================================
//  THEMED MODAL HELPERS  (replaces native confirm / alert)
// ============================================================
function showConfirm(msg, confirmLabel, cancelLabel, headerLabel, isDanger) {
    return new Promise(resolve => {
        const modal = document.getElementById('hm-modal');
        if (!modal) { resolve(window.confirm(msg)); return; }
        document.getElementById('hm-modal-msg').textContent = msg;
        document.getElementById('hm-modal-label').textContent = headerLabel || 'Advarsel';
        const confirmBtn = document.getElementById('hm-modal-confirm');
        const cancelBtn  = document.getElementById('hm-modal-cancel');
        confirmBtn.textContent = confirmLabel || T('modalOk');
        confirmBtn.classList.toggle('danger', !!isDanger);
        if (cancelLabel) {
            cancelBtn.style.display = '';
            cancelBtn.textContent = cancelLabel;
        } else {
            cancelBtn.style.display = 'none';
        }
        modal.classList.add('is-open');
        const cleanup = ok => {
            modal.classList.remove('is-open');
            confirmBtn.onclick = null;
            cancelBtn.onclick  = null;
            document.removeEventListener('keydown', onKey);
            resolve(ok);
        };
        confirmBtn.onclick = () => cleanup(true);
        cancelBtn.onclick  = () => cleanup(false);
        const onKey = e => { if (e.key === 'Escape' && cancelLabel) cleanup(false); };
        document.addEventListener('keydown', onKey);
        setTimeout(() => confirmBtn.focus(), 40);
    });
}
function showAlert(msg, headerLabel) {
    return showConfirm(msg, T('modalOk'), null, headerLabel);
}

function getMystery(m) {
    if (LANG === 'en' && m.en) return { ...m, ...m.en };
    return m;
}

function visibleMysteries() {
    if (LANG === 'en') return CONFIG.mysteries.filter(m => m.en || m.onlyEn);
    return CONFIG.mysteries.filter(m => !m.onlyEn);
}

// ============================================================
//  KONFIGURASJON OG OPPGAVETEKSTER
// ============================================================
const CONFIG = {
    mysteries: [
        {
            id: "hafslund",
            name: "Mysteriet på Hafslund Hovedgård",
            tasks: [
                { question: "For å komme videre i mysteriet må dere finne ut hvem som løy i avhøret sitt.\n\nHva er navnet på løgneren?", answer: ["Butleren", "butler", "Line", "line hansen", "linehansen"], hint: "Det er noen som lyver om tidslinjen sin." },
                { question: "For å komme videre i mysteriet må dere finne ut hvem den hemmelige gjesten er.\n\nHva er navnet på den hemmelige gjesten?", answer: ["jacobjuel", "jacob", "jacob Juel"], hint: "Her må dere sjekke Norske Intelligenz-Sedler mot gjesteboken. Let etter et anagram." },
                { question: "Hvem drepte Herman Wedel Jarlsberg?", answer: ["marcus", "marcusrosenkrantz", "rosenkrantz"], hint: "Dere må se nærmere på signaturen på bestillingen av vin og trusselbrevet for å løse mordet." }
            ],
            finalMessage: "Gratulerer!\n\nDere har sett gjennom løgnene og funnet sannheten som har vært skjult i skyggene på Hafslund.\n\nDet var Marcus Gjøe Rosenkrantz som drepte Herman Wedel Jarlsberg. Drivkraften var ren grådighet. Marcus var ute etter den enorme arven til Maren. Han tilsatte giften i hennes glass, men i forvirringen da gjestene byttet plasser, havnet Herman ved feil glass. Herman ble dermed et uskyldig offer for et komplott ment for Maren!\n\nTakket være deres skarpe etterforskning har den skyldige blitt avslørt, og rettferdigheten kan endelig skje på hovedgården.",
            en: {
                name: "The Mystery at Hafslund Manor",
                tasks: [
                    { question: "To progress in the mystery, you must find out who lied in their interrogation.\n\nWhat is the name of the liar?", answer: ["Butleren", "butler", "Line", "line hansen", "linehansen"], hint: "Someone is lying about their timeline." },
                    { question: "To progress in the mystery, you must find out who the secret guest is.\n\nWhat is the name of the secret guest?", answer: ["jacobjuel", "jacob", "jacob Juel"], hint: "Cross-reference the Norwegian Intelligence Gazette with the guest book. Look for an anagram." },
                    { question: "Who killed Herman Wedel Jarlsberg?", answer: ["marcus", "marcusrosenkrantz", "rosenkrantz"], hint: "Examine the signature on the wine order and the threatening letter to solve the murder." }
                ],
                finalMessage: "Congratulations!\n\nYou have seen through the lies and found the truth that has been hidden in the shadows of Hafslund.\n\nIt was Marcus Gjøe Rosenkrantz who killed Herman Wedel Jarlsberg. The motive was pure greed. Marcus was after Maren's enormous inheritance. He laced her glass with poison, but in the confusion as guests swapped seats, Herman ended up at the wrong glass. Herman thus became an innocent victim of a plot intended for Maren!\n\nThanks to your sharp investigation, the guilty party has been exposed, and justice can finally be served at the manor."
            }
        },
        {
            id: "ramme",
            name: "Mysteriet på Ramme",
            intro: "Sett dere godt inn i saken. Les gjennom alle sidene dere har fått utdelt: avhørene, brevene og dokumentene. Dere vil trenge dem.\n\nEn høstnatt i 1893 ble kunstmesenen Fridtjof Lowthau funnet brutalt slått i hjel i hotellets kunstgalleri. Samtidig forsvant et verdifullt maleri. Politikonestablene sto rådløse, og saken ble aldri løst.\n\nI over hundre år har sannheten ligget skjult på Ramme. I dag er det dere som skal grave den frem.",
            tasks: [
                { question: "Åpne konvolutt 1 og les godt gjennom dokumentene.\n\nFor å løse en over hundre år gammel floke, begynner vi der kunnskapen oppbevares.\n\nInne på hotellets ærverdige bibliotek skjuler det seg en firesifret kode. Søk blant hyllene, fire bøker forteller om en mørk periode i Norges historie. Tallene på bokryggene gir dere koden.\n\nSkriv inn koden under. Når den er godkjent, gå til resepsjonen og vis dem koden for å få adgangskortet til neste lokasjon.", answer: ["4567"], hint: "Se etter bøker som handler om krigen i Norge." },
                { question: "Adgangskortet leder dere dit mordet skjedde, kunstgalleriet.\n\nHer henger det et maleri som har sett alt. Løs gåten, og finn det:\n\n«Vi bærer verken våpen eller skyld, men vi satt med fasiten fra aller første stund. Hadde vi bare åpnet munnen, ville mysteriet vært over før det begynte. Vi er de eneste bevisene som puster og ser, men akkurat her er vi fanget i olje og lerret.»\n\nFinn maleriet i galleriet. Hva heter det?", answer: ["øyevitne", "øyevitner", "øyevidne", "øyevidner"], hint: "Hva kaller man de som ser en kriminell handling, men ikke deltar?" },
                { question: "Maleriet sin historie skjuler koden til neste sted. Skriv inn den firesifrede koden under. Når den er godkjent, gå til resepsjonen og hent det nye kortet.", answer: ["1895"], hint: "Undersøk informasjonen om maleriet nøye. Årstallet er koden." },
                { question: "Åpne konvolutt 2 og les dokumentet nøye.\n\nFinn ut hvor tyven gjemte maleriet. Det er for lengst fjernet, men navnet på gjemmestedet gir dere neste oppgave.", answer: ["wells fargo", "wellsfargo", "wells fargo overland express", "overland express", "wellsfargooverlandexpress", "abbot-downing concord coach", "original abbot-downing concord coach"], hint: "Finn vognen som fraktet brev." },
                { question: "Dere vet nå hvor maleriet ble gjemt. Men hvem er tyven?", answer: ["Odine Krong", "Odine", "krong", "odinekrong"], hint: "Sammenlign brevet med de andre dokumentene og se etter likheter i skrivestil og ordvalg." },
                { question: "Åpne konvolutt 3.\n\nDere har funnet tyven, men tyven er kanskje ikke morderen. Vi må teste alibiene.\n\nOdine hevder hun flyktet opp Kongetrappen med det stjålne maleriet. Hun sier øynene i bildene på veggen fulgte henne hele veien opp.\n\nTa turen til Kongetrappen. Tell alle øynene det er mulig å få øyekontakt med på vei opp. Antallet er koden. Skriv den inn under og gå til resepsjonen for adgangskortet til neste lokasjon.", answer: ["10", "0010", "ti"], hint: "Tell bare øyne som ser direkte ut mot trappen. Øyne som ser ned, opp eller til siden teller ikke." },
                { question: "Adgangskortet gir dere tilgang til tårnet. Der kan dere åpne konvolutt 4.\n\nSkissen dere finner er laget av en kunstner med et navn som minner om en av historiens store norske malere. Og skissen selv minner mistenkelig om ett av dennes mest kjente verk.\n\nHva heter maleriet skissen til slutt ble til?", answer: ["melankoli"], hint: "Se på kunstnernavnet på skissen og tenk på hvem det ligner. Hva malte denne kunstneren om sjalusi og fortvilelse?" },
                { question: "Neste steg er risset inn på utsiden av Brenneriets kalde fasade. Gransk bygget, finn den skjulte firesifrede koden, og bring den til resepsjonen for adgangskortet til Universet. Der skjuler siste hemmelighet seg.", answer: ["2020"], hint: "Let på utsiden av Brenneriet. Koden er skjult som romertall." },
                { question: "Hvem drepte Fridtjof Lowthau?\n\nNår dere har løst mysteriet, ring i bjellen.", answer: ["christopher krong", "christopher", "krong", "christopherkrong"], hint: "Studer bildene fra det Kunsthistoriske arkivet. Er det noe som ikke stemmer overens med avhørene?" }
            ],
            finalMessage: "Strålende arbeid, ærede etterforskere! I over hundre år har saken ligget som en isende gåte over Ramme fjordhotell. Datidens politikonstabler sto fullstendig rådløse, men dere lot dere ikke lure av de falske maskene. Takket være deres skarpsindighet, har sannheten endelig kommet frem i lyset.\n\nDet var ingen samkjørt plan, men to uavhengige ugjerninger utført av et ektepar fullstendig uvitende om hverandre. Brevet om gjemmestedet felte Odine. Samtidig begikk ektemannen Christopher det brutale drapet. Dere gjennomskuet løgnen hans; vinkelen på det dødelige slaget avslørte hans sanne hendthet. Et liv ble tatt og et kunstverk forsvant, men takket være dere er de begge avmaskert, og Fridtjof Lowthau kan endelig hvile i fred.",
            en: {
                name: "The Mystery at Ramme",
                intro: "Study the case carefully. Read through all the pages you have been given: the interrogations, the letters, and the documents. You will need them.\n\nOn an autumn night in 1893, art patron Fridtjof Lowthau was found brutally beaten to death in the hotel's art gallery. Simultaneously, a valuable painting disappeared. The police constables were at a loss, and the case was never solved.\n\nFor over a hundred years, the truth has lain hidden at Ramme. Today, it is you who must dig it up.",
                tasks: [
                    { question: "Open envelope 1 and read through the documents carefully.\n\nTo solve a mystery over a hundred years old, we begin where knowledge is kept.\n\nInside the hotel's venerable library, a four-digit code is hidden. Search the shelves: four books tell of a dark period in Norway's history. The numbers on the spines give you the code.\n\nEnter the code below. Once approved, go to the reception and show them the code to receive the access card to the next location.", answer: ["4567"], hint: "Look for books about the war in Norway." },
                    { question: "The access card leads you to where the murder took place: the art gallery.\n\nA painting here has witnessed everything. Solve the riddle and find it:\n\n'We carry neither weapons nor guilt, but we held the answer from the very beginning. Had we only opened our mouths, the mystery would have been over before it started. We are the only witnesses who breathe and see, but right here, we are captured in oil and canvas.'\n\nFind the painting in the gallery. What is it called?", answer: ["øyevitne", "øyevitner", "eyewitness", "eyewitnesses", "witness", "witnesses"], hint: "What do you call those who witness a criminal act but don't participate?" },
                    { question: "The history of the painting conceals the code to the next location. Enter the four-digit code below. Once approved, go to the reception and collect the new card.", answer: ["1895"], hint: "Examine the information about the painting carefully. The year is the code." },
                    { question: "Open envelope 2 and read the document carefully.\n\nFind out where the thief hid the painting. It has long since been removed, but the name of the hiding place gives you your next task.", answer: ["wells fargo", "wellsfargo", "wells fargo overland express", "overland express", "wellsfargooverlandexpress", "abbot-downing concord coach", "original abbot-downing concord coach"], hint: "Find the carriage that transported letters." },
                    { question: "You now know where the painting was hidden. But who is the thief?", answer: ["Odine Krong", "Odine", "krong", "odinekrong"], hint: "Compare the letter with the other documents and look for similarities in writing style and word choice." },
                    { question: "Open envelope 3.\n\nYou have found the thief, but the thief may not be the murderer. We must test the alibis.\n\nOdine claims she fled up the Royal Staircase with the stolen painting. She says the eyes in the paintings on the wall followed her all the way up.\n\nMake your way to the Royal Staircase. Count all the eyes you can make eye contact with on the way up. The number is the code. Enter it below and go to reception for the access card to the next location.", answer: ["10", "0010", "ten"], hint: "Count only eyes that look directly out toward the staircase. Eyes looking down, up, or sideways do not count." },
                    { question: "The access card gives you entry to the tower. There you can open envelope 4.\n\nThe sketch you find was made by an artist whose name resembles one of history's great Norwegian painters. And the sketch itself strongly resembles one of this artist's most famous works.\n\nWhat is the painting the sketch eventually became?", answer: ["melankoli", "melancholy"], hint: "Look at the artist's name on the sketch and think about who it resembles. What did this artist paint about jealousy and despair?" },
                    { question: "The next step is etched on the outside of the Brewery's cold facade. Examine the building, find the hidden four-digit code, and bring it to reception for the access card to the Universe. There, the final secret is hidden.", answer: ["2020"], hint: "Look on the outside of the Brewery. The code is hidden in Roman numerals." },
                    { question: "Who killed Fridtjof Lowthau?\n\nWhen you have solved the mystery, ring the bell.", answer: ["christopher krong", "christopher", "krong", "christopherkrong"], hint: "Study the images from the Art Historical Archive. Is there something that doesn't match the interrogations?" }
                ],
                finalMessage: "Brilliant work, esteemed investigators! For over a hundred years, the case lay as a chilling puzzle over Ramme Fjord Hotel. The police constables of the time were completely at a loss, but you were not fooled by the false masks. Thanks to your sharp minds, the truth has finally come to light.\n\nIt was no coordinated plan, but two independent crimes committed by a couple completely unaware of each other. The letter about the hiding place condemned Odine. Meanwhile, her husband Christopher committed the brutal murder. You saw through his lie; the angle of the fatal blow revealed his true handedness. A life was taken and an artwork disappeared, but thanks to you, both have been unmasked, and Fridtjof Lowthau can finally rest in peace."
            }
        },
        {
            id: "fossheim",
            name: "Mysteriet Fossheim Hotell",
            tasks: [
                { question: "Opne konvolutt 1.\n\nDet er nokon som lyg i avhøyret sitt, kven?", answer: ["kokken", "daniel", "daniel gall", "kokken lyver", "gall"], hint: "De må samanlikne avhøyra mot avisutklippa." },
                { question: "Opne konvolutt 2.\n\nMordvåpenet vart aldri stadfesta. Legenda seier at mordvåpenet høyrde til doktorkontoret. Leit i fellesområda. Kva var mordvåpenet?", answer: ["reflekshammeren", "reflekshammaren", "reflekshammer", "hammaren", "hammer", "hammar", "reflekshammar"], hint: "De må finna medisinskapet og samanlikne det mot skildringa i obduksjonsrapporten." },
                { question: "No er me eitt steg nærmare mordaren. Åstadsundersøkinga har ein feil i seg. Kva objekt har politiet teke feil om i åstadsundersøkjinga?", answer: ["glasskåret", "glasskår", "vindauget", "vinduet", "vindu", "ruta", "glasruta", "glaset", "vindusruta"], hint: "De må sjå nøye på biletet for å finna feilen." },
                { question: "Det er eit dokument som aldri vart funne i peisestova. Skapet attmed pianoet gøymer noko. Finn det og løys saka. Kven var mordaren?", answer: ["hans", "hans jansen", "herr muller", "hans muller", "jansen", "muller"], hint: "Det er ei skjult skyvedør på skapet." }
            ],
            finalMessage: "De gjorde det lensmannen i Lom ikkje evna den stormfulle kvelden i 1946: De har avdekt sanninga!\nDen skuldige er Hans Jansen. Dokumentet frå peisestova avslørte kven han eigentleg var: Ingen fredeleg, sveitsisk gjest, men den tyske offiseren Hans Müller. Han kom ikkje til Lom for å flytte, men var driven av bekmørk hemn.\nOberstløytnant Vangli nytta i 1940 sin berykta «finger-metode» for å knekke tyske fangar. Den øydelagde venstrefingeren til Hans var inga skiulykke, men eit evigvarande minne om Vangli sin tortur.\nDå doktoren og presten forsvann inn på bakrommet, greip Hans sjansen og slo i hel mannen som hadde pint han. For å sleppe unna, knuste han ruta frå innsida, glasskåra låg jo på utsida, for å skape illusjonen av eit innbrot. Deretter sette han seg roleg tilbake i lenestolen i resepsjonen og las avisa.\nMorderen slapp unna i 1946, men takka vere dykk vil ikkje sanninga lenger liggje gravlagd. Gratulerer med strålande etterforskingsarbeid!",
            en: {
                name: "The Fossheim Hotel Mystery",
                tasks: [
                    { question: "Open envelope 1.\n\nSomeone is lying in their interrogation. Who?", answer: ["kokken", "daniel", "daniel gall", "gall", "the cook", "cook"], hint: "Compare the interrogations against the newspaper clippings." },
                    { question: "Open envelope 2.\n\nThe murder weapon was never confirmed. Legend says the murder weapon belonged to the doctor's office. Search the common areas. What was the murder weapon?", answer: ["reflekshammeren", "reflekshammaren", "reflekshammer", "hammer", "the hammer", "reflex hammer", "the reflex hammer", "neurological hammer", "the neurological hammer"], hint: "Find the medicine cabinet and compare it against the description in the autopsy report." },
                    { question: "We are now one step closer to the murderer. The crime scene investigation contains an error. Which object has the police gotten wrong in the crime scene investigation?", answer: ["glasskåret", "glasskår", "vindauget", "vinduet", "ruta", "window", "the window", "glass", "the glass", "window pane", "broken window", "glass shards", "the glass shards", "glass shard", "shards", "the shards", "broken glass"], hint: "Look carefully at the image to find the error." },
                    { question: "There is a document that was never found in the parlour. The cabinet next to the piano is hiding something. Find it and solve the case. Who was the murderer?", answer: ["hans", "hans jansen", "herr muller", "hans muller", "jansen", "muller", "müller", "hans müller", "herr müller", "hans jansen müller"], hint: "There is a hidden sliding door on the cabinet." }
                ],
                finalMessage: "You did what the sheriff of Lom was unable to do on that stormy evening in 1946: you have uncovered the truth!\n\nThe culprit is Hans Jansen. The document from the parlour revealed who he really was: no peaceful Swiss guest, but the German officer Hans Müller. He did not come to Lom to relocate, but was driven by pitch-black revenge.\n\nLieutenant Colonel Vangli used his notorious 'finger method' in 1940 to break German prisoners. Hans's damaged left finger was no skiing accident, but an everlasting reminder of Vangli's torture.\n\nWhen the doctor and the priest disappeared into the back room, Hans seized his chance and beat the man who had tormented him to death. To escape, he broke the window from the inside (the shards lay on the outside) to create the illusion of a break-in. He then sat calmly back in the armchair in the reception and read the newspaper.\n\nThe murderer escaped in 1946, but thanks to you, the truth will no longer lie buried. Congratulations on outstanding investigative work!"
            }
        },
        {
            id: "dalen",
            name: "Mysteriet på Dalen Hotel",
            tasks: [
                { question: "Det er noen som lyver i avhøret sitt. Hvem lyver?", answer: ["max", "slakteren", "slakter"], hint: "Det er lettere å finne løgnen om man kobler to avhør og avisen." },
                { question: "Dere må finne ut hvilken gift det var som drepte Keiser Vilhelm II for å komme videre i saken. Det er en utrevet side i den botaniske boken.\n\nDen har blitt gjemt godt. Sjekk rommet deres grundig.", answer: ["gullregn"], hint: "Det er gjemt en side om en giftplante bak et bilde på rommet deres." },
                { question: "Undersøk bildene mellom rom 13 og 16 for å se om dere finner noen flere løgner. Hvem har løyet denne gangen?", answer: ["kristoff", "gartneren", "gartner"], hint: "På et av bildene er det en avis. Se nøye her." },
                { question: "Politiet arresterte gartneren, men det var noe som ikke stemte. Bevis at gartneren ikke drepte keiseren. Hvilke dokumenter beviser at han ikke kunne drept Keiseren?", answer: ["Kartet", "Passasjerlisten", "kart", "Passasjerliste", "kart og passasjerliste", "Kartet og passasjerlisten"], hint: "For å løse denne må man koble flere dokumenter med tidslinjen til gartneren." },
                { question: "Et stereogram ble funnet på rommet til keiseren, det er ikke blitt tydet. Finn ut hva som er på stereogrammet og fortell bartenderen hva det viser. Skriv inn figuren her for å komme videre til neste oppgave.", answer: ["kopp", "glass"], hint: "Start med bildet helt inntil nesen og stirr ufokusert gjennom det. Trekk deretter bildet sakte unna mens du holder et avslappet blikk." },
                { question: "Nå har dere nok informasjon til å finne ut hvem morderen er. Hvem gjorde det?", answer: ["alex", "butleren", "butler"], hint: "Sammenlign signaturen på barkvitteringene med håndskriften på trusselbrevet som ble funnet på Keiserens rom." }
            ],
            finalMessage: "Svaret lå i blekket: Det var Butleren som gjorde det. Hans forsøk på å legge skylden på Kong Oscar II gjennom et forfalsket trusselbrev var listig, men ikke feilfritt.\n\nDere har avslørt at håndskriften på det truende brevet er identisk med signaturen på kvitteringene fra baren. En tjener som skulle være usynlig, har blitt avslørt som en kaldblodig morder.\n\nGodt jobbet!",
            en: {
                name: "The Mystery at Dalen Hotel",
                tasks: [
                    { question: "Someone is lying in their interrogation. Who is lying?", answer: ["max", "slakteren", "slakter", "the butcher", "butcher"], hint: "It is easier to find the lie if you connect two interrogations and the newspaper." },
                    { question: "You need to find out which poison killed Kaiser Wilhelm II to proceed in the case. There is a torn-out page in the botanical book.\n\nIt has been well hidden. Check your room thoroughly.", answer: ["gullregn", "laburnum", "golden chain", "golden rain"], hint: "A page about a poisonous plant is hidden behind a picture in your room." },
                    { question: "Examine the pictures between rooms 13 and 16 to see if you find any more lies. Who has lied this time?", answer: ["kristoff", "gartneren", "gartner", "the gardener", "gardener"], hint: "In one of the pictures there is a newspaper. Look carefully here." },
                    { question: "The police arrested the gardener, but something didn't add up. Prove that the gardener did not kill the Kaiser. Which documents prove he could not have killed the Kaiser?", answer: ["Kartet", "Passasjerlisten", "kart", "Passasjerliste", "kart og passasjerliste", "Kartet og passasjerlisten", "the map", "map", "passenger list", "the passenger list", "map and passenger list", "the map and the passenger list"], hint: "To solve this you need to connect several documents with the gardener's timeline." },
                    { question: "A stereogram was found in the Kaiser's room. It has not been decoded. Find out what is in the stereogram and tell the bartender what it shows. Enter the figure here to proceed to the next task.", answer: ["kopp", "glass", "cup", "a cup", "a glass"], hint: "Start with the picture right up to your nose and stare unfocused through it. Then slowly pull the picture away while keeping a relaxed gaze." },
                    { question: "You now have enough information to find out who the murderer is. Who did it?", answer: ["alex", "butleren", "butler", "the butler"], hint: "Compare the signature on the bar receipts with the handwriting on the threatening letter found in the Kaiser's room." }
                ],
                finalMessage: "The answer lay in the ink: it was the Butler who did it. His attempt to frame King Oscar II through a forged threatening letter was clever, but not flawless.\n\nYou have revealed that the handwriting on the threatening letter is identical to the signature on the receipts from the bar. A servant who should have been invisible has been exposed as a cold-blooded murderer.\n\nWell done!"
            }
        },
        {
            id: "hurdalsjoen",
            name: "Mysteriet på Hurdalsjøen",
            tasks: [
                { question: "Åpne konvolutt 1.\n\nDet er noen som lyver i avhøret sitt. Hvem lyver?", answer: ["Felix Falk", "Felix", "felixfalk"], hint: "For å avsløre løgneren må dere sjekke telefonsvareren til Reidar." },
                { question: "Behold konvolutt 1, dere trenger ingen ny ennå.\n\nHvordan klarte morderen å få giften i vinen? Morderen gjemte verktøyet i hotellets ganger. Finn den gjemte gjenstanden.", answer: ["sprøyte", "kanyle"], hint: "Verktøyet ligger til utstilling i et glassbur." },
                { question: "Fortsatt ingen ny konvolutt.\n\nFor å komme videre i mysteriet må dere forstå hva Reidar prøvde å fortelle til Siv i sine siste øyeblikk. Spill av lydopptaket av avhøret, og ta turen til vinkjelleren for å løse oppgaven.", answer: ["Langhe Nebbiolo", "Nebbiolo", "Langhe", "Langhe Nebiolo", "Nebiolo"], hint: "Ordene var ikke forvirret tale. Hør på opptaket en gang til, og let etter Hurdalsjøen sin egen vin.", audio: { src: "audio/hurdalsjoen/siv-siste-ord.mp3", label: "Spill av lydopptaket", playingLabel: "Spiller av...", divider: "Lydopptak: Siv Andersen" } },
                { question: "Åpne konvolutt 2.\n\nNå har dere nok informasjon til å felle morderen. Hvem drepte Reidar?", answer: ["Margrete Hagen", "margrete", "margretehagen"], hint: "Det var noen som røpte seg i avhøret sitt." }
            ],
            finalMessage: "Mysteriet er løst: Gratulerer, etterforskere!\n\nDere avdekket det som det lokale politiet i Ullensaker holdt på å overse. Dere har avslørt sannheten bak tragedien på Hurdalsjøen Hotell. Den skyldige er forfatteren Margrete Hagen. Motivet var desperasjon og grådighet. Margrete hadde bestukket Kåre Lindgren med 45 000 kroner for å sikre boken sin, «Brennesle», en lukrativ plass på pensumlisten. Da hotelldirektør Reidar Moen oppdaget korrupsjonen og truet med å varsle komiteen, så Margrete hele karrieren sin smuldre opp. Hun måtte stoppe ham. Fredag kveld snek hun seg ned i vinkjelleren. Med en sprøyte injiserte hun dødelige mengder arsenikk gjennom korken på Reidars personlige flaske med Langhe Nebbiolo. Men ingen morder er feilfri. I sin arroganse snakket Margrete fritt om den forgiftede vinen under politiavhøret, en detalj etterforskerne hadde holdt strengt hemmelig. Den språklige glippen ble hennes undergang. Reidar Moen får endelig fred, og takket være deres skarpe blikk for detaljer og logikk, vil Margrete Hagen bytte ut boksigneringer med en lang fengselsstraff.\n\nTakk for strålende innsats!",
            en: {
                name: "The Mystery at Hurdalsjøen",
                tasks: [
                    { question: "Open envelope 1.\n\nSomeone is lying in their interrogation. Who is lying?", answer: ["Felix Falk", "Felix", "felixfalk"], hint: "To expose the liar, check Reidar's answering machine." },
                    { question: "Stay with envelope 1, you do not need a new one yet.\n\nHow did the murderer get the poison into the wine? The murderer hid the tool in the hotel's corridors. Find the hidden object.", answer: ["sprøyte", "kanyle", "syringe", "needle", "injection"], hint: "The tool is on display in a glass case." },
                    { question: "Still no new envelope.\n\nTo progress in the mystery, you must understand what Reidar was trying to tell Siv in his final moments. Play the recording of the interrogation, then make your way to the wine cellar to solve the task.", answer: ["Langhe Nebbiolo", "Nebbiolo", "Langhe", "Langhe Nebiolo", "Nebiolo"], hint: "The words were not confused rambling. Listen to the recording again, then look for Hurdalsjøen's own wine.", audio: { src: "audio/hurdalsjoen/siv-siste-ord-en.mp3", label: "Play the recording", playingLabel: "Playing...", divider: "Recording: Siv Andersen" } },
                    { question: "Open envelope 2.\n\nYou now have enough to name the murderer. Who killed Reidar?", answer: ["Margrete Hagen", "margrete", "margretehagen"], hint: "Someone gave themselves away in their interrogation." }
                ],
                finalMessage: "The mystery is solved: Congratulations, investigators!\n\nYou did what the local police in Ullensaker were about to overlook. You have uncovered the truth behind the tragedy at Hurdalsjøen Hotel. The culprit is the author Margrete Hagen. The motive was desperation and greed. Margrete had bribed Kåre Lindgren with 45,000 kroner to secure a lucrative spot on the curriculum for her book, 'Brennesle'. When hotel director Reidar Moen discovered the corruption and threatened to report it to the committee, Margrete saw her entire career crumbling. She had to stop him. On Friday evening, she crept down to the wine cellar. With a syringe, she injected lethal amounts of arsenic through the cork into Reidar's personal bottle of Langhe Nebbiolo. But no murderer is flawless. In her arrogance, Margrete spoke openly about the poisoned wine during her police interrogation, a detail the investigators had kept strictly secret. That linguistic slip became her downfall. Reidar Moen finally gets peace, and thanks to your sharp eye for detail and logic, Margrete Hagen will exchange book signings for a long prison sentence.\n\nThank you for outstanding effort!"
            }
        },
        {
            id: "oslo",
            onlyEn: true,
            name: "The Oslo Mystery",
            intro: "The year is 1906. A young maid named Clara has vanished from the Royal Palace. Officially, she ran away to America with a lover. But a suitcase found drifting in the harbor tells a different story. Inside lies Clara's diary. She carried a secret that could topple the monarchy. You are the only one who can retrace her steps, crack the codes, and reveal what happened to the young girl.",
            tasks: [
                {
                    question: "Your first task.\n\nClara wrote in her diary the night before she disappeared. She described the place where she was told to wait. Find that place.\n\nWhat is the name of the monument where Clara waited?\n\nOpen envelope 1.",
                    answer: ["The Mother", "Mother", "Moren"],
                    hint: "The statue depicts a kneeling, naked woman facing the water. It is located near the modern harbor and the Munch Museum.",
                    audio: { src: "audio/oslo/clara-diary.mp3", ambient: "audio/oslo/writing-ambience.mp3" },
                    reward: { image: "img/oslo/hakone-coffee.jpg", download: "Hakone-Coffee-Oslo-Mystery.jpg", alt: "Oslo Mystery voucher: 10% discount at Hakone Coffee. Show this at the counter when ordering." }
                },
                {
                    question: "You are standing where Clara waited. She never made it further.\n\nA soldier wrote a letter he never intended anyone to find. It was discovered among a dead captain's belongings in 1907, and buried without investigation.\n\nRead it carefully. It tells you where Clara was taken, and where she was buried. Find that place. What animal is on the object?\n\nOpen envelope 2.",
                    answer: ["elephant", "elefant"],
                    hint: "There's an animal on the cannon.",
                    audio: { src: "audio/oslo/soldier-letter.mp3", ambient: "audio/oslo/fortress-ambience.mp3" },
                    reward: { image: "img/oslo/brim-explorer.jpg", download: "Brim-Explorer-Oslo-Mystery.jpg", alt: "Promotion code OSLOMYSTERY: discount on a silent fjord cruise with Brim Explorer (brimexplorer.com)" }
                },
                {
                    question: "You can now open the third envelope and see Clara's destiny. What can you see?",
                    answer: ["cranium", "head", "skull", "a cranium", "a head", "a skull"],
                    hint: "Try to look through the picture, behind it, to find the object.",
                    reward: { image: "img/oslo/via-village.jpg", download: "Via-Village-Oslo-Mystery.jpg", alt: "10% discount at VIA Village Foodcourt. Discount code: Via Oslo Mystery" }
                },
                {
                    question: "You must find out who ordered Clara's death. Read the letter signed 'Rex' and the poem about a statue.\n\nWhen your group has agreed on a name, enter it here.\n\nOpen envelope 4.",
                    answer: ["King Haakon VII", "Haakon VII", "King Haakon", "Haakon 7", "Haakon", "Kong Haakon VII", "Kong Haakon", "Kong Haakon 7", "Håkon VII", "Kong Håkon VII", "Håkon", "Håkon 7", "Kong Håkon"],
                    hint: "The poem tells you to walk up the boulevard and read the name upon the pedestal of the king. The document states he represents 'Rex'. He is not in the park, but just beside it looking at the fortress.",
                    audio: { src: "audio/oslo/rex-letter.mp3", ambient: "audio/oslo/harbor-ambience.mp3" },
                    reward: { image: "img/oslo/nasjonalmuseet-kafe.jpg", download: "Nasjonalmuseet-Kafe-Oslo-Mystery.jpg", alt: "Oslo Mystery voucher: 10% discount for food at the National Museum's own café (Nasjonalmuseet kafé)." }
                }
            ],
            finalMessage: "Congratulations! You have solved The Oslo Mystery. You retraced Clara's steps from the monument at the harbor to her unmarked grave at Skarpenord Bastion. By reading the intercepted telegrams and secret letters, you deduced that 'Rex' ordered her removed to protect the Crown. The bronze statue of King Haakon VII stands as a reminder of the one who sealed her fate. Justice has finally been brought to light!"
        },
        {
            id: "are",
            name: "Mysteriet på Fengselshotellet",
            intro: "Natt til 15. november 1986 ble Terje Bakken funnet hengende i cellen sin på Arendal fengsel.\n\nPolitiet konkluderte raskt med selvmord. Saken ble lukket.\n\nMen ikke alle er overbeviste.\n\nDere er innleid for å finne sannheten. Rommet og alle dokumentene er til deres disposisjon.\n\nKlokken tikker.",
            tasks: [
                {
                    question: "Åpne konvolutt 1.\n\nLes gjennom alle dokumentene. Det er noen som lyver i avhøret sitt, hvem?",
                    audio: { src: "audio/are/arnesen-telefon-v5.mp3", label: "Spill av lydopptaket", divider: "Lydopptak: Knut Arnesen" },
                    answer: ["Nygård", "Sissel Nygård", "SisselNygård", "Sissel",
                             "Moen", "Harald Moen", "HaraldMoen", "Harald",
                             "begge", "begge to", "begge lyver",
                             "Nygård og Moen", "Moen og Nygård", "NygårdogMoen", "MoenogNygård",
                             "Nygård og Moen lyver", "Moen og Nygård lyver",
                             "Sissel Nygård og Harald Moen", "Harald Moen og Sissel Nygård",
                             "SisselNygård og HaraldMoen", "HaraldMoen og SisselNygård",
                             "Sissel Nygård og HaraldMoen", "HaraldMoen og Sissel Nygård",
                             "Sissel og Moen", "Moen og Sissel",
                             "Harald og Nygård", "Nygård og Harald",
                             "Nygård, Moen", "Moen, Nygård",
                             "Sissel, Harald", "Harald, Sissel",
                             "Nygård / Moen", "Moen / Nygård",
                             "Nygård & Moen", "Moen & Nygård",
                             "Sissel og Harald", "Harald og Sissel"],
                    hint: "Les nyhetsbrevet fra fengselsadministrasjonen nøye. Sammenlign med alibi-forklaringene.",
                    followUp: {
                        question: "Hva løy de om?",
                        answer: ["vaskeriet", "vaskeri", "vask",
                                 "at de var på vaskeriet", "vaskeriet var stengt", "vaskeriet stengt",
                                 "vaskeri stengt", "stengt vaskeriet",
                                 "vaskeriet var stengt mandag", "vaskeriet stengt mandag",
                                 "vaskeriet var stengt den mandagen",
                                 "de var ikke på vaskeriet", "ikke på vaskeriet",
                                 "vasket ikke", "de vasket ikke",
                                 "vasking av klær", "vaske klær", "klesvask", "klesvasken",
                                 "klesvask stengt", "klesvasken var stengt",
                                 "vasking av klær stengt", "vasket klær", "klesvask var stengt"],
                        hint: "Nyhetsbrevet for uke 46 inneholder viktig informasjon om vaskeriet."
                    }
                },
                {
                    question: "Var Terje Bakkens død et selvmord?",
                    answer: ["nei", "no", "nope", "nein", "nah", "neida", "nei da",
                             "nei det var ikke selvmord", "nei, det var ikke selvmord",
                             "nei absolutt ikke", "nei, absolutt ikke",
                             "ikke selvmord", "det var ikke selvmord",
                             "drap", "mord", "nei det var drap", "nei det var mord",
                             "det var drap", "det var mord",
                             "han ble drept", "han ble myrdet",
                             "aldri", "absolutt ikke", "overhodet ikke"],
                    hint: "Se på inventarlisten i åstedsrapporten og tenk på festepunktets høyde.",
                    followUp: {
                        question: "Hva avslørte at det ikke kunne være selvmord?",
                        answer: ["stol", "krakk", "stige",
                                 "ingen stol", "ingenstol", "mangler stol", "manglerstol",
                                 "ingen krakk", "ingenkrakk", "ikke stol", "ikkestol",
                                 "ikke krakk", "ikkekrakk",
                                 "ingenting å stå på", "ingentingåståpå",
                                 "intet å stå på", "intetåståpå",
                                 "ikke noe å stå på", "ingenting å stå",
                                 "ingen ting å stå på", "ingenting å stå med", "ingenting å stå opp på",
                                 "for høyt", "forhøyt", "høyden", "for høy",
                                 "for lav", "for kort", "for lavt",
                                 "han var for lav", "bakken var for lav", "Bakken var for lav",
                                 "han var for kort", "bakken var for kort", "Bakken var for kort",
                                 "han var for liten", "bakken var for liten", "Bakken var for liten",
                                 "var for lav", "er for lav", "han er for lav",
                                 "var for kort", "er for kort", "han er for kort",
                                 "lav", "liten", "kort",
                                 "ikke høy nok", "ikke lang nok", "ikke høy nokk",
                                 "for lav til å nå opp", "for kort til å nå opp",
                                 "for lav til å nå dit", "for kort til å nå dit",
                                 "for lav for å nå opp", "Bakken for lav",
                                 "nådde ikke opp", "nåddeikkeop", "nådde ikke",
                                 "rekker ikke opp", "rekker ikke",
                                 "272", "283", "festepunktet", "festepunktet for høyt"],
                        answerContains: ["forlav", "forlavt", "forkort", "forliten",
                                 "høynok", "hoynok", "nåddeikke", "naddeikke",
                                 "rakkikke", "rekkerikke", "ikkenå", "ikkena", "ikkeopp",
                                 "ingenstol", "ingenkrakk", "ingenstige", "manglerstol",
                                 "ingentingåstå", "intetåstå", "ikkenoeåstå", "ingentingå",
                                 "forhøyt", "forhøy", "festepunkt", "283", "272"],
                        hint: "Festepunktet er 283 cm over gulvet. Hva ville Bakken trenge for å nå dit opp?"
                    }
                },
                {
                    type: "serial-murder",
                    question: "Åpne konvolutt 2.\n\nDette er ikke første gang.\n\nI arkivene ligger det fem saker fra norske fengsler, alle lukket som selvmord. Men mønsteret peker mot noe langt mørkere: noen av dødsfallene er trolig drap, begått av samme hånd.\n\nGå gjennom saksmappene. Finn drapene, og beskriv hva som avslørte hvert av dem.",
                    cases: [
                        { id: "akershus", label: "Akershus: Mikkelsen (1981)", isMurder: true,
                          clue: ["blod", "hender", "hendene", "fingre", "fingrene", "ingen andre steder", "ikke på hendene", "bare på kniven"],
                          hint: "Se nøye på hvor blodet satt. Er det et sted det burde vært, men ikke er?" },
                        { id: "hordaland", label: "Hordaland: Solberg (1983)", isMurder: true,
                          clue: ["hånd", "hånden", "venstre", "høyre"],
                          hint: "Sammenlign hvilken hånd han brukte til daglig med håndleddet som ble kuttet." },
                        { id: "hedmark",  label: "Hedmark: Antonsen (1985)",  isMurder: true,
                          clue: ["ligatur", "merke", "merker", "to merker", "to ligatursmerker", "dobbelt"],
                          hint: "Tell merkene på halsen. Hvor mange ville én henging etterlatt?" },
                        { id: "ostfold",  label: "Østfold: Stensrud (1979)",  isMurder: false,
                          hint: "Her ville jeg brukt tiden min på en av de andre sakene." },
                        { id: "rogaland", label: "Rogaland: Lie (1984)",      isMurder: false,
                          hint: "Her ville jeg brukt tiden min på en av de andre sakene." }
                    ],
                    answer: ["Mikkelsen, Solberg og Antonsen"]
                },
                {
                    question: "Vitnet i nabocellen hørte en setning gjennom veggen den natten. Lavt, nesten hvisket. Han skrev den ned og gjemte lappen.\n\nLappen er fortsatt her et sted.\n\nFinn den. Hva er den fullstendige setningen?",
                    answer: ["Dette er for datteren min",
                             "dette er til datteren min",
                             "dette er til dattera mi",
                             "det er for datteren min",
                             "dette er for dattera mi",
                             "dette er for dattera min",
                             "dette er for min datter",
                             "for datteren min"],
                    hint: "Se deg godt rundt i cellen."
                },
                {
                    question: "Åpne konvolutt 3.\n\nDere vet nå at Bakken ble drept. Dere vet at det har skjedd før, tre ganger.\n\nGå gjennom dokumentene i konvolutten.\n\nHvem drepte Terje Bakken?",
                    answer: ["Knut Arnesen", "Arnesen", "Knut",
                             "legen", "lege Arnesen", "lege Knut Arnesen",
                             "dr Arnesen", "dr. Arnesen", "Dr. Knut Arnesen", "doktor Arnesen"],
                    hint: "Avisartikkelen er datert 14. april 1981. Faren var nøyaktig 51 år gammel den dagen. Sjekk fødselsdatoene til de mistenkte. Matematikken eliminerer alle unntatt én.",
                    followUp: {
                        question: "Hva var motivet?",
                        answer: ["Linn", "datteren", "hevn", "Linn Arnesen", "dattera",
                                 "for datteren", "for linn", "linns død", "linn arnesen",
                                 "hevn for linn", "hevn for datteren", "hevn for dattera",
                                 "datteren linn", "dattera linn",
                                 "hevne linn", "hevne datteren", "hevne dattera",
                                 "for dattera", "for datteren sin", "for dattera si",
                                 "datteren hans", "dattera hans",
                                 "linn sin død", "linns skjebne", "datterens død",
                                 "hevn for datteren sin", "hevne sin datter", "for sin datter",
                                 "linns bortgang", "misbruk av linn", "hevne linn arnesen"],
                        hint: "Se på brevet signert L.A. og avisartikkelen fra Fredrikstad Blad."
                    }
                }
            ],
            finalMessage: "Dere har løst det.\n\nTerje Bakken ble drept av lege Knut Arnesen. Arnesen hadde reist fra fengsel til fengsel i årevis og tatt loven i egne hender. Motivet var hevn for datteren Linn, som fikk livet sitt ødelagt av overgripere som Bakken.\n\nArnesen sørget for at de aldri kom ut. Fire mord. Fire fengsler. Ett navn.\n\nSakene ble aldri løst av politiet. Men dere så det ingen andre klarte å se."
        },
        {
            id: "leangkollen",
            name: "Mysteriet på Leangkollen",
            intro: "Natt til 14. november 1956 forvandles et eierskifte på Leangkollen til to dødsfall: den nye eieren ligger kvalt i spisesalen, revisoren hans ligger knust på bakken under vinduet til rom 202. Politiet har allerede felt sin dom. Drap og selvmord, og saken lukkes før kvelden er omme.\n\nMen det skjuler seg detaljer som rett og slett ikke stemmer, og noen har gått langt for å få sannheten til å forsvinne. Dere er hyret inn for å granske mappen én siste gang før den arkiveres for godt. Klokken tikker, og rettferdigheten hviler på dere.",
            tasks: [
                {
                    question: "Åpne konvolutt 1 og gå nøye gjennom dokumentene.\n\nPolitiet har allerede skrevet konklusjonen: revisor Berge kvalte eieren, låste seg inne på rom 202 og kastet seg ut av vinduet. Saken arkiveres i kveld, med mindre dere finner noe de overså.\n\nVar dette egentlig et selvmord?",
                    answer: ["nei", "no", "nope", "nei det var det ikke", "nei det var ikke selvmord",
                             "nei det var ikke et selvmord", "det var ikke selvmord", "ikke selvmord",
                             "absolutt ikke", "nei absolutt ikke", "neida", "nei da",
                             "det var drap", "det var et drap", "drap", "mord",
                             "han ble drept", "han ble myrdet", "nei det var drap", "nei det var mord"],
                    answerContains: ["nei", "ikke selvmord", "ikke et selvmord", "ble drept", "ble myrdet", "var drap"],
                    answerHint: "Svar med ett ord: ja eller nei.",
                    hint: "Se nøye på politiets eget fotografi av rom 202. Er det noe på det bildet som umulig kan stemme med at en mann nettopp hoppet ut derfra?",
                    explanation: "Et selvmord krever at revisor Berge hoppet ut av vinduet og deretter haspet det igjen bak seg, noe som er fysisk umulig fra utsiden.",
                    followUp: {
                        question: "Hva i bevismaterialet beviser at Berge ikke hoppet selv?",
                        answer: ["vinduet", "vinduet var lukket", "vinduet var stengt", "vinduet var lukket og haspen var på",
                                 "haspen var på", "vindushaspen var på", "vindushaspen", "haspen", "vinduet var haspet",
                                 "vinduet var haspet igjen", "vinduet var lukket fra innsiden", "vinduet var låst",
                                 "vinduene var lukket", "lukkede vinduer", "vinduene lukket", "et lukket vindu",
                                 "han kunne ikke ha hoppet", "han kunne ikke hoppe", "han kunne ikke hoppet ut",
                                 "man kan ikke haspe vinduet utenfra", "lukket vindu", "stengt vindu",
                                 "ermet var revet", "jakkeermet var revet opp", "ermet hans var revet opp",
                                 "han ble dyttet", "han ble dyttet ut", "han ble skjøvet ut", "han ble skjøvet",
                                 "han ble grepet", "rommet ble låst utenfra", "døren ble låst utenfra", "låst utenfra",
                                 "universalnøkkelen forsvant", "nøkkelen forsvant", "nøkkelen var borte"],
                        answerContains: ["haspe", "vinduet var lukket", "vinduet lukket", "lukket vindu",
                                         "lukkede vinduer", "vinduene var lukket", "vinduene lukket",
                                         "vinduet var stengt", "stengt vindu", "vinduet var låst", "ermet",
                                         "revet opp", "ble dyttet", "ble skjøvet", "ble grepet", "låst utenfra",
                                         "nøkkelen forsvant", "nøkkelen var borte"],
                        hint: "Studer vinduet på fotografiet av rom 202. Les deretter hva obduksjonsrapporten sier om jakken til Berge.",
                        explanation: "Vinduet var lukket og haspet fra innsiden da rommet ble åpnet. Ingen kan haspe et vindu fra utsiden etter å ha hoppet ut, og det revne jakkeermet tyder på at Berge ble grepet og dyttet, ikke at han hoppet av seg selv."
                    }
                },
                {
                    question: "Åpne konvolutt 2.\n\nFire ansatte ble avhørt morgenen etter dødsfallene. Alle sier at de holdt seg for seg selv den natten.\n\nMinst to av forklaringene holder ikke.\n\nHvem løy i avhøret sitt?",
                    answer: ["Margit Holm og Erling Nord", "Erling Nord og Margit Holm",
                             "Margit og Erling", "Erling og Margit", "Holm og Nord", "Nord og Holm",
                             "Margit Holm, Erling Nord", "Erling Nord, Margit Holm", "Margit, Erling", "Erling, Margit",
                             "Holm, Nord", "Nord, Holm", "Margit Holm & Erling Nord", "Erling Nord & Margit Holm",
                             "Margit Holm / Erling Nord", "Erling Nord / Margit Holm",
                             "Margit/Erling", "Erling/Margit", "Margit Holm/Erling Nord", "Erling Nord/Margit Holm",
                             "Margit+Erling", "Erling+Margit", "Margit & Erling", "Erling & Margit",
                             "Margit Holm Erling Nord", "Erling Nord Margit Holm", "Margit Erling", "Erling Margit",
                             "Margit Holm og Erling", "Erling og Margit Holm", "Margit og Erling Nord", "Erling Nord og Margit",
                             "Holm og Erling", "Nord og Margit", "Margit og Nord", "Erling og Holm",
                             "fru Holm og herr Nord", "herr Nord og fru Holm",
                             "begge", "begge to", "begge lyver", "begge løy", "de begge", "de to", "de to ansatte",
                             "begge deler", "de lyver begge", "begge sammen",
                             "resepsjonisten og hovmesteren", "hovmesteren og resepsjonisten",
                             "resepsjonisten og hovmester", "hovmester og resepsjonist",
                             "Margit Holm og hovmesteren", "hovmesteren og Margit Holm",
                             "Erling Nord og resepsjonisten", "resepsjonisten og Erling Nord",
                             "Margit og hovmesteren", "hovmesteren og Margit",
                             "Erling og resepsjonisten", "resepsjonisten og Erling"],
                    answerContains: ["margit erling", "holm nord", "margit nord", "holm erling",
                                     "margit hovmester", "margit hovmesteren", "holm hovmesteren",
                                     "erling resepsjonist", "erling resepsjonisten", "nord resepsjonisten",
                                     "resepsjonist hovmester", "resepsjonisten hovmesteren",
                                     "margit og erling", "erling og margit", "margit holm og erling", "erling nord og margit",
                                     "margit holm og erling nord", "erling nord og margit holm", "holm og nord", "nord og holm",
                                     "begge", "resepsjonisten og hovmester", "hovmester og resepsjonist"],
                    answerHint: "Skriv navnene på begge to, atskilt med «og».",
                    hint: "Berge koblet noe til interntelefonen den kvelden. Les notatboken hans, og tenk over hva et slikt opptak ville avslørt om hvem som snakket sammen i natt.",
                    explanation: "Berge hadde tyvkoblet en spolebåndopptaker på linjen mellom kontoret og resepsjonen. Opptaket viser at Margit Holm og Erling Nord hadde kontakt klokken 23:41, stikk i strid med det begge forklarte i avhør.",
                    followUp: {
                        question: "De holdt seg til samme historie for å dekke over noe. Hva løy de om?",
                        answer: ["de hadde kontakt", "at de hadde kontakt", "kontakt", "de hadde kontakt med hverandre",
                                 "de ringte", "at de ringte", "erling ringte", "erling ringte margit", "telefonsamtalen",
                                 "samtalen", "nøkkelen", "universalnøkkelen", "om nøkkelen", "at nøkkelen var borte",
                                 "de løy om nøkkelen", "de snakket sammen", "at de snakket sammen", "telefonen",
                                 "de forlot posten sin", "at de forlot pulten"],
                        answerContains: ["kontakt", "ringte", "samtale", "telefon", "nøkkel", "snakket sammen",
                                         "snakket med hverandre", "forlot pulten", "forlot posten", "forlot kontoret"],
                        hint: "Begge fikk det samme spørsmålet i avhør: hadde de hatt kontakt med noen av de andre ansatte den natten? Se på hva de svarte, og på hva båndet i hussentralen ville fanget opp.",
                        explanation: "De løy om at de hadde kontakt med hverandre. Begge forklarte at de holdt seg for seg selv hele natten, men opptaket fra hussentralen viser at de snakket sammen klokken 23:41."
                    }
                },
                {
                    question: "Åpne konvolutt 3.\n\nHvem drepte både eieren og revisoren?",
                    answer: ["Gustav Tangen", "Tangen", "Gustav", "kjøkkensjefen", "kjøkkensjef Tangen",
                             "Gustav Tangen kjøkkensjefen", "kokken", "kokken Tangen", "Gustav Tangen kokken",
                             "det var Gustav Tangen", "det var Tangen"],
                    answerContains: ["tangen", "gustav", "kjøkkensjef", "kokken"],
                    answerHint: "Skriv for- og/eller etternavnet til gjerningspersonen.",
                    hint: "Legg alle de håndskrevne dokumentene i mappen ved siden av hverandre. To av dem er skrevet av samme hånd. Hvem av de fire har jobben med å skrive det ene av dem?",
                    explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet er identisk med håndskriften i det forfalskede selvmordsbrevet. Revisor Berge var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne kjøkkensjef Tangen ikke leve med.",
                    followUp: {
                        question: "Hvordan skjønte dere at han var morderen?",
                        answer: ["håndskriften", "handskriften", "håndskrift", "handskrift", "håndskriften hans",
                                 "håndskriften på brevet", "håndskriften på selvmordsbrevet", "skriften", "skriften hans",
                                 "han skrev selvmordsbrevet", "han forfalsket brevet", "han skrev brevet",
                                 "håndskriften matcher", "samme håndskrift", "håndskriften er lik",
                                 "håndskriften på kjøkkenseddelen", "samme hånd"],
                        answerContains: ["håndskrift", "handskrift", "skriften", "samme skrift", "skrev brevet",
                                         "skrev selvmordsbrevet", "forfalsket brevet", "skrev avskjedsbrevet",
                                         "samme hånd", "hånden hans"],
                        hint: "Sammenlign avskjedsbrevet fra rom 202 med bestillingsseddelen fra kjøkkenet, bokstav for bokstav.",
                        explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet matcher håndskriften i det forfalskede selvmordsbrevet, bokstav for bokstav."
                    }
                }
            ],
            finalMessage: "Dere klarte det dere ble hyret inn for.\n\nDet var aldri et selvmord. Vinduet i rom 202 var haspet igjen fra innsiden. Revisor Berge kunne umulig ha hoppet ut og låst vinduet etter seg. Han ble dyttet, og rommet ble låst utenfra med universalnøkkelen for å iscenesette et selvmord.\n\nMargit Holm og Erling Nord løy begge, men ikke fordi de drepte noen. De fryktet å bli mistenkt etter Erlings trusler mot eieren. Den virkelige morderen var kjøkkensjef Gustav Tangen. Revisoren var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne Tangen ikke leve med.\n\nDet som felte ham, var hans egen hånd: håndskriften i det forfalskede selvmordsbrevet var den samme som på bestillingsseddelen fra kjøkkenet. Politiet ville arkivert saken i kveld. Dere så det ingen andre så."
        },
        {
            id: "sundvolden",
            name: "Mysteriet på Sundvolden",
            intro: "Natt til 14. november 1956 forvandles et eierskifte på Sundvolden til to dødsfall: den nye eieren ligger kvalt i spisesalen, revisoren hans ligger knust på bakken under vinduet til rom 402. Politiet har allerede felt sin dom. Drap og selvmord, og saken lukkes før kvelden er omme.\n\nMen det skjuler seg detaljer som rett og slett ikke stemmer, og noen har gått langt for å få sannheten til å forsvinne. Dere er hyret inn for å granske mappen én siste gang før den arkiveres for godt. Klokken tikker, og rettferdigheten hviler på dere.",
            tasks: [
                {
                    question: "Åpne konvolutt 1 og gå nøye gjennom dokumentene.\n\nPolitiet har allerede skrevet konklusjonen: revisor Berge kvalte eieren, låste seg inne på rom 402 og kastet seg ut av vinduet. Saken arkiveres i kveld, med mindre dere finner noe de overså.\n\nVar dette egentlig et selvmord?",
                    answer: ["nei", "no", "nope", "nei det var det ikke", "nei det var ikke selvmord",
                             "nei det var ikke et selvmord", "det var ikke selvmord", "ikke selvmord",
                             "absolutt ikke", "nei absolutt ikke", "neida", "nei da",
                             "det var drap", "det var et drap", "drap", "mord",
                             "han ble drept", "han ble myrdet", "nei det var drap", "nei det var mord"],
                    answerContains: ["nei", "ikke selvmord", "ikke et selvmord", "ble drept", "ble myrdet", "var drap"],
                    answerHint: "Svar med ett ord: ja eller nei.",
                    hint: "Se nøye på politiets eget fotografi av rom 402. Er det noe på det bildet som umulig kan stemme med at en mann nettopp hoppet ut derfra?",
                    explanation: "Et selvmord krever at revisor Berge hoppet ut av vinduet og deretter haspet det igjen bak seg, noe som er fysisk umulig fra utsiden.",
                    followUp: {
                        question: "Hva i bevismaterialet beviser at Berge ikke hoppet selv?",
                        answer: ["vinduet", "vinduet var lukket", "vinduet var stengt", "vinduet var lukket og haspen var på",
                                 "haspen var på", "vindushaspen var på", "vindushaspen", "haspen", "vinduet var haspet",
                                 "vinduet var haspet igjen", "vinduet var lukket fra innsiden", "vinduet var låst",
                                 "vinduene var lukket", "lukkede vinduer", "vinduene lukket", "et lukket vindu",
                                 "han kunne ikke ha hoppet", "han kunne ikke hoppe", "han kunne ikke hoppet ut",
                                 "man kan ikke haspe vinduet utenfra", "lukket vindu", "stengt vindu",
                                 "ermet var revet", "jakkeermet var revet opp", "ermet hans var revet opp",
                                 "han ble dyttet", "han ble dyttet ut", "han ble skjøvet ut", "han ble skjøvet",
                                 "han ble grepet", "rommet ble låst utenfra", "døren ble låst utenfra", "låst utenfra",
                                 "universalnøkkelen forsvant", "nøkkelen forsvant", "nøkkelen var borte"],
                        answerContains: ["haspe", "vinduet var lukket", "vinduet lukket", "lukket vindu",
                                         "lukkede vinduer", "vinduene var lukket", "vinduene lukket",
                                         "vinduet var stengt", "stengt vindu", "vinduet var låst", "ermet",
                                         "revet opp", "ble dyttet", "ble skjøvet", "ble grepet", "låst utenfra",
                                         "nøkkelen forsvant", "nøkkelen var borte"],
                        hint: "Studer vinduet på fotografiet av rom 402. Les deretter hva obduksjonsrapporten sier om jakken til Berge.",
                        explanation: "Vinduet var lukket og haspet fra innsiden da rommet ble åpnet. Ingen kan haspe et vindu fra utsiden etter å ha hoppet ut, og det revne jakkeermet tyder på at Berge ble grepet og dyttet, ikke at han hoppet av seg selv."
                    }
                },
                {
                    question: "Åpne konvolutt 2.\n\nFire ansatte ble avhørt morgenen etter dødsfallene. Alle sier at de holdt seg for seg selv den natten.\n\nMinst to av forklaringene holder ikke.\n\nHvem løy i avhøret sitt?",
                    answer: ["Margit Holm og Erling Nord", "Erling Nord og Margit Holm",
                             "Margit og Erling", "Erling og Margit", "Holm og Nord", "Nord og Holm",
                             "Margit Holm, Erling Nord", "Erling Nord, Margit Holm", "Margit, Erling", "Erling, Margit",
                             "Holm, Nord", "Nord, Holm", "Margit Holm & Erling Nord", "Erling Nord & Margit Holm",
                             "Margit Holm / Erling Nord", "Erling Nord / Margit Holm",
                             "Margit/Erling", "Erling/Margit", "Margit Holm/Erling Nord", "Erling Nord/Margit Holm",
                             "Margit+Erling", "Erling+Margit", "Margit & Erling", "Erling & Margit",
                             "Margit Holm Erling Nord", "Erling Nord Margit Holm", "Margit Erling", "Erling Margit",
                             "Margit Holm og Erling", "Erling og Margit Holm", "Margit og Erling Nord", "Erling Nord og Margit",
                             "Holm og Erling", "Nord og Margit", "Margit og Nord", "Erling og Holm",
                             "fru Holm og herr Nord", "herr Nord og fru Holm",
                             "begge", "begge to", "begge lyver", "begge løy", "de begge", "de to", "de to ansatte",
                             "begge deler", "de lyver begge", "begge sammen",
                             "resepsjonisten og hovmesteren", "hovmesteren og resepsjonisten",
                             "resepsjonisten og hovmester", "hovmester og resepsjonist",
                             "Margit Holm og hovmesteren", "hovmesteren og Margit Holm",
                             "Erling Nord og resepsjonisten", "resepsjonisten og Erling Nord",
                             "Margit og hovmesteren", "hovmesteren og Margit",
                             "Erling og resepsjonisten", "resepsjonisten og Erling"],
                    answerContains: ["margit erling", "holm nord", "margit nord", "holm erling",
                                     "margit hovmester", "margit hovmesteren", "holm hovmesteren",
                                     "erling resepsjonist", "erling resepsjonisten", "nord resepsjonisten",
                                     "resepsjonist hovmester", "resepsjonisten hovmesteren",
                                     "margit og erling", "erling og margit", "margit holm og erling", "erling nord og margit",
                                     "margit holm og erling nord", "erling nord og margit holm", "holm og nord", "nord og holm",
                                     "begge", "resepsjonisten og hovmester", "hovmester og resepsjonist"],
                    answerHint: "Skriv navnene på begge to, atskilt med «og».",
                    hint: "Berge koblet noe til interntelefonen den kvelden. Les notatboken hans, og tenk over hva et slikt opptak ville avslørt om hvem som snakket sammen i natt.",
                    explanation: "Berge hadde tyvkoblet en spolebåndopptaker på linjen mellom kontoret og resepsjonen. Opptaket viser at Margit Holm og Erling Nord hadde kontakt klokken 23:41, stikk i strid med det begge forklarte i avhør.",
                    followUp: {
                        question: "De holdt seg til samme historie for å dekke over noe. Hva løy de om?",
                        answer: ["de hadde kontakt", "at de hadde kontakt", "kontakt", "de hadde kontakt med hverandre",
                                 "de ringte", "at de ringte", "erling ringte", "erling ringte margit", "telefonsamtalen",
                                 "samtalen", "nøkkelen", "universalnøkkelen", "om nøkkelen", "at nøkkelen var borte",
                                 "de løy om nøkkelen", "de snakket sammen", "at de snakket sammen", "telefonen",
                                 "de forlot posten sin", "at de forlot pulten"],
                        answerContains: ["kontakt", "ringte", "samtale", "telefon", "nøkkel", "snakket sammen",
                                         "snakket med hverandre", "forlot pulten", "forlot posten", "forlot kontoret"],
                        hint: "Begge fikk det samme spørsmålet i avhør: hadde de hatt kontakt med noen av de andre ansatte den natten? Se på hva de svarte, og på hva båndet i hussentralen ville fanget opp.",
                        explanation: "De løy om at de hadde kontakt med hverandre. Begge forklarte at de holdt seg for seg selv hele natten, men opptaket fra hussentralen viser at de snakket sammen klokken 23:41."
                    }
                },
                {
                    question: "Åpne konvolutt 3.\n\nHvem drepte både eieren og revisoren?",
                    answer: ["Gustav Tangen", "Tangen", "Gustav", "kjøkkensjefen", "kjøkkensjef Tangen",
                             "Gustav Tangen kjøkkensjefen", "kokken", "kokken Tangen", "Gustav Tangen kokken",
                             "det var Gustav Tangen", "det var Tangen"],
                    answerContains: ["tangen", "gustav", "kjøkkensjef", "kokken"],
                    answerHint: "Skriv for- og/eller etternavnet til gjerningspersonen.",
                    hint: "Legg alle de håndskrevne dokumentene i mappen ved siden av hverandre. To av dem er skrevet av samme hånd. Hvem av de fire har jobben med å skrive det ene av dem?",
                    explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet er identisk med håndskriften i det forfalskede selvmordsbrevet. Revisor Berge var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne kjøkkensjef Tangen ikke leve med.",
                    followUp: {
                        question: "Hvordan skjønte dere at han var morderen?",
                        answer: ["håndskriften", "handskriften", "håndskrift", "handskrift", "håndskriften hans",
                                 "håndskriften på brevet", "håndskriften på selvmordsbrevet", "skriften", "skriften hans",
                                 "han skrev selvmordsbrevet", "han forfalsket brevet", "han skrev brevet",
                                 "håndskriften matcher", "samme håndskrift", "håndskriften er lik",
                                 "håndskriften på kjøkkenseddelen", "samme hånd"],
                        answerContains: ["håndskrift", "handskrift", "skriften", "samme skrift", "skrev brevet",
                                         "skrev selvmordsbrevet", "forfalsket brevet", "skrev avskjedsbrevet",
                                         "samme hånd", "hånden hans"],
                        hint: "Sammenlign avskjedsbrevet fra rom 402 med bestillingsseddelen fra kjøkkenet, bokstav for bokstav.",
                        explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet matcher håndskriften i det forfalskede selvmordsbrevet, bokstav for bokstav."
                    }
                }
            ],
            finalMessage: "Dere klarte det dere ble hyret inn for.\n\nDet var aldri et selvmord. Vinduet i rom 402 var haspet igjen fra innsiden. Revisor Berge kunne umulig ha hoppet ut og låst vinduet etter seg. Han ble dyttet, og rommet ble låst utenfra med universalnøkkelen for å iscenesette et selvmord.\n\nMargit Holm og Erling Nord løy begge, men ikke fordi de drepte noen. De fryktet å bli mistenkt etter Erlings trusler mot eieren. Den virkelige morderen var kjøkkensjef Gustav Tangen. Revisoren var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne Tangen ikke leve med.\n\nDet som felte ham, var hans egen hånd: håndskriften i det forfalskede selvmordsbrevet var den samme som på bestillingsseddelen fra kjøkkenet. Politiet ville arkivert saken i kveld. Dere så det ingen andre så."
        },
        {
            id: "soria-moria",
            name: "Mysteriet på Soria Moria",
            intro: "Natt til 14. november 1956 forvandles et eierskifte på Soria Moria til to dødsfall: den nye eieren ligger kvalt i spisesalen, revisoren hans ligger knust på bakken under vinduet til rom 305. Politiet har allerede felt sin dom. Drap og selvmord, og saken lukkes før kvelden er omme.\n\nMen det skjuler seg detaljer som rett og slett ikke stemmer, og noen har gått langt for å få sannheten til å forsvinne. Dere er hyret inn for å granske mappen én siste gang før den arkiveres for godt. Klokken tikker, og rettferdigheten hviler på dere.",
            tasks: [
                {
                    question: "Åpne konvolutt 1 og gå nøye gjennom dokumentene.\n\nPolitiet har allerede skrevet konklusjonen: revisor Berge kvalte eieren, låste seg inne på rom 305 og kastet seg ut av vinduet. Saken arkiveres i kveld, med mindre dere finner noe de overså.\n\nVar dette egentlig et selvmord?",
                    answer: ["nei", "no", "nope", "nei det var det ikke", "nei det var ikke selvmord",
                             "nei det var ikke et selvmord", "det var ikke selvmord", "ikke selvmord",
                             "absolutt ikke", "nei absolutt ikke", "neida", "nei da",
                             "det var drap", "det var et drap", "drap", "mord",
                             "han ble drept", "han ble myrdet", "nei det var drap", "nei det var mord"],
                    answerContains: ["nei", "ikke selvmord", "ikke et selvmord", "ble drept", "ble myrdet", "var drap"],
                    answerHint: "Svar med ett ord: ja eller nei.",
                    hint: "Se nøye på politiets eget fotografi av rom 305. Er det noe på det bildet som umulig kan stemme med at en mann nettopp hoppet ut derfra?",
                    explanation: "Et selvmord krever at revisor Berge hoppet ut av vinduet og deretter haspet det igjen bak seg, noe som er fysisk umulig fra utsiden.",
                    followUp: {
                        question: "Hva i bevismaterialet beviser at Berge ikke hoppet selv?",
                        answer: ["vinduet", "vinduet var lukket", "vinduet var stengt", "vinduet var lukket og haspen var på",
                                 "haspen var på", "vindushaspen var på", "vindushaspen", "haspen", "vinduet var haspet",
                                 "vinduet var haspet igjen", "vinduet var lukket fra innsiden", "vinduet var låst",
                                 "vinduene var lukket", "lukkede vinduer", "vinduene lukket", "et lukket vindu",
                                 "han kunne ikke ha hoppet", "han kunne ikke hoppe", "han kunne ikke hoppet ut",
                                 "man kan ikke haspe vinduet utenfra", "lukket vindu", "stengt vindu",
                                 "ermet var revet", "jakkeermet var revet opp", "ermet hans var revet opp",
                                 "han ble dyttet", "han ble dyttet ut", "han ble skjøvet ut", "han ble skjøvet",
                                 "han ble grepet", "rommet ble låst utenfra", "døren ble låst utenfra", "låst utenfra",
                                 "universalnøkkelen forsvant", "nøkkelen forsvant", "nøkkelen var borte"],
                        answerContains: ["haspe", "vinduet var lukket", "vinduet lukket", "lukket vindu",
                                         "lukkede vinduer", "vinduene var lukket", "vinduene lukket",
                                         "vinduet var stengt", "stengt vindu", "vinduet var låst", "ermet",
                                         "revet opp", "ble dyttet", "ble skjøvet", "ble grepet", "låst utenfra",
                                         "nøkkelen forsvant", "nøkkelen var borte"],
                        hint: "Studer vinduet på fotografiet av rom 305. Les deretter hva obduksjonsrapporten sier om jakken til Berge.",
                        explanation: "Vinduet var lukket og haspet fra innsiden da rommet ble åpnet. Ingen kan haspe et vindu fra utsiden etter å ha hoppet ut, og det revne jakkeermet tyder på at Berge ble grepet og dyttet, ikke at han hoppet av seg selv."
                    }
                },
                {
                    question: "Åpne konvolutt 2.\n\nFire ansatte ble avhørt morgenen etter dødsfallene. Alle sier at de holdt seg for seg selv den natten.\n\nMinst to av forklaringene holder ikke.\n\nHvem løy i avhøret sitt?",
                    answer: ["Margit Holm og Erling Nord", "Erling Nord og Margit Holm",
                             "Margit og Erling", "Erling og Margit", "Holm og Nord", "Nord og Holm",
                             "Margit Holm, Erling Nord", "Erling Nord, Margit Holm", "Margit, Erling", "Erling, Margit",
                             "Holm, Nord", "Nord, Holm", "Margit Holm & Erling Nord", "Erling Nord & Margit Holm",
                             "Margit Holm / Erling Nord", "Erling Nord / Margit Holm",
                             "Margit/Erling", "Erling/Margit", "Margit Holm/Erling Nord", "Erling Nord/Margit Holm",
                             "Margit+Erling", "Erling+Margit", "Margit & Erling", "Erling & Margit",
                             "Margit Holm Erling Nord", "Erling Nord Margit Holm", "Margit Erling", "Erling Margit",
                             "Margit Holm og Erling", "Erling og Margit Holm", "Margit og Erling Nord", "Erling Nord og Margit",
                             "Holm og Erling", "Nord og Margit", "Margit og Nord", "Erling og Holm",
                             "fru Holm og herr Nord", "herr Nord og fru Holm",
                             "begge", "begge to", "begge lyver", "begge løy", "de begge", "de to", "de to ansatte",
                             "begge deler", "de lyver begge", "begge sammen",
                             "resepsjonisten og hovmesteren", "hovmesteren og resepsjonisten",
                             "resepsjonisten og hovmester", "hovmester og resepsjonist",
                             "Margit Holm og hovmesteren", "hovmesteren og Margit Holm",
                             "Erling Nord og resepsjonisten", "resepsjonisten og Erling Nord",
                             "Margit og hovmesteren", "hovmesteren og Margit",
                             "Erling og resepsjonisten", "resepsjonisten og Erling"],
                    answerContains: ["margit erling", "holm nord", "margit nord", "holm erling",
                                     "margit hovmester", "margit hovmesteren", "holm hovmesteren",
                                     "erling resepsjonist", "erling resepsjonisten", "nord resepsjonisten",
                                     "resepsjonist hovmester", "resepsjonisten hovmesteren",
                                     "margit og erling", "erling og margit", "margit holm og erling", "erling nord og margit",
                                     "margit holm og erling nord", "erling nord og margit holm", "holm og nord", "nord og holm",
                                     "begge", "resepsjonisten og hovmester", "hovmester og resepsjonist"],
                    answerHint: "Skriv navnene på begge to, atskilt med «og».",
                    hint: "Berge koblet noe til interntelefonen den kvelden. Les notatboken hans, og tenk over hva et slikt opptak ville avslørt om hvem som snakket sammen i natt.",
                    explanation: "Berge hadde tyvkoblet en spolebåndopptaker på linjen mellom kontoret og resepsjonen. Opptaket viser at Margit Holm og Erling Nord hadde kontakt klokken 23:41, stikk i strid med det begge forklarte i avhør.",
                    followUp: {
                        question: "De holdt seg til samme historie for å dekke over noe. Hva løy de om?",
                        answer: ["de hadde kontakt", "at de hadde kontakt", "kontakt", "de hadde kontakt med hverandre",
                                 "de ringte", "at de ringte", "erling ringte", "erling ringte margit", "telefonsamtalen",
                                 "samtalen", "nøkkelen", "universalnøkkelen", "om nøkkelen", "at nøkkelen var borte",
                                 "de løy om nøkkelen", "de snakket sammen", "at de snakket sammen", "telefonen",
                                 "de forlot posten sin", "at de forlot pulten"],
                        answerContains: ["kontakt", "ringte", "samtale", "telefon", "nøkkel", "snakket sammen",
                                         "snakket med hverandre", "forlot pulten", "forlot posten", "forlot kontoret"],
                        hint: "Begge fikk det samme spørsmålet i avhør: hadde de hatt kontakt med noen av de andre ansatte den natten? Se på hva de svarte, og på hva båndet i hussentralen ville fanget opp.",
                        explanation: "De løy om at de hadde kontakt med hverandre. Begge forklarte at de holdt seg for seg selv hele natten, men opptaket fra hussentralen viser at de snakket sammen klokken 23:41."
                    }
                },
                {
                    question: "Åpne konvolutt 3.\n\nHvem drepte både eieren og revisoren?",
                    answer: ["Gustav Tangen", "Tangen", "Gustav", "kjøkkensjefen", "kjøkkensjef Tangen",
                             "Gustav Tangen kjøkkensjefen", "kokken", "kokken Tangen", "Gustav Tangen kokken",
                             "det var Gustav Tangen", "det var Tangen"],
                    answerContains: ["tangen", "gustav", "kjøkkensjef", "kokken"],
                    answerHint: "Skriv for- og/eller etternavnet til gjerningspersonen.",
                    hint: "Legg alle de håndskrevne dokumentene i mappen ved siden av hverandre. To av dem er skrevet av samme hånd. Hvem av de fire har jobben med å skrive det ene av dem?",
                    explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet er identisk med håndskriften i det forfalskede selvmordsbrevet. Revisor Berge var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne kjøkkensjef Tangen ikke leve med.",
                    followUp: {
                        question: "Hvordan skjønte dere at han var morderen?",
                        answer: ["håndskriften", "handskriften", "håndskrift", "handskrift", "håndskriften hans",
                                 "håndskriften på brevet", "håndskriften på selvmordsbrevet", "skriften", "skriften hans",
                                 "han skrev selvmordsbrevet", "han forfalsket brevet", "han skrev brevet",
                                 "håndskriften matcher", "samme håndskrift", "håndskriften er lik",
                                 "håndskriften på kjøkkenseddelen", "samme hånd"],
                        answerContains: ["håndskrift", "handskrift", "skriften", "samme skrift", "skrev brevet",
                                         "skrev selvmordsbrevet", "forfalsket brevet", "skrev avskjedsbrevet",
                                         "samme hånd", "hånden hans"],
                        hint: "Sammenlign avskjedsbrevet fra rom 305 med bestillingsseddelen fra kjøkkenet, bokstav for bokstav.",
                        explanation: "Håndskriften på bestillingsseddelen fra kjøkkenet matcher håndskriften i det forfalskede selvmordsbrevet, bokstav for bokstav."
                    }
                }
            ],
            finalMessage: "Dere klarte det dere ble hyret inn for.\n\nDet var aldri et selvmord. Vinduet i rom 305 var haspet igjen fra innsiden. Revisor Berge kunne umulig ha hoppet ut og låst vinduet etter seg. Han ble dyttet, og rommet ble låst utenfra med universalnøkkelen for å iscenesette et selvmord.\n\nMargit Holm og Erling Nord løy begge, men ikke fordi de drepte noen. De fryktet å bli mistenkt etter Erlings trusler mot eieren. Den virkelige morderen var kjøkkensjef Gustav Tangen. Revisoren var i ferd med å avdekke kjøttsvindelen som tappet hotellet for penger, og det kunne Tangen ikke leve med.\n\nDet som felte ham, var hans egen hånd: håndskriften i det forfalskede selvmordsbrevet var den samme som på bestillingsseddelen fra kjøkkenet. Politiet ville arkivert saken i kveld. Dere så det ingen andre så."
        },
        {
            id: "glassburet",
            name: "Mysteriet i Glassburet",
            intro: "Administrerende direktør er funnet livløs i møterommet «Glassburet». Politiet konkluderte raskt med selvmord og lukket saken.\n\nMen familien tror ikke på det, og har hyret dere inn for å gå gjennom bevisene på nytt.\n\nKlokken tikker.",
            tasks: [
                {
                    question: "Åpne konvolutt 1.\n\nPolitiet konkluderte med selvmord. Undersøk de rettsmedisinske funnene nøye. Var dette selvmord, eller ble direktøren myrdet?",
                    answer: ["drap", "myrdet", "mord", "drept", "det var drap", "det var mord", "det var et drap",
                             "det var et mord", "han ble myrdet", "han ble drept", "noen drepte ham",
                             "han ble drept av noen", "det var overlagt drap", "overlagt drap",
                             "ikke selvmord", "det var ikke selvmord", "nei, det var ikke selvmord"],
                    answerContains: ["myrdet", "myrder", "drap", "drept", "drepte", "ikke selvmord", "ikkje selvmord"],
                    rejectContains: ["ikkedrap", "ikkemord", "ikkemyrdet", "ikkedrept", "ingendrap",
                                     "varselvmord", "detvarselvmord", "jadetvarselvmord", "selvpåført", "selvpaaført"],
                    answerHint: "Skriv «myrdet» eller «drap», ikke bare «ja»/«nei».",
                    hint: "Se nøye på bildene av direktøren for å løse denne oppgaven.",
                    explanation: "Direktøren var høyrehendt, men kuttet satt i høyre håndledd, altså i den dominante hånden. Snittet hadde helt rett vinkel, og det fantes ingen overflatiske prøvekutt. I tillegg lå det zopiklon i blodet på et nivå som bare oppstår hvis dosen kom i ham samme kveld, og han hadde en fersk hevelse bak venstre øre. Noen andre holdt kniven.",
                    followUp: {
                        question: "Hva i obduksjonsrapporten utelukker selvmord?",
                        answer: ["høyre hånd", "høyre håndledd", "feil hånd", "dominant hånd", "den dominante hånden",
                                 "han var høyrehendt", "kuttet satt i høyre hånd", "kuttet var i høyre håndledd",
                                 "ingen prøvekutt", "mangler prøvekutt", "rett vinkel", "snittvinkelen",
                                 "alt sammen", "alle tre"],
                        answerContains: ["høyrehånd", "hoyrehand", "høyrehåndledd", "hoyrehandledd", "høyrehendt", "hoyrehendt",
                                         "dominant", "feilhånd", "feilhand", "prøvekutt", "provekutt",
                                         "rettvinkel", "rettevinkel", "snittvinkel", "ingenkutt"],
                        rejectContains: ["ikkedominant", "ikke-dominant", "ikkjedominant", "venstrehånd", "venstrehandledd",
                                         "venstrehåndledd", "venstrehendt"],
                        hint: "Se nøye på bildene av direktøren for å løse denne oppgaven.",
                        explanation: "Selvpåførte kutt sitter normalt i den ikke-dominante hånden, har flere overflatiske prøvekutt, og har en skrå snittvinkel. Her satt kuttet i den dominante høyre hånden, det fantes ingen prøvekutt, og vinkelen var helt rett."
                    }
                },
                {
                    question: "Åpne konvolutt 2.\n\nDet er noen som lyver i avhøret sitt.\n\nHvem?",
                    answer: ["Thomas Berge", "Thomas", "Berge", "salgssjefen", "salgssjef Thomas Berge"],
                    answerContains: ["thomas", "berge", "salgssjef"],
                    hint: "Det er noe i den interne kommunikasjonen i Nordkast som strider mot avhørene.",
                    explanation: "Thomas Berge forklarte at han tok heisen ned kvart over elleve. Vedlikeholdsloggen viser at Heis A stod låst i vedlikeholdsmodus fra 22:30 til 23:45 og ikke kunne brukes av noen. Baren han oppga som alibi var dessuten stengt for oppussing hele uken. Han var fortsatt i bygget: oppkastet på herretoalettet og snorkingen Fredrik Lie hørte etter midnatt peker mot at han sov av seg rusen der.",
                    followUp: {
                        question: "Hva avslører at forklaringen hans ikke kan stemme?",
                        answer: ["heisen", "heis a", "vedlikeholdsloggen", "vedlikeholdslogg",
                                 "heisen var låst", "heisen sto stille", "heisen var ute av drift",
                                 "heisen var i vedlikeholdsmodus", "baren var stengt"],
                        answerContains: ["heis", "vedlikehold", "låst", "last",
                                         "stostille", "stodstille", "barenvarstengt"],
                        hint: "Se på klokkeslettene i den interne kommunikasjonen, og hold dem mot klokkeslettet han oppga.",
                        explanation: "Vedlikeholdsloggen viser at Heis A var låst i vedlikeholdsmodus fra 22:30 til 23:45, og at ingen kunne bruke den i det tidsrommet. Berge hevdet at han tok den samme heisen ned klokken 23:15."
                    }
                },
                {
                    question: "Direktørens telefon ble aldri låst opp. Den er sperret med en firesifret kode, og koden står ingen steder i mappen. Dere har likevel alt dere trenger for å regne den ut.\n\nHva er koden?",
                    answer: ["1972"],
                    codeLock: {
                        code: ["1972"],
                        label: "Direktørens telefon",
                        prompt: "Sperret med firesifret kode. Kriminalteknisk seksjon kom aldri inn.",
                        placeholder: "Kode",
                        lockedNote: "Koden er skrevet ned et sted, men ikke som et tall.",
                        unlockedNote: "Meldinger med Vibeke Holm, fredag 22. mai 2026.",
                        errorText: "Feil kode.",
                        images: [{
                            src: "img/glassburet/telefon-chat.png",
                            alt: "Meldingstråd mellom direktøren og Vibeke Holm fredag 22. mai 2026. Han ber henne møte ham i Glassburet klokken 23:05. Hun svarer klokken 23:52.",
                            caption: "Tråden med Vibeke Holm"
                        }]
                    },
                    hint: "De fleste bruker noe kjent og lett å huske som kode på egen mobil, sjelden noe tilfeldig. Se om noe av det dere allerede vet om direktøren lar seg uttrykke med fire sifre.",
                    explanation: "Koden er direktørens fødselsår. Obduksjonsrapporten viser at han var 54 år og fylte år 14. mars, og dødsfallet ble erklært 23.05.2026. 2026 minus 54 gir fødselsåret 1972."
                },
                {
                    question: "Åpne konvolutt 3.\n\nNå har dere nok info til å finne morderen. Hvem drepte direktøren?",
                    answer: ["Vibeke Holm", "Vibeke", "Holm", "HR-direktøren", "hr direktøren", "HR-direktør Vibeke Holm"],
                    answerContains: ["vibeke", "holm", "hr-direktør", "hrdirektør", "hrdirektor"],
                    hint: "Det er noe rart med avskjedsbrevet.",
                    explanation: "Avskjedsbrevet er ikke skrevet av direktøren. Håndskriften er den samme som i den håndskrevne godkjenningssignaturen til V. Holm nederst på velferdsbudsjettet. Konto 6540 viser tre utbetalinger på til sammen 125 500 kroner til «Teambuilding leverandør AS», en fiktiv leverandør, alle godkjent av V. Holm. Hun skrev brevet selv for å iscenesette et selvmord, og hun drepte ham for å skjule underslaget. Det svarte arket viste seg å være Fredrik Lies egen oppsigelse, skrevet ut samme natt, pinlig, men uten sammenheng med drapet.",
                    followUp: {
                        question: "Hvordan avslørte dere henne?",
                        answer: ["håndskriften", "handskriften", "håndskrift", "skriften", "skriften hennes",
                                 "hun skrev avskjedsbrevet", "hun forfalsket brevet", "hun skrev brevet",
                                 "samme håndskrift", "signaturen", "signaturen hennes",
                                 "signaturen på budsjettet", "godkjenningssignaturen"],
                        answerContains: ["håndskrift", "handskrift", "skriften", "sammeskrift", "skrevbrevet",
                                         "skrevavskjedsbrevet", "forfalsket", "signatur", "underskrift",
                                         "sammehånd", "sammehand", "bokstav"],
                        hint: "Legg avskjedsbrevet ved siden av signaturen nederst på velferdsbudsjettet og sammenlign bokstavformene.",
                        explanation: "Håndskriften i avskjedsbrevet er identisk med V. Holms godkjenningssignatur på velferdsbudsjettet. Direktøren skrev aldri brevet."
                    }
                }
            ],
            finalMessage: "Mysteriet er løst: Gratulerer, etterforskere!\n\nDere har avslørt sannheten bak dødsfallet i Glassburet. Den skyldige er HR-direktør Vibeke Holm. I lengre tid hadde hun underslått midler fra velferdsbudsjettet gjennom en fiktiv leverandør, «Teambuilding leverandør AS». Da direktøren oppdaget underslaget samme kveld og kalte henne til et møte i Glassburet klokken 23:05, konfronterte han henne, og hun drepte ham for å unngå avsløring.\n\nHun iscenesatte selvmord ved å kutte håndleddet hans og skrev et avskjedsbrev i hans navn. Men kuttet satt i hans dominante hånd, uten prøvekutt og med helt rett snittvinkel, og zopiklonet i blodet kunne bare ha kommet i ham samme kveld.\n\nKjernebeviset var håndskriften: avskjedsbrevet er skrevet med samme hånd som godkjenningssignaturen hennes nederst på velferdsbudsjettet. Hun skrev brevet selv.\n\nThomas Berge var sint og full, og løy både om heisen og om baren. Men han sov av seg rusen inne i bygget, og han drepte ingen. Fredrik Lie skjulte hva han egentlig gjorde der midt på natten, men det hadde ingenting med drapet å gjøre. Og GHB-en i blodprøven stammet fra gallamiddagen to døgn tidligere, ikke fra drapskvelden.\n\nTakk for strålende etterforskningsarbeid!"
        },
        {
            id: "sandven",
            name: "Mysteriet på Hotel Sandven",
            intro: "Året er 1897. Sent i august ble konsul Bertel Heggelund funnet død i Sjøhuset, den gamle landhandelen ved bryggen i Norheimsund. Lensmannen har konkludert med innbrudd: et knust vindu, et stanset lommeur og et brev fra Bergen peker mot en ukjent gjerningsmann utenfra.\n\nMen hotelldirektør Nils Sandven er ikke overbevist. I bygda hviskes det allerede at det var han som gjorde det, og han kranglet tross alt høylytt med konsulen samme kveld.\n\nDere er tilkalt for å se forbi det åpenbare. Klokken tikker.",
            tasks: [
                {
                    question: "Åpne konvolutt 1.\n\nLensmannen har konkludert med innbrudd, og mener drapet skjedde klokken 21:32. Men noe i beslagsrapporten stemmer ikke med det. Hva?",
                    answer: ["vinduet", "glasskårene", "glasset utenfor"],
                    answerContains: ["vindu", "glass"],
                    rejectContains: ["ikkevindu", "ikkeglass"],
                    hint: "Les gjenstandslisten en gang til. Hvor havnet glasset, og hva betyr det for et innbrudd?",
                    explanation: "Glasskårene ligger utenfor vinduet. Et innbrudd utenfra ville knust glasset innover, så scenen er iscenesatt. Da kan heller ikke lommeuret som viser 21:32 stoles på."
                },
                {
                    question: "Behold konvolutt 1, dere trenger ingen ny ennå.\n\nAvhørene forteller mer enn de ser ut til. Når ble Heggelund egentlig drept?\n\nSvar med klokkeslett (tt:mm), rundet til nærmeste halvtime.",
                    answer: ["22:30", "22.30", "2230", "halv elleve"],
                    answerContains: ["22:30", "22.30", "2230", "22:15", "22.15", "22:45", "22.45", "halv elleve", "halv 11"],
                    hint: "Se hvem som gikk til rommet sitt sent på kvelden, og hva hun hørte på veien.",
                    explanation: "Marit hørte «et dump» fra Sjøhuset omtrent halv elleve. Synneva så Heggelund i live ca. 21:10, og uret som viser 21:32 er stilt tilbake."
                },
                {
                    question: "Åpne konvolutt 2.\n\nI notesboken skriver konsulen at «Selskapet» skal slippes ut lørdag kveld, og at seks kasser kommer med båten.\n\nHvem eller hva er «Selskapet»?",
                    answer: ["rotter", "rotte", "rottene", "skadedyr"],
                    answerContains: ["rotte", "rotta", "skadedyr", "gnager"],
                    hint: "Se hva avisen skriver om hotellene som ble kjøpt opp, og hva de hadde til felles.",
                    explanation: "«Selskapet» er rotter. Heggelund slapp rotter løs på hoteller for å ødelegge ryktet og presse prisen, og kjøpte dem billig etter konkursen. Britannia (1894) og Atlantic (1896) endte begge hos ham. På Sandven skulle seks kasser komme lørdag 28. august, og budet på 22 000 lå klart mot hotellets gjeld på ca. 40 000."
                },
                {
                    question: "Behold konvolutt 2, dere trenger ingen ny ennå.\n\nNoen forsøkte å brenne et brev på hotellet i går, men ilden ga opp før papiret gjorde det. Lensmannen har ikke sett i peisene i annen etasje.\n\nFinn brevet. Hvilket kvinnenavn står i det?",
                    answer: ["Hilde"],
                    answerContains: ["hilde"],
                    hint: "Se i peisen i Damesalongen.",
                    explanation: "Notatet er et brev fra Kristoffers søster. Hilde er kona hans, som døde vinteren 1897 etter at Atlantic tok alt de hadde."
                },
                {
                    question: "Åpne konvolutt 3.\n\nNå har dere nok informasjon til å finne morderen. Hvem drepte Heggelund?",
                    answer: ["Kristoffer Berge", "Kristoffer Berg", "Kristoffer", "Berge", "Berg"],
                    answerContains: ["kristoffer", "bestyreren av sjøhuset", "bestyrer berge", "sjøhusbestyrer"],
                    rejectContains: ["ikkekristoffer", "ikkeberge", "ikkebestyrer"],
                    hint: "Hvem ble ikke avhørt ordentlig, og hvem var alltid nær åstedet?",
                    explanation: "Utklippet fra 1896 nevner «underbestyrer Kristoffer Berg» blant de oppsagte på Atlantic. Journalen viser at «Kristoffer Berge» begynte på Sandven i oktober samme år. Notatet i peisen er adressert til en Kristoffer og nevner Atlantic. Bestyreren av Sjøhuset var aldri en mistenkt, og han lå og sov bare noen meter fra åstedet.",
                    followUp: {
                        question: "Hva knytter ham til Heggelund?",
                        answer: ["Atlantic", "Hotel Atlantic", "hevn", "kona", "Hilde"],
                        answerContains: ["atlantic", "hevn", "kona", "kone", "hilde", "konkurs", "ødela"],
                        hint: "Sammenlign navnene i avisen fra 1896 og i personalejournalen.",
                        explanation: "Heggelund ødela Hotel Atlantic i 1896. Kristoffer mistet jobben, og kona Hilde døde vinteren etter."
                    }
                }
            ],
            finalMessage: "Mysteriet er løst: Gratulerer, etterforskere!\n\nDere har avslørt sannheten bak dødsfallet i Sjøhuset. Den skyldige er Kristoffer Berge, bestyreren av Sjøhuset. Egentlig het han Kristoffer Berg og var underbestyrer på Hotel Atlantic i Bergen, som konsul Heggelund ødela med rotter og kjøpte for en slikk og ingenting i 1896. Kristoffer mistet jobben, og kona Hilde døde vinteren etter. Da Heggelund dukket opp på Sandven, kjente Kristoffer ham igjen. Klokken 22:30 tok han et messinglodd fra butikkvekten og slo ham ned.\n\nSå iscenesatte han et innbrudd: han knuste vinduet utover, stilte lommeuret tilbake til 21:32 og la et falskt brev fra Bergen på pulten. Men glasskårene lå utenfor vinduet, og Marit hørte dumpet halv elleve.\n\nDet som felte ham, var et halvbrent brev i peisen. Søsteren ba ham la hevnen ligge, og navnet Kristoffer, hotellet Atlantic og kona Hilde pekte alle mot bestyreren som aldri var en mistenkt.\n\nNils, Synneva, Whitcombe og Bredesen hadde alle sine grunner, men ingen av dem drepte ham. Takk for strålende etterforskningsarbeid!"
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
    taskStartTime: null,
    followUpMode: false,
    unlockedLocks: []
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
            localStorage.removeItem("hotellmysteriet_visits");
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
        },
        getVisits(mysteryId) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_visits") || "{}");
            if (mysteryId) return (all[mysteryId] || []);
            let entries = [];
            for (const [mid, arr] of Object.entries(all)) entries = entries.concat(arr.map(e => ({ ...e, mysteryId: mid })));
            return entries;
        },
        logVisit(mysteryId, visit) {
            const all = JSON.parse(localStorage.getItem("hotellmysteriet_visits") || "{}");
            if (!all[mysteryId]) all[mysteryId] = [];
            all[mysteryId].push(visit);
            localStorage.setItem("hotellmysteriet_visits", JSON.stringify(all));
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
            try { await this._firebase.ref("times").remove(); await this._firebase.ref("feedback").remove(); await this._firebase.ref("visits").remove(); return; } catch (e) {}
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
    },
    async getVisits(mysteryId) {
        if (this._firebase) {
            try {
                const ref = mysteryId ? this._firebase.ref(`visits/${mysteryId}`) : this._firebase.ref("visits");
                const snap = await ref.once("value"); const data = snap.val() || {};
                if (mysteryId) return Object.entries(data).map(([key, val]) => ({ ...val, _key: key, mysteryId }));
                let entries = [];
                for (const [mid, obj] of Object.entries(data))
                    for (const [key, val] of Object.entries(obj)) entries.push({ ...val, _key: key, mysteryId: mid });
                return entries;
            } catch (e) { console.warn("Firebase read failed", e); }
        }
        return this._local.getVisits(mysteryId);
    },
    async logVisit(mysteryId, visit) {
        if (this._firebase) { try { await this._firebase.ref(`visits/${mysteryId}`).push(visit); return; } catch (e) {} }
        this._local.logVisit(mysteryId, visit);
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
            timerVisible: state.timerVisible, taskStats: state.taskStats, taskStartTime: state.taskStartTime,
            unlockedLocks: state.unlockedLocks || []
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
    return `${String(Math.floor(t / 3600)).padStart(2, "0")}:${String(Math.floor((t % 3600) / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
function showScreen(id) {
    document.querySelectorAll(".hm-screen").forEach(s => s.classList.remove("active"));
    document.getElementById(`screen-${id}`).classList.add("active");
}
function getMysteryName(id) {
    const m = CONFIG.mysteries.find(m => m.id === id);
    if (!m) return id;
    return getMystery(m).name || m.name;
}
function escapeHtml(str) { const d = document.createElement("div"); d.textContent = str; return d.innerHTML; }
function normalizeAnswer(str) { return str.trim().toUpperCase().replace(/\s+/g, ""); }
function wordsOfAnswer(str) { return str.trim().toUpperCase().replace(/[.,!?;:"'«»]/g, "").split(/\s+/).filter(Boolean); }
function sortedWordKey(str) { return wordsOfAnswer(str).slice().sort().join(" "); }

function applyLanguage() {
    document.documentElement.lang = LANG;
    document.title = T('appTitle');
    const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    const setAttr = (id, attr, text) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, text); };
    set('app-title', T('appTitle'));
    set('app-subtitle', T('appSubtitle'));
    set('start-intro', T('startIntro'));
    set('label-mystery', T('labelMystery'));
    set('label-team', T('labelTeam'));
    setAttr('team-name', 'placeholder', T('placeholderTeam'));
    set('btn-start', T('btnStart'));
    set('btn-show-leaderboard', T('btnLeaderboard'));
    set('label-case-overview', T('caseOverview'));
    set('btn-start-investigation', T('btnStartInvestigation'));
    set('task-timer-toggle', T('hide'));
    setAttr('task-answer', 'placeholder', T('answerPlaceholder'));
    set('task-submit', T('submitAnswer'));
    set('label-congrats', T('congrats'));
    set('label-your-time', T('yourTime'));
    set('label-feedback-title', T('feedbackTitle'));
    setAttr('feedback-text', 'placeholder', T('feedbackPlaceholder'));
    set('btn-submit-feedback', T('submitFeedback'));
    set('label-feedback-thanks', T('feedbackThanks'));
    set('btn-new-game', T('btnNewGame'));
    set('btn-back-start', T('btnBack'));
    set('btn-open-dashboard', T('btnOpenDashboard'));
    set('btn-clear-all', T('btnClearAll'));
    set('btn-close-dashboard', T('btnCloseDashboard'));
    set('label-admin-title', T('adminTitle'));
    set('label-admin-desc', T('adminDesc'));
}

// ============================================================
//  INIT
// ============================================================
async function init() {
    applyLanguage();

    const urlParams = new URLSearchParams(window.location.search);
    const preselectedId = urlParams.get("m");
    const select = document.getElementById("mystery-select");
    const selectField = document.getElementById("mystery-select-field");
    const nameDisplay = document.getElementById("mystery-name-display");

    if (preselectedId) {
        const rawFound = visibleMysteries().find(m => m.id === preselectedId.toLowerCase());
        if (rawFound) {
            const found = getMystery(rawFound);
            state.mysteryId = rawFound.id; state.preselected = true;
            selectField.style.display = "none"; nameDisplay.style.display = "block";
            nameDisplay.innerHTML = `<div class="hm-mystery-name">${escapeHtml(found.name)}</div>`;
            document.title = found.name;
            const headerMysteryName = document.getElementById('header-mystery-name');
            if (headerMysteryName) { headerMysteryName.textContent = found.name; headerMysteryName.style.display = 'block'; }
        }
    }

    if (!state.preselected) {
        const placeholderOpt = document.createElement("option");
        placeholderOpt.value = ""; placeholderOpt.textContent = T('placeholderMystery');
        placeholderOpt.disabled = true; placeholderOpt.selected = true;
        select.appendChild(placeholderOpt); select.style.color = "rgba(26, 15, 6, 0.4)";
        visibleMysteries().forEach(m => {
            const resolved = getMystery(m);
            const opt = document.createElement("option"); opt.value = m.id; opt.textContent = resolved.name; select.appendChild(opt);
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
        document.getElementById("task-timer-toggle").textContent = state.timerVisible ? T('hide') : T('show');
        updateTimerBar();
    });

    const stars = document.querySelectorAll("#feedback-stars span");
    stars.forEach(star => {
        star.addEventListener("mouseover", function () {
            const val = this.getAttribute("data-value");
            stars.forEach(s => { if (s.getAttribute("data-value") <= val) s.classList.add("hover"); else s.classList.remove("hover"); });
        });
        star.addEventListener("mouseout", function () { stars.forEach(s => s.classList.remove("hover")); });
        star.addEventListener("click", function () {
            state.currentRating = parseInt(this.getAttribute("data-value"));
            stars.forEach(s => { if (s.getAttribute("data-value") <= state.currentRating) s.classList.add("active"); else s.classList.remove("active"); });
        });
    });

    document.getElementById("btn-submit-feedback").addEventListener("click", async () => {
        if (state.currentRating === 0) { await showAlert(T('feedbackRatingAlert'), T('modalFeedbackHeader')); return; }
        const feedbackText = document.getElementById("feedback-text").value;
        const feedbackData = { team: state.teamName, rating: state.currentRating, comment: feedbackText, date: new Date().toISOString() };
        await Storage.saveFeedback(state.mysteryId, feedbackData);
        document.getElementById("hm-feedback-section").style.display = "none";
        document.getElementById("hm-feedback-thanks").style.display = "block";
    });

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
        if (await showConfirm(T('clearAllConfirm'), T('modalClearConfirm'), T('modalCancel'), T('modalClearHeader'), true)) { await Storage.clearAll(); showLeaderboard(); }
    });

    await Storage.init();

    const savedSession = SessionStore.load();
    if (savedSession && savedSession.startTime && savedSession.mysteryId && savedSession.teamName) {
        const rawMystery = CONFIG.mysteries.find(m => m.id === savedSession.mysteryId);
        if (rawMystery) {
            const mystery = getMystery(rawMystery);
            const elapsedMin = Math.round((Date.now() - savedSession.startTime) / 60000);
            const taskNum = savedSession.currentTask + 1;
            const resume = await showConfirm(T('reloadResume', savedSession.teamName, mystery.name, taskNum, mystery.tasks.length, elapsedMin), T('modalResumeConfirm'), T('modalResumeCancel'), T('modalResumeHeader'));
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
    const rawMystery = CONFIG.mysteries.find(m => m.id === state.mysteryId);
    state.mystery = getMystery(rawMystery);
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
    state.mysteryId = session.mysteryId; state.teamName = session.teamName; state.startTime = session.startTime;
    state.currentTask = session.currentTask; state.hintsUsed = session.hintsUsed; state.gaveUpCount = session.gaveUpCount;
    state.timerVisible = session.timerVisible !== false; state.hintShownForTask = false;
    const rawMystery = CONFIG.mysteries.find(m => m.id === state.mysteryId);
    if (!rawMystery) { SessionStore.clear(); return; }
    state.mystery = getMystery(rawMystery);
    state.taskStats = session.taskStats || state.mystery.tasks.map(() => ({ hints: 0, gaveUp: false, timeSpent: 0 }));
    state.taskStartTime = session.taskStartTime || Date.now();
    document.getElementById("task-team-name").textContent = state.teamName;
    state.timerInterval = setInterval(() => { state.elapsed = Date.now() - state.startTime; updateTimerBar(); }, 100);
    showTask(true);
}

function showTask(isResume = false) {
    if (state.stopAudio) { state.stopAudio(); state.stopAudio = null; }
    const task = state.mystery.tasks[state.currentTask];
    const total = state.mystery.tasks.length;
    state.hintShownForTask = false;
    state.followUpMode = false;
    const existingSerial = document.getElementById('serial-murder-container');
    if (existingSerial) existingSerial.remove();
    if (!isResume) { state.taskStartTime = Date.now(); SessionStore.save(); }

    const progressEl = document.getElementById("task-progress"); progressEl.innerHTML = "";
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = "hm-progress-dot" + (i < state.currentTask ? " completed" : "") + (i === state.currentTask ? " active" : "");
        progressEl.appendChild(dot);
    }
    document.getElementById("task-number").textContent = T('taskOf', state.currentTask + 1, total);
    document.getElementById("task-text").textContent = task.question;

    // Audio player: remove old, inject new if task has audio
    const existingPlayer = document.getElementById('task-audio-player');
    if (existingPlayer) existingPlayer.remove();
    if (task.audio) {
        const audioEl = document.createElement('div');
        audioEl.id = 'task-audio-player';
        audioEl.className = 'hm-audio-player';
        const audioLabel = task.audio.label || 'Hear the letter';
        const audioDivider = task.audio.divider || 'Evidence';
        audioEl.innerHTML = `
            <div class="hm-audio-divider"><span>${audioDivider}</span></div>
            <button class="hm-btn-audio" id="btn-play-audio">
                <span class="hm-audio-icon">✦</span>
                <span class="hm-audio-label">${audioLabel}</span>
            </button>`;
        document.querySelector('#screen-task .hm-task-card').appendChild(audioEl);

        let ambientAudio = null, letterAudio = null, fadeInterval = null;

        function stopAudio() {
            if (letterAudio) { letterAudio.pause(); letterAudio = null; }
            if (fadeInterval) { clearInterval(fadeInterval); fadeInterval = null; }
            if (ambientAudio) { ambientAudio.pause(); ambientAudio = null; }
            const btn = document.getElementById('btn-play-audio');
            if (btn) { btn.classList.remove('playing'); btn.querySelector('.hm-audio-label').textContent = audioLabel; }
        }
        state.stopAudio = stopAudio;

        document.getElementById('btn-play-audio').addEventListener('click', function () {
            if (this.classList.contains('playing')) { stopAudio(); return; }

            const btn = this;
            btn.classList.add('playing');
            btn.querySelector('.hm-audio-label').textContent = task.audio.playingLabel || 'Playing...';

            ambientAudio = new Audio(task.audio.ambient);
            ambientAudio.loop = true;
            ambientAudio.volume = 0.6;
            ambientAudio.play().catch(() => { ambientAudio = null; });

            letterAudio = new Audio(task.audio.src);
            letterAudio.volume = 1.0;
            letterAudio.play().catch(() => {
                letterAudio = null;
                btn.classList.remove('playing');
                btn.querySelector('.hm-audio-label').textContent = 'Hear the letter';
            });

            letterAudio.addEventListener('ended', () => {
                const startVol = ambientAudio ? ambientAudio.volume : 0;
                let steps = 0;
                fadeInterval = setInterval(() => {
                    steps++;
                    if (ambientAudio && ambientAudio.volume > 0.02) {
                        ambientAudio.volume = Math.max(0, startVol - steps * 0.025);
                    } else {
                        if (ambientAudio) { ambientAudio.pause(); ambientAudio = null; }
                        clearInterval(fadeInterval); fadeInterval = null;
                    }
                }, 80);
                const b = document.getElementById('btn-play-audio');
                if (b) { b.classList.remove('playing'); b.querySelector('.hm-audio-label').textContent = audioLabel; }
                letterAudio = null;
            });
        });
    }

    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = `<button class="hm-btn hm-btn-hint" id="btn-show-hint">${T('showHint')}</button><br><button class="hm-btn hm-btn-giveup" id="btn-giveup" style="display:none;">${T('giveUpBtn')}</button>`;

    document.getElementById("btn-show-hint").addEventListener("click", () => {
        if (!state.hintShownForTask) {
            state.hintsUsed++; state.hintShownForTask = true;
            state.taskStats[state.currentTask].hints = 1; SessionStore.save();
        }
        hintArea.innerHTML = `
            <div class="hm-hint-box"><div class="hm-hint-warning">${T('hintLabel')}</div><div class="hm-hint-text">${escapeHtml(task.hint)}</div></div>
            <button class="hm-btn hm-btn-giveup" id="btn-giveup">${T('giveUpBtn')}</button>
        `;
        document.getElementById("btn-giveup").addEventListener("click", () => giveUp(task));
    });

    const answerRow = document.querySelector('#screen-task .hm-answer-row');
    if (task.type === 'serial-murder') {
        answerRow.style.display = 'none';
        document.getElementById("task-error").textContent = "";
        renderSerialMurderUI(task);
        showScreen("task");
    } else {
        answerRow.style.display = 'flex';
        document.getElementById("task-answer").value = "";
        document.getElementById("task-answer").className = "hm-answer-input";
        document.getElementById("task-error").textContent = "";
        showScreen("task"); document.getElementById("task-answer").focus();
    }
}

function rewardHtml(task) {
    const r = task && task.reward;
    if (!r || !r.image) return "";
    return `
        <div class="hm-reward-box">
            <a href="${r.image}" target="_blank" rel="noopener"><img class="hm-reward-img" src="${r.image}" alt="${escapeHtml(r.alt || '')}"></a>
            <a class="hm-btn hm-btn-secondary hm-reward-download" href="${r.image}" download="${escapeHtml(r.download || 'kupong.jpg')}">${T('downloadReward')}</a>
        </div>`;
}

async function giveUp(task) {
    if (!await showConfirm(T('giveUpConfirm'), T('modalGiveUpConfirm'), T('modalGiveUpCancel'), T('modalGiveUpHeader'))) return;
    state.gaveUpCount++;
    state.taskStats[state.currentTask].gaveUp = true;
    state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime;
    SessionStore.save();
    const activeTask = (state.followUpMode && task.followUp) ? task.followUp : task;
    const answers = Array.isArray(activeTask.answer) ? activeTask.answer : [activeTask.answer];
    const correctAnswer = answers[0];
    const explanation = activeTask.explanation;
    const serialContainer = document.getElementById('serial-murder-container');
    if (serialContainer) serialContainer.style.display = 'none';
    document.querySelector(".hm-answer-row").style.display = "none";
    document.getElementById("task-error").textContent = "";
    const isLast = state.currentTask === state.mystery.tasks.length - 1;
    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = `
        <div class="hm-giveup-box"><div class="hm-giveup-narrative">${T('giveUpNarrative')}</div><div class="hm-giveup-label">${T('giveUpLabel')}</div><div class="hm-giveup-answer">${escapeHtml(correctAnswer)}</div>${explanation ? `<div class="hm-giveup-explanation">${escapeHtml(explanation)}</div>` : ''}<div class="hm-giveup-penalty">${T('giveUpPenalty')}</div></div>
        ${isLast ? "" : rewardHtml(task)}
    `;
    const continueBtn = document.createElement("button");
    continueBtn.className = "hm-btn hm-btn-primary";
    continueBtn.textContent = isLast ? T('seeResult') : T('nextTask');
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
    if (task.type === 'serial-murder') return;
    const answer = normalizeAnswer(input.value);
    const answerWords = wordsOfAnswer(input.value);
    const answerKey = sortedWordKey(input.value);
    const activeAnswers = (state.followUpMode && task.followUp)
        ? (Array.isArray(task.followUp.answer) ? task.followUp.answer : [task.followUp.answer])
        : (Array.isArray(task.answer) ? task.answer : [task.answer]);
    const activeContains = (state.followUpMode && task.followUp) ? task.followUp.answerContains : task.answerContains;
    // rejectContains wins over everything: stops a stikkord-match from passing a negated answer
    // ("det var ikke drap" contains "drap"), which would otherwise be scored as correct.
    const activeReject = (state.followUpMode && task.followUp) ? task.followUp.rejectContains : task.rejectContains;
    if (answer.length > 0 && Array.isArray(activeReject)
        && activeReject.some(kw => { const k = normalizeAnswer(kw); return k.length > 0 && answer.includes(k); })) {
        input.classList.remove("wrong"); void input.offsetWidth; input.classList.add("wrong");
        document.getElementById("task-error").textContent = T('wrongAnswer');
        setTimeout(() => { input.classList.remove("wrong"); }, 600);
        return;
    }
    const isMatch = activeAnswers.some(a => answer === normalizeAnswer(a) || (answerKey.length > 0 && answerKey === sortedWordKey(a)))
        || (answer.length > 0 && Array.isArray(activeContains)
            && activeContains.some(kw => {
                const k = normalizeAnswer(kw);
                if (k.length > 0 && answer.includes(k)) return true;
                const kwWords = wordsOfAnswer(kw);
                return kwWords.length > 0 && kwWords.every(w => answerWords.includes(w));
            }));
    if (isMatch) {
        input.classList.add("correct"); document.getElementById("task-error").textContent = "";
        if (!state.followUpMode && task.followUp) {
            enterFollowUpMode(task);
        } else {
            state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime;
            const isLast = state.currentTask === state.mystery.tasks.length - 1;
            if (isLast) { finishGame(); } else { showSuccess(); }
        }
    } else {
        input.classList.remove("wrong"); void input.offsetWidth; input.classList.add("wrong");
        document.getElementById("task-error").textContent = T('wrongAnswer');
        setTimeout(() => { input.classList.remove("wrong"); }, 600);
    }
}

function enterFollowUpMode(task) {
    state.followUpMode = true;
    const input = document.getElementById("task-answer");
    input.value = ""; input.classList.remove("correct", "wrong");
    document.getElementById("task-error").textContent = "";
    document.getElementById("task-text").textContent = task.followUp.question;
    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = `<button class="hm-btn hm-btn-hint" id="btn-show-hint">${T('showHint')}</button>`;
    document.getElementById("btn-show-hint").addEventListener("click", () => {
        if (!state.hintShownForTask) {
            state.hintsUsed++; state.hintShownForTask = true;
            state.taskStats[state.currentTask].hints = 1; SessionStore.save();
        }
        hintArea.innerHTML = `
            <div class="hm-hint-box"><div class="hm-hint-warning">${T('hintLabel')}</div><div class="hm-hint-text">${escapeHtml(task.followUp.hint)}</div></div>
            <button class="hm-btn hm-btn-giveup" id="btn-giveup">${T('giveUpBtn')}</button>`;
        document.getElementById("btn-giveup").addEventListener("click", () => giveUp(task));
    });
    input.focus();
}

function renderSerialMurderUI(task) {
    const container = document.createElement('div');
    container.id = 'serial-murder-container';
    container.style.cssText = 'width:100%; margin: 0 0 16px 0;';

    const caseState = {};
    task.cases.forEach(c => { caseState[c.id] = 'pending'; });

    const proceedBtn = document.createElement('button');
    proceedBtn.className = 'hm-btn hm-btn-primary';
    proceedBtn.textContent = 'Gå videre';
    proceedBtn.style.cssText = 'margin-top:16px; width:100%; display:none;';
    proceedBtn.addEventListener('click', () => {
        document.getElementById("task-error").textContent = '';
        state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime;
        const isLast = state.currentTask === state.mystery.tasks.length - 1;
        if (isLast) { finishGame(); } else { showSuccess(); }
    });

    function checkAllDone() {
        const allMurdersDone = task.cases.filter(c => c.isMurder)
            .every(c => caseState[c.id] === 'correct' || caseState[c.id] === 'gaveUp');
        proceedBtn.style.display = allMurdersDone ? 'block' : 'none';
    }

    task.cases.forEach(c => {
        const wrap = document.createElement('div');
        wrap.style.marginBottom = '10px';

        const btn = document.createElement('button');
        btn.className = 'hm-serial-btn';
        btn.textContent = c.label;
        btn.dataset.id = c.id;

        const inputWrap = document.createElement('div');
        inputWrap.style.cssText = 'display:none; margin-top:8px; padding:0 4px;';

        const inp = document.createElement('input');
        inp.type = 'text'; inp.className = 'hm-answer-input';
        inp.style.cssText = 'text-transform:none; letter-spacing:0; font-size:0.9rem;';
        inp.placeholder = 'Hva avslørte at dette var mord?';
        inp.autocomplete = 'off';

        const caseErrorEl = document.createElement('div');
        caseErrorEl.style.cssText = 'color:#c0392b; font-size:0.85rem; margin-top:6px; min-height:18px;';

        const feedbackBox = document.createElement('div');
        feedbackBox.style.display = 'none';

        let hintShown = false;
        const caseHintBtn = document.createElement('button');
        caseHintBtn.className = 'hm-btn hm-btn-hint';
        caseHintBtn.textContent = T('showHint');
        caseHintBtn.style.cssText = 'margin-top:8px; font-size:0.85rem; width:100%;';
        const caseHintBox = document.createElement('div');
        caseHintBox.style.display = 'none';

        if (c.hint) {
            caseHintBtn.addEventListener('click', () => {
                if (!hintShown) {
                    state.hintsUsed++;
                    state.taskStats[state.currentTask].hints = (state.taskStats[state.currentTask].hints || 0) + 1;
                    SessionStore.save();
                    hintShown = true;
                }
                caseHintBox.innerHTML = `<div class="hm-hint-box"><div class="hm-hint-warning">${T('hintLabel')}</div><div class="hm-hint-text">${escapeHtml(c.hint)}</div></div>`;
                caseHintBox.style.display = 'block';
                caseHintBtn.style.display = 'none';
            });
        }

        const caseGiveUpBtn = document.createElement('button');
        caseGiveUpBtn.className = 'hm-btn hm-btn-giveup';
        caseGiveUpBtn.textContent = T('giveUpBtn');
        caseGiveUpBtn.style.cssText = 'margin-top:8px; font-size:0.85rem; width:100%;';

        const submitCaseBtn = document.createElement('button');
        submitCaseBtn.className = 'hm-btn hm-btn-primary';
        submitCaseBtn.textContent = 'Sjekk';
        submitCaseBtn.style.cssText = 'margin-top:8px; font-size:0.9rem; width:100%;';

        function lockCase() {
            inp.disabled = true;
            submitCaseBtn.style.display = 'none';
            caseHintBtn.style.display = 'none';
            caseGiveUpBtn.style.display = 'none';
            caseErrorEl.textContent = '';
        }

        caseGiveUpBtn.addEventListener('click', async () => {
            if (!await showConfirm(T('giveUpConfirm'), T('modalGiveUpConfirm'), T('modalGiveUpCancel'), T('modalGiveUpHeader'))) return;
            state.gaveUpCount++;
            state.taskStats[state.currentTask].gaveUp = (state.taskStats[state.currentTask].gaveUp || 0) + 1;
            SessionStore.save();
            caseState[c.id] = 'gaveUp';
            btn.classList.remove('hm-serial-btn-active');
            btn.classList.add('hm-serial-btn-missed');
            lockCase();
            if (c.hint) {
                caseHintBox.innerHTML = `<div class="hm-hint-box"><div class="hm-hint-warning">${T('hintLabel')}</div><div class="hm-hint-text">${escapeHtml(c.hint)}</div></div>`;
                caseHintBox.style.display = 'block';
            }
            checkAllDone();
        });

        submitCaseBtn.addEventListener('click', () => {
            const val = inp.value.trim();

            if (!c.isMurder) {
                btn.classList.remove('hm-serial-btn-active');
                btn.classList.add('hm-serial-btn-wrong');
                lockCase();
                feedbackBox.innerHTML = `<div class="hm-hint-box"><div class="hm-hint-warning">Ikke drap</div><div class="hm-hint-text">Dette var faktisk et selvmord.</div></div>`;
                feedbackBox.style.display = 'block';
                caseState[c.id] = 'notMurder';
                checkAllDone();
                return;
            }

            if (!val) { caseErrorEl.textContent = 'Skriv hva som avslørte drapet.'; return; }

            if (c.clue && !c.clue.some(kw => val.toLowerCase().includes(kw.toLowerCase()))) {
                inp.classList.remove('wrong'); void inp.offsetWidth; inp.classList.add('wrong');
                caseErrorEl.textContent = 'Ikke helt riktig. Les saksmappen nøyere.';
                setTimeout(() => inp.classList.remove('wrong'), 600);
                return;
            }

            caseState[c.id] = 'correct';
            btn.classList.remove('hm-serial-btn-active');
            btn.classList.add('hm-serial-btn-correct');
            inp.classList.add('correct');
            lockCase();
            checkAllDone();
        });

        inp.addEventListener('keydown', e => { if (e.key === 'Enter') submitCaseBtn.click(); });

        btn.addEventListener('click', () => {
            if (caseState[c.id] !== 'pending') return;
            const isOpen = inputWrap.style.display !== 'none';
            inputWrap.style.display = isOpen ? 'none' : 'block';
            btn.classList.toggle('hm-serial-btn-active', !isOpen);
            if (!isOpen) inp.focus();
        });

        inputWrap.appendChild(inp);
        inputWrap.appendChild(caseErrorEl);
        if (c.hint) { inputWrap.appendChild(caseHintBtn); inputWrap.appendChild(caseHintBox); }
        inputWrap.appendChild(caseGiveUpBtn);
        inputWrap.appendChild(submitCaseBtn);
        inputWrap.appendChild(feedbackBox);

        wrap.appendChild(btn);
        wrap.appendChild(inputWrap);
        container.appendChild(wrap);
    });

    container.appendChild(proceedBtn);

    const hintArea = document.getElementById("task-hint-area");
    hintArea.innerHTML = '';
    hintArea.parentNode.insertBefore(container, hintArea);
}

function showSuccess() {
    const taskNum = state.currentTask + 1; const total = state.mystery.tasks.length;
    document.getElementById("success-icon").textContent = "✦";
    document.getElementById("success-title").textContent = T('taskSolved', taskNum);
    document.getElementById("success-text").textContent = T('taskCompleted', taskNum, total);
    const penaltyEl = document.getElementById("success-penalty");
    if (state.hintShownForTask) { penaltyEl.innerHTML = `<div class="hm-penalty-tag">${T('hintPenalty')}</div>`; }
    else { penaltyEl.innerHTML = ""; }
    document.getElementById("success-reward").innerHTML = rewardHtml(state.mystery.tasks[state.currentTask]);
    document.getElementById("btn-next-task").textContent = (state.currentTask + 1 === total - 1) ? T('lastTask') : T('nextTask');
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
    if (state.hintsUsed > 0) penaltyParts.push(T('penaltyHint', state.hintsUsed));
    if (state.gaveUpCount > 0) penaltyParts.push(T('penaltyGaveUp', state.gaveUpCount));
    if (penaltyParts.length > 0) {
        detailEl.textContent = penaltyParts.join(" · ");
        penaltyEl.textContent = T('actualTime', formatTime(state.elapsed), formatTime(penalty));
    } else { detailEl.textContent = T('noHints'); penaltyEl.textContent = ""; }
    document.getElementById("result-final-message").textContent = state.mystery.finalMessage;
    document.getElementById("result-reward").innerHTML = rewardHtml(state.mystery.tasks[state.currentTask]);
    const entries = await Storage.getEntries(state.mysteryId);
    entries.sort((a, b) => (a.totalTime || a.time) - (b.totalTime || b.time));
    const rank = entries.findIndex(e => e.team === state.teamName && e.totalTime === totalTime) + 1;
    const rankEl = document.getElementById("result-rank");
    if (rank === 1) rankEl.textContent = T('rank1');
    else if (rank === 2) rankEl.textContent = T('rank2');
    else if (rank === 3) rankEl.textContent = T('rank3');
    else rankEl.textContent = T('rankN', rank, entries.length);
    renderLeaderboardList("result-leaderboard-list", entries, state.teamName, totalTime);
    showScreen("result");
}

function updateTimerBar() {
    const el = document.getElementById("task-timer");
    if (state.timerVisible) { el.textContent = formatTime(state.elapsed); el.className = "hm-timer-bar-time"; }
    else { el.textContent = T('hidden'); el.className = "hm-timer-bar-time hm-timer-bar-hidden"; }
}

// ============================================================
//  ADMIN DASHBOARD
// ============================================================
async function openAdminDashboard() {
    showScreen("dashboard");
    const container = document.getElementById("dashboard-content");
    container.innerHTML = `<p style='color: rgba(245, 240, 232, 0.5);'>${T('dashboardLoading')}</p>`;
    const allTimes = await Storage.getEntries(null);
    const allFeedback = await Storage.getFeedback(null);
    let stats = {};
    CONFIG.mysteries.forEach(m => {
        const resolved = getMystery(m);
        stats[m.id] = {
            name: resolved.name, playCount: 0, totalRating: 0, ratingCount: 0, feedbackList: [],
            taskAggregates: (resolved.tasks || []).map(() => ({ hints: 0, gaveUp: 0, totalTime: 0, timeCount: 0 }))
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
        const avgRating = s.ratingCount > 0 ? (s.totalRating / s.ratingCount).toFixed(1) : "-";
        let taskHtml = `<div style="margin: 20px 0; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
            <strong style="color: #e8d48b; font-family: 'Playfair Display', serif; font-size: 1.1rem;">${T('detailedStats')}</strong>
            <ul style="font-size: 0.85rem; color: #f5f0e8; list-style: none; padding-left: 0; margin-top: 10px;">`;
        s.taskAggregates.forEach((ta, idx) => {
            let avgTimeStr = ta.timeCount > 0 ? formatTime(ta.totalTime / ta.timeCount) : "N/A";
            taskHtml += `<li style="margin-bottom: 5px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 5px;">${T('taskStatsItem', idx + 1, avgTimeStr, ta.hints, ta.gaveUp)}</li>`;
        });
        taskHtml += `</ul></div>`;
        let feedbackHtml = "";
        if (s.feedbackList.length > 0) {
            feedbackHtml = `<strong style="color: #e8d48b; font-family: 'Playfair Display', serif; font-size: 1.1rem;">${T('feedbackComments')}</strong><ul class="hm-dash-feedback-list">`;
            s.feedbackList.forEach(f => {
                feedbackHtml += `<li class="hm-dash-feedback-item"><div><strong>${escapeHtml(f.team || "-")}</strong> <span class="hm-dash-stars">${f.rating}/5 ⭐</span><span style="color: gray; font-size: 0.7rem;">${new Date(f.date).toLocaleDateString()}</span></div><div class="hm-dash-comment">"${escapeHtml(f.comment)}"</div></li>`;
            });
            feedbackHtml += `</ul>`;
        } else {
            feedbackHtml = `<p style="font-size: 0.8rem; color: gray;">${T('noFeedback')}</p>`;
        }
        const card = document.createElement("div");
        card.className = "hm-dash-card";
        card.innerHTML = `
            <div class="hm-dash-title">${escapeHtml(s.name)}</div>
            <div class="hm-dash-stats">
                <span style="background: rgba(201, 168, 76, 0.2); padding: 5px 10px; border-radius: 5px;">${T('played', s.playCount)}</span>
                <span style="background: rgba(201, 168, 76, 0.2); padding: 5px 10px; border-radius: 5px;">${T('avgRating', avgRating, s.ratingCount)}</span>
            </div>
            ${taskHtml}${feedbackHtml}
        `;
        container.appendChild(card);
    });
    if (container.innerHTML === "") { container.innerHTML = `<p>${T('noData')}</p>`; }
}

// ============================================================
//  LEADERBOARD OG SLETTING AV ENKELTLAG
// ============================================================
async function showLeaderboard() {
    showScreen("leaderboard");
    const filterDiv = document.getElementById("leaderboard-filter"); filterDiv.innerHTML = "";
    const allBtn = document.createElement("button"); allBtn.className = "hm-filter-btn"; allBtn.textContent = "Alle";
    allBtn.addEventListener("click", () => loadLeaderboard(null, allBtn)); filterDiv.appendChild(allBtn);
    let defaultBtn = allBtn;
    visibleMysteries().forEach(m => {
        const resolved = getMystery(m);
        const btn = document.createElement("button"); btn.className = "hm-filter-btn"; btn.textContent = resolved.name;
        btn.addEventListener("click", () => loadLeaderboard(m.id, btn)); filterDiv.appendChild(btn);
        if (state.preselected && m.id === state.mysteryId) defaultBtn = btn;
    });
    loadLeaderboard(state.preselected ? state.mysteryId : null, defaultBtn);
}

async function loadLeaderboard(mysteryId, activeBtn) {
    document.querySelectorAll(".hm-filter-btn").forEach(b => b.classList.remove("active"));
    if (activeBtn && activeBtn.classList) activeBtn.classList.add("active");
    const entries = await Storage.getEntries(mysteryId);
    entries.sort((a, b) => (a.totalTime || a.time) - (b.totalTime || b.time));
    renderLeaderboardList("leaderboard-list", entries);
    if (state.isAdmin) {
        document.getElementById("admin-panel").style.display = "block";
        const adminDiv = document.getElementById("admin-entries"); adminDiv.innerHTML = "";
        entries.forEach((e, i) => {
            const row = document.createElement("div"); row.className = "hm-admin-entry";
            row.innerHTML = `<span>${e.team}, ${formatTime(e.totalTime || e.time)} (${getMysteryName(e.mysteryId || mysteryId)})</span>`;
            const delBtn = document.createElement("button"); delBtn.className = "hm-admin-delete"; delBtn.textContent = T('deleteEntry');
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
    if (entries.length === 0) { list.innerHTML = `<li class="hm-no-entries">${T('noEntries')}</li>`; return; }
    entries.slice(0, 20).forEach((entry, i) => {
        const li = document.createElement("li"); li.className = "hm-lb-item";
        const entryTotal = entry.totalTime || entry.time;
        if (highlightTeam && entry.team === highlightTeam && entryTotal === highlightTotalTime) li.classList.add("highlight");
        const rankClass = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
        const hintText = entry.hints > 0 ? ` · ${entry.hints} hint` : "";
        const gaveUpText = entry.gaveUp > 0 ? ` · ${entry.gaveUp} ${LANG === 'en' ? 'given up' : 'gitt opp'}` : "";
        li.innerHTML = `
            <span class="hm-lb-rank ${rankClass}">${i + 1}</span>
            <div class="hm-lb-info">
                <div class="hm-lb-team">${escapeHtml(entry.team)}</div>
                <div class="hm-lb-date">${entry.date || ""}${entry.mysteryId ? " · " + getMysteryName(entry.mysteryId) : ""}${hintText}${gaveUpText}</div>
            </div>
            <div style="text-align: right; flex-shrink: 0;">
                <span class="hm-lb-time">${formatTime(entryTotal)}</span>
                ${(entry.hints > 0 || entry.gaveUp > 0) ? `<div class="hm-lb-total">${formatTime(entry.time)} + ${LANG === 'en' ? 'penalty' : 'straff'}</div>` : ""}
            </div>
        `;
        list.appendChild(li);
    });
}
// GO!  — original init() is driven by the Evidence Board view layer (bevistavlen.html) instead.
// Expose the original entry point in case it is ever needed, but do not auto-run it
// (the new DOM has different element ids; bevistavlen-view's ebInit() boots the app).
window.__legacyInit = init;

// ============================================================
//  LANGUAGE SYSTEM
// ============================================================
const LANG = new URLSearchParams(window.location.search).get('lang') || 'no';

const UI_TEXT = {
    no: {
        appTitle: 'Hotellmysteriet',
        appSubtitle: 'Tidtaker',
        startIntro: 'Løs mysteriet raskest mulig. Dere får oppgaver underveis — hint er tilgjengelig, men koster 5 minutter i strafftid.',
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
        hintLabel: 'Hint — +5 min strafftid',
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
        wrongAnswer: 'Det stemmer ikke med bevisene — prøv igjen!',
        rank1: '\u{1F947} Førsteplass!',
        rank2: '\u{1F948} Andreplass!',
        rank3: '\u{1F949} Tredjeplass!',
        rankN: (r, t) => `Plass ${r} av ${t}`,
        noEntries: 'Ingen tider registrert ennå',
        reloadResume: (team, name, n, total, min) => `Siden ble lastet på nytt.\n\nVil dere fortsette der dere slapp?\n\nLag: ${team}\nMysterium: ${name}\nOppgave: ${n} av ${total}\nTid brukt: ca. ${min} min`,
        giveUpConfirm: 'Er dere sikre? Dere får +10 minutter strafftid.',
        giveUpLabel: 'Svaret var',
        giveUpPenalty: '+10 minutter strafftid',
        seeResult: 'Se resultatet',
        adminTitle: 'Admin',
        adminDesc: 'Her kan du slette enkeltlag fra valgt mysterium, eller åpne dashbordet for å se statistikk.',
        clearAllConfirm: 'Sikker? Dette sletter både tider og tilbakemeldinger.',
        feedbackRatingAlert: 'Vennligst velg antall stjerner før du sender inn.',
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
        startIntro: 'Solve the mystery as fast as possible. You will receive tasks along the way — hints are available, but each costs 5 minutes of penalty time.',
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
        hintLabel: 'Hint — +5 min penalty',
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
        wrongAnswer: "That doesn't match the evidence — try again!",
        rank1: '\u{1F947} First place!',
        rank2: '\u{1F948} Second place!',
        rank3: '\u{1F949} Third place!',
        rankN: (r, t) => `Place ${r} of ${t}`,
        noEntries: 'No times recorded yet',
        reloadResume: (team, name, n, total, min) => `The page was reloaded.\n\nDo you want to continue where you left off?\n\nTeam: ${team}\nMystery: ${name}\nTask: ${n} of ${total}\nTime spent: approx. ${min} min`,
        giveUpConfirm: 'Are you sure? You will receive +10 minutes penalty.',
        giveUpLabel: 'The answer was',
        giveUpPenalty: '+10 minutes penalty',
        seeResult: 'See the result',
        adminTitle: 'Admin',
        adminDesc: 'Here you can delete individual teams from the selected mystery, or open the dashboard to view statistics.',
        clearAllConfirm: 'Are you sure? This will delete all times and feedback.',
        feedbackRatingAlert: 'Please select a star rating before submitting.',
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
                { question: "Adgangskortet leder dere dit mordet skjedde, kunstgalleriet.\n\nHer henger det et maleri som har sett alt. Løs gåten, og finn det:\n\n«Vi bærer verken våpen eller skyld, men vi satt med fasiten fra aller første stund. Hadde vi bare åpnet munnen, ville mysteriet vært over før det begynte. Vi er de eneste bevisene som puster og ser — men akkurat her er vi fanget i olje og lerret.»\n\nFinn maleriet i galleriet. Hva heter det?", answer: ["øyevitne", "øyevitner", "øyevidne", "øyevidner"], hint: "Hva kaller man de som ser en kriminell handling, men ikke deltar?" },
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
                    { question: "Open envelope 1 and read through the documents carefully.\n\nTo solve a mystery over a hundred years old, we begin where knowledge is kept.\n\nInside the hotel's venerable library, a four-digit code is hidden. Search the shelves — four books tell of a dark period in Norway's history. The numbers on the spines give you the code.\n\nEnter the code below. Once approved, go to the reception and show them the code to receive the access card to the next location.", answer: ["4567"], hint: "Look for books about the war in Norway." },
                    { question: "The access card leads you to where the murder took place — the art gallery.\n\nA painting here has witnessed everything. Solve the riddle and find it:\n\n'We carry neither weapons nor guilt, but we held the answer from the very beginning. Had we only opened our mouths, the mystery would have been over before it started. We are the only witnesses who breathe and see — but right here, we are captured in oil and canvas.'\n\nFind the painting in the gallery. What is it called?", answer: ["øyevitne", "øyevitner", "eyewitness", "eyewitnesses", "witness", "witnesses"], hint: "What do you call those who witness a criminal act but don't participate?" },
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
                { question: "Det er nokon som lyg i avhøyret sitt, kven?", answer: ["kokken", "daniel", "daniel gall", "kokken lyver", "gall"], hint: "De må samanlikne avhøyra mot avisutklippa." },
                { question: "Mordvåpenet vart aldri stadfesta. Legenda seier at mordvåpenet høyrde til doktorkontoret. Leit i fellesområda. Kva var mordvåpenet?", answer: ["reflekshammeren", "reflekshammaren", "reflekshammer", "hammaren", "hammer", "hammar", "reflekshammar"], hint: "De må finna medisinskapet og samanlikne det mot skildringa i obduksjonsrapporten." },
                { question: "No er me eitt steg nærmare mordaren. Åstadsundersøkinga har ein feil i seg. Kva objekt har politiet teke feil om i åstadsundersøkjinga?", answer: ["glasskåret", "glasskår", "vindauget", "vinduet", "vindu", "ruta", "glasruta", "glaset", "vindusruta"], hint: "De må sjå nøye på biletet for å finna feilen." },
                { question: "Det er eit dokument som aldri vart funne i peisestova. Skapet attmed pianoet gøymer noko. Finn det og løys saka. Kven var mordaren?", answer: ["hans", "hans jansen", "herr muller", "hans muller", "jansen", "muller"], hint: "Det er ei skjult skyvedør på skapet." }
            ],
            finalMessage: "De gjorde det lensmannen i Lom ikkje evna den stormfulle kvelden i 1946: De har avdekt sanninga!\nDen skuldige er Hans Jansen. Dokumentet frå peisestova avslørte kven han eigentleg var: Ingen fredeleg, sveitsisk gjest, men den tyske offiseren Hans Müller. Han kom ikkje til Lom for å flytte, men var driven av bekmørk hemn.\nOberstløytnant Vangli nytta i 1940 sin berykta «finger-metode» for å knekke tyske fangar. Den øydelagde venstrefingeren til Hans var inga skiulykke, men eit evigvarande minne om Vangli sin tortur.\nDå doktoren og presten forsvann inn på bakrommet, greip Hans sjansen og slo i hel mannen som hadde pint han. For å sleppe unna, knuste han ruta frå innsida, glasskåra låg jo på utsida, for å skape illusjonen av eit innbrot. Deretter sette han seg roleg tilbake i lenestolen i resepsjonen og las avisa.\nMorderen slapp unna i 1946, men takka vere dykk vil ikkje sanninga lenger liggje gravlagd. Gratulerer med strålande etterforskingsarbeid!",
            en: {
                name: "The Fossheim Hotel Mystery",
                tasks: [
                    { question: "Someone is lying in their interrogation. Who?", answer: ["kokken", "daniel", "daniel gall", "gall", "the cook", "cook"], hint: "Compare the interrogations against the newspaper clippings." },
                    { question: "The murder weapon was never confirmed. Legend says the murder weapon belonged to the doctor's office. Search the common areas. What was the murder weapon?", answer: ["reflekshammeren", "reflekshammaren", "reflekshammer", "hammer", "reflex hammer", "neurological hammer"], hint: "Find the medicine cabinet and compare it against the description in the autopsy report." },
                    { question: "We are now one step closer to the murderer. The crime scene investigation contains an error. Which object has the police gotten wrong in the crime scene investigation?", answer: ["glasskåret", "glasskår", "vindauget", "vinduet", "ruta", "window", "the window", "glass", "window pane", "broken window"], hint: "Look carefully at the image to find the error." },
                    { question: "There is a document that was never found in the parlour. The cabinet next to the piano is hiding something. Find it and solve the case. Who was the murderer?", answer: ["hans", "hans jansen", "herr muller", "hans muller", "jansen", "muller"], hint: "There is a hidden sliding door on the cabinet." }
                ],
                finalMessage: "You did what the sheriff of Lom was unable to do on that stormy evening in 1946: you have uncovered the truth!\n\nThe culprit is Hans Jansen. The document from the parlour revealed who he really was: no peaceful Swiss guest, but the German officer Hans Müller. He did not come to Lom to relocate, but was driven by pitch-black revenge.\n\nLieutenant Colonel Vangli used his notorious 'finger method' in 1940 to break German prisoners. Hans's damaged left finger was no skiing accident, but an everlasting reminder of Vangli's torture.\n\nWhen the doctor and the priest disappeared into the back room, Hans seized his chance and beat the man who had tormented him to death. To escape, he broke the window from the inside — the shards lay on the outside — to create the illusion of a break-in. He then sat calmly back in the armchair in the reception and read the newspaper.\n\nThe murderer escaped in 1946, but thanks to you, the truth will no longer lie buried. Congratulations on outstanding investigative work!"
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
                    { question: "A stereogram was found in the Kaiser's room — it has not been decoded. Find out what is in the stereogram and tell the bartender what it shows. Enter the figure here to proceed to the next task.", answer: ["kopp", "glass", "cup", "a cup", "a glass"], hint: "Start with the picture right up to your nose and stare unfocused through it. Then slowly pull the picture away while keeping a relaxed gaze." },
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
                { question: "Åpne konvolutt 2.\n\nHvordan klarte morderen å få giften i vinen? Morderen gjemte verktøyet i hotellet sine ganger. Finn den gjemte gjenstanden.", answer: ["sprøyte", "kanyle"], hint: "Verktøyet ligger til utstilling i et glassbur." },
                { question: "For å komme videre i mysteriet må dere forstå hva Reidar prøvde å fortelle til Siv i sine siste øyeblikk.\n\nTa turen til vinkjelleren for å løse oppgaven.", answer: ["Langhe Nebbiolo"], hint: "Se etter Hurdalsjøen sin egen vin for å finne svaret." },
                { question: "Hvem drepte Reidar?", answer: ["Margrete Hagen", "margrete", "margretehagen"], hint: "Det var noen som røpte seg i avhøret sitt." }
            ],
            finalMessage: "Mysteriet er løst: Gratulerer, etterforskere!\n\nDere gjorde det det lokale politiet i Ullensaker holdt på å overse. Dere har avslørt sannheten bak tragedien på Hurdalsjøen Hotell. Den skyldige er forfatteren Margrete Hagen. Motivet var desperasjon og grådighet. Margrete hadde bestukket Kåre Lindgren med 45 000 kroner for å sikre boken sin, «Brennesle», en lukrativ plass på pensumlisten. Da hotelldirektør Reidar Moen oppdaget korrupsjonen og truet med å varsle komiteen, så Margrete hele karrieren sin smuldre opp. Hun måtte stoppe ham. Fredag kveld snek hun seg ned i vinkjelleren. Med en sprøyte injiserte hun dødelige mengder arsenikk gjennom korken på Reidars personlige flaske med Langhe Nebbiolo. Men ingen morder er feilfri. I sin arroganse snakket Margrete bredt om den forgiftede vinen under politiavhøret, en detalj etterforskerne hadde holdt strengt hemmelig. Den språklige glippen ble hennes undergang. Reidar Moen får endelig fred, og takket være deres skarpe blikk for detaljer og logikk, vil Margrete Hagen bytte ut boksigneringer med en lang fengselsstraff.\n\nTakk for strålende innsats!",
            en: {
                name: "The Mystery at Hurdalsjøen",
                tasks: [
                    { question: "Open envelope 1.\n\nSomeone is lying in their interrogation. Who is lying?", answer: ["Felix Falk", "Felix", "felixfalk"], hint: "To expose the liar, check Reidar's answering machine." },
                    { question: "Open envelope 2.\n\nHow did the murderer get the poison into the wine? The murderer hid the tool in the hotel's corridors. Find the hidden object.", answer: ["sprøyte", "kanyle", "syringe", "needle", "injection"], hint: "The tool is on display in a glass case." },
                    { question: "To progress in the mystery, you must understand what Reidar was trying to tell Siv in his final moments.\n\nMake your way to the wine cellar to solve the task.", answer: ["Langhe Nebbiolo"], hint: "Look for Hurdalsjøen's own wine to find the answer." },
                    { question: "Who killed Reidar?", answer: ["Margrete Hagen", "margrete", "margretehagen"], hint: "Someone gave themselves away in their interrogation." }
                ],
                finalMessage: "The mystery is solved: Congratulations, investigators!\n\nYou did what the local police in Ullensaker were about to overlook. You have uncovered the truth behind the tragedy at Hurdalsjøen Hotel. The culprit is the author Margrete Hagen. The motive was desperation and greed. Margrete had bribed Kåre Lindgren with 45,000 kroner to secure a lucrative spot on the curriculum for her book, 'Brennesle'. When hotel director Reidar Moen discovered the corruption and threatened to report it to the committee, Margrete saw her entire career crumbling. She had to stop him. On Friday evening, she crept down to the wine cellar. With a syringe, she injected lethal amounts of arsenic through the cork into Reidar's personal bottle of Langhe Nebbiolo. But no murderer is flawless. In her arrogance, Margrete spoke openly about the poisoned wine during her police interrogation — a detail the investigators had kept strictly secret. That linguistic slip became her downfall. Reidar Moen finally gets peace, and thanks to your sharp eye for detail and logic, Margrete Hagen will exchange book signings for a long prison sentence.\n\nThank you for outstanding effort!"
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
                    audio: { src: "audio/oslo/clara-diary.mp3", ambient: "audio/oslo/writing-ambience.mp3" }
                },
                {
                    question: "You are standing where Clara waited. She never made it further.\n\nA soldier wrote a letter he never intended anyone to find. It was discovered among a dead captain's belongings in 1907, and buried without investigation.\n\nRead it carefully. It tells you where Clara was taken, and where she was buried. Find that place. What animal is on the object?\n\nOpen envelope 2.",
                    answer: ["elephant", "elefant"],
                    hint: "There's an animal on the cannon.",
                    audio: { src: "audio/oslo/soldier-letter.mp3", ambient: "audio/oslo/fortress-ambience.mp3" }
                },
                {
                    question: "You can now open the third envelope and see Clara's destiny. What can you see?",
                    answer: ["cranium", "head", "skull", "a cranium", "a head", "a skull"],
                    hint: "Try to look through the picture, behind it, to find the object.",
                    reward: { image: "img/oslo/via-village.jpg", download: "Via-Village-Oslo-Mystery.jpg", alt: "10% discount at VIA Village Foodcourt — discount code: Via Oslo Mystery" }
                },
                {
                    question: "You must find out who ordered Clara's death. Read the letter signed 'Rex' and the poem about a statue.\n\nWhen your group has agreed on a name, enter it here.\n\nOpen envelope 4.",
                    answer: ["King Haakon VII", "Haakon VII", "King Haakon", "Haakon 7", "Haakon", "Kong Haakon VII", "Kong Haakon", "Kong Haakon 7", "Håkon VII", "Kong Håkon VII", "Håkon", "Håkon 7", "Kong Håkon"],
                    hint: "The poem tells you to walk up the boulevard and read the name upon the pedestal of the king. The document states he represents 'Rex'. He is not in the park, but just beside it looking at the fortress.",
                    audio: { src: "audio/oslo/rex-letter.mp3", ambient: "audio/oslo/harbor-ambience.mp3" }
                }
            ],
            finalMessage: "Congratulations! You have solved The Oslo Mystery. You retraced Clara's steps from the monument at the harbor to her unmarked grave at Skarpenord Bastion. By reading the intercepted telegrams and secret letters, you deduced that 'Rex' ordered her removed to protect the Crown. The bronze statue of King Haakon VII stands as a reminder of the one who sealed her fate. Justice has finally been brought to light!"
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
        if (state.currentRating === 0) { alert(T('feedbackRatingAlert')); return; }
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
        if (confirm(T('clearAllConfirm'))) { await Storage.clearAll(); showLeaderboard(); }
    });

    await Storage.init();

    const savedSession = SessionStore.load();
    if (savedSession && savedSession.startTime && savedSession.mysteryId && savedSession.teamName) {
        const rawMystery = CONFIG.mysteries.find(m => m.id === savedSession.mysteryId);
        if (rawMystery) {
            const mystery = getMystery(rawMystery);
            const elapsedMin = Math.round((Date.now() - savedSession.startTime) / 60000);
            const taskNum = savedSession.currentTask + 1;
            const resume = confirm(T('reloadResume', savedSession.teamName, mystery.name, taskNum, mystery.tasks.length, elapsedMin));
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
    if (!isResume) { state.taskStartTime = Date.now(); SessionStore.save(); }

    const progressEl = document.getElementById("task-progress"); progressEl.innerHTML = "";
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = "hm-progress-dot" + (i < state.currentTask ? " completed" : "") + (i === state.currentTask ? " active" : "");
        progressEl.appendChild(dot);
    }
    document.getElementById("task-number").textContent = T('taskOf', state.currentTask + 1, total);
    document.getElementById("task-text").textContent = task.question;

    // Audio player — remove old, inject new if task has audio
    const existingPlayer = document.getElementById('task-audio-player');
    if (existingPlayer) existingPlayer.remove();
    if (task.audio) {
        const audioEl = document.createElement('div');
        audioEl.id = 'task-audio-player';
        audioEl.className = 'hm-audio-player';
        audioEl.innerHTML = `
            <div class="hm-audio-divider"><span>Evidence</span></div>
            <button class="hm-btn-audio" id="btn-play-audio">
                <span class="hm-audio-icon">✦</span>
                <span class="hm-audio-label">Hear the letter</span>
            </button>`;
        document.querySelector('#screen-task .hm-task-card').appendChild(audioEl);

        let ambientAudio = null, letterAudio = null, fadeInterval = null;

        function stopAudio() {
            if (letterAudio) { letterAudio.pause(); letterAudio = null; }
            if (fadeInterval) { clearInterval(fadeInterval); fadeInterval = null; }
            if (ambientAudio) { ambientAudio.pause(); ambientAudio = null; }
            const btn = document.getElementById('btn-play-audio');
            if (btn) { btn.classList.remove('playing'); btn.querySelector('.hm-audio-label').textContent = 'Hear the letter'; }
        }
        state.stopAudio = stopAudio;

        document.getElementById('btn-play-audio').addEventListener('click', function () {
            if (this.classList.contains('playing')) { stopAudio(); return; }

            const btn = this;
            btn.classList.add('playing');
            btn.querySelector('.hm-audio-label').textContent = 'Playing...';

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
                if (b) { b.classList.remove('playing'); b.querySelector('.hm-audio-label').textContent = 'Hear the letter'; }
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

    document.getElementById("task-answer").value = "";
    document.getElementById("task-answer").className = "hm-answer-input";
    document.getElementById("task-error").textContent = "";
    showScreen("task"); document.getElementById("task-answer").focus();
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

function giveUp(task) {
    if (!confirm(T('giveUpConfirm'))) return;
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
        <div class="hm-giveup-box"><div class="hm-giveup-label">${T('giveUpLabel')}</div><div class="hm-giveup-answer">${escapeHtml(correctAnswer)}</div><div class="hm-giveup-penalty">${T('giveUpPenalty')}</div></div>
        ${rewardHtml(task)}
    `;
    const isLast = state.currentTask === state.mystery.tasks.length - 1;
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
    const answer = normalizeAnswer(input.value);
    const answers = Array.isArray(task.answer) ? task.answer : [task.answer];
    if (answers.some(a => answer === normalizeAnswer(a))) {
        input.classList.add("correct"); document.getElementById("task-error").textContent = "";
        state.taskStats[state.currentTask].timeSpent = Date.now() - state.taskStartTime;
        const isLast = state.currentTask === state.mystery.tasks.length - 1;
        if (isLast) { finishGame(); } else { showSuccess(); }
    } else {
        input.classList.remove("wrong"); void input.offsetWidth; input.classList.add("wrong");
        document.getElementById("task-error").textContent = T('wrongAnswer');
        setTimeout(() => { input.classList.remove("wrong"); }, 600);
    }
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
        const avgRating = s.ratingCount > 0 ? (s.totalRating / s.ratingCount).toFixed(1) : "—";
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
                feedbackHtml += `<li class="hm-dash-feedback-item"><div><strong>${escapeHtml(f.team || "—")}</strong> <span class="hm-dash-stars">${f.rating}/5 ⭐</span><span style="color: gray; font-size: 0.7rem;">${new Date(f.date).toLocaleDateString()}</span></div><div class="hm-dash-comment">"${escapeHtml(f.comment)}"</div></li>`;
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
            row.innerHTML = `<span>${e.team} — ${formatTime(e.totalTime || e.time)} (${getMysteryName(e.mysteryId || mysteryId)})</span>`;
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
// GO!
init();

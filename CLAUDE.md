# Hotellmysteriet — Mystery-timer-app

## Prosjektkontekst

```
C:\Users\turne\ClaudeBrain\
├── konferansespill\     ← søsterprosjekt (Firebase-spill)
├── Hotellmysteriet\     ← dette prosjektet
└── (C:\Users\turne\.claude\skills\ ← Claude-skills, kan ikke flyttes)
```

| | |
|--|--|
| **Hosting** | Firebase Hosting (automatisk deploy via GitHub Actions) |
| **Repo** | https://github.com/einarlagerqvist-cmyk/Hotellmysteriet |
| **Live** | https://hotellmysteriet.web.app |
| **Deploy** | `git push` → GitHub Actions → live. Manuelt: `firebase deploy --only hosting` |

---

## Skills for mysteriearbeid — bruk disse proaktivt

### Innholdsdesign
- `/whodunnit-designer:whodunnit-ekspert` — overordnet ekspert på mysteriedesign og spillopplevelse
- `/whodunnit-designer:nytt-mysterium` — start nytt mysterium fra bunnen av
- `/whodunnit-designer:karakter` — generer ny karakter med bakgrunn, motiv og hemmelighet
- `/whodunnit-designer:bevis` — skriv bevismateriale ferdig formatert for Canva
- `/whodunnit-designer:tidslinje` — bygg tidslinje og avdekk logiske brister
- `/whodunnit-designer:oppgave` — lag gjesteoppdrag basert på kjede-logikk
- `/whodunnit-designer:hotell-instruksjon` — lag instruksjonsark for hotellpersonalet

### Automatisering
- `/anthropic-skills:mysterium-auto` — kjør hele mysteriedesign-prosessen automatisk (plott → karakterer → tidslinje → bevis → oppgaver) med minimal input
- `/anthropic-skills:mysterie-revisoren` — kvalitetssikring og konsistenssjekk av ferdig mysterium

### Teknisk
- `/hotellmysteriet-engine` — arkitektur, legge til mysterier, språksystem, svar-validering
- `/design:ux-copy` — skriv mysterie-copy, karakterstemmer og instruksjoner
- `/anthropic-skills:canvas-design` — lag plakater og visuelt materiale

---

## Teknisk arkitektur

**Tre filer — ingen build-prosess:**
```
Hotellmysteriet/
├── index.html   ← 6 skjermdivier, minimal HTML
├── script.js    ← all logikk (~960 linjer)
└── style.css    ← styling
```

### URL-parametere
| Parameter | Eksempel | Effekt |
|-----------|---------|--------|
| `?m=<id>` | `?m=hafslund` | Forhåndsvelger mysteriet |
| `?lang=en` | `?lang=en` | Setter engelsk (standard: norsk) |

Del alltid ferdig URL til spillerne: `?m=oslo&lang=en`

### Legge til nytt mysterium
Legg til objekt i `CONFIG.mysteries`-arrayet i `script.js`:

```js
{
  id: "mitthotell",
  name: "Mysteriet på Mitt Hotell",
  intro: "Valgfri introduksjonstekst...",   // utelat for å hoppe over intro
  tasks: [
    {
      question: "Hva heter morderen?",
      answer: ["Hansen", "Per Hansen"],      // array — alle varianter aksepteres
      hint: "Se på portrettet i resepsjonen"
    }
  ],
  finalMessage: "Gratulerer! Dere løste mysteriet.",
  en: {                                      // utelat hvis ingen engelsk versjon
    name: "The Mitt Hotell Mystery",
    tasks: [ { question: "...", answer: ["..."], hint: "..." } ],
    finalMessage: "Congratulations!"
  }
}
```

**Svar-validering:** stor/liten bokstav og mellomrom ignoreres automatisk.

### Språksystem
- All UI-tekst i `UI_TEXT`-objektet (linje 6–141 i script.js)
- Hentes med `T('nøkkel')` — faller tilbake til norsk hvis engelsk mangler
- Mysterieinnhold: `en`-objektet overlapper basen ved `lang=en`

### Poengsystem
```
Sluttid = faktisk tid + (hint × 5 min) + (gi-opp × 10 min)
```

### Datalagring
- **Firebase Realtime Database** (primær) — `/times/{id}` og `/feedback/{id}`
- **localStorage** (fallback) — fungerer offline

### Admin-panel
Passord: `admin123` (linje 325 i script.js).
Gir tilgang til: slette resultater, statistikk per mysterium, all tilbakemelding.

---

## Eksisterende mysterier

| ID | Hotell | Språk | Oppgaver | Innholdsmappe |
|----|--------|-------|----------|---------------|
| `hafslund` | Hafslund Hovedgård | NO/EN | 3 | `Mysterier/Hafslund Hovedgård/` |
| `ramme` | Ramme | NO/EN | 9 | `Mysterier/Ramme/` |
| `fossheim` | Fossheim Hotell | NO | 4 | `Mysterier/Fossheim Hotell/` |
| `dalen` | Dalen Hotel | NO/EN | 6 | `Mysterier/Dalen Hotel/` |
| `hurdalsjoen` | Hurdalsjøen | NO/EN | 4 | `Mysterier/Hurdalsjøen Hotell/` |
| `oslo` | The Oslo Mystery | EN | 4 | `Mysterier/The Oslo Mystery/` |
| `sandven` | Hotel Sandven | NO | 5 | `Mysterier/Hotel Sandven/` |
| — | Skrekkhytta | NO | — | `Mysterier/Skrekkhytta/` |

## Innholdsstruktur

```
Hotellmysteriet\
├── index.html          ← app-koden
├── script.js
├── style.css
├── CLAUDE.md
└── Mysterier\          ← alt innhold og referanser
    ├── Dalen Hotel\        ← PDFer, bilder, avtaler
    ├── Fossheim Hotell\
    ├── Hafslund Hovedgård\
    ├── Hurdalsjøen Hotell\
    ├── Ramme\
    ├── Skrekkhytta\        ← eget konsept, ikke i app ennå
    ├── The Oslo Mystery\
    └── _Referanser\        ← håndbøker, design-docs, markedsføring
```

### Bruk ved nytt mysterium
Når du lager et nytt mysterium, les relevante mapper som referanse:
- **Stil og tone:** les `SISTE_`-filene i eksisterende mysterier (disse er de ferdige versjonene)
- **Oppgavestruktur:** se på `script.js` for hvordan eksisterende mysteries er definert
- **Gotchas og designprinsipper:** `_Referanser/Logiske 'Gotchas'...pdf` og `Murder Mystery Twists...PDF`
- **Canva-format:** se `_Referanser/Hotellsviket_Konvolutter_Canva.md` for formateringsmønster

---

## To leveransemodeller

### Modell 1: Skreddersydd mysterium
Bygget spesifikt for ett hotell — bruker hotellets faktiske historie, rom, ansatte og estetikk. Høy verdi per kunde, lengre produksjonstid.
**Eksempler:** Dalen, Ramme, Fossheim, Hafslund, Hurdalsjøen

### Modell 2: Generisk mal med tilpasning
Ett ferdig plott der noen få elementer byttes ut per hotell (hotellnavn, romnavn, én lokal detalj). Raskere salg, lavere produksjonskost, skalerbart.
**Eksempel:** Leangkollen (første mal av denne typen)

Begge modellene er strategisk viktige. Nye hoteller bør alltid vurdere hvilken modell som passer best før design starter.

---

## Nytt hotell — arbeidsflyt

1. **Design** — `/anthropic-skills:mysterium-auto` eller `/whodunnit-designer:nytt-mysterium`
   - Plott, karakterer, tidslinje, oppgaver, bevismateriale
   - Bruk eksisterende mysterier i `_Referanser/` som stil-referanse

2. **Canva** — Produser bevismateriale og oppgavekort
   - `/whodunnit-designer:bevis` for ferdig formatert tekst
   - Lagre ferdig PDF i `Mysterier/<Hotellnavn>/`

3. **Kode** — Legg til mysteriet i `script.js`
   - Nytt objekt i `CONFIG.mysteries`-arrayet (se mal under "Legge til nytt mysterium")
   - Opprett mappe `Mysterier/<Hotellnavn>/` for innhold

4. **Deploy** — `git push` → live på ~30 sek
   - Test med `?m=<id>` og `?m=<id>&lang=en` (hvis engelsk)

5. **Hotell-instruksjon** — `/whodunnit-designer:hotell-instruksjon`
   - Instruksjonsark til personalet for oppsett og gjennomføring

6. **Leveranse** — Send hotellet test-URL + instruksjonsark
   - Del `https://hotellmysteriet.web.app?m=<id>` til gjennomgang

---

## Arbeidsfilosofi
- **Vanilla JS alltid** — ingen bundlere, ingen frameworks
- **Norsk** — all kommunikasjon og UI på norsk (unntatt engelske mysteries)
- **Minimal input** — ved automatiserte oppgaver: kjør uten å spørre unødvendig
- **Push = deploy** — ikke tenk på bygg eller pipeline, bare push til GitHub

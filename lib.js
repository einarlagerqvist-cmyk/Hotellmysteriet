// ============================================================
//  PURE UTILITY FUNCTIONS — importable by both script.js and tests
// ============================================================

export function formatTime(ms) {
    const t = Math.floor(ms / 1000);
    return `${String(Math.floor(t / 3600)).padStart(2, "0")}:${String(Math.floor((t % 3600) / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

export function normalizeAnswer(str) {
    return str.trim().toUpperCase().replace(/\s+/g, "");
}

export function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
}

export function isCorrectAnswer(userInput, taskAnswers) {
    const normalized = normalizeAnswer(userInput);
    const answers = Array.isArray(taskAnswers) ? taskAnswers : [taskAnswers];
    return answers.some(a => normalized === normalizeAnswer(a));
}

export function calculateTotalTime(elapsed, hintsUsed, gaveUpCount, penaltyPerHint, penaltyPerGiveUp) {
    const penalty = hintsUsed * penaltyPerHint + gaveUpCount * penaltyPerGiveUp;
    return { penalty, totalTime: elapsed + penalty };
}

export function createT(lang, uiText) {
    return function T(key, ...args) {
        const dict = uiText[lang] || uiText.no;
        const val = dict[key] !== undefined ? dict[key] : (uiText.no[key] || key);
        return typeof val === "function" ? val(...args) : val;
    };
}

export const localStore = {
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
        if (all[mysteryId]) {
            all[mysteryId].splice(index, 1);
            localStorage.setItem("hotellmysteriet_times", JSON.stringify(all));
        }
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
};

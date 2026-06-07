import { describe, it, expect } from 'vitest';
import { createT } from '../lib.js';

// Minimal UI_TEXT fixture — covers the cases we need without importing the whole script
const UI_TEXT = {
    no: {
        appTitle: 'Hotellmysteriet',
        taskOf: (n, t) => `Oppgave ${n} av ${t}`,
        penaltyHint: (n) => `${n} hint`,
        penaltyGaveUp: (n) => `${n} oppgave${n > 1 ? 'r' : ''} gitt opp`,
        rankN: (r, t) => `Plass ${r} av ${t}`,
        noEntries: 'Ingen tider registrert ennå',
    },
    en: {
        appTitle: 'Hotel Mystery',
        taskOf: (n, t) => `Task ${n} of ${t}`,
        penaltyHint: (n) => `${n} hint${n > 1 ? 's' : ''}`,
        penaltyGaveUp: (n) => `${n} task${n > 1 ? 's' : ''} given up`,
        rankN: (r, t) => `Place ${r} of ${t}`,
        noEntries: 'No times recorded yet',
    }
};

describe('createT — Norwegian', () => {
    const T = createT('no', UI_TEXT);

    it('returns a plain string value', () => {
        expect(T('appTitle')).toBe('Hotellmysteriet');
        expect(T('noEntries')).toBe('Ingen tider registrert ennå');
    });

    it('calls a function value with the provided arguments', () => {
        expect(T('taskOf', 1, 3)).toBe('Oppgave 1 av 3');
        expect(T('taskOf', 3, 3)).toBe('Oppgave 3 av 3');
    });

    it('formats hint penalty without pluralization', () => {
        expect(T('penaltyHint', 1)).toBe('1 hint');
        expect(T('penaltyHint', 3)).toBe('3 hint');
    });

    it('pluralizes give-up penalty correctly in Norwegian', () => {
        expect(T('penaltyGaveUp', 1)).toBe('1 oppgave gitt opp');
        expect(T('penaltyGaveUp', 2)).toBe('2 oppgaver gitt opp');
    });

    it('formats rank', () => {
        expect(T('rankN', 4, 10)).toBe('Plass 4 av 10');
    });

    it('falls back to the key when the key does not exist in any language', () => {
        expect(T('completelyUnknownKey')).toBe('completelyUnknownKey');
    });
});

describe('createT — English', () => {
    const T = createT('en', UI_TEXT);

    it('returns English string value', () => {
        expect(T('appTitle')).toBe('Hotel Mystery');
        expect(T('noEntries')).toBe('No times recorded yet');
    });

    it('calls English function values with arguments', () => {
        expect(T('taskOf', 2, 4)).toBe('Task 2 of 4');
    });

    it('pluralizes hint penalty in English', () => {
        expect(T('penaltyHint', 1)).toBe('1 hint');
        expect(T('penaltyHint', 2)).toBe('2 hints');
    });

    it('pluralizes give-up penalty in English', () => {
        expect(T('penaltyGaveUp', 1)).toBe('1 task given up');
        expect(T('penaltyGaveUp', 3)).toBe('3 tasks given up');
    });

    it('formats rank in English', () => {
        expect(T('rankN', 5, 8)).toBe('Place 5 of 8');
    });

    it('falls back to the key for unknown keys even in English mode', () => {
        expect(T('completelyUnknownKey')).toBe('completelyUnknownKey');
    });
});

describe('createT — unknown language falls back to Norwegian', () => {
    const T = createT('fr', UI_TEXT);

    it('falls back to Norwegian for an unknown language code', () => {
        expect(T('appTitle')).toBe('Hotellmysteriet');
    });
});

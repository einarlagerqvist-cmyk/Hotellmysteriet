import { describe, it, expect } from 'vitest';
import { formatTime, normalizeAnswer, escapeHtml, isCorrectAnswer, calculateTotalTime } from '../lib.js';

// ============================================================
//  formatTime
// ============================================================
describe('formatTime', () => {
    it('formats zero as 00:00:00', () => {
        expect(formatTime(0)).toBe('00:00:00');
    });

    it('formats 1 second', () => {
        expect(formatTime(1000)).toBe('00:00:01');
    });

    it('formats 1 minute', () => {
        expect(formatTime(60_000)).toBe('00:01:00');
    });

    it('formats 1 hour', () => {
        expect(formatTime(3_600_000)).toBe('01:00:00');
    });

    it('formats 1 hour 1 minute 1 second', () => {
        expect(formatTime(3_661_000)).toBe('01:01:01');
    });

    it('pads single-digit values with zeros', () => {
        expect(formatTime(9_000)).toBe('00:00:09');
        expect(formatTime(9 * 60_000)).toBe('00:09:00');
    });

    it('represents the 5-minute hint penalty correctly', () => {
        expect(formatTime(5 * 60_000)).toBe('00:05:00');
    });

    it('represents the 10-minute give-up penalty correctly', () => {
        expect(formatTime(10 * 60_000)).toBe('00:10:00');
    });

    it('handles durations beyond one hour (e.g. 90 minutes)', () => {
        expect(formatTime(90 * 60_000)).toBe('01:30:00');
    });

    it('truncates sub-second milliseconds rather than rounding', () => {
        expect(formatTime(1_999)).toBe('00:00:01');
    });
});

// ============================================================
//  normalizeAnswer
// ============================================================
describe('normalizeAnswer', () => {
    it('uppercases the input', () => {
        expect(normalizeAnswer('butler')).toBe('BUTLER');
    });

    it('trims leading and trailing whitespace', () => {
        expect(normalizeAnswer('  butler  ')).toBe('BUTLER');
    });

    it('collapses internal spaces', () => {
        expect(normalizeAnswer('Jacob Juel')).toBe('JACOBJUEL');
    });

    it('collapses multiple internal spaces', () => {
        expect(normalizeAnswer('wells  fargo')).toBe('WELLSFARGO');
    });

    it('handles an already-normalized string', () => {
        expect(normalizeAnswer('MARCUS')).toBe('MARCUS');
    });

    it('handles Norwegian special characters', () => {
        expect(normalizeAnswer('øyevitne')).toBe('ØYEVITNE');
        expect(normalizeAnswer('Ålesund')).toBe('ÅLESUND');
        expect(normalizeAnswer('ærlig')).toBe('ÆRLIG');
    });

    it('handles an empty string', () => {
        expect(normalizeAnswer('')).toBe('');
    });

    it('makes multi-word stored answers match user input with spaces', () => {
        expect(normalizeAnswer('Wells Fargo')).toBe(normalizeAnswer('wellsfargo'));
    });
});

// ============================================================
//  escapeHtml
// ============================================================
describe('escapeHtml', () => {
    it('escapes < and >', () => {
        expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
    });

    it('escapes &', () => {
        expect(escapeHtml('fish & chips')).toBe('fish &amp; chips');
    });

    it('leaves plain text unchanged', () => {
        expect(escapeHtml('Hello world')).toBe('Hello world');
    });

    it('handles an empty string', () => {
        expect(escapeHtml('')).toBe('');
    });

    it('handles combined special characters', () => {
        expect(escapeHtml('<div class="test">&</div>')).toBe('&lt;div class="test"&gt;&amp;&lt;/div&gt;');
    });
});

// ============================================================
//  isCorrectAnswer
// ============================================================
describe('isCorrectAnswer', () => {
    it('matches an exact answer', () => {
        expect(isCorrectAnswer('marcus', ['marcus'])).toBe(true);
    });

    it('is case-insensitive', () => {
        expect(isCorrectAnswer('Marcus', ['marcus'])).toBe(true);
        expect(isCorrectAnswer('MARCUS', ['marcus'])).toBe(true);
    });

    it('ignores surrounding whitespace', () => {
        expect(isCorrectAnswer('  marcus  ', ['marcus'])).toBe(true);
    });

    it('matches when user omits spaces that are in the stored answer', () => {
        expect(isCorrectAnswer('wellsfargo', ['wells fargo'])).toBe(true);
    });

    it('matches when user adds spaces that are not in the stored answer', () => {
        expect(isCorrectAnswer('wells fargo', ['wellsfargo'])).toBe(true);
    });

    it('accepts any of multiple valid answers', () => {
        const answers = ['marcus', 'marcusrosenkrantz', 'rosenkrantz'];
        expect(isCorrectAnswer('rosenkrantz', answers)).toBe(true);
        expect(isCorrectAnswer('Marcus Rosenkrantz', answers)).toBe(true);
    });

    it('rejects a wrong answer', () => {
        expect(isCorrectAnswer('linehansen', ['marcus', 'rosenkrantz'])).toBe(false);
    });

    it('rejects an empty answer', () => {
        expect(isCorrectAnswer('', ['marcus'])).toBe(false);
    });

    it('accepts a single string (not array) as the answer list', () => {
        expect(isCorrectAnswer('butler', 'butler')).toBe(true);
    });

    it('handles Norwegian characters correctly', () => {
        const answers = ['øyevitne', 'øyevitner'];
        expect(isCorrectAnswer('Øyevitne', answers)).toBe(true);
        expect(isCorrectAnswer('øyevitner', answers)).toBe(true);
    });
});

// ============================================================
//  calculateTotalTime
// ============================================================
describe('calculateTotalTime', () => {
    const PENALTY_HINT = 5 * 60 * 1000;     // 300 000 ms
    const PENALTY_GIVEUP = 10 * 60 * 1000;  // 600 000 ms

    it('returns zero penalty when no hints or give-ups', () => {
        const { penalty, totalTime } = calculateTotalTime(60_000, 0, 0, PENALTY_HINT, PENALTY_GIVEUP);
        expect(penalty).toBe(0);
        expect(totalTime).toBe(60_000);
    });

    it('adds one hint penalty', () => {
        const { penalty, totalTime } = calculateTotalTime(60_000, 1, 0, PENALTY_HINT, PENALTY_GIVEUP);
        expect(penalty).toBe(300_000);
        expect(totalTime).toBe(360_000);
    });

    it('adds one give-up penalty', () => {
        const { penalty, totalTime } = calculateTotalTime(60_000, 0, 1, PENALTY_HINT, PENALTY_GIVEUP);
        expect(penalty).toBe(600_000);
        expect(totalTime).toBe(660_000);
    });

    it('adds multiple hints', () => {
        const { penalty } = calculateTotalTime(0, 3, 0, PENALTY_HINT, PENALTY_GIVEUP);
        expect(penalty).toBe(3 * 300_000);
    });

    it('combines hints and give-ups', () => {
        const { penalty, totalTime } = calculateTotalTime(120_000, 2, 1, PENALTY_HINT, PENALTY_GIVEUP);
        expect(penalty).toBe(2 * 300_000 + 600_000);
        expect(totalTime).toBe(120_000 + 2 * 300_000 + 600_000);
    });
});

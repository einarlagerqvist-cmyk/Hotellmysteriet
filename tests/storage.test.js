import { describe, it, expect, beforeEach } from 'vitest';
import { localStore } from '../lib.js';

beforeEach(() => {
    localStorage.clear();
});

// ============================================================
//  getEntries / saveEntry
// ============================================================
describe('localStore.getEntries', () => {
    it('returns an empty array when nothing is stored', () => {
        expect(localStore.getEntries('hafslund')).toEqual([]);
    });

    it('returns an empty array for an unknown mystery id', () => {
        localStore.saveEntry('hafslund', { team: 'A', time: 1000 });
        expect(localStore.getEntries('oslo')).toEqual([]);
    });

    it('returns saved entries for a specific mystery', () => {
        const entry = { team: 'Detektivene', time: 120_000, totalTime: 120_000 };
        localStore.saveEntry('hafslund', entry);
        const result = localStore.getEntries('hafslund');
        expect(result).toHaveLength(1);
        expect(result[0].team).toBe('Detektivene');
    });

    it('stores multiple entries for the same mystery', () => {
        localStore.saveEntry('hafslund', { team: 'A', time: 1000 });
        localStore.saveEntry('hafslund', { team: 'B', time: 2000 });
        expect(localStore.getEntries('hafslund')).toHaveLength(2);
    });

    it('does not mix entries from different mysteries', () => {
        localStore.saveEntry('hafslund', { team: 'A', time: 1000 });
        localStore.saveEntry('ramme', { team: 'B', time: 2000 });
        expect(localStore.getEntries('hafslund')).toHaveLength(1);
        expect(localStore.getEntries('ramme')).toHaveLength(1);
    });

    it('returns all entries across all mysteries when called without an id', () => {
        localStore.saveEntry('hafslund', { team: 'A', time: 1000 });
        localStore.saveEntry('ramme', { team: 'B', time: 2000 });
        const all = localStore.getEntries(null);
        expect(all).toHaveLength(2);
    });

    it('tags each entry with its mystery id when fetching all', () => {
        localStore.saveEntry('hafslund', { team: 'A', time: 1000 });
        const all = localStore.getEntries(null);
        expect(all[0].mysteryId).toBe('hafslund');
    });
});

// ============================================================
//  deleteEntry
// ============================================================
describe('localStore.deleteEntry', () => {
    it('removes the entry at the given index', () => {
        localStore.saveEntry('hafslund', { team: 'A' });
        localStore.saveEntry('hafslund', { team: 'B' });
        localStore.deleteEntry('hafslund', 0);
        const remaining = localStore.getEntries('hafslund');
        expect(remaining).toHaveLength(1);
        expect(remaining[0].team).toBe('B');
    });

    it('does nothing when the mystery id does not exist', () => {
        expect(() => localStore.deleteEntry('nonexistent', 0)).not.toThrow();
    });
});

// ============================================================
//  clearAll
// ============================================================
describe('localStore.clearAll', () => {
    it('removes all time entries', () => {
        localStore.saveEntry('hafslund', { team: 'A' });
        localStore.clearAll();
        expect(localStore.getEntries('hafslund')).toEqual([]);
    });

    it('removes all feedback entries', () => {
        localStore.saveFeedback('hafslund', { team: 'A', rating: 5, comment: '' });
        localStore.clearAll();
        expect(localStore.getFeedback('hafslund')).toEqual([]);
    });

    it('is safe to call on an already-empty store', () => {
        expect(() => localStore.clearAll()).not.toThrow();
    });
});

// ============================================================
//  getFeedback / saveFeedback
// ============================================================
describe('localStore feedback', () => {
    it('returns empty array when no feedback exists', () => {
        expect(localStore.getFeedback('hafslund')).toEqual([]);
    });

    it('saves and retrieves feedback for a mystery', () => {
        const fb = { team: 'Teamet', rating: 4, comment: 'Bra!', date: '2024-01-01' };
        localStore.saveFeedback('hafslund', fb);
        const result = localStore.getFeedback('hafslund');
        expect(result).toHaveLength(1);
        expect(result[0].rating).toBe(4);
    });

    it('stores multiple feedback entries for the same mystery', () => {
        localStore.saveFeedback('hafslund', { rating: 5 });
        localStore.saveFeedback('hafslund', { rating: 3 });
        expect(localStore.getFeedback('hafslund')).toHaveLength(2);
    });

    it('does not mix feedback from different mysteries', () => {
        localStore.saveFeedback('hafslund', { rating: 5 });
        localStore.saveFeedback('ramme', { rating: 2 });
        expect(localStore.getFeedback('hafslund')).toHaveLength(1);
        expect(localStore.getFeedback('ramme')).toHaveLength(1);
    });

    it('returns all feedback across mysteries when called without an id', () => {
        localStore.saveFeedback('hafslund', { rating: 5 });
        localStore.saveFeedback('ramme', { rating: 2 });
        expect(localStore.getFeedback(null)).toHaveLength(2);
    });

    it('tags each feedback entry with its mystery id when fetching all', () => {
        localStore.saveFeedback('ramme', { rating: 3 });
        const all = localStore.getFeedback(null);
        expect(all[0].mysteryId).toBe('ramme');
    });
});

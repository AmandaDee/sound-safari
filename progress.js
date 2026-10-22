/* Only distinct correctly answered words are stored, separately for each trail. */
(function (scope) {
    'use strict';
    const STORAGE_KEY = 'sound-safari.progress.v1';
    const phonics = typeof module === 'object' && module.exports ? require('./phonics') : scope.SafariPhonics;

    function createProgress(challenges, storage = null) {
        const levels = Object.keys(challenges);
        const known = Object.fromEntries(levels.map(level => [level, new Set(challenges[level].map(c => c.word))]));
        const explored = Object.fromEntries(levels.map(level => [level, new Set()]));
        const listeners = new Set();
        let persistent = Boolean(storage);
        try {
            const saved = JSON.parse(storage?.getItem(STORAGE_KEY) || 'null');
            if (saved?.version === 1) {
                for (const level of levels) {
                    if (Array.isArray(saved.words?.[level])) {
                        saved.words[level].filter(word => known[level].has(word)).forEach(word => explored[level].add(word));
                    }
                }
            }
        } catch {
            persistent = false; /* An unreadable save must never prevent play. */
        }

        function snapshot(level) {
            if (!Object.hasOwn(explored, level)) throw new Error('Unknown progress level');
            const patterns = [...new Set(challenges[level].flatMap(c => phonics.getPatterns(c)))].sort().map(pattern => {
                const words = challenges[level].filter(c => phonics.getPatterns(c).includes(pattern)).map(c => c.word);
                const foundWords = words.filter(word => explored[level].has(word));
                return {pattern, words, foundWords, found: foundWords.length > 0};
            });
            return {count: explored[level].size, total: known[level].size, patterns, persistent};
        }

        function record(level, word) {
            if (!Object.hasOwn(known, level) || !known[level].has(word) || explored[level].has(word)) return false;
            explored[level].add(word);
            if (storage) {
                try {
                    storage.setItem(STORAGE_KEY, JSON.stringify({
                        version: 1,
                        words: Object.fromEntries(levels.map(key => [key, [...explored[key]]]))
                    }));
                    persistent = true;
                } catch {
                    persistent = false;
                }
            }
            listeners.forEach(listener => listener());
            return true;
        }

        return {
            snapshot, record, subscribe(listener) {
                listeners.add(listener);
                return () => listeners.delete(listener);
            }
        };
    }

    if (typeof module === 'object' && module.exports) module.exports = {createProgress, STORAGE_KEY};
    else {
        let storage = null;
        try {
            storage = scope.localStorage;
        } catch { /* Private or restricted browser. */
        }
        scope.SafariProgress = {createProgress, store: createProgress(scope.SAFARI_CHALLENGES, storage)};
    }
})(globalThis);

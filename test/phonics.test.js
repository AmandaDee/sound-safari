const {test} = require('node:test');
const assert = require('node:assert/strict');
const challenges = require('../challenges');
const {getSoundGroups, getPatterns} = require('../phonics');
const {createProgress} = require('../progress');

test('every tile belongs to exactly one sound, with supported split patterns in each stage', () => {
    assert.equal(challenges.ks1.length, 115);
    assert.equal(challenges.ks2.length, 108);
    for (const [stage, bank] of Object.entries(challenges)) {
        const split = bank.filter(c => c.soundGroups);
        assert.equal(split.length, stage === 'ks1' ? 15 : 8);
        for (const c of bank) {
            const groups = getSoundGroups(c);
            assert.equal(groups.length, c.audioKeys.length, c.word);
            assert.deepEqual(groups.flatMap(g => g.tiles).sort((a, b) => a - b), c.sounds.map((_, i) => i), c.word);
            if (c.soundLabels) assert.equal(c.soundLabels.length, groups.length);
            for (const group of groups.filter(g => g.tiles.length > 1)) {
                assert.equal(group.tiles.length, 2);
                assert.equal(group.tiles[1] - group.tiles[0], 2);
                assert.ok(['a–e', 'i–e', 'o–e', 'u–e'].includes(group.spelling));
                assert.equal(c.sounds[group.tiles[1]], 'e');
            }
        }
    }
});

test('split digraphs in compounds keep all other sounds in order', () => {
    const cake = challenges.ks1.find(c => c.word === 'cake');
    assert.deepEqual(getSoundGroups(cake).map(g => g.tiles), [[0], [1, 3], [2]]);
    const compound = challenges.ks2.find(c => c.word === 'cupcake');
    assert.deepEqual(getSoundGroups(compound).map(g => g.audioKey), ['k', 'u', 'p', 'k', 'ai', 'k']);
    assert.deepEqual(getPatterns(compound), ['c', 'u', 'p', 'c', 'a–e', 'k']);
});

test('u–e can use two pronunciations without changing its written collection pattern', () => {
    const cube = getSoundGroups(challenges.ks1.find(c => c.word === 'cube')).find(g => g.spelling === 'u–e');
    const flute = getSoundGroups(challenges.ks1.find(c => c.word === 'flute')).find(g => g.spelling === 'u–e');
    assert.equal(cube.audioKey, 'yoo');
    assert.equal(flute.audioKey, 'oo-long');
});

test('the collection records a split pattern once without treating final e as a separate sound', () => {
    const bank = {
        ks1: [challenges.ks1.find(c => c.word === 'cake')],
        ks2: [challenges.ks2.find(c => c.word === 'cupcake')]
    };
    const progress = createProgress(bank);
    progress.record('ks1', 'cake');
    const state = progress.snapshot('ks1');
    assert.deepEqual(state.patterns.map(p => p.pattern), ['a–e', 'c', 'k']);
    assert.deepEqual(state.patterns.find(p => p.pattern === 'a–e').foundWords, ['cake']);
    assert.equal(progress.snapshot('ks2').count, 0);
});

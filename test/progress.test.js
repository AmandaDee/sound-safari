const {test} = require('node:test');
const assert = require('node:assert/strict');
const {createProgress, STORAGE_KEY} = require('../progress');
const challenges = require('../challenges');

function memoryStorage(initial) {
    let value = initial || null;
    return {
        getItem(key) {
            assert.equal(key, STORAGE_KEY);
            return value;
        },
        setItem(key, next) {
            assert.equal(key, STORAGE_KEY);
            value = next;
        }
    };
}

test('passport counts distinct solved words and keeps levels separate', () => {
    const progress = createProgress(challenges);
    assert.equal(progress.snapshot('ks1').count, 0);
    assert.equal(progress.record('ks1', 'ship'), true);
    assert.equal(progress.record('ks1', 'ship'), false);
    assert.equal(progress.record('ks1', 'not-a-challenge'), false);
    assert.equal(progress.record('invalid', 'ship'), false);
    assert.equal(progress.snapshot('ks1').count, 1);
    assert.equal(progress.snapshot('ks2').count, 0);
    progress.record('ks2', 'sunset');
    assert.equal(progress.snapshot('ks2').count, 1);
    assert.equal(progress.snapshot('ks1').total, challenges.ks1.length);
});

test('the collection derives explored patterns from solved words', () => {
    const progress = createProgress(challenges);
    progress.record('ks1', 'ship');
    const snapshot = progress.snapshot('ks1');
    const sh = snapshot.patterns.find(item => item.pattern === 'sh');
    assert.equal(sh.found, true);
    assert.deepEqual(sh.foundWords, ['ship']);
    assert.ok(sh.words.includes('fish'));
    assert.equal(snapshot.patterns.find(item => item.pattern === 'ai').found, false);
});

test('progress survives reloads and ignores stale or malformed word entries', () => {
    const storage = memoryStorage();
    const first = createProgress(challenges, storage);
    first.record('ks1', 'ship');
    first.record('ks2', 'sunset');
    const restored = createProgress(challenges, storage);
    assert.equal(restored.snapshot('ks1').count, 1);
    assert.equal(restored.snapshot('ks2').count, 1);
    const dirty = createProgress(challenges, memoryStorage(JSON.stringify({
        version: 1,
        words: {ks1: ['ship', 'ship', null, 'deleted-word'], ks2: 'bad'}
    })));
    assert.equal(dirty.snapshot('ks1').count, 1);
    assert.equal(dirty.snapshot('ks2').count, 0);
});

test('unavailable storage and corrupt saves never prevent play', () => {
    const storage = {
        getItem() {
            throw new Error('blocked');
        }, setItem() {
            throw new Error('blocked');
        }
    };
    const progress = createProgress(challenges, storage);
    assert.equal(progress.snapshot('ks1').persistent, false);
    assert.equal(progress.record('ks1', 'ship'), true);
    assert.equal(progress.snapshot('ks1').count, 1);
    assert.equal(progress.snapshot('ks1').persistent, false);
    const corrupt = createProgress(challenges, memoryStorage('not json'));
    assert.equal(corrupt.snapshot('ks1').count, 0);
    assert.equal(corrupt.record('ks1', 'ship'), true);
    assert.equal(corrupt.snapshot('ks1').persistent, true);
});

test('subscriptions update once per new word and can be removed', () => {
    const progress = createProgress(challenges);
    let updates = 0;
    const unsubscribe = progress.subscribe(() => updates++);
    progress.record('ks1', 'ship');
    progress.record('ks1', 'ship');
    assert.equal(updates, 1);
    unsubscribe();
    progress.record('ks1', 'cat');
    assert.equal(updates, 1);
});

test('reaching stamp thresholds requires different words', () => {
    const progress = createProgress(challenges);
    for (const [index, challenge] of challenges.ks1.entries()) {
        progress.record('ks1', challenge.word);
        assert.equal(progress.snapshot('ks1').count, index + 1);
    }
    assert.equal(progress.snapshot('ks1').count, challenges.ks1.length);
});

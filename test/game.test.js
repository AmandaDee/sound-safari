const {test} = require('node:test');
const assert = require('node:assert/strict');
const {createGame: createGameModel} = require('../game');
// Existing rule tests use a repeatable source order; shuffle is tested below.
const createGame = bank => createGameModel(bank, {random: () => 0.999999});
const challenges = require('../challenges');

test('an incorrect answer permits another attempt without advancing', () => {
    const game = createGame(challenges);
    const wrong = game.challenge.choices.find(([label]) => label !== game.challenge.word)[0];
    assert.equal(game.choose(wrong), 'incorrect');
    assert.equal(game.solved, false);
    assert.equal(game.next(), false);
    assert.equal(game.index, 0);
    assert.equal(game.choose(game.challenge.word), 'correct');
});

test('correct answers lock the round and next resets it', () => {
    const game = createGame(challenges);
    assert.equal(game.choose(game.challenge.word), 'correct');
    assert.equal(game.choose(game.challenge.word), 'locked');
    assert.equal(game.next(), true);
    assert.equal(game.index, 1);
    assert.equal(game.solved, false);
});

test('switching levels clears solved state and starts the other challenge bank', () => {
    const game = createGame(challenges);
    game.choose(game.challenge.word);
    game.setLevel('ks2');
    assert.equal(game.index, 0);
    assert.equal(game.solved, false);
    assert.equal(game.challenge.word, challenges.ks2[0].word);
    game.setLevel('ks1');
    assert.equal(game.challenge.word, challenges.ks1[0].word);
    assert.throws(() => game.setLevel('other'), /Unknown challenge level/);
});

test('each bank cycles only after all its challenges are answered', () => {
    for (const level of ['ks1', 'ks2']) {
        const game = createGame(challenges);
        game.setLevel(level);
        for (let index = 0; index < challenges[level].length; index++) {
            assert.equal(game.index, index);
            assert.equal(game.choose(game.challenge.word), 'correct');
            game.next();
        }
        assert.equal(game.index, 0);
    }
});

test('unknown answers cannot complete a challenge', () => {
    const game = createGame(challenges);
    assert.equal(game.choose('<script>'), 'invalid');
    assert.equal(game.solved, false);
});

test('every challenge blends to its word and has exactly one correct picture', () => {
    for (const bank of Object.values(challenges)) {
        assert.ok(bank.length >= 100);
        assert.equal(new Set(bank.map(challenge => challenge.word)).size, bank.length);
        for (const challenge of bank) {
            assert.equal(challenge.sounds.join(''), challenge.word);
            assert.equal(challenge.choices.length, 3);
            assert.equal(challenge.choices.filter(([label]) => label === challenge.word).length, 1);
            assert.equal(new Set(challenge.choices.map(([label]) => label)).size, 3);
            assert.equal(new Set(challenge.choices.map(([, picture]) => picture)).size, 3);
            assert.ok(challenge.hint);
            assert.ok(challenge.choices.every(([label, image]) => label && image));
        }
    }
});

test('shuffling mixes each stage without repeats, omissions or source mutations', () => {
    let seed = 42;
    const random = () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        return seed / 4294967296;
    };
    const original = JSON.stringify(challenges);
    const game = createGameModel(challenges, {random});
    for (const stage of ['ks1', 'ks2']) {
        game.setLevel(stage);
        const words = [];
        const splitPositions = [];
        for (let i = 0; i < challenges[stage].length; i++) {
            const c = game.challenge;
            words.push(c.word);
            if (c.soundGroups) splitPositions.push(i);
            game.choose(c.word);
            game.next();
        }
        assert.equal(new Set(words).size, challenges[stage].length);
        assert.deepEqual([...words].sort(), challenges[stage].map(c => c.word).sort());
        assert.notDeepEqual(words, challenges[stage].map(c => c.word));
        assert.ok(splitPositions.at(-1) - splitPositions[0] > challenges[stage].length / 2);
        assert.notEqual(game.challenge.word, words.at(-1));
        assert.equal(game.index, 0);
    }
    assert.equal(JSON.stringify(challenges), original);
});

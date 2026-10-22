const {test} = require('node:test');
const assert = require('node:assert/strict');
const {createGame} = require('../game');
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
        assert.equal(bank.length, 100);
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

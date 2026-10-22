const {test} = require('node:test');
const assert = require('node:assert/strict');
const {createAudioPlayer} = require('../audio-player');
const challenges = require('../challenges');
const manifest = require('../audio-manifest');
const {getSoundGroups} = require('../phonics');

function fixture(options = {}) {
    const clips = [];
    const states = [];
    const player = createAudioPlayer({
        timeoutMs: 100,
        createAudio(src) {
            const clip = {
                src, play() {
                    this.onplaying();
                    return Promise.resolve();
                },
                pause() {
                    this.paused = true;
                }, removeAttribute() {
                }, load() {
                }
            };
            clips.push(clip);
            return clip;
        },
        onState: state => states.push(state), ...options
    });
    return {player, clips, states};
}

test('all challenge segments map to safe, reusable audio files', () => {
    for (const challenge of Object.values(challenges).flat()) {
        assert.equal(challenge.audioKeys.length, getSoundGroups(challenge).length);
        for (const key of challenge.audioKeys) assert.match(manifest[key].src, /^audio\/[a-z0-9-]+\.mp3$/);
    }
    assert.equal(challenges.ks1.find(c => c.word === 'book').audioKeys[1], 'oo-short');
    assert.equal(challenges.ks1.find(c => c.word === 'moon').audioKeys[1], 'oo-long');
    assert.equal(challenges.ks1.find(c => c.word === 'cow').audioKeys[1], 'ou');
    assert.equal(challenges.ks2.find(c => c.word === 'snowman').audioKeys[2], 'oa');
});

test('sequence waits for each ended event and highlights matching indices', async () => {
    const {player, clips, states} = fixture();
    const result = player.play(['a.mp3', 'b.mp3'], [2, 3]);
    assert.equal(clips.length, 1);
    clips[0].onended();
    await Promise.resolve();
    assert.equal(clips.length, 2);
    clips[1].onended();
    assert.equal(await result, 'complete');
    assert.deepEqual(states.filter(s => s.phase === 'playing').map(s => s.index), [2, 3]);
});

test('a new sound cancels old playback and stops its sequence', async () => {
    const {player, clips} = fixture();
    const old = player.play(['old.mp3', 'never.mp3']);
    const current = player.play(['new.mp3']);
    assert.equal(clips[0].paused, true);
    assert.equal(await old, 'cancelled');
    assert.equal(clips.length, 2);
    clips[1].onended();
    assert.equal(await current, 'complete');
});

test('stop resolves pending playback without continuing the sequence', async () => {
    const {player, clips} = fixture();
    const result = player.play(['a.mp3', 'b.mp3']);
    player.stop();
    assert.equal(await result, 'cancelled');
    assert.equal(clips.length, 1);
    assert.equal(clips[0].paused, true);
});

test('missing audio stops the sequence and reports unavailable', async () => {
    const {player, clips, states} = fixture();
    const result = player.play(['missing.mp3', 'never.mp3']);
    clips[0].onerror();
    assert.equal(await result, 'unavailable');
    assert.equal(clips.length, 1);
    assert.equal(states.at(-1).phase, 'unavailable');
});

test('browser permission rejection reports blocked', async () => {
    const {player} = fixture({
        createAudio: () => ({
            play: () => Promise.reject(Object.assign(new Error('Blocked'), {name: 'NotAllowedError'})),
            pause() {
            }, removeAttribute() {
            }, load() {
            }
        })
    });
    assert.equal(await player.play(['a.mp3']), 'blocked');
});

test('stalled audio times out rather than trapping playback', async () => {
    const {player} = fixture({timeoutMs: 5});
    assert.equal(await player.play(['a.mp3']), 'unavailable');
});

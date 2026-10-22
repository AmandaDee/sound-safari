/* Exercise the actual browser controller with a small DOM adapter.
   This catches wiring/state regressions without requiring a browser install. */
const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const {createGame} = require('../game');
const challenges = require('../challenges');

class Element {
    constructor(tag = 'div') {
        this.tag = tag;
        this.children = [];
        this.attributes = {};
        this.events = {};
        this.dataset = {};
        this.style = {
            setProperty() {
            }
        };
        this.className = '';
        this.classList = {
            add: name => {
                this.className += ` ${name}`;
            },
            toggle: (name, enabled) => {
                const names = this.className.split(' ').filter(x => x && x !== name);
                if (enabled) names.push(name);
                this.className = names.join(' ');
            }
        };
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    addEventListener(name, fn) {
        this.events[name] = fn;
    }

    append(child) {
        this.children.push(child);
    }

    replaceChildren(...children) {
        this.children = children;
    }

    querySelectorAll() {
        return this.children.filter(child => child.tag === 'button');
    }

    querySelector() {
        return this.querySelectorAll()[0];
    }

    focus() {
        this.focused = true;
    }

    click() {
        if (!this.disabled) this.events.click();
    }
}

function mount() {
    const elements = Object.fromEntries(['.sf-animal', '.sf-name', '.sf-word', '.sf-answers', '.sf-feedback', '#sf-next', '#sf-hint', '#sf-level', '#sf-sequence', '#sf-audio-status'].map(key => [key, new Element()]));
    const teachers = ['lion', 'fox', 'bear', 'snake'].map(animal => {
        const button = new Element('button');
        button.dataset.animal = animal;
        return button;
    });
    const stages = ['ks1', 'ks2'].map(stage => {
        const button = new Element('button');
        button.dataset.stage = stage;
        button.setAttribute('aria-pressed', String(stage === 'ks1'));
        return button;
    });
    const root = {
        querySelector: selector => elements[selector],
        querySelectorAll: selector => selector === '[data-stage]' ? stages : teachers
    };
    const document = {getElementById: () => root, createElement: tag => new Element(tag)};
    const played = [];
    const recorded = [];
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8'), {
        document, window: {
            addEventListener() {
            }
        }, SafariGame: {createGame}, SAFARI_CHALLENGES: challenges,
        SAFARI_AUDIO_MANIFEST: require('../audio-manifest'),
        SafariProgress: {store: {record: (...args) => recorded.push(args)}},
        SafariAudio: {
            createAudioPlayer: () => ({
                stop() {
                }, play: (...args) => played.push(args)
            })
        }
    });
    return {elements, teachers, stages, played, recorded};
}

test('picture-only answers, retries, teacher celebration and next are wired together', () => {
    const {elements: e, teachers, recorded} = mount();
    const buttons = e['.sf-answers'].children;
    assert.equal(buttons.length, 3);
    assert.ok(buttons.every(b => b.children.length === 1 && b.children[0].attributes['aria-hidden'] === 'true'));
    buttons.find(b => b.attributes['aria-label'] === 'fish').click();
    assert.match(e['.sf-feedback'].textContent, /Have another go/);
    assert.ok(!e['.sf-animal'].className.includes('is-happy'));
    assert.equal(recorded.length, 0);
    teachers[3].click();
    assert.equal(e['.sf-name'].textContent, 'Sammy the snake');
    assert.equal(teachers[3].attributes['aria-pressed'], 'true');
    buttons.find(b => b.attributes['aria-label'] === 'ship').click();
    assert.match(e['.sf-animal'].className, /snake is-happy/);
    assert.deepEqual(Array.from(recorded[0]), ['ks1', 'ship']);
    assert.ok(buttons.every(b => b.disabled));
    assert.equal(e['#sf-next'].hidden, false);
    assert.equal(e['#sf-next'].focused, true);
    e['#sf-next'].click();
    assert.ok(!e['.sf-animal'].className.includes('is-happy'));
    assert.equal(e['#sf-next'].hidden, true);
    assert.equal(e['.sf-answers'].children[0].focused, true);
});

test('KS2 selection replaces the word and pictures, and hint is available', () => {
    const {elements: e, stages} = mount();
    stages[1].click();
    assert.equal(stages[0].attributes['aria-pressed'], 'false');
    assert.equal(stages[1].attributes['aria-pressed'], 'true');
    assert.equal(e['.sf-word'].children.map(x => x.children[0].textContent).join(''), 'sunset');
    assert.ok(e['.sf-answers'].children.some(x => x.attributes['aria-label'] === 'sunset'));
    e['#sf-hint'].click();
    assert.equal(e['.sf-feedback'].textContent, challenges.ks2[0].hint);
});

test('the active stage card preserves the current word and chosen teacher', () => {
    const {elements: e, stages, teachers} = mount();
    teachers[2].click();
    e['.sf-answers'].children.find(b => b.attributes['aria-label'] === 'ship').click();
    e['#sf-next'].click();
    stages[0].click();
    assert.equal(e['.sf-word'].children.map(x => x.children[0].textContent).join(''), 'cat');
    assert.equal(e['.sf-name'].textContent, 'Bertie the bear');
    stages[1].click();
    assert.equal(e['.sf-name'].textContent, 'Bertie the bear');
});

test('sound tiles and sequence use the phoneme files in word order', () => {
    const {elements: e, played} = mount();
    e['.sf-word'].children[0].click();
    assert.equal(played[0][0][0], 'audio/sh.mp3');
    assert.equal(played[0][1][0], 0);
    e['#sf-sequence'].click();
    assert.deepEqual(Array.from(played[1][0]), ['audio/sh.mp3', 'audio/i.mp3', 'audio/p.mp3']);
});

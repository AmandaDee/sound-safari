/* Sound Safari: local interactions only; no microphone or account required. */
(() => {
    'use strict';
    const root = document.getElementById('safari-revised');
    const game = SafariGame.createGame(SAFARI_CHALLENGES);
    const animal = root.querySelector('.sf-animal');
    const teacherName = root.querySelector('.sf-name');
    const word = root.querySelector('.sf-word');
    const answers = root.querySelector('.sf-answers');
    const feedback = root.querySelector('.sf-feedback');
    const next = root.querySelector('#sf-next');
    const hint = root.querySelector('#sf-hint');
    const listen = root.querySelector('#sf-sequence');
    const audioStatus = root.querySelector('#sf-audio-status');
    const soundHelp = root.querySelector('#sf-sound-help');
    let soundButtons = [];
    let soundGroups = [];
    const player = SafariAudio.createAudioPlayer({
        onState({phase, index}) {
            soundButtons.forEach((button, position) => {
                button.classList.toggle('sf-playing', phase === 'playing' && Boolean(soundGroups[index]?.tiles.includes(position)));
            });
            if (phase === 'loading') audioStatus.textContent = 'Loading sound…';
            if (phase === 'playing') audioStatus.textContent = `Playing sound ${index + 1} of ${soundGroups.length}`;
            if (phase === 'complete') audioStatus.textContent = 'Your turn: blend the sounds together.';
            if (phase === 'unavailable') audioStatus.textContent = 'This sound recording is not available yet. Try reading it aloud.';
            if (phase === 'blocked') audioStatus.textContent = 'Audio was blocked. Tap a sound to try again.';
        }
    });
    const teacherButtons = [...root.querySelectorAll('[data-animal]')];
    const stageButtons = [...root.querySelectorAll('[data-stage]')];
    const names = {
        lion: 'Leo the lion', fox: 'Flo the fox',
        bear: 'Bertie the bear', snake: 'Sammy the snake'
    };
    const celebrationSymbols = {
        lion: ['♥', '♥', '♥'],
        fox: ['★', '✦', '★'],
        bear: ['✿', '❀', '✿'],
        snake: ['○', '◦', '○']
    };
    let teacher = 'lion';

    function renderTeacher() {
        animal.className = `sf-animal ${teacher}${game.solved ? ' is-happy' : ''}`;
        animal.querySelectorAll('.sf-celebration-hearts span').forEach((symbol, index) => {
            symbol.textContent = celebrationSymbols[teacher][index];
        });
        animal.setAttribute('aria-label', `${names[teacher]}${game.solved ? ' celebrating' : ''}`);
        teacherName.textContent = names[teacher];
        teacherButtons.forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.animal === teacher));
        });
    }

    function choose(button, label) {
        const result = game.choose(label);
        if (result === 'correct') {
            SafariProgress.store.record(game.level, game.challenge.word);
            player.stop();
            audioStatus.textContent = 'Great blending!';
            button.classList.add('is-correct');
            feedback.textContent = `Yes! ${soundGroups.map(group => group.label).join(' · ')} → ${game.challenge.word}. Brilliant blending!`;
            answers.querySelectorAll('button').forEach(option => {
                option.disabled = true;
            });
            next.hidden = false;
            hint.hidden = true;
            renderTeacher();
            // Keep keyboard users on an available action after answers become disabled.
            next.focus({preventScroll: true});
        } else if (result === 'incorrect') {
            button.classList.add('is-wrong');
            feedback.textContent = 'Have another go. Say the sounds slowly, then blend them together.';
        }
    }

    function renderChallenge() {
        player.stop();
        const challenge = game.challenge;
        soundGroups = SafariPhonics.getSoundGroups(challenge);
        const splitGroups = soundGroups.filter(group => group.tiles.length > 1);
        word.classList.toggle('has-split', splitGroups.length > 0);
        soundHelp.hidden = splitGroups.length === 0;
        soundHelp.replaceChildren();
        word.style.setProperty('--sound-count', challenge.sounds.length);
        word.style.setProperty('--letter-count', challenge.word.length);
        soundButtons = challenge.sounds.map((sound, index) => {
            const groupIndex = soundGroups.findIndex(group => group.tiles.includes(index));
            const group = soundGroups[groupIndex];
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'sf-sound';
            button.setAttribute('aria-label', group.tiles.length > 1
                ? `Hear ${group.spelling}, linked letters making the ${group.label} sound`
                : `Hear the sound ${group.label}`);
            button.style.setProperty('grid-column', String(index + 1));
            button.style.setProperty('grid-row', '1');
            const span = document.createElement('span');
            span.textContent = sound;
            button.append(span);
            button.addEventListener('click', () => {
                if (splitGroups.length) {
                    // Keep this message separate from loading/error status, and keep its
                    // height reserved so changing it cannot resize the word's container.
                    if (group.tiles.length > 1) {
                        const start = document.createElement('span');
                        start.textContent = `${group.tiles.map(position => challenge.sounds[position]).join(' and ')} work together: one `;
                        const emphasis = document.createElement('strong');
                        emphasis.textContent = group.label;
                        const end = document.createElement('span');
                        end.textContent = ' sound.';
                        soundHelp.replaceChildren(start, emphasis, end);
                    } else soundHelp.textContent = `Say the ${group.label} sound.`;
                }
                player.play([SAFARI_AUDIO_MANIFEST[group.audioKey].src], [groupIndex]);
            });
            return button;
        });
        word.replaceChildren(...soundButtons);
        splitGroups.forEach(group => {
            const link = document.createElement('div');
            link.className = 'sf-split-link';
            link.setAttribute('aria-hidden', 'true');
            link.style.setProperty('grid-column', `${group.tiles[0] + 1} / ${group.tiles.at(-1) + 2}`);
            link.style.setProperty('grid-row', '1');
            word.append(link);
        });
        audioStatus.textContent = '';
        answers.replaceChildren(...challenge.choices.map(([label, picture]) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', label);
            const isIllustration = /^assets\/[a-z0-9-]+\.svg$/.test(picture);
            const image = document.createElement(isIllustration ? 'img' : 'span');
            image.setAttribute('aria-hidden', 'true');
            if (isIllustration) {
                image.src = picture;
                image.alt = '';
                image.width = 64;
                image.height = 64;
            } else image.textContent = picture;
            button.append(image);
            button.addEventListener('click', () => choose(button, label));
            return button;
        }));
        feedback.textContent = 'Blend the sounds, then tap a picture.';
        next.hidden = true;
        hint.hidden = false;
        renderTeacher();
    }

    teacherButtons.forEach(button => {
        button.addEventListener('click', () => {
            teacher = button.dataset.animal;
            renderTeacher();
        });
    });
    hint.addEventListener('click', () => {
        feedback.textContent = game.challenge.hint;
    });
    listen.addEventListener('click', () => {
        player.play(game.challenge.audioKeys.map(key => SAFARI_AUDIO_MANIFEST[key].src));
    });
    next.addEventListener('click', () => {
        if (game.next()) {
            renderChallenge();
            answers.querySelector('button').focus({preventScroll: true});
        }
    });
    stageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const stage = button.dataset.stage;
            if (stage === game.level) return;
            game.setLevel(stage);
            stageButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
            renderChallenge();
        });
    });
    window.addEventListener('pagehide', () => player.stop());
    renderChallenge();
})();

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
    let soundButtons = [];
    const player = SafariAudio.createAudioPlayer({
        onState({phase, index}) {
            soundButtons.forEach((button, position) => {
                button.classList.toggle('sf-playing', phase === 'playing' && position === index);
            });
            if (phase === 'loading') audioStatus.textContent = 'Loading sound…';
            if (phase === 'playing') audioStatus.textContent = `Playing sound ${index + 1} of ${soundButtons.length}`;
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
            feedback.textContent = `Yes! ${game.challenge.sounds.join(' · ')} → ${game.challenge.word}. Brilliant blending!`;
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
        word.style.setProperty('--sound-count', challenge.sounds.length);
        soundButtons = challenge.sounds.map((sound, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'sf-sound';
            button.setAttribute('aria-label', `Hear the sound ${sound}`);
            const span = document.createElement('span');
            span.textContent = sound;
            button.append(span);
            button.addEventListener('click', () => {
                player.play([SAFARI_AUDIO_MANIFEST[challenge.audioKeys[index]].src], [index]);
            });
            return button;
        });
        word.replaceChildren(...soundButtons);
        audioStatus.textContent = '';
        answers.replaceChildren(...challenge.choices.map(([label, picture]) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', label);
            const image = document.createElement('span');
            image.setAttribute('aria-hidden', 'true');
            image.textContent = picture;
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

/* Progress illustrations reuse the game's exact character markup and CSS. */
(() => {
    'use strict';
    const root = document.getElementById('sf-progress');
    const stageGroup = document.getElementById('sf-level');
    const store = SafariProgress.store;
    const animalTemplate = document.querySelector('#safari-revised .sf-guide .sf-animal');
    const stamps = [
        {animal: 'lion', name: 'Leo', title: 'First steps', target: 1},
        {animal: 'fox', name: 'Flo', title: 'Explorer', target: 10},
        {animal: 'bear', name: 'Bertie', title: 'Trail finder', target: 50},
        {animal: 'snake', name: 'Sammy', title: 'Safari star', target: null}
    ];
    let selectedStamp = 0;
    let selectedPattern = null;
    let patternGroup = 'teams';
    const get = selector => root.querySelector(selector);

    function element(tag, className, text) {
        const node = document.createElement(tag);
        node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function portrait(animal) {
        const frame = element('span', 'sf-badge-portrait');
        frame.setAttribute('aria-hidden', 'true');
        const character = animalTemplate.cloneNode(true);
        character.className = `sf-animal ${animal}`;
        character.removeAttribute('role');
        character.removeAttribute('aria-label');
        frame.append(character);
        return frame;
    }

    const stampButtons = stamps.map((stamp, index) => {
        const button = element('button', 'sf-passport-stamp');
        button.type = 'button';
        button.setAttribute('aria-describedby', 'sf-stamp-detail');
        button.append(portrait(stamp.animal), element('strong', '', stamp.name), element('span', 'sf-stamp-title', stamp.title), element('span', 'sf-stamp-state'));
        button.addEventListener('click', () => {
            selectedStamp = index;
            render();
        });
        return button;
    });
    get('#sf-passport-stamps').append(...stampButtons);

    function render() {
        const level = stageGroup.querySelector('[aria-pressed="true"]').dataset.stage;
        const state = store.snapshot(level);
        // The final stamp means the whole trail is complete, including new words.
        stamps.at(-1).target = state.total;
        get('#sf-progress-level').textContent = `${level.toUpperCase()} trail`;
        get('#sf-explored-total').textContent = `${state.count} of ${state.total} words explored`;
        const progress = get('#sf-passport-progress');
        progress.max = state.total;
        progress.value = state.count;
        progress.setAttribute('aria-label', `${state.count} of ${state.total} distinct ${level.toUpperCase()} words answered correctly`);
        const nextStamp = stamps.find(stamp => stamp.target > state.count);
        get('#sf-next-stamp').textContent = nextStamp ? `${nextStamp.target - state.count} more ${nextStamp.target - state.count === 1 ? 'word' : 'words'} to your next stamp` : 'All four stamps collected!';
        stamps.forEach((stamp, index) => {
            const earned = state.count >= stamp.target;
            const button = stampButtons[index];
            button.classList.toggle('is-earned', earned);
            button.querySelector('.sf-stamp-state').textContent = `${stamp.target} ${stamp.target === 1 ? 'word' : 'words'} · ${earned ? 'Earned' : nextStamp === stamp ? 'Next' : 'Ahead'}`;
        });
        const stamp = stamps[selectedStamp];
        get('#sf-stamp-detail').textContent = state.count >= stamp.target
            ? `${stamp.name}’s ${stamp.title} stamp earned! You’ve explored ${stamp.target} different ${stamp.target === 1 ? 'word' : 'words'}.`
            : `Explore ${stamp.target} different words to earn ${stamp.name}’s ${stamp.title} stamp. Retries count too.`;
        const patterns = state.patterns.filter(item => patternGroup === 'teams' ? item.pattern.length > 1 : item.pattern.length === 1);
        if (!patterns.some(item => item.pattern === selectedPattern)) selectedPattern = patterns[0]?.pattern;
        get('#sf-pattern-total').textContent = `${patterns.filter(item => item.found).length} of ${patterns.length} ${patternGroup === 'teams' ? 'letter teams' : 'letter sounds'} explored`;
        get('#sf-sound-collection').replaceChildren(...patterns.map(item => {
            const button = element('button', `sf-collection-pattern${item.found ? ' is-found' : ''}`);
            button.type = 'button';
            button.setAttribute('aria-pressed', String(item.pattern === selectedPattern));
            button.append(element('strong', '', item.pattern), element('span', '', item.found ? '✓ Explored' : '○ Not yet'));
            button.addEventListener('click', () => {
                selectedPattern = item.pattern;
                // Preserve keyboard focus when the collection is redrawn.
                render();
                get('#sf-sound-collection').querySelector('[aria-pressed="true"]').focus({preventScroll: true});
            });
            return button;
        }));
        const selected = patterns.find(item => item.pattern === selectedPattern);
        get('#sf-selected-pattern').textContent = selected?.pattern || '';
        get('#sf-pattern-detail-title').textContent = selected?.found ? `You’ve found ${selected.pattern}` : `Still to discover: ${selected?.pattern || ''}`;
        get('#sf-pattern-detail-words').textContent = selected
            ? `${selected.found ? 'Explored in' : 'Look out for'}: ${(selected.found ? selected.foundWords : selected.words).join(', ')}.` : 'Keep exploring to discover new sound patterns.';
    }

    root.querySelectorAll('[data-pattern-group]').forEach(button => {
        button.addEventListener('click', () => {
            patternGroup = button.dataset.patternGroup;
            root.querySelectorAll('[data-pattern-group]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
            render();
        });
    });
    // Card handlers update the active stage before the click bubbles here.
    stageGroup.addEventListener('click', render);
    store.subscribe(render);
    render();
})();

/* Small game model, usable in the browser and in Node's test runner. */
(function (scope) {
    'use strict';

    function createGame(challenges, {random = Math.random} = {}) {
        function shuffledBank(stage, previousWord = null) {
            const bank = [...challenges[stage]];
            for (let position = bank.length - 1; position > 0; position--) {
                const other = Math.floor(random() * (position + 1));
                [bank[position], bank[other]] = [bank[other], bank[position]];
            }
            if (bank.length > 1 && bank[0].word === previousWord) {
                [bank[0], bank[1]] = [bank[1], bank[0]];
            }
            return bank;
        }

        let level = 'ks1';
        let index = 0;
        let solved = false;
        let bank = shuffledBank(level);
        return {
            get level() {
                return level;
            },
            get index() {
                return index;
            },
            get solved() {
                return solved;
            },
            get challenge() {
                return bank[index];
            },
            choose(answer) {
                if (solved) return 'locked';
                if (!this.challenge.choices.some(([label]) => label === answer)) return 'invalid';
                if (answer !== this.challenge.word) return 'incorrect';
                solved = true;
                return 'correct';
            },
            next() {
                if (!solved) return false;
                const previousWord = this.challenge.word;
                index++;
                if (index === bank.length) {
                    index = 0;
                    bank = shuffledBank(level, previousWord);
                }
                solved = false;
                return true;
            },
            setLevel(value) {
                if (!Object.hasOwn(challenges, value)) throw new Error('Unknown challenge level');
                level = value;
                index = 0;
                solved = false;
                bank = shuffledBank(level);
            }
        };
    }

    if (typeof module === 'object' && module.exports) module.exports = {createGame};
    else scope.SafariGame = {createGame};
})(globalThis);

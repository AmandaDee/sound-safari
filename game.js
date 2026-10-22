/* Small game model, usable in the browser and in Node's test runner. */
(function (scope) {
    'use strict';

    function createGame(challenges) {
        let level = 'ks1';
        let index = 0;
        let solved = false;
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
                return challenges[level][index];
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
                index = (index + 1) % challenges[level].length;
                solved = false;
                return true;
            },
            setLevel(value) {
                if (!Object.hasOwn(challenges, value)) throw new Error('Unknown challenge level');
                level = value;
                index = 0;
                solved = false;
            }
        };
    }

    if (typeof module === 'object' && module.exports) module.exports = {createGame};
    else scope.SafariGame = {createGame};
})(globalThis);

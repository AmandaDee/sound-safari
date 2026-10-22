/* Map written tiles to sound groups without rearranging the spelling. */
(function (scope) {
    'use strict';

    function getSoundGroups(challenge) {
        const groups = challenge.soundGroups || challenge.sounds.map((_, index) => [index]);
        return groups.map((tiles, index) => ({
            tiles,
            audioKey: challenge.audioKeys[index],
            spelling: tiles.map(position => challenge.sounds[position]).join(tiles.length > 1 ? '–' : ''),
            label: challenge.soundLabels?.[index] || tiles.map(position => challenge.sounds[position]).join('')
        }));
    }

    function getPatterns(challenge) {
        return getSoundGroups(challenge).map(group => group.spelling);
    }

    const api = {getSoundGroups, getPatterns};
    if (typeof module === 'object' && module.exports) module.exports = api;
    else scope.SafariPhonics = api;
})(globalThis);

/* One player owns playback. New requests and level changes cancel older ones. */
(function (scope) {
    'use strict';

    function createAudioPlayer({
                                   createAudio = src => new Audio(src), onState = () => {
        }, timeoutMs = 12000
                               } = {}) {
        let generation = 0;
        let cancelCurrent = null;

        function stop() {
            generation++;
            if (cancelCurrent) cancelCurrent();
            onState({phase: 'idle'});
        }

        function playClip(src, index, token) {
            return new Promise(resolve => {
                let audio;
                let timer;
                let settled = false;

                function finish(status) {
                    if (settled) return;
                    settled = true;
                    clearTimeout(timer);
                    if (audio) {
                        audio.onended = audio.onerror = audio.onplaying = null;
                        audio.pause();
                        audio.removeAttribute('src');
                        audio.load();
                    }
                    cancelCurrent = null;
                    resolve(status);
                }

                cancelCurrent = () => finish('cancelled');
                try {
                    audio = createAudio(src);
                    audio.preload = 'auto';
                    audio.onplaying = () => {
                        if (token === generation) onState({phase: 'playing', index});
                    };
                    audio.onended = () => finish('ended');
                    audio.onerror = () => finish('unavailable');
                    onState({phase: 'loading', index});
                    timer = setTimeout(() => finish('unavailable'), timeoutMs);
                    Promise.resolve(audio.play()).catch(error => {
                        finish(error.name === 'NotAllowedError' ? 'blocked' : 'unavailable');
                    });
                } catch {
                    finish('unavailable');
                }
            });
        }

        async function play(sources, indices = sources.map((_, index) => index)) {
            stop();
            const token = generation;
            for (let index = 0; index < sources.length; index++) {
                if (token !== generation) return 'cancelled';
                const status = await playClip(sources[index], indices[index], token);
                if (token !== generation) return 'cancelled';
                if (status !== 'ended') {
                    onState({phase: status});
                    return status;
                }
                onState({phase: 'idle'});
            }
            if (token === generation) onState({phase: 'complete'});
            return 'complete';
        }

        return {play, stop};
    }

    if (typeof module === 'object' && module.exports) module.exports = {createAudioPlayer};
    else scope.SafariAudio = {createAudioPlayer};
})(globalThis);

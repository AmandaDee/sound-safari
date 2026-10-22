const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.rmSync(output, {recursive: true, force: true});
fs.mkdirSync(output, {recursive: true});
for (const file of ['index.html', 'styles.css', 'challenges.js', 'game.js', 'progress.js', 'progress-ui.js', 'audio-manifest.js', 'audio-player.js', 'app.js', 'favicon.svg']) {
    fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.mkdirSync(path.join(output, 'audio'), {recursive: true});
for (const file of fs.readdirSync(path.join(root, 'audio'))) {
    if (/^[a-z0-9-]+\.mp3$/.test(file)) {
        fs.copyFileSync(path.join(root, 'audio', file), path.join(output, 'audio', file));
    }
}
console.log('Static website built in dist/');

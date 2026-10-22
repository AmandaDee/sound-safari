/* Convert supplied recordings; never synthesise or truncate phonemes. */
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const manifest = require('../audio-manifest');
const input = process.argv[2];
if (!input) {
    console.error('Usage: npm run audio:optimise -- /path/to/original-recordings');
    process.exit(1);
}
const source = fs.realpathSync(path.resolve(input));
const output = fs.realpathSync(path.resolve(__dirname, '../audio'));
if (source === output) {
    console.error('Keep original recordings in a separate folder.');
    process.exit(1);
}
if (spawnSync('ffmpeg', ['-version'], {stdio: 'ignore'}).status !== 0) {
    console.error('FFmpeg must be installed and available on your PATH.');
    process.exit(1);
}
let missing = 0;
for (const key of Object.keys(manifest)) {
    const original = ['wav', 'flac', 'm4a', 'mp3'].map(extension => path.join(source, `${key}.${extension}`)).find(file => fs.existsSync(file));
    if (!original) {
        console.warn(`Missing original: ${key}`);
        missing++;
        continue;
    }
    const destination = path.join(output, `${key}.mp3`);
    const result = spawnSync('ffmpeg', [
        '-nostdin', '-hide_banner', '-loglevel', 'error', '-y', '-i', original,
        '-map', '0:a:0', '-vn', '-ac', '1', '-ar', '22050',
        '-c:a', 'libmp3lame', '-b:a', '32k', '-map_metadata', '-1',
        '-id3v2_version', '0', '-write_id3v1', '0', destination
    ], {encoding: 'utf8'});
    if (result.status !== 0) {
        console.error(`Conversion failed: ${key}. ${result.stderr}`);
        process.exit(1);
    }
    console.log(`${key}.mp3: ${fs.statSync(destination).size} bytes`);
}
if (missing) {
    console.error(`${missing} recordings remain missing.`);
    process.exitCode = 1;
}

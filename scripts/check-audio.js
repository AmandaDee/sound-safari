const fs = require('node:fs');
const path = require('node:path');
const manifest = require('../audio-manifest');
const missing = Object.values(manifest).filter(entry => {
    const file = path.resolve(__dirname, '..', entry.src);
    return !fs.existsSync(file) || fs.statSync(file).size === 0;
});
if (missing.length) {
    console.error(`Missing ${missing.length} recordings:\n${missing.map(entry => entry.src).join('\n')}`);
    process.exitCode = 1;
} else console.log('All sound recordings are present. Listen to each before release.');

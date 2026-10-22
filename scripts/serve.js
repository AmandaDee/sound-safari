const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.svg': 'image/svg+xml',
    '.mp3': 'audio/mpeg',
    '.webp': 'image/webp'
};
const publicFiles = new Set(['index.html', 'styles.css', 'challenges.js', 'game.js', 'phonics.js', 'progress.js', 'progress-ui.js', 'audio-manifest.js', 'audio-player.js', 'app.js', 'favicon.svg', 'assets/ollie.webp']);
const port = Number(process.env.PORT || 8000);
http.createServer((request, response) => {
    const file = new URL(request.url, 'http://localhost').pathname.slice(1) || 'index.html';
    if (!publicFiles.has(file) && !/^audio\/[a-z0-9-]+\.mp3$/.test(file)) {
        response.writeHead(404);
        response.end('Not found');
        return;
    }
    fs.readFile(path.join(root, file), (error, content) => {
        if (error) {
            response.writeHead(error.code === 'ENOENT' ? 404 : 500);
            response.end('File unavailable');
            return;
        }
        response.writeHead(200, {'Content-Type': `${types[path.extname(file)]}; charset=utf-8`});
        response.end(content);
    });
}).listen(port, '127.0.0.1', () => console.log(`Sound Safari: http://localhost:${port}`));

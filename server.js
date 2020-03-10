const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/bundle', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': '<http://localhost:8081/bundle.js>; rel="fragment-script"'
    });
    res.end('');
});

app.listen(8081, () => {
  console.log('Server for common imports started at 8081')
})
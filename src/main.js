const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'pug');
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Express demo for docker', message: 'This App is running' });
});

app.listen(PORT, () => {
    console.info(`Web sever start at http://localhost:${PORT}`);
});
const express = require('express'); // import express.js
const mongo = require('mongodb'); // import package to connect with MongoDB

const app = express();
const port = 3030;

app.use(express.static('public'));

// Launch homepage
app.get('/', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/homeScreen.html', {
        root: '.'
    })
});

app.get('/monsterFilter', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/finderSearchPage.html', {
        root: '.'
    })
});

app.get('/encounterBuilder', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/encounterBuilder.html', {
        root: '.'
    })
});

app.get('/encounterResultsPage', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/encounterResultsPage.html', {
        root: '.'
    })
});

app.get('/monsterResultsPage', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/monsterResultsPage.html', {
        root: '.'
    })
});

app.listen(port, () => console.log(`Site launched successfully at port ${port}`))


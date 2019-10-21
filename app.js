const express = require('express'); // import express.js
const mongo = require('mongodb'); // import package to connect with MongoDB

const app = express();
const port = 8888;

app.use(express.static('public'));

// Launch homepage
app.get('/', (req, res) => {
    const code = req.query.code;
    const path = require('path');
    res.sendFile('./public/homeScreen.html', {
        root: '.'
    })
});

app.listen(port, () => console.log(`Site launched successfully`))


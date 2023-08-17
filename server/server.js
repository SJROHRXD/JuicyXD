const express = require('express');

const PORT = process.env.PORT || 3005;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log('Juicy Server 🍒 listening on port 3005!');
});
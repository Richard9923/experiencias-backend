
require('dotenv').config();
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const posts = [
    {id: 1, "name": "John"},
    {id: 1, "name": "Joarez"},
    {id: 1, "name": "Fabiano"},
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.get('/api/posts', (req, res) => {
    res.send(posts);
})


app.listen(PORT, (req, res) => {
    console.log(`The server is running on PORT: ${PORT}`);
})
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');


const app = express();

const posts = [
    {id: 1, name: "John"},
    {id: 2, name: "Rafael"},
    {id: 3, name: "Adriano"},
]

app.get('/api/posts', (req, res) => {
    res.send(posts)
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})


app.get('/about', (req, res) => {
    res.send('About page');
})

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
})




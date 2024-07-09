require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const posts = [
    {id: 1, name: "John"},
    {id: 2, name: "Rafael"},
    {id: 3, name: "Adriano"},
]

app.get('/api/posts', (req, res) => {
    res.json(posts); // Enviar a resposta como JSON
});


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
})
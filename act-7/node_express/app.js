const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile('<h1>Estas en home</h1>'));

app.get('/nosotros', (req, res) => res.sendFile('<h1>Estas en nosotros</h1>'));

app.get('/contactos', (req, res) => res.sendFile('<h1>Estas en contactos</h1>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
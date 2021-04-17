const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/home.html'));

app.get('/servicios', (req, res) => res.sendFile(__dirname + '/servicios.html'));

app.get('/nosotros', (req, res) => res.sendFile(__dirname + '/nosotros.html'));

app.get('/proyectos', (req, res) => res.sendFile(__dirname + '/proyectos.html'));

app.get('/contactos', (req, res) => res.sendFile(__dirname + '/contactos.html'));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
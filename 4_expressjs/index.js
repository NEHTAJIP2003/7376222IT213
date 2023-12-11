const express = require('express')
const app = express ()
const PORT = 3000

app.get('/', (req, res) =>res.send('HELLO WORLD!'))
app.get('/nethaji', (req, res) =>res.send('student name : NETHAJI P roll no: 7376222IT213'))
app.get('/navin', (req, res) =>res.send('student name : NAVINKUMAR G roll no: 7376222IT212'))
app.listen(PORT, () => console.log (`Example app listening at http://localhost:${PORT}`))

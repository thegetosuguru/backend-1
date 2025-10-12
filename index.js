const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    {id: 1, name: "Sajukinu fajulika", email: "nurbanusabila69@keemail.com"},
    {id: 2, name: "Uerad daja", email: "dfasadsfdase454@keemail.com"},
    {id: 3, name: "Lamjer ghie", email: "fdf3425rd@keemail.com"},
    {id: 4, name: "Vakila vuru", email: "adsfddsf45@keemail.com"},
]

app.get('/', (req, res) => {
    res.send("user managements server is running")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
})

app.listen(port, () => {
    console.log('hello world')
})
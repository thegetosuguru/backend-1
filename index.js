const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const user = [
    {id: 1, name: "Salila vur", email: "nurbanusabila69@keemail.com"},
    {id: 1, name: "Salila vur", email: "nurbanusabila69@keemail.com"},
    {id: 1, name: "Salila vur", email: "nurbanusabila69@keemail.com"},
    {id: 1, name: "Salila vur", email: "nurbanusabila69@keemail.com"},
]

app.get('/', (req, res) => {
    res.send('User Management Server is running')
})

app.listen(port, () => {
    console.log('hello world')
})
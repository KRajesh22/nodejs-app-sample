// server.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello Springworks!!')
})
app.listen(8080, () => {
    console.log('Server is up on 8080')
})

const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./routes/booksRoute'))
app.use(() => {
    if (err.message === 'Book Already Exists') {
        res.status(409).send(err.message)
    } 
    if (err.message === 'Book Not Found') { 
        res.status(404).send(err.message)
    }
    res.status(500).send(err.message)
})

app.listen(3000)
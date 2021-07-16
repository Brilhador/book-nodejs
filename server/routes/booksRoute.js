const express = require('express')
const router = express.Router()
const booksService = require('../service/booksService')

router.get('/books', async (req, res, next) => {
    try {
        const books = await booksService.getBooks()
        res.json(books)
    } catch (err) {
        next(err)
    }
})

router.post('/books', async (req, res, next) => {
    const book = req.body
    try {
        const newBook = await booksService.saveBook(book)
        res.status(201).json(newBook)
    } catch (err) {
        next(err)
    }
})

router.put('/books/:id', async (req, res, next) => {
    const book = req.body
    try {
        await booksService.updateBook(req.params.id, book)
        res.status(204).json(book)
    } catch (err) {
        next(err)
    }
})

router.delete('/books/:id', async (req, res, next) => {
    try {
        await booksService.deleteBook(req.params.id)
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router
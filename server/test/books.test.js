const crypto = require('crypto')
const axios = require('axios')
const booksService = require('../service/booksService')

const generate = () => {
    return crypto.randomBytes(20).toString('hex')
}

const request = (url, method, data) => {
    return axios.default({ url, method, data })
}

test('Should get books', async () => {
    const book = await booksService.saveBook({ 
        title: generate(),
        author: generate(),
        summary: generate(),
        isbn: generate()
    })
    const response = await request('http://localhost:3000/books/', 'get')
    expect(response.status).toBe(200)
    const books = res.data
    expect(books).toHaveLength(1)
    await booksService.deleteBook(book.id)
})

test('Should save book', async () => {
    const data = { 
        title: generate(),
        author: generate(),
        summary: generate(),
        isbn: generate()
    }
    const response = await request('http://localhost:3000/books/', 'post', data)
    expect(response.status).toBe(201)
    const book = response.data
    expect(book.title).toBe(data.title)
    await booksService.deleteBook(book._id)
})

test('Should update book', async () => {
    const book = await booksService.saveBook({ 
        title: generate(),
        author: generate(),
        summary: generate(),
        isbn: generate()
    })
    console.log(book.id)
    book.title = generate()
    book.author = generate()
    book.summary = generate()
    book.isbn = generate()
    const response = await request(`http://localhost:3000/books/${book.id}`, 'put', book)
    expect(response.status).toBe(204)
    const updatedBook = await booksService.getBook(book.id)
    expect(updatedBook.title).toBe(book.title)
    expect(updatedBook.author).toBe(book.author)
    expect(updatedBook.summary).toBe(book.summary)
    expect(updatedBook.isbn).toBe(book.isbn)
    await booksService.deleteBook(book.id)
})

test.only('Should delete book', async () => {
    const book = await booksService.saveBook({ 
        title: generate(),
        author: generate(),
        summary: generate(),
        isbn: generate()
    })
    const response = await request(`http://localhost:3000/books/${book.id}`, 'delete')
    expect(response.status).toBe(204)
    const books = await booksService.getBooks()
    expect(books).toHaveLength(0)
})
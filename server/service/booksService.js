const booksData = require('../data/booksData')

exports.getBooks = () => {
    return booksData.getBooks()
}

exports.getBook = async (id) => {
    const book = await booksData.getBook(id)
    if (!book) throw new Error('Book not found')
    return book
}

exports.saveBook = async (book) => {
    const existingBook = await booksData.getBook(book.id)
    if (existingBook) throw new Error('Book Already Exists')
    return booksData.saveBook(book)
}

exports.updateBook = async (id, book) => {
    await exports.getBook(id)
    return  booksData.updateBook(id, book)
}

exports.deleteBook = (id) => {
    return booksData.deleteBook(id)
}

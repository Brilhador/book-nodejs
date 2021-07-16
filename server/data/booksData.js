const Book = require('../model/Book')

exports.getBooks = () => {
    return Book.find()
}

exports.getBook = (id) => {
    return Book.findById(id)
}

exports.saveBook = (book) => {
    return Book.create({
        title: book.title,
        author: book.author,
        summary: book.summary,
        isbn: book.isbn
    })
}

exports.updateBook = (id, book) => {
    return Book.updateOne(
        {
            _id: id
        },
        {
            $set: {
                title: book.title,
                author: book.author,
                summary: book.summary,
                isbn: book.isbn
            }
        }
    )
}

exports.deleteBook = (id) => {
    return Book.deleteOne({_id: id})
}
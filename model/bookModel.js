const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    language:String,
    oldPrice:Number,
    price:Number,
    pages:Number,
    rating:Number,
    img:String
 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
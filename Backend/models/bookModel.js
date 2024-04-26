const mongoose = require("mongoose");

const book_Schema = new mongoose.Schema({
    bookname:{type:String, required: true },
    description:{type:String, required: true },
    author:{type:String, required: true },
    category:{type:String, required: true },
    image:{type:String, required: true },
    price:{type:String, required: true },
});

module.exports = new mongoose.model("books", book_Schema);

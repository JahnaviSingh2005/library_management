const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        bookId: {
            type: String,
            required: [true, "Book ID is required"],
            unique: true,
            trim: true,
        },
        title: {
            type: String,
            required: [true, "Book title is required"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Author is required"],
            trim: true,
        },
        isbn: {
            type: String,
            required: [true, "ISBN is required"],
            unique: true,
            trim: true,
        },
        genre: {
            type: String,
            required: [true, "Genre / Category is required"],
            trim: true,
        },
        publisher: {
            type: String,
            required: [true, "Publisher is required"],
            trim: true,
        },
        publicationYear: {
            type: Number,
            required: [true, "Publication year is required"],
        },
        totalCopies: {
            type: Number,
            required: [true, "Total copies is required"],
            min: [0, "Total copies cannot be negative"],
        },
        availableCopies: {
            type: Number,
            required: [true, "Available copies is required"],
            min: [0, "Available copies cannot be negative"],
        },
        shelfLocation: {
            type: String,
            required: [true, "Shelf location is required"],
            trim: true,
        },
        bookType: {
            type: String,
            enum: ["Reference", "Circulating"],
            default: "Circulating",
        },
        status: {
            type: String,
            enum: ["Available", "Checked Out"],
            default: "Available",
        },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

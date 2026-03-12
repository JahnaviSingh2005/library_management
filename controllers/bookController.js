const Book = require("../models/Book");

// @desc    Add a new book
// @route   POST /books
const addBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all books
// @route   GET /books
const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get book by ID
// @route   GET /books/:id
const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update book by ID
// @route   PUT /books/:id
const updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete book by ID
// @route   DELETE /books/:id
const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Search book by title
// @route   GET /books/search?title=xyz
const searchBook = async (req, res, next) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Please provide a title to search",
            });
        }

        const books = await Book.find({
            title: { $regex: title, $options: "i" },
        });

        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBook,
};

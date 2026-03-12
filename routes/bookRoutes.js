const express = require("express");
const router = express.Router();

const {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBook,
} = require("../controllers/bookController");

// Search must be placed BEFORE /:id to avoid conflicts
router.get("/search", searchBook);

router.post("/", addBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;

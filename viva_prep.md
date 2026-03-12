# 🎓 Viva-Voce & Concept Guide (Library Management System)

This guide prepares you for questions an examiner might ask about the Library Management System backend.

---

## 🔑 Core Technologies Used

| Technology | Definition | Role in this Project |
| :--- | :--- | :--- |
| **Node.js** | JavaScript runtime environment. | Runs JavaScript on the server side. |
| **Express.js** | A web framework for Node.js. | Handles routing and HTTP requests (GET, POST, etc.). |
| **MongoDB** | A NoSQL, Document-oriented database. | Stores library data in JSON-like structures (BSON). |
| **Mongoose** | An ODM (Object Data Modeling) library. | Provides a schema-based solution to model application data. |
| **dotenv** | A zero-dependency module. | Loads environment variables from a `.env` file into `process.env`. |

---

## 📝 Important Viva Questions & Answers

### 1. What is an API and what type have you built?
**Answer:** An API (Application Programming Interface) allows two software components to communicate. I have built a **REST API** (Representational State Transfer), which uses standard HTTP methods to perform CRUD operations on data.

### 2. Can you explain the CRUD operations in your project?
**Answer:** CRUD stands for Create, Read, Update, and Delete. In my project:
*   **Create:** `POST /books` (Adds a new book).
*   **Read:** `GET /books` (Fetch all) and `GET /books/:id` (Fetch one).
*   **Update:** `PUT /books/:id` (Update book details).
*   **Delete:** `DELETE /books/:id` (Remove a book).

### 3. What is the purpose of the `Book.js` model?
**Answer:** It defines the **Mongoose Schema**. A schema ensures that every document (book) added to MongoDB follows a specific structure with validations (like `required: true`, `unique: true` for ISBN, and `min: 0` for copies).

### 4. What is Middleware? Give an example from your code.
**Answer:** Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function. 
*   **Examples used:** `express.json()` (to parse JSON) and my custom `errorMiddleware.js` (to handle all errors in one place).

### 5. Why do we use `async` and `await`?
**Answer:** Database operations are **asynchronous** (they take time). `async/await` makes the code look synchronous and easier to read, preventing "Callback Hell" and allowing us to use `try-catch` blocks for cleaner error handling.

### 6. What does `dotenv` do?
**Answer:** `dotenv` keeps sensitive information (like database passwords) out of the main code for security.

### 7. What is the difference between `params` and `query`?
**Answer:** 
*   **req.params:** Used for required parts of the URL path (e.g., `/:id` in `/books/123`).
*   **req.query:** Used for optional searching or filtering (e.g., `?title=harry` in `/books/search?title=harry`).

### 8. How did you handle errors in this project?
**Answer:** I used a **Global Error Handler**. Instead of writing complex error logic in every function, I use `next(error)` in the `catch` block. This sends the error to `errorMiddleware.js`.

### 9. How does the Search functionality work?
**Answer:** I used the MongoDB `$regex` operator in the controller. It allows for "partial matching" (e.g., searching "harry" will find "Harry Potter") and the `i` option makes it **case-insensitive**.

---

## 🚀 Postman Testing URLs (Base URL: `http://localhost:5000`)

| Operation | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Add Book** | `POST` | `/books` | Create a new book record. |
| **Get All Books** | `GET` | `/books` | Fetch all book records from DB. |
| **Get Book by ID** | `GET` | `/books/:id` | Fetch a single book using its ID. |
| **Search Book** | `GET` | `/books/search?title=harry` | Search books by title (case-insensitive). |
| **Update Book** | `PUT` | `/books/:id` | Update details of a specific book. |
| **Delete Book** | `DELETE` | `/books/:id` | Remove a book record permanently. |

> **Note:** For `POST` and `PUT` requests, ensure the body is set to `raw` and `JSON` in Postman.

---

## 🛠️ Key Mongoose Methods Used
*   `Book.create(req.body)` — To insert new data.
*   `Book.find()` — To fetch all data.
*   `Book.findById(id)` — To fetch a single document.
*   `Book.findByIdAndUpdate(id, data)` — To edit data.
*   `Book.findByIdAndDelete(id)` — To remove data.

---
*Created for AI Driven Full Stack Development Practical Exam Preparation.*

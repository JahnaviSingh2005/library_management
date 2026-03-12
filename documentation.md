# 📚 Library Management System - Technical Documentation

This document provides a comprehensive walkthrough of the project, including the folder structure, development steps, terminal commands, database configuration, and deployment process.

---

## 🛠️ Project Overview
The **Library Management System** is a RESTful API built using the MERN stack (without React) to manage book records, including ISBNs, genres, publishers, and stock levels.

---

## 📁 Project Structure

```text
library-api/
│
├── config/
│   └── db.js              # MongoDB connection using Mongoose
│
├── controllers/
│   └── bookController.js  # CRUD logic (Add, Read, Update, Delete, Search)
│
├── middleware/
│   └── errorMiddleware.js   # Global error handling for the API
│
├── models/
│   └── Book.js            # Mongoose schema and model for Book data
│
├── routes/
│   └── bookRoutes.js      # API route definitions
│
├── .env                   # Environment variables (Port, Mongo URI)
├── .gitignore             # Folders/files to exclude from Git
├── package.json           # Project metadata and dependencies
└── server.js              # Main entry point (Express server setup)
```

---

## 💻 Terminal Commands Used

### 1. Project Initialization
```bash
# Create project folder
mkdir library-api
cd library-api

# Initialize package.json
npm init -y
```

### 2. Installing Dependencies
```bash
# Main dependencies
npm install express mongoose dotenv

# Development dependency (for auto-restart)
npm install --save-dev nodemon
```

### 3. Running the Project
```bash
# Start server in production mode
npm start

# Start server in development mode (using nodemon)
npm run dev
```

---

## 🗄️ Database Connection (MongoDB)

### Local Configuration (`.env`)
To connect to a local MongoDB instance, the following line was added to the `.env` file:
```env
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
```

---

## 📦 Code Breakdown

### 1. `server.js` (The Engine)
*   Loads environment variables using `dotenv`.
*   Connects to the database via `connectDB()`.
*   Uses `express.json()` to parse incoming JSON requests.
*   Mounts the book routes under `/books`.
*   Implements the global `errorHandler`.

### 2. `models/Book.js` (The Blueprint)
Defines the structure for book data with strict validations:
*   **Fields:** Book ID, Title, Author, ISBN (unique), Genre, Publisher, Publication Year, Copies, etc.
*   **Enums:** Book Type (Reference/Circulating), Status (Available/Checked Out).
*   **Timestamps:** Automatically tracks `createdAt` and `updatedAt`.

### 3. `controllers/bookController.js` (The Logic)
Handles 6 key API operations using `async/await` and `try-catch`:
1.  `addBook`: Saves new book data (POST).
2.  `getAllBooks`: Retrieves all records (GET).
3.  `getBookById`: Finds a specific record (GET).
4.  `updateBook`: Modifies existing records (PUT).
5.  `deleteBook`: Removes a record (DELETE).
6.  `searchBook`: Searches by title using MongoDB `$regex` (GET).

---

## 🌐 Deployment (Render)

1.  Connected the GitHub repository to **Render**.
2.  Set the **Build Command** to `npm install`.
3.  Set the **Start Command** to `node server.js`.
4.  Configured **Environment Variables** in Render settings:
    *   Set `MONGO_URI` to the MongoDB Atlas connection string.
    *   Set `PORT` to `5000`.

---

## 🔗 Official Documentation & Resources

| Technology | Official Documentation |
| :--- | :--- |
| **Node.js** | [https://nodejs.org/docs/](https://nodejs.org/docs/) |
| **Express.js** | [https://expressjs.com/](https://expressjs.com/) |
| **MongoDB** | [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/) |
| **Mongoose** | [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/) |
| **Postman** | [https://learning.postman.com/docs/](https://learning.postman.com/docs/) |

---
*Documentation generated for Library Management System API.*

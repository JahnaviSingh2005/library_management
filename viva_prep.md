# 🎓 Viva-Voce & Concept Guide (AI-Driven Full Stack Development)

This guide prepares you for questions an examiner might ask about the Hospital Patient Management System backend.

---

## 🔑 Core Technologies Used

| Technology | Definition | Role in this Project |
| :--- | :--- | :--- |
| **Node.js** | JavaScript runtime environment. | Runs JavaScript on the server side. |
| **Express.js** | A web framework for Node.js. | Handles routing and HTTP requests (GET, POST, etc.). |
| **MongoDB** | A NoSQL, Document-oriented database. | Stores patient data in JSON-like structures (BSON). |
| **Mongoose** | An ODM (Object Data Modeling) library. | Provides a schema-based solution to model application data. |
| **dotenv** | A zero-dependency module. | Loads environment variables from a `.env` file into `process.env`. |

---

## 📝 Important Viva Questions & Answers

### 1. What is an API and what type have you built?
**Answer:** An API (Application Programming Interface) allows two software components to communicate. I have built a **REST API** (Representational State Transfer), which uses standard HTTP methods to perform CRUD operations on data.

### 2. Can you explain the CRUD operations in your project?
**Answer:** CRUD stands for Create, Read, Update, and Delete. In my project:
*   **Create:** `POST /patients` (Registers a new patient).
*   **Read:** `GET /patients` (Fetch all) and `GET /patients/:id` (Fetch one).
*   **Update:** `PUT /patients/:id` (Update patient details).
*   **Delete:** `DELETE /patients/:id` (Remove a patient).

### 3. What is the purpose of the `Patient.js` model?
**Answer:** It defines the **Mongoose Schema**. A schema ensures that every document (patient) added to MongoDB follows a specific structure with validations (like `required: true`, `unique: true`, and `min: 1` for age).

### 4. What is Middleware? Give an example from your code.
**Answer:** Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function. 
*   **Examples used:** `express.json()` (to parse JSON) and my custom `errorMiddleware.js` (to handle all errors in one place).

### 5. Why do we use `async` and `await`?
**Answer:** Database operations are **asynchronous** (they take time). `async/await` makes the code look synchronous and easier to read, preventing "Callback Hell" and allowing us to use `try-catch` blocks for cleaner error handling.

### 6. What does `dotenv` do? Why not put the DB URL directly in the code?
**Answer:** `dotenv` keeps sensitive information (like database passwords) out of the main code. This is for **security**. If we push the code to GitHub, we exclude the `.env` file so others cannot see our private credentials.

### 7. What is the difference between `params` and `query`?
**Answer:** 
*   **req.params:** Used for required parts of the URL path (e.g., `/:id` in `/patients/123`).
*   **req.query:** Used for optional searching or filtering (e.g., `?name=rahul` in `/patients/search?name=rahul`).

### 8. How did you handle errors in this project?
**Answer:** I used a **Global Error Handler**. Instead of writing complex error logic in every function, I use `next(error)` in the `catch` block. This sends the error to `errorMiddleware.js`, which checks if the error is a Validation error, a Duplicate Key error, or a Server error, and sends a clean JSON response.

### 9. What is MongoDB Atlas?
**Answer:** It is a **Cloud Database-as-a-Service**. It allows our application to connect to a database that is hosted on the internet rather than just on my local machine, which is essential for deployment on platforms like Render.

### 10. How does the Search functionality work?
**Answer:** I used the MongoDB `$regex` operator in the controller. It allows for "partial matching" (e.g., searching "rah" will find "Rahul") and the `i` option makes it **case-insensitive**.

## 🚀 Postman Testing URLs (Base URL: `http://localhost:5000`)

| Operation | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Register Patient** | `POST` | `/patients` | Create a new patient record. |
| **Get All Patients** | `GET` | `/patients` | Fetch all patient records from DB. |
| **Get Patient by ID** | `GET` | `/patients/:id` | Fetch a single patient using their ID. |
| **Search Patient** | `GET` | `/patients/search?name=rahul` | Search patients by name (case-insensitive). |
| **Update Patient** | `PUT` | `/patients/:id` | Update details of a specific patient. |
| **Delete Patient** | `DELETE` | `/patients/:id` | Remove a patient record permanently. |

> **Note:** For `POST` and `PUT` requests, ensure the body is set to `raw` and `JSON` in Postman.

---

## 🛠️ Key Mongoose Methods Used
*   `Patient.create(req.body)` — To insert new data.
*   `Patient.find()` — To fetch all data.
*   `Patient.findById(id)` — To fetch a single document.
*   `Patient.findByIdAndUpdate(id, data)` — To edit data.
*   `Patient.findByIdAndDelete(id)` — To remove data.

---
*Created for AI Driven Full Stack Development Practical Exam Preparation.*

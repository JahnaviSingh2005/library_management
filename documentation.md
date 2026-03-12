# 🏥 Hospital Patient Management System - Technical Documentation

This document provides a comprehensive walkthrough of the project, including the folder structure, development steps, terminal commands, database configuration, and deployment process.

---

## 🛠️ Project Overview
The **Hospital Patient Management System** is a RESTful API built using the MERN stack (without React) to manage patient records, including admissions, diagnoses, and doctor assignments.

---

## 📁 Project Structure

```text
hospital-api/
│
├── config/
│   └── db.js              # MongoDB connection using Mongoose
│
├── controllers/
│   └── patientController.js # CRUD logic (Create, Read, Update, Delete, Search)
│
├── middleware/
│   └── errorMiddleware.js   # Global error handling for the API
│
├── models/
│   └── Patient.js         # Mongoose schema and model for Patient data
│
├── routes/
│   └── patientRoutes.js     # API route definitions
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
mkdir hospital-api
cd hospital-api

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
MONGO_URI=mongodb://127.0.0.1:27017/hospitalDB
```

### Cloud Configuration (MongoDB Atlas)
For deployment, the local URI was replaced with the Atlas connection string in the Render environment settings:
```text
mongodb+srv://jahnavi:<password>@cluster0.xxxx.mongodb.net/hospitalDB
```

---

## 🚀 Version Control (Git & GitHub)

The following sequence of commands was used to push the project to GitHub:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files to staging
git add .

# 3. Create initial commit
git commit -m "Initial commit - Hospital Patient Management System API"

# 4. Set main branch name
git branch -M main

# 5. Connect to remote GitHub repository
git remote add origin https://github.com/JahnaviSingh2005/hospital_management_ai-fsd.git

# 6. Pull existing files (like README) to avoid conflicts
git pull origin main --allow-unrelated-histories

# 7. Push local code to GitHub
git push -u origin main
```

---

## 📦 Code Breakdown

### 1. `server.js` (The Engine)
*   Loads environment variables using `dotenv`.
*   Connects to the database via `connectDB()`.
*   Uses `express.json()` to parse incoming JSON requests.
*   Mounts the patient routes under `/patients`.
*   Implements the global `errorHandler`.

### 2. `models/Patient.js` (The Blueprint)
Defines the structure for patient data with strict validations:
*   **Fields:** Full Name, Email (unique), Phone, Age (min 1), Disease, Doctor, etc.
*   **Enums:** Gender (Male/Female/Other), Patient Type (Inpatient/Outpatient).
*   **Timestamps:** Automatically tracks `createdAt` and `updatedAt`.

### 3. `controllers/patientController.js` (The Logic)
Handles 6 key API operations using `async/await` and `try-catch`:
1.  `registerPatient`: Saves new patient data (POST).
2.  `getAllPatients`: Retrieves all records (GET).
3.  `getPatientById`: Finds a specific record (GET).
4.  `updatePatient`: Modifies existing records (PUT).
5.  `deletePatient`: Removes a record (DELETE).
6.  `searchPatient`: Searches by name using MongoDB `$regex` (GET).

### 4. `middleware/errorMiddleware.js` (The Safety Net)
Handles errors gracefully to ensure the API always returns a JSON response:
*   Catching **Validation Errors** (Missing fields).
*   Catching **Duplicate Key Errors** (Same email twice).
*   Catching **Cast Errors** (Invalid MongoDB IDs).

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

For further learning and in-depth understanding, here are the official links for the technologies used:

| Technology | Official Documentation |
| :--- | :--- |
| **Node.js** | [https://nodejs.org/docs/](https://nodejs.org/docs/) |
| **Express.js** | [https://expressjs.com/](https://expressjs.com/) |
| **MongoDB** | [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/) |
| **Mongoose** | [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/) |
| **dotenv** | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) |
| **Postman** | [https://learning.postman.com/docs/](https://learning.postman.com/docs/) |
| **Render** | [https://render.com/docs](https://render.com/docs) |
| **Nodemon** | [https://nodemon.io/](https://nodemon.io/) |
| **Git** | [https://git-scm.com/doc](https://git-scm.com/doc) |

---
*Documentation generated for Hospital Patient Management System API.*

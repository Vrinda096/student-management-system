# 🎓 Student Management System

A full-stack **Student Management System** built using the **MERN Stack** with an integrated **Gen-AI Assistant**.

The system provides separate **Admin and Student roles**, allowing administrators to manage student records while students can securely view their own profiles.

---

## 🚀 Features

### 👨‍💼 Admin Features

- 🔐 Admin Login
- 📊 Admin Dashboard
- 👨‍🎓 View all students
- ➕ Add new students
- 👁️ View student details
- ✏️ Edit student information
- 🗑️ Delete student records
- 🔍 Search students
- 🎯 Filter students by course
- 📋 Recently viewed students
- 🤖 Gen-AI Assistant
- 🚪 Logout
- 📱 Responsive interface

### 🎓 Student Features

- 🔐 Student Login
- 👤 View own profile
- 🚪 Logout
- 🔒 Students cannot access other students' profiles
- 📱 Responsive interface


---

## 🧠 Gen-AI Assistant

The application includes an integrated **AI Assistant** that allows users to interact with an AI-powered system.

The AI assistant can be used to:

- Ask questions
- Get assistance related to the system
- Provide AI-powered responses
- Improve user interaction with the application

---

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router
- Axios
- React Icons
- React Toastify
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- CORS
- dotenv

### AI

- Generative AI / Hugging Face API

### Deployment

- Railway
- MongoDB Atlas
- GitHub

---

## 🏗️ Project Architecture

```text
Student Management System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   └── RecentStudents.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── StudentList.jsx
│   │   │   ├── AddStudent.jsx
│   │   │   ├── EditStudent.jsx
│   │   │   ├── StudentProfile.jsx
│   │   │   ├── AddProfile.jsx
│   │   │   ├── AIAssistant.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── routes
│   │   ├── services
│   │   └── styles
│   │
│   └── package.json
│
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   └── studentController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Student.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── studentRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md

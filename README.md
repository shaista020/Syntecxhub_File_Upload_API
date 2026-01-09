# File / Image Upload API – Syntecxhub Internship Project

This project is developed as part of the **Syntecxhub Internship Program (Project-3)**.  
It implements a **RESTful API** for uploading and serving files/images (e.g., profile pictures) using **Node.js, Express.js, and MongoDB (Mongoose)**.

---

## 🚀 Features

- Upload single or multiple files/images  
- Validate file type (e.g., only images allowed)  
- Set file size limits  
- Store file metadata (filename, path, URL) in MongoDB  
- Retrieve list of uploaded files with metadata  
- Access files via URL  
- Proper HTTP status codes for all responses  
- Tested thoroughly using Postman  

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **Multer** – Handle multipart/form-data file uploads  
- **Postman** – API testing  

---

## 📁 Project Structure

```bash
Syntecxhub_File_Upload_API/
├── config/
│   └── db.js                  
├── controllers/
│   └── fileController.js     
├── models/
│   └── File.js                
├── routes/
│   └── fileRouter.js          
├── uploads/                   
├── server.js                  
├── package.json
├── .env.example              
└── screenshots/               

```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/shaista020/Syntecxhub_File_Upload_API.git
cd Syntecxhub_File_Upload_API

Install dependencies:

npm install


Create a .env file based on .env.example:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run the server:

npm run dev


API is now running at:

upload files: 
http://localhost:5000/api/upload

list all fiels:
http://localhost:5000/api/files
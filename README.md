# 🚀 Profile Management API (Node.js + Firebase Firestore)

This is a **Profile Management API** built using **Node.js, Express, and Firebase Firestore**. It allows users to retrieve and update their profile information using **Google OAuth Authentication**.

---

## 📌 Features
- 🔐 **Google OAuth Authentication** for secure access.
- 📄 **Get user profile** information.
- ✏️ **Update user profile** details.
- 🔥 **Firebase Firestore** for data storage.
- 🏗️ **Modular MVC architecture**.
- 📦 **Docker support** for easy deployment.

---

## 🏗️ Project Structure
```
profile-api/
│── src/
│   ├── config/
│   │   ├── firebase.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   ├── controllers/
│   │   ├── userController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   ├── app.js
│── package.json
│── Dockerfile
│── .env
│── README.md
```

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/profile-api.git
cd profile-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Navigate to **Project Settings > Service Accounts**
4. Click **Generate New Private Key** and download the JSON file
5. Save it as `src/config/firebaseServiceAccountKey.json`

### 4️⃣ Create Environment Variables (`.env`)
```env
PORT=5000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_CLIENT_EMAIL=your-client-email
```

### 5️⃣ Start the Server
```sh
node src/app.js
```

---

## 🧪 API Testing
Use **Postman** or any API client to test the endpoints.

### 🔹 Get User Profile
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/profile`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN"
  }
  ```

### 🔹 Update User Profile
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/profile`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  }
  ```
- **Body:**
  ```json
  {
    "name": "Dr. John Doe",
    "phone": "+1 (555) 123-4567",
    "location": "New York, NY",
    "department": "Computer Science",
    "joinDate": "January 2022",
    "subjects": ["AI", "Machine Learning"],
    "education": ["Ph.D. in AI, MIT"]
  }
  ```

---

## 🐳 Docker Setup
### 1️⃣ Build Docker Image
```sh
docker build -t profile-api .
```

### 2️⃣ Run Docker Container
```sh
docker run -p 5000:5000 profile-api
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Create a pull request

---

## 💡 Acknowledgements
Special thanks to the **Firebase** and **Node.js** communities for their support! 🚀


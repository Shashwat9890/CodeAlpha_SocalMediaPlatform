# CodeAlpha_SocalMediaPlatform
# 🌐 Mini Social Media App

This is a full-stack mini social media web application developed as part of a full stack web development internship. The app supports user profiles, posts, comments, likes, and a basic follow system.

---

## 💡 Project Features

- 🔐 User registration and login
- 👤 User profile pages
- 📝 Users can create and view posts
- 💬 Comment on posts
- ❤️ Like posts
- ➕ Follow/unfollow other users

---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcrypt for password hashing
- JWT for authentication

---

## 📁 Project Structure

mini-social-media-app/
├── frontend/
│ ├── index.html
│ ├── profile.html
│ ├── post.html
│ ├── login.html
│ ├── register.html
│ ├── css/
│ └── js/
├── backend/
│ ├── server.js
│ ├── .env
│ ├── models/
│ │ ├── User.js
│ │ ├── Post.js
│ │ ├── Comment.js
│ │ └── Follow.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── postRoutes.js
│ │ ├── commentRoutes.js
│ │ └── followRoutes.js
└── README.md

yaml
Copy
Edit

---

## 🚀 How to Run (Optional)

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/mini-social-media-app.git
Install Backend Dependencies

bash
Copy
Edit
cd backend
npm install
Create .env file in the backend folder

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=yourSecretKey
Start the Backend Server

bash
Copy
Edit
node server.js
Open frontend/index.html in your browser

🔌 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login user
GET	/api/posts	Get all posts
POST	/api/posts	Create a new post
POST	/api/comments	Comment on a post
POST	/api/follows/follow	Follow a user

👨‍💻 Author
Shashwat Lautawar

Internship: Full Stack Web Development

Project: Social Media Web App

📜 License
This project is for educational and internship purposes. No license is applied.

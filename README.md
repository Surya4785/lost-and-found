# 🧳 Lost & Found Management System (MERN)

A full-stack web application to help users report, search, and recover lost and found items.
Built using the **MERN stack (MongoDB, Express, React, Node.js)** with a scalable backend architecture.

---

## 🚀 Features

* 🔐 User Authentication (Login/Register)
* 📦 Report Lost Items
* 📍 Report Found Items
* 🔍 Search & Filter Items
* 🔗 Match Lost & Found Items
* 📬 Claim Requests System
* 🔔 Notifications System
* 🛠️ Admin Panel (manage users/items)

---

## 🏗️ Tech Stack

**Frontend**

* React.js
* Axios
* Tailwind / CSS

**Backend**

* Node.js
* Express.js
* MongoDB (MongoDB Atlas)
* Mongoose

**Other Tools**

* Nodemon
* Dotenv
* CORS
* Cloudinary (for image uploads)

---

## 📁 Project Structure

```
lost-and-found/
│
├── backend/
│   ├── config/         # DB & Cloudinary config
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth & error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/lost-and-found.git
cd lost-and-found
```

---

### 2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside **backend/** and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLIENT_URL=http://localhost:5173
```

---

### 4️⃣ Run the project

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register user   |
| POST   | /api/auth/login    | Login user      |
| GET    | /api/lost          | Get lost items  |
| POST   | /api/lost          | Add lost item   |
| GET    | /api/found         | Get found items |
| POST   | /api/found         | Add found item  |
| GET    | /api/matches       | Match items     |
| POST   | /api/claims        | Claim item      |

---

## 🧪 Testing

Use tools like:

* Postman
* Thunder Client

---

## 📦 Deployment

* Backend: Render / Railway
* Frontend: Vercel / Netlify
* Database: MongoDB Atlas

---

## 👨‍💻 Author

**Surya Prakash Yadav**

* GitHub: https://github.com/Surya-4785

---

## ⭐ Future Improvements

* AI-based item matching
* Real-time notifications
* Image recognition
* Mobile app support

---

## 📄 License

This project is licensed under the MIT License.